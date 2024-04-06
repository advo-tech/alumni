import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js';

import React, { useState } from 'react';

import { Grid, Skeleton, Button, Group, Container, Text, SimpleGrid, rem, Checkbox } from '@mantine/core';

// const child = <Skeleton height={200} radius="md"  animate={false} />;

const PRIMARY_COL_HEIGHT = rem(680);

function CapitalCampaign() {
  const [clicked20, setClicked20] = useState(false);
  const [clicked50, setClicked50] = useState(false);
  const [clicked100, setClicked100] = useState(false);
  const [clicked250, setClicked250] = useState(false);
  const [clicked500, setClicked500] = useState(false);
  const [clickedOther, setClickedOther] = useState(false);
  const [recurAnnual, setRecurAnnual] = useState(false);

  const handleDonation = (amount) => {
    setClickedOther(false);
    setClicked20(false);
    setClicked50(false);
    setClicked100(false);
    setClicked250(false);
    setClicked500(false);

    // Set the clicked button state
    switch (amount) {
      case 0:
        setClickedOther(true);
        break;
      case 20:
        setClicked20(true);
        break;
      case 50:
        setClicked50(true);
        break;
      case 100:
        setClicked100(true);
        break;
      case 250:
        setClicked250(true);
        break;
      case 500:
        setClicked500(true);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = () => {
    setRecurAnnual(!recurAnnual);
  };

  const handleDonateNow = () => {
    let url = 'https://donate.stripe.com/6oE00W6lc7xQeVW144';
    if (clicked20) {
      url = recurAnnual ? 'https://buy.stripe.com/fZe7to10S7xQ7tu5kx' : 'https://buy.stripe.com/9AQ150cJA4lE1567sE';
    } else if (clicked50) {
      url = recurAnnual ? 'https://buy.stripe.com/6oE00WgZQaK2g00cMU' : 'https://buy.stripe.com/eVacNIbFwaK2aFG7sw';
    } else if (clicked100) {
      url = recurAnnual ? 'https://buy.stripe.com/8wMcNI390f0ibJK009' : 'https://buy.stripe.com/5kAdRM3909FYdRS3ch';
    } else if (clicked250) {
      url = recurAnnual ? 'https://buy.stripe.com/bIY9Bw8tk3hAg008wH' : 'https://buy.stripe.com/3cs29424W7xQ29a3ci';
    } else if (clicked500) {
      url = recurAnnual ? 'https://buy.stripe.com/7sI5lgaBsg4maFG6oy' : 'https://buy.stripe.com/7sIdRM8tk19saFGbIP';
    } 
  
    if (url) {
      window.open(url, '_blank');
    }

  };

const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 4 - var(--mantine-spacing-md) / 2)`;

  return (

    <Container size="xl" my="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        <Skeleton visible={false} height={PRIMARY_COL_HEIGHT} radius="md" animate={false}>
        <h1>Donate etc</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nisl id lorem cursus commodo. Pellentesque sed elementum enim, nec elementum sem. Fusce fermentum consequat nunc a imperdiet. Curabitur eu mattis magna. Vestibulum finibus eget urna id ullamcorper.
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nisl id lorem cursus commodo. Pellentesque sed elementum enim, nec elementum sem. Fusce fermentum consequat nunc a imperdiet. Curabitur eu mattis magna. Vestibulum finibus eget urna id ullamcorper.

        <br></br>
        <br></br>
        <h2>Make a one-time donation here.</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nisl id lorem cursus commodo. Pellentesque sed elementum enim, nec elementum sem. Fusce fermentum consequat nunc a imperdiet. Curabitur eu mattis magna. Vestibulum finibus eget urna id ullamcorper.
        <br></br>


        <Group 
        // justify="space-between" 
        gap="sm">

      <Button variant={clicked20 ? "filled" : "default"} onClick={() => handleDonation(20)}>20</Button>
      <Button variant={clicked50 ? "filled" : "default"} onClick={() => handleDonation(50)}>50</Button>
      <Button variant={clicked100 ? "filled" : "default"} onClick={() => handleDonation(100)}>100</Button>

     <Button variant={clicked250 ? "filled" : "default"} onClick={() => handleDonation(250)}>250</Button>
       <Button variant={clicked500 ? "filled" : "default"} onClick={() => handleDonation(500)}>500</Button>
       {/* <Button variant="default">1000</Button> */}
      <Button variant={clickedOther ? "filled" : "default"} onClick={() => handleDonation(0)}>Other</Button>
     </Group><br></br>

     <Checkbox
      checked={recurAnnual}
      onChange={handleCheckboxChange}
      label="Make my donation annual"
    />
    <Group gap="sm"></Group>

  <Button onClick={handleDonateNow}>Donate Now</Button>

     </Skeleton>

        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>

          {/* MIDAS */}

          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            
            <Skeleton visible={false} height={SECONDARY_COL_HEIGHT} radius="md" animate={false}>
                <Text align="right" justify="right">

                    In the Midas tier, you receive:<br></br>
                    Shoutout<br></br>
                    Loren<br></br>
                    Ipsum<br></br>
                    
                    </Text> 
            </Skeleton>
          </Grid.Col>
          


          {/* PENELOPE */}



          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>

          <Grid.Col span={6}>

          <Skeleton visible={false} height={SECONDARY_COL_HEIGHT} radius="md" animate={false}>
                <Text align="right" justify="right">

                    In the Penelope tier, you receive:<br></br>
                    Shoutout<br></br>
                    Loren<br></br>
                    Ipsum<br></br>
                    
                    </Text> 
            </Skeleton>

            </Grid.Col>



          {/* DRYAD */}

          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>

//     <div>

//     <Grid mt={20}>
//     <Grid.Col span={1} style={{ minHeight: 30 }}></Grid.Col>
//     <Grid.Col span={10} style={{ minHeight: 30}}>

//     <h2>Capital Campaign</h2>


//     </Grid.Col>
//     <Grid.Col span={1} style={{ minHeight: 30 }}></Grid.Col>


//     </Grid>

//     {/*  */}
//     <Grid>


    

//     <Grid.Col span={1} style={{ minHeight: 200 }}></Grid.Col>

//     <Grid.Col span={4} style={{ minHeight: 200 }}>

//         <h2>Or make a one-time contribution!</h2>


//         <br></br>

//         <Group justify="space-between" gap="sm">

//     <Button variant="default" >20</Button>
//       <Button variant="default">50</Button>
//       <Button variant="default">100</Button>

//     <Button variant="default">250</Button>
//       <Button variant="default">500</Button>
//       {/* <Button variant="default">1000</Button> */}
//       <Button variant="default">Other</Button>
//     </Group>
//     <br></br>

//     <Button width="100%" maw="100%">Go to Stripe</Button>

//     </Grid.Col>
//     <Grid.Col span={1} style={{ minHeight: 200 }}></Grid.Col>

//     <Grid.Col span={5} style={{ minHeight: 200, textAlign: "left"}}>

//       <h2>Welcome!</h2>

//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis nisl id lorem cursus commodo. Pellentesque sed elementum enim, nec elementum sem. Fusce fermentum consequat nunc a imperdiet. Curabitur eu mattis magna. Vestibulum finibus eget urna id ullamcorper.

//     </Grid.Col>

//     <Grid.Col span={1} style={{ minHeight: 200 }}></Grid.Col>


//     <Grid.Col span={6}></Grid.Col>
//     <Grid.Col span={5}>Midas Tier</Grid.Col>
//     <Grid.Col span={1}></Grid.Col>


//   </Grid>


//   </div>

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

    //   <Frame
    //     text={
    //       <>
    //       <h2>Dear Departed Advocates,</h2>
    //       <p>Welcome to the official website of the Harvard Advocate alumni community! Here, you can connect with your fellow alumni and stay up to date with the latest Advocate news and developments.</p>
    //       <p>Please note that this website is distinct from the <a href="https://www.theharvardadvocate.com">Harvard Advocate magazine website</a>. Our site is dedicated specifically to alumni matters and providing a platform for alumni to connect with each other.</p>
    //       <p>While you're here, check out the alumni-only shop from the navbar for some Advocate themed merch</p>
    //       <p>If you have any questions or feedback, please contact us via the contact page. We look forward to hearing from you soon!</p>
    //       <p>Best regards,<br/>Hades</p>
    //       </>
    //     }

    //     illustration={illustration}
    //     illustrationCaption="Illustration by Tosca Langbert '24"
    //   />
  );
}

export default CapitalCampaign;
