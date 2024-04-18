import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js';

import nausicaa from './assets/nausicaa.PNG';
import circe from './assets/circe.PNG';
import penelope from './assets/penelope.PNG';
import athena from './assets/athena.PNG';

import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Grid, Skeleton, Button, Checkbox, Group, Container, Text, Image, Space, RadioGroup, Radio, SimpleGrid, rem } from '@mantine/core';


const PRIMARY_COL_HEIGHT = rem(680);

function CapitalCampaign() {
  const [clicked20, setClicked20] = useState(false);
  const [clicked50, setClicked50] = useState(false);
  const [clicked100, setClicked100] = useState(false);
  const [clicked250, setClicked250] = useState(false);
  const [clicked500, setClicked500] = useState(false);
  const [clickedOther, setClickedOther] = useState(false);
  const [recurAnnual, setRecurAnnual] = useState(false);

  // const [donationDesignation, setDonationDesignation] = useState('');

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

  // const handleDesignationChange = (event) => {
  //   setDonationDesignation(event.target.value);
  // };
  
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

    // const handleDesignationChange = (event) => {
    //   setDonationDesignation(event.target.value);
    // };
  
    if (url) {
      window.open(url, '_blank');
    }

  };

const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 4 - var(--mantine-spacing-md) / 2)`;

return (


  <Container size="xl" my="lg">
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">

      <Skeleton visible={false} height={PRIMARY_COL_HEIGHT} radius="md" animate={false}>
      
      <h1>Donate to the Capital Campaign</h1>
        <p>Each semester, The Harvard Advocate raises just enough advertising revenue to cover regular operations, but print advertising is a dying art form. With your support, The Harvard Advocate will be able to continue printing and distributing our semesterly magazine; digitize and archive our 150+ years of back issues; implement essential building upkeep and renovations; fund our financial aid program; and enable the continued vitality of the student organization you know and love.
<br></br> <br></br>As an alum, you can donate to specific funds in order to guarantee that your money will go to a cause close to your heart (who doesn’t adore the kitchen floor?!).
<br></br>Thank you, as always, for your generous and unfailing support.
<br></br><br></br>Dulce Est Periculum

 </p>
      <br></br>


      <Grid>
        <Grid.Col span={12}>
        <Text>To donate, choose a tier:</Text>


        <Radio.Group
      name="favoriteFramework"
      color="yellow"
      // label="Choose a donation tier."
      // variant="vertical"
      // withAsterisk
    >

        <Group mt="xs" gap="lg">
        <Radio value="athena" label="Athena" />
        <Radio value="penelope" label="Penelope" />
        <Radio value="circe" label="Circe" />
        <Radio value="nausicaa" label="Nausicaa" />

      </Group>
      
      <br></br>
      <Text>Or, choose a donation amount:</Text>
      <Text fz="xs" color="grey">Donations above $50 are automatically added to the Nausicaa tier.</Text>

      <Group mt="xs" gap="lg">
        <Radio value="20" label="$20" />
        <Radio value="50" label="$50" />
        <Radio value="100" label="$100" />
        <Radio value="250" label="$250" />
        <Radio value="500" label="$500" />
        <Radio value="other" label="Other" />


      </Group>
      
    </Radio.Group>

        </Grid.Col>



      </Grid>


      
{/*   
      

      <Grid gutter>
        <Grid.Col span={2}> 
        <Button fullWidth={true} variant={clicked20 ? "filled" : "default"} onClick={() => handleDonation(20)}>20</Button>

        
        </Grid.Col>
        <Grid.Col span={2}> 
        <Button  fullWidth={true} variant={clicked50 ? "filled" : "default"} onClick={() => handleDonation(50)}>50</Button>

        
        </Grid.Col>
        <Grid.Col span={2}> 
        <Button  fullWidth={true} variant={clicked100 ? "filled" : "default"} onClick={() => handleDonation(100)}>100</Button>

        
        </Grid.Col>
        <Grid.Col span={2}> 
        <Button  fullWidth={true} variant={clicked250 ? "filled" : "default"} onClick={() => handleDonation(250)}>250</Button>

        
        </Grid.Col>
        <Grid.Col span={2}> 
        <Button  fullWidth={true} variant={clicked500 ? "filled" : "default"} onClick={() => handleDonation(500)}>500</Button>

        
        </Grid.Col>
        <Grid.Col span={2}> 
        <Button  fullWidth={true} variant={clickedOther ? "filled" : "default"} onClick={() => handleDonation(0)}>Other</Button>

        
        </Grid.Col>
      </Grid> */}


    <br></br>

  <Button fullWidth={true} onClick={handleDonateNow}>Donate Now</Button>

      <br></br>
      <h2>Your donation will help The Harvard Advocate:</h2>
      <li> Install swipe access to 21 South Street</li> 
      <li> Retile our kitchen</li>
      <li> Print our issues and distribute them</li> 
     <li> Digitize back issues + move to offsite storage</li> 
     <li> Hire a regular cleaning crew</li> 
     <li> Hold events in 21 South Street</li> 
     <li>  Start a Financial Aid program and Increase accessibility to the Advocate</li> 
     <li> Fund board bonding events</li> 
     <li> Fund the blog (literary + arts events in Boston, concert tickets, etc.)</li> 


      <br></br>

      
      <strong>Note about the MERCH PACKAGES:</strong> The Athena, Penelope, and Circe tiers each contain a Merch Package. T
      he Merch Package consists of the <a href="https://theharvardadvocate.com/current" style={{textDecoration: 'underline', color: 'blue'}}>current issue</a>, 
      <a href="https://shop.theharvardadvocate.com/products/unisex-hoodie-march-1968?variant=40148551598135" style={{textDecoration: 'underline', color: 'blue'}}>
        a sweater</a>, <a href="https://shop.theharvardadvocate.com/products/peg-logo-sticker" style={{textDecoration: 'underline', color: 'blue'}}>a hand-designed 
        sticker</a>, and <a href="https://shop.theharvardadvocate.com/products/1866-corduroy-cap-embroidered?variant=40135284031543" style={{textDecoration: 'underline', color: 'blue'}}>a hat</a>.
      {/* <p> */}
      &nbsp;Donations of every tier will come with your name printed in the next issue and The Advocate's eternal gratutude.
      {/* </p> */}
{/* 
        <Group 
        // justify="space-between" 
        gap="sm"> */}



     </Skeleton>

        <Grid gutter="md">

          {/* ATHENA */}


          <Grid.Col span={3.5}>
  <img
    src={athena}
    alt="athena tier illustration: sketch of bronco"
    style={{ width: '100%', borderRadius: 'md' }} 
  />
</Grid.Col>
          <Grid.Col span={8.5}>
            
          <Skeleton visible={false} height={SECONDARY_COL_HEIGHT} radius="md" animate={false}>
          <Text align="right" justify="right">
                <h3>Athena ($10,000+)</h3>
                  <li>Name engraved on plaque in building</li>
                  <li>150th Anniversary Poster signed by all 2023-24 Advocate members</li>
                  <li>Up to 3 back issues or posters</li>
                  <li>Merch Package</li>
                    </Text> 
            </Skeleton>
          </Grid.Col>


          {/* PENELOPE */}

          <Grid.Col span={3.5}>
            <img
              src={penelope} 
              alt="penelope tier illustration: sketch of bronco"
              style={{ width: '100%', borderRadius: 'md' }} 
            />
          </Grid.Col>
          <Grid.Col span={8.5}>
            
            <Skeleton visible={false} height={SECONDARY_COL_HEIGHT} radius="md" animate={false}>
                <Text align="right" justify="right">
                <h3>Penelope ($5,000+)</h3>
                <li>150th Anniversary Poster signed by all 2023-24 Advocate members</li>
                  <li>Up to 3 back issues or posters</li>
                  <li>Merch Package</li>
                    </Text> 
            </Skeleton>
          </Grid.Col>
          



     {/* CIRCE */}
     <Grid.Col span={3.5}>
            <img
              src={circe} 
              alt="circe tier illustration: sketch of bronco"
              style={{ width: '100%', borderRadius: 'md' }} 
            />
          </Grid.Col>

          <Grid.Col span={8.5}>

          <Skeleton visible={false} height={SECONDARY_COL_HEIGHT} radius="md" animate={false}>
          <Text align="right" justify="right">
                <h3>Circe ($1,000 - $5,000)</h3>
                  <li>Up to 3 back issues or posters</li>
                  <li>Handwritten thank-you note</li>
                  <li>Merch Package</li>
                    </Text> 
            </Skeleton>

            </Grid.Col>

     {/* NAUSICAA */}



     <Grid.Col span={3.5} style={{ position: 'relative' }}>
  <img
    src={nausicaa} 
    alt="nausicaa tier illustration: sketch of bronco"
    style={{ width: '100%', borderRadius: 'md' }} // You'll need to ensure 'md' is converted to a valid CSS unit
  />
  <div style={{ 
    textAlign: 'center', // Centers the caption text
    marginTop: '8px', // Gives some space between the image and the caption
    fontSize: '0.75rem', // Adjust the font size as needed
    color: '#333', // The color of the caption text
  }}>
    Illustrations by Jack Towers '25
  </div>
</Grid.Col>

          <Grid.Col span={8.5}>

          <Skeleton visible={false} height={SECONDARY_COL_HEIGHT} radius="md" animate={false}>
          <Text align="right" justify="right">
                <h3>Nausicaa ($50 - $1,000)</h3>
                <li><a href="https://shop.theharvardadvocate.com/products/peg-logo-sticker" style={{textDecoration: 'underline', color: 'blue'}}>A hand-designed sticker </a></li>
                <li>The current issue</li>
                    </Text> 
            </Skeleton>
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

