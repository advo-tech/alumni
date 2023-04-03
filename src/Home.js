import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js'


function Home() {
  return (
      <Frame
        text={
          <>
          <h2>Dear Departed Advocates,</h2>
          <p>Welcome to the official website of the Harvard Advocate alumni community! Here, you can connect with your fellow alumni and stay up to date with the latest Advocate news and developments.</p>
          <p>Please note that this website is distinct from the <a href="https://www.theharvardadvocate.com">Harvard Advocate magazine website</a>. Our site is dedicated specifically to alumni matters and providing a platform for alumni to connect with each other.</p>
          <p>While you're here, check out the alumni-only shop from the navbar for some Advocate themed merch</p>
          <p>If you have any questions or feedback, please contact us via the contact page. We look forward to hearing from you soon!</p>
          <p>Best regards,<br/>Hades</p>
          </>
        }

        illustration={illustration}
        illustrationCaption="Illustration by Tosca Langbert '24"
      />
  );
}

export default Home;
