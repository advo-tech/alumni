import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js'

function Contact() {
  return (
      <Frame
        text={
          <>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feedback, or suggestions, we would love to hear from you. Please sign up with our mailing list below to get in touch with us, or contact us directly at the email addresses listed below:
          </p>
          <p>For general inquiries: <b>alumni@theharvardadvocate.com</b></p>
          <p>For questions directed to the President or Executive Board: <b>president@theharvardadvocate.com</b></p>
          </>
        }

        illustration={illustration}
        illustrationCaption="Illustration by Tosca Langbert '24"
        button={"Sign up for our mailing list"}
        buttonLink={"https://www.google.com"}
      />
  );
}

export default Contact;
