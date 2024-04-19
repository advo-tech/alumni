import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js';

import nausicaa from './assets/nausicaa.PNG';
import circe from './assets/circe.PNG';
import penelope from './assets/penelope.PNG';
import athena from './assets/athena.PNG';

import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Grid, Skeleton, Button, Checkbox, Group, Container, Title, Text, Image, Space, RadioGroup, Radio, SimpleGrid, rem } from '@mantine/core';

import { useIsMobile } from "./isMobile.js";

const PRIMARY_COL_HEIGHT = rem(680);

function CapitalCampaign() {

  


  const [value, setValue] = useState('react');


  const [clicked20, setClicked20] = useState(false);
  const [clicked50, setClicked50] = useState(false);
  const [clicked100, setClicked100] = useState(false);
  const [clicked250, setClicked250] = useState(false);
  const [clicked500, setClicked500] = useState(false);
  const [clickedOther, setClickedOther] = useState(false);
  const [recurAnnual, setRecurAnnual] = useState(false);

  const isMobile = useIsMobile();

  const mar = 0.6;
  const mar2 = 0.3;


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
    console.log(value);

    let url = 'https://donate.stripe.com/6oE00W6lc7xQeVW144';
    if (value == '20') {
      url = recurAnnual ? 'https://buy.stripe.com/fZe7to10S7xQ7tu5kx' : 'https://buy.stripe.com/9AQ150cJA4lE1567sE';
    } else if (value == '50') {
      url = recurAnnual ? 'https://buy.stripe.com/6oE00WgZQaK2g00cMU' : 'https://buy.stripe.com/eVacNIbFwaK2aFG7sw';
    } else if (value == '100') {
      url = recurAnnual ? 'https://buy.stripe.com/8wMcNI390f0ibJK009' : 'https://buy.stripe.com/5kAdRM3909FYdRS3ch';
    } else if (value == '250') {
      url = recurAnnual ? 'https://buy.stripe.com/bIY9Bw8tk3hAg008wH' : 'https://buy.stripe.com/3cs29424W7xQ29a3ci';
    } else if (value == '500') {
      url = recurAnnual ? 'https://buy.stripe.com/7sI5lgaBsg4maFG6oy' : 'https://buy.stripe.com/7sIdRM8tk19saFGbIP';
    } 
    else if (value == 'athena') {
      url = recurAnnual ? 'https://buy.stripe.com/cN2eVQ7pg9FY7tu14j' : 'https://buy.stripe.com/cN2eVQ7pg9FY7tu14j';
    }
    else if (value == 'penelope') {
      url = recurAnnual ? 'https://buy.stripe.com/cN2bJE5h819s6pqdQS' : 'https://buy.stripe.com/cN2bJE5h819s6pqdQS';
    }
    else if (value == 'circe') {
      url = recurAnnual ? 'https://buy.stripe.com/6oE00WbFw7xQ8xy7sG' : 'https://buy.stripe.com/6oE00WbFw7xQ8xy7sG';
    }
    else if (value == 'nausicaa') {
      url = recurAnnual ? 'https://buy.stripe.com/6oE00WgZQaK2g00cMU' : 'https://buy.stripe.com/eVacNIbFwaK2aFG7sw';
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


  // <Container size="xl" my="lg">
  //   <SimpleGrid cols={{ base: 0.5, sm: 2 }} spacing="xl">

<div>
  <Grid>

    <Grid.Col span={isMobile ? mar : mar}></Grid.Col>

    <Grid.Col span={isMobile ? 12 - mar * 2 : 6 - mar - mar2}>


      {/* <Skeleton visible={false} height={PRIMARY_COL_HEIGHT} radius="md" animate={false}> */}

      {/* <Title fz="lg">Donate to the Capital Campaign</Title> */}


      {isMobile ? <div><Space h={20}></Space><Text fz="sm">      <h2>Donate to the Capital Campaign</h2></Text></div> : <Text fz="sm">      <h1>Donate to the Capital Campaign</h1></Text>
      
      
      }

      <Text fz="sm">


      
      
        <p>Each semester, The Harvard Advocate raises just enough advertising revenue to cover regular operations, but print advertising is a dying art form. With your support, The Harvard Advocate will be able to continue printing and distributing our semesterly magazine; digitize and archive our 150+ years of back issues; implement essential building upkeep and renovations; fund our financial aid program; and enable the continued vitality of the student organization you know and love.
<br></br> <br></br>As an alum, you can donate to specific funds in order to guarantee that your money will go to a cause close to your heart (who doesn’t adore the kitchen floor?!).
Thank you, as always, for your generous and unfailing support.
<br></br><br></br>Dulce Est Periculum

 </p>
      <br></br>

      </Text>

{/* 
      <Grid>
        <Grid.Col span={12}> */}
        <Text>To donate, choose a tier:</Text>


        <Radio.Group
      value={value}
      onChange={setValue}
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
      <Text fz="xs" color="grey">Donations above $50 are automatically added to their respective tier.</Text>

      <Group mt="xs" gap="lg">
        <Radio value="20" label="$20" />
        <Radio value="50" label="$50" />
        <Radio value="100" label="$100" />
        <Radio value="250" label="$250" />
        <Radio value="500" label="$500" />
        <Radio value="other" label="Other" />


      </Group>
      
    </Radio.Group>
    <br></br>
    <Checkbox 
      checked={recurAnnual}
      onChange={handleCheckboxChange}
      label="Make my donation annual"></Checkbox>



    <br></br>

  <Button fullWidth={true} onClick={handleDonateNow}>Donate Now</Button>

  {isMobile ? <div> </div> : 

    <div>

      <Text fz="sm">

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

      
      <strong>Note about the MERCH PACKAGES:</strong> The Athena, Penelope, and Circe tiers each contain a Merch Package. The Merch Package consists of the <a href="https://theharvardadvocate.com/current" style={{textDecoration: 'underline', color: 'blue'}}>current issue</a>, 
       &nbsp;<a href="https://shop.theharvardadvocate.com/products/unisex-hoodie-march-1968?variant=40148551598135" style={{textDecoration: 'underline', color: 'blue'}}>
        a sweater</a>,&nbsp; <a href="https://shop.theharvardadvocate.com/products/peg-logo-sticker" style={{textDecoration: 'underline', color: 'blue'}}>a hand-designed 
        sticker</a>, and <a href="https://shop.theharvardadvocate.com/products/1866-corduroy-cap-embroidered?variant=40135284031543" style={{textDecoration: 'underline', color: 'blue'}}>a hat</a>.
      {/* <p> */}
      &nbsp;Donations of every tier will come with your name printed in the next issue and The Advocate's eternal gratutude.
      </Text>
</div>

    }


     </Grid.Col>
     {isMobile ? <Space h={500}></Space> : ""}

<Grid.Col span={isMobile ? mar : mar2 * 2}></Grid.Col>
<Grid.Col span={isMobile ? mar : 0}></Grid.Col>

<Grid.Col span={isMobile ? 12 - 2 * mar : 6 - mar - mar2}>

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
          <Text fz={isMobile ? "xs" : "sm"} align="right" justify="right">
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

    </Grid.Col>


    <Grid.Col span={mar}></Grid.Col>

    <Grid.Col span={isMobile ? mar : 0}></Grid.Col>
    <Grid.Col span={isMobile ? 12 - 2* mar : 0}>

    {!isMobile ? <div> </div> : 






<div>
<Text fz="sm">



  <br></br>
  <h2>Your donation will help us:</h2>
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

  
  <strong>Note about the MERCH PACKAGES:</strong> The Athena, Penelope, and Circe tiers each contain a Merch Package. The Merch Package consists of the <a href="https://theharvardadvocate.com/current" style={{textDecoration: 'underline', color: 'blue'}}>current issue</a>, 
  &nbsp;<a href="https://shop.theharvardadvocate.com/products/unisex-hoodie-march-1968?variant=40148551598135" style={{textDecoration: 'underline', color: 'blue'}}>
    a sweater</a>,&nbsp; <a href="https://shop.theharvardadvocate.com/products/peg-logo-sticker" style={{textDecoration: 'underline', color: 'blue'}}>a hand-designed 
    sticker</a>, and <a href="https://shop.theharvardadvocate.com/products/1866-corduroy-cap-embroidered?variant=40135284031543" style={{textDecoration: 'underline', color: 'blue'}}>a hat</a>.
  {/* <p> */}
  &nbsp;Donations of every tier will come with your name printed in the next issue and The Advocate's eternal gratutude.

  </Text>
</div>



}



    </Grid.Col>

    <Grid.Col span={isMobile ? 0 : 0}></Grid.Col>

        </Grid>

        </div>




  );
}

export default CapitalCampaign;

