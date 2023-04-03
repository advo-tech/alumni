import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js'


function AnnualAppeal() {
  return (
      <Frame
        text={
          <>
          <h2>Annual Appeal</h2>
          <p>
            We are delighted to invite you to participate in our Annual Appeal. As a valued member of the Advocate community, your contributions are critical to our continued success in promoting artistic and intellectual exploration.
          </p>
          <p>
            Your donation will help fund operating expenses, provide financial aid programs for dues, and support projects that enrich the Advocate experience for current and future generations. By donating, you are making a meaningful difference in the lives of Advocate members and supporting a dynamic community of creatives at Harvard.
          </p>
          <p>
            No matter the size of your donation, every dollar counts and is greatly appreciated. Your support ensures that the Advocate remains a vibrant and vital part of the Harvard community for years to come.
          </p>
          <p>
            Thank you for your generosity and support!
          </p>
          <p>
            Best regards,<br/>
            The Advocate Annual Appeal Team
          </p>

          </>
        }

        illustration={illustration}
        illustrationCaption="Illustration by Tosca Langbert '24"
        button = {"Donate to the Annual Appeal"}
        buttonLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
  );
}

export default AnnualAppeal;
