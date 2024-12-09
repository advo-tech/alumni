import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js';


import React, { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import { Grid, Progress, Paper,  Anchor, Skeleton, Button, Checkbox, Box, Group, Center, Container, Title, Text, Image, Space, RadioGroup, Radio, SimpleGrid, rem } from '@mantine/core';

import { useIsMobile } from "./isMobile.js";

const PRIMARY_COL_HEIGHT = rem(680);

function TrackerCampaign() {

  const [value, setValue] = useState('react');
  const key = process.env.REACT_APP_STRIPE_KEY;

  const [data, setData] = useState(null);

  useEffect(() => {

    // curl  \
  // -u sk_test_gAWY9DWQK3i5muaZN4d2ekOe:
// # The colon prevents curl from asking for a password.
    fetch('https://api.stripe.com/v1/balance',{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${key}`,
      },
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    console.log(key);
    console.log(data);
  }, []);


  const [clicked20, setClicked20] = useState(false);
  const [clicked50, setClicked50] = useState(false);
  const [clicked100, setClicked100] = useState(false);
  const [clicked250, setClicked250] = useState(false);
  const [clicked500, setClicked500] = useState(false);
  const [clickedOther, setClickedOther] = useState(false);
  const [recurAnnual, setRecurAnnual] = useState(false);


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
      url = recurAnnual ? 'https://buy.stripe.com/00gfZUgZQ8BU7tu9AR' : 'https://buy.stripe.com/cN2eVQ7pg9FY7tu14j';
    }
    else if (value == 'penelope') {
      url = recurAnnual ? 'https://buy.stripe.com/9AQ8xsdNE9FYg006oG' : 'https://buy.stripe.com/cN2bJE5h819s6pqdQS';
    }
    else if (value == 'circe') {
      url = recurAnnual ? 'https://buy.stripe.com/4gw6pkgZQ5pI8xyaEX' : 'https://buy.stripe.com/6oE00WbFw7xQ8xy7sG';
    }
    else if (value == 'nausicaa') {
      url = recurAnnual ? 'https://buy.stripe.com/3cs00WfVM5pI6pqbJ2' : 'https://buy.stripe.com/eVacNIbFwaK2aFG7sw';
    }

  
    if (url) {
      window.open(url, '_blank');
    }

  };

  const isMobile = useIsMobile();

  const mar = 1.0;
  const mar2 = 0.3;

  const handleCheckboxChange = () => {
    setRecurAnnual(!recurAnnual);
  };

  

const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 4 - var(--mantine-spacing-md) / 2)`;
const QUARTER = `calc(${PRIMARY_COL_HEIGHT} / 8 - var(--mantine-spacing-md) / 2)`;
const SIXTEEN = `calc(${PRIMARY_COL_HEIGHT} / 16 - var(--mantine-spacing-md) / 2)`;

if (!data) {
  return <div></div>;
}

return (


<div>
  {isMobile ? <div></div>: <Space h={QUARTER}></Space>}
<Center>

  <Grid>

    <Grid.Col span={isMobile ? mar : mar}></Grid.Col>

    <Grid.Col span={isMobile ? 12 - mar * 2 : 6 - mar - mar2}>

      {isMobile ? <div><Space h={10}></Space><Text fz="sm">      <h2>Donate to the Aid Campaign</h2></Text></div> : <Text fz="sm">      <h1>Donate to the Aid Campaign</h1></Text>
      
      
      }

      <Text fz={isMobile ? "sm" : "md"}>
      <p>

      Each semester, The Harvard Advocate raises just enough advertising revenue to cover regular operations, but print advertising is a dying art form. <br></br><br></br>
      With your support, The Harvard Advocate will be able to continue printing and distributing our semesterly magazine; digitize and archive our 150+ years of back issues; implement essential building upkeep and renovations; and enable the continued vitality of the student organization you know and love.<br></br><br></br>
      This November, we’re fundraising for our Financial Aid Program, which we launched in Spring 2023 to increase student engagement with the magazine by giving back to Advocate members.<br></br><br></br>
      Our financial aid program allows all those who are interested in the Advocate to participate, artistically and socially, in the organization — compensating members who might otherwise be working a part-time job in order to financially support themselves.<br></br><br></br>
      As we continue to pursue increased accessibility to careers in the literary arts, we’re excited to announce that all donations to our financial aid campaign will be matched up to our $4,000 goal.
 

 </p>

      </Text>





{/* </Box> */}

  {/* {isMobile ? <div> </div> : 

    <div>

</div>

    } */}


     </Grid.Col>
     {/* {isMobile ? <Space h={500}></Space> : ""} */}

<Grid.Col span={isMobile ? mar : mar2 * 2}></Grid.Col>
<Grid.Col span={isMobile ? mar : 0}></Grid.Col>

<Grid.Col span={isMobile ? 12 - 2 * mar : 6 - mar - mar2}>

        <Grid gutter="md">
        <Grid.Col span={12}>

        <Space h={isMobile ? SIXTEEN : 0}></Space>

        <Paper shadow="xs" p="xl" withBorder  >
  <h3 align="center">Progress</h3>
       <Progress color="yellow" size="xl" value={(data["available"][0]["amount"] + data["pending"][0]["amount"] + 194600) / 4000} />
       <br></br>
       <Text>We have raised ${(data["available"][0]["amount"] + data["pending"][0]["amount"] + 194600) / 100} of $4,000. <Anchor href="https://donate.stripe.com/6oE00W6lc7xQeVW144" target="_blank" color="red" underline="always">Donate today!</Anchor></Text>

       </Paper>
       <br></br>

        <Paper shadow="xs" p="xl" bg="var(--mantine-color-blue-light)">


        
{/* <Text>To donate, choose a tier:</Text>
<Text fz="xs" color="grey">See <Anchor fz="xs" href="/capital-campaign" target="_blank">here</Anchor> for more information on tiers.</Text> */}



<Radio.Group
value={value}
onChange={setValue}
name="favoriteFramework"
color="yellow"
>

<Text>To donate, choose an amount below:</Text>
<Text fz="xs" color="grey">Donations $500 and above receive a complimentary silk scarf.</Text>

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

<Button fullWidth={true} 
onClick={handleDonateNow}
>Donate Now</Button>

{/* <br></br> */}

</Paper>
<br></br>




   
       </Grid.Col>


            
        </Grid>

    </Grid.Col>


    <Grid.Col span={mar}></Grid.Col>

    <Grid.Col span={isMobile ? mar : 0}></Grid.Col>
    <Grid.Col span={isMobile ? 12 - 2* mar : 0}>

    {!isMobile ? <div> </div> : 






<div>

</div>



}



    </Grid.Col>

    <Grid.Col span={isMobile ? 0 : 0}></Grid.Col>

        </Grid>

        </Center>
        </div>




  );
}

export default TrackerCampaign;

