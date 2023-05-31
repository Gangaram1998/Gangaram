import React from 'react'
import { Box,Text,Grid,GridItem,Img, Button } from '@chakra-ui/react'
import AOS from "aos";

import "aos/dist/aos.css";
// import ayoa from "./ayoa.png"cd g
import health from "./helthdr.png"
import cronofit from "./cronofit.png"
import HotStar from "./HotStar.png"
// import BabyBliss from "./BabyBliss.png"
import fitfusion from "./fitfusion.png"
const Projects = () => {
    AOS.init();
  return (
    <Grid id="Projects" m="auto" w="80%" mt={{base:"50",sm:"50",md:"70"}}> 
        <Text as="b" fontSize={"5xl" } >Projects</Text>
        {/* BabyBliss */}
{/* <GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
<Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-up"  data-aos-delay="300">
<Img src={BabyBliss}  justifyContent="space-between" />
</Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-bottom" data-aos-delay="300">
    <Text as="b" fontSize={"3xl"} color="#319795">BabyBliss</Text>
    
    <br></br>
        <Text as="b">This Project is about a website through which we can purchase various products including cloths for our Kids.</Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Colloberative Project, devoloped by the team of 5 Developers in 4 days.Worked as Project Lead.</Text>
        <br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"80%"}} m="auto">
        <Box ><Img  align="center"  src="https://img.shields.io/badge/Next JS-000000?style=for-the-badge&logo=nextjs"  alt="Next JS" /></Box>
        <Box >
            <Img align="center" src = "https://img.shields.io/badge/Chakra UI-2abfb3?style=for-the-badge&logo=chakra ui"  alt="chakra ui" />
            </Box>
            <Box >
            <Img align="center" src ="https://img.shields.io/badge/Rest API-2962ff?style=for-the-badge&logo=api"  alt="Rest API"/>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button onClick={()=>{
        window.open("https://github.com/RationalPrabal/Baby-Bliss", '_blank')
    
       }} bg="#86efac">Github</Button>
        <Button onClick={()=>{
        window.open("https://baby-bliss.vercel.app/","_blank")
       }} bg="#22d3ee">Live</Button>
        </Box>
    </Box>
</GridItem> */}

<GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-up" data-aos-delay="300">
        <Img src={health}  />
    </Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-bottom"  data-aos-delay="600">
        <Text as="b" fontSize={"3xl"} color="#319795">Health Dr.</Text>
   
    <br></br>
        <Text as="b">Health-Dr. website is used to track your health-diet. Here you can set the goal to have a fitness full body and our website will track your fitness
        </Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Colloberative Project, devoloped by the team of 5 Developers in 4 days.</Text>
<br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"80%"}} m="auto">
            <Box ><Img  align="center"  src="https://img.shields.io/badge/html5-e36028?style=for-the-badge&logo=html5" alt="html" /></Box>
            <Box >
            <Img align="center" src = "https://img.shields.io/badge/css3-2449d8?style=for-the-badge&logo=css3"  alt="css"/>
            </Box>
            <Box >
            <Img align="center" src ="https://img.shields.io/badge/javascript-e4d04b?style=for-the-badge&logo=javascript"  alt="javascript"/>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
       <Button onClick={()=>{
        window.open("https://github.com/Gangaram1998/Health-Dr.","_blank")
       }} bg="#86efac">Github</Button>
        <Button onClick={()=>{
        window.open("https://incomparable-blancmange-56e496.netlify.app/","_blank")
       }} bg="#22d3ee" >Live</Button>
        </Box>
    </Box>
</GridItem>
{/* <GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
<Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-up" data-aos-delay="600">
<Img src={cronofit} />
</Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-bottom" data-aos-delay="600">
    <Text as="b" fontSize={"3xl"} color="#319795">Cronofit</Text>
    
    <br></br>
        <Text as="b">This project is about a website through which we can Track our diet, exercise, and health data</Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Colloberative Project, devoloped by the team of 4 Developers in 2 days.</Text>
        <br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"80%"}} m="auto">
        <Box ><Img  align="center"  src="https://img.shields.io/badge/html5-e36028?style=for-the-badge&logo=html5" alt="html" /></Box>
            <Box >
            <Img align="center" src = "https://img.shields.io/badge/css3-2449d8?style=for-the-badge&logo=css3"  alt="css"/>
            </Box>
            <Box >
            <Img align="center" src ="https://img.shields.io/badge/javascript-e4d04b?style=for-the-badge&logo=javascript"  alt="javascript"/>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button onClick={()=>{
        window.open("https://github.com/RationalPrabal/CronoFit","_blank")
       }} bg="#86efac">Github</Button>
        <Button onClick={()=>{
        window.open("https://radiant-muffin-05b02a.netlify.app/","_blank")
       }} bg="#22d3ee">Live</Button>
        </Box>
    </Box>
</GridItem> */}
<GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
<Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-up" data-aos-delay="300">
<Img src={fitfusion}  justifyContent="space-between" />
</Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-bottom" data-aos-delay="300">
    <Text as="b" fontSize={"3xl"} color="#319795">Fitfusion</Text>
    
    <br></br>
        <Text as="b">This Project is about a website through which you can get fitness tips and fitness education.</Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Colloberative Project, devoloped by the team of 4 Developers in 2 days.</Text>
        <br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"80%"}} m="auto">
        <Box ><Img  align="center"  src="https://img.shields.io/badge/React-5ccfee?style=for-the-badge&logo=react"  alt="react js" /></Box>
            {/* <Box >
            <Img align="center" src = "https://img.shields.io/badge/Chakra UI-2abfb3?style=for-the-badge&logo=chakra ui"  alt="chakra ui" />
            </Box> */}
            <Box >
            <Img align="center" src ="https://img.shields.io/badge/styled Components-2962ff?style=for-the-badge&logo=styled"  alt="Rest API"/>
            </Box>
            <Box >
            <Img align="center" src ="https://img.shields.io/badge/Typescript-e36028?style=for-the-badge&logo=typescript"  alt="TypeScript"/>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button onClick={()=>{
        window.open("https://github.com/Gangaram1998/fitfusion",'_blank')
       }} bg="#86efac">Github</Button>
        <Button onClick={()=>{
        window.open("https://fitfusion.vercel.app/",'_blank')
       }} bg="#22d3ee">Live</Button>
        </Box>
    </Box>
</GridItem>

{/* HotStar */}
<GridItem display={{base:"grid",sm:"grid",md:"flex"}} justifyContent="space-between" mt={{base:"50",sm:"70",md:"100"}}>
<Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-up" data-aos-delay="300">
<Img src={HotStar}  justifyContent="space-between" />
</Box>
    <Box w={{base:"80%", sm:"90%",md:"40%"}} m="auto" data-aos="fade-bottom" data-aos-delay="300">
    <Text as="b" fontSize={"3xl"} color="#319795">HotStar</Text>
    
    <br></br>
        <Text as="b">This Project is about a website through which we can surf various movies</Text>
        
        <br></br>
        <Text as="b" color={"#4FA095"}>A Solo Project, developed in 1 day.</Text>
        <br></br>
<br></br>
        <Box display="flex" justifyContent="space-between" w={{base:"80%",sm:"80%", md:"80%"}} m="auto">
        <Box ><Img  align="center"  src="https://img.shields.io/badge/html5-e36028?style=for-the-badge&logo=html5" alt="html" /></Box>
            <Box >
            <Img align="center" src = "https://img.shields.io/badge/css3-2449d8?style=for-the-badge&logo=css3"  alt="css"/>
            </Box>
            <Box >
            <Img align="center" src ="https://img.shields.io/badge/javascript-e4d04b?style=for-the-badge&logo=javascript"  alt="javascript"/>
            </Box>
        </Box>
        <Box display={"flex"} justifyContent={{base:"space-between",sm:"space-around" ,md:"space-between"}} w={{base:"80%",sm:"90%", md:"60%"}} m="auto" mt="5">
        <Button onClick={()=>{
        window.open("https://github.com/Gangaram1998/movie-app", '_blank')
    
       }} bg="#86efac">Github</Button>
        <Button onClick={()=>{
        window.open("https://splendid-kheer-2dc959.netlify.app/","_blank")
       }} bg="#22d3ee">Live</Button>
        </Box>
    </Box>
</GridItem>


    </Grid>
  )
}

export default Projects