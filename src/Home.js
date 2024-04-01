import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js';

import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={200} radius="md"  animate={false} />;


function Home() {
  return (
//     <Grid mt={100}>

//     <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

//     <Grid.Col span={4} style={{ minHeight: 780 }}>[viz 1]</Grid.Col>
//     <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

//     <Grid.Col span={5} style={{ minHeight: 780, textAlign: "left"}}>

//       <h2>What makes a space a gathering space?</h2>
//       Now, let's delve deeper into the question: What transforms an open space into a vibrant gathering spot? Is it the serenity of a tranquil park, the lively ambiance of a bustling plaza, or the sense of belonging it instills in those who frequent it? 

// From the inviting benches of the Common, the panoramic views from the Esplanade, or the cultural vibrancy of the Rose Kennedy Greenway, each green space offers its own blend of amenities and aesthetics. These qualities openly beckon people to come together and connect, and create lasting memories. It offers a unifying force for community members to learn about one another, to create social binds that will carry them through.
//     </Grid.Col>

//     <Grid.Col span={1} style={{ minHeight: 780 }}></Grid.Col>

//   </Grid>

  //   <Container my="lg">
  //   <Grid>
  //     <Grid.Col color={"red"} span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
  //     <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
  //     <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
  //     <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
  //     <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
  //     <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
  //     <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
  //   </Grid>
  // </Container>

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
