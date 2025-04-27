import { useEffect, useRef, useState  } from "react";
import { animate, spring } from "motion";

const NewsPopup = (props: { onClose: () => void }) => {
  const { onClose } = props;
  const popupRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [isShowing, setIsShowing] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setIsShowing(true)
      if (popupRef.current) {
        animate(
          popupRef.current,
          { opacity: [0, 1], y: [50, 0] },
          { duration: 0.5, easing: spring({ velocity: 5, stiffness: 100 }) }
        );
      }
      if (backgroundRef.current) {
        animate(
          backgroundRef.current,
          { opacity: [0, 1] },
          { duration: 0.5 }
        );
      }
    }, 3000); // 3000ms = 3 seconds
  
    return () => clearTimeout(timeout); // cleanup if component unmounts early
  }, []);
  

  const handleClose = () => {
    if (popupRef.current && backgroundRef.current) {
      const popupAnimation = animate(
        popupRef.current,
        { opacity: [1, 0], y: [0, 50] },
        { duration: 0.4, easing: spring({ velocity: 5, stiffness: 100 }) }
      );

      const backgroundAnimation = animate(
        backgroundRef.current,
        { opacity: [1, 0] },
        { duration: 0.4 }
      );

      Promise.all([popupAnimation.finished, backgroundAnimation.finished]).then(() => {
        onClose();
      });
    } else {
      onClose();
    }
  };

  const handleOverlayClick = () => {
    if (isShowing) {
        handleClose()
    } else {
        return
    }
  }

  return (
    <div
      ref={backgroundRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0"
    >
      <div
        ref={popupRef}
        className="relative bg-black rounded-lg p-6 shadow-lg max-w-[800px] w-full opacity-0 translate-y-12"
      >
        {/* BADGE */}
        <div className="absolute z-20 -top-20 -left-10 bg-[#F15A29] text-black font-black text-xl w-[150px] h-[150px] flex justify-center items-center px-4 py-2 rounded-full rotate-[-25deg] shadow-md text-center">
          BRAND<br />NEW<br />VIDEO<br />OUT!
        </div>
  
        {/* VIDEO */}
        <div className="relative pb-[56.25%] h-0 mb-4">
        <iframe 
        className="absolute top-0 left-0 w-full h-full rounded"
        src="https://www.youtube.com/embed/QlwlT6CPqJ8?si=JL9QU4NSrOjGHJG0" 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
  
        {/* BUTTON */}
        <button
          onClick={handleClose}
          className="mt-4 px-4 py-2 w-full bg-[#F15A29] text-white rounded hover:bg-orange-700 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
  
};

export default NewsPopup;
