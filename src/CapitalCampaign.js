import tosca from './assets/tosca.jpg';
import Frame from './Frame.js'


function CapitalCampaign() {
  return (
      <Frame
        text={
          <>
          <h2>Capital Campaign</h2>
          <p>
            We are excited to announce our Capital Campaign, which aims to secure long-term support for the Advocate's home and operations. 21 South Street has been a hub for creative and cultural exchange for over a century, and your contributions will help ensure that it remains a vibrant and vital part of the Harvard community for generations to come.
          </p>
          <h3>How Your Contributions Will Help</h3>
          <p>
            Your donations will go towards a variety of initiatives, including:
          </p>
          <ul>
            <li>- Renovating and updating our historic home to better serve the Advocate community</li>
            <li>- Providing long-term financial support for our operations and programs</li>
            <li>- Supporting new and ongoing projects that enrich the Advocate experience for current and future generations, including accessibility projects.</li>
          </ul>
          <p>
            We are grateful for any support you can provide, no matter the size of your donation. Your contributions will help ensure that the Advocate remains a vibrant and dynamic part of the Harvard community for years to come.
          </p>
          <p>
            To donate, use the link below. Thank you for your generosity and support!
          </p>
          </>
        }

        illustration={tosca}
        illustrationCaption="Illustration by Tosca Langbert '24"
        button = {"Contribute to the Capital Campaign"}
        buttonLink = "https://donate.stripe.com/8wM2bRa5Wfma1uE5kl"

      />
  );
}

export default CapitalCampaign;
