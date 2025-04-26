
const NewsPopup = (props: {onClose: () => void}) => {
    const {onClose} = props

    return (
        <>
            <h1>popup</h1>
            <button onClick={onClose}>Got it!</button>
        </>

    )

}

export default NewsPopup