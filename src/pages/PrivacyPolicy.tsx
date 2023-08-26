import Page from "@/components/Page";
import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <Page>
      <head>
        <title>Privacy Policy</title>
      </head>
      <br />
      <body className="flex flex-col w-1/2 gap-5">
        <h1 className="text-2xl font-bold text-center p-10">Privacy Policy</h1>
        <button onClick={handleHomeClick} className="underline">
          Home
        </button>

        <p className="py-10">Last Updated: 26/08/2023</p>

        <p>
          Thank you for visiting <strong>seanjacksonofficial.com</strong> ("us",
          "we", or "our"). This Privacy Policy outlines how we collect, use,
          share, and protect your personal information when you use our website.
          By accessing or using
          <a href="wwww.seanjacksonofficial.com">seanjacksonofficial.com</a>,
          you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="font-bold">Information We Collect</h2>

        <p>
          We may collect both personally identifiable information (PII) and
          non-personally identifiable information (non-PII) from you when you
          use our website. The types of information we may collect include:
        </p>

        <ol>
          <li>
            <strong>Personal Information</strong>: This may include your name,
            email address, postal address, phone number, and any other
            information you voluntarily provide to us through forms,
            registrations, or inquiries.
          </li>
          <li>
            <strong>Usage Data</strong>: We collect information about how you
            interact with our website, such as your IP address, browser type,
            device type, pages visited, and the date and time of your visit.
          </li>
        </ol>

        <h2 className="font-bold">How We Use Your Information</h2>

        <p>
          We may use the collected information for various purposes, including
          but not limited to:
        </p>

        <ul>
          <li>
            Providing and improving our website's content, functionality, and
            user experience.
          </li>
          <li>Responding to your inquiries, comments, or requests.</li>
          <li>
            Sending you newsletters, updates, promotions, or other
            communications you have subscribed to.
          </li>
          <li>
            Analyzing usage patterns to enhance our website's performance and
            design.
          </li>
          <li>Detecting and preventing fraudulent or malicious activities.</li>
          <li>Complying with legal obligations.</li>
        </ul>

        <h2 className="font-bold">Cookies and Tracking Technologies</h2>

        <p>
          We may use cookies, web beacons, and similar tracking technologies to
          collect and store information about your interactions with our
          website. These technologies help us analyze user behavior, remember
          your preferences, and provide personalized content. You can manage
          your cookie preferences through your browser settings.
        </p>

        <h2 className="font-bold">Third-Party Sharing</h2>

        <p>
          We do not sell, trade, or rent your personal information to third
          parties for their marketing purposes. However, we may share your
          information with trusted service providers who assist us in operating
          our website or conducting our business activities. These third parties
          are obligated to keep your information confidential and are not
          authorized to use it for any purpose other than as specified by us.
        </p>

        <h2 className="font-bold">Data Security</h2>

        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, no data transmission over the internet is
          entirely secure, and we cannot guarantee the absolute security of your
          information.
        </p>

        <h2 className="font-bold">Your Choices</h2>

        <p>You have the right to:</p>

        <ol>
          <li>
            Access, update, or delete your personal information by contacting
            us.
          </li>
          <li>
            Opt-out of receiving promotional emails by following the unsubscribe
            instructions provided in the email.
          </li>
          <li>Disable cookies through your browser settings.</li>
        </ol>

        <h2 className="font-bold">Children's Privacy</h2>

        <p>
          Our website is not directed to individuals under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          you believe we have inadvertently collected information from a child,
          please contact us to have it removed.
        </p>

        <h2 className="font-bold">Changes to this Privacy Policy</h2>

        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for legal reasons. The updated version will be
          posted on our website with the revised "Last Updated" date.
        </p>

        <h2 className="font-bold">Contact Us</h2>

        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:[contact email or address]">
            [contact email or address]
          </a>
          .
        </p>

        <p>
          By using our website, you acknowledge that you have read and
          understood this Privacy Policy and agree to its terms.
        </p>
      </body>
    </Page>
  );
}

export default PrivacyPolicy;
