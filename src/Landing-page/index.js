import React from 'react';
import { Flex,Box,Image,Heading,Button ,ButtonGroup,Link,Text, } from "@chakra-ui/react";

import logo from '../assets/logo/PlayGround.png';
import boyImage from '../assets/images/boy.png';
import girlImage from '../assets/images/girl.png';
import {ReactComponent as YellowEllipse}  from '../assets/vector/yellow-big.svg';
import { ReactComponent as YellowsmallEllipse}  from '../assets/vector/yellow-small.svg';
import { ReactComponent as Purple}  from '../assets/vector/purple.svg';
import { ReactComponent as Pink}  from '../assets/vector/pink.svg';
import { ReactComponent as Transparent}  from '../assets/vector/transparent.svg';





const Home = () => {
    return (
        <>
        <Flex display= {['flex','flex','none','none']}><Heading>OOps Desktop view only for now</Heading></Flex>
        <Flex
        direction={['column']}
        height={['100vh']}
        overflow={['hidden']}
        outline= '1px solid red'
        display= {['none','flex','flex','flex']}

        >
            
            <Flex justifyContent={['space-between']} bgColor='#F2F2F2' >
                <Box flex='1' bg='#fff' p={['4']}>
                    <Image src={logo} alt='playground logo' />
                </Box>
                <Flex
                
                flex='1'
                
                >
                   <Box as='button' px='4' bgColor='#F2F2F2' _hover={{ bg: "#fff" }} _active={{bg: "#fff",transform: "scale(0.98)",borderColor: "#fff",}}> <Link href='/'>HOME</Link></Box>
                   <Box  p='2' as='button' bgColor='#F2F2F2' _hover={{ bg: "#fff" }} _active={{bg: "#fff",transform: "scale(0.98)",borderColor: "#fff",}}> <Link href='/'>OUR PRODUCTS</Link></Box>
                   <Box as='button' p='2' bgColor='#F2F2F2' _hover={{ bg: "#fff" }} _active={{bg: "#fff",transform: "scale(0.98)",borderColor: "#fff",}}> <Link href='/'>CONTACT US</Link></Box>
                </Flex>
            </Flex>

            <Flex
            
            >
                <Flex
                d='column'
                position='relative'
                p={['4']}
                flex='1'
                >
                    <Box position='relative' ml={['59%']} top='30%'>
                        <YellowsmallEllipse/>
                        {/* <Transparent /> */}
                    </Box>
                    <Box position='relative' top='57%'> <YellowEllipse /></Box>
                    <Box  >
                        <Box  >

                            <Box position='absolute' ml={['10%']}  top='10%'>
                            <Purple />
                            </Box>
                            <Image position='absolute'  ml={['3%']} top='5%' zIndex='1' src={boyImage} /> 
                        </Box>
                        <Box > 
                            <Box position='absolute' ml={['35%']}top='50%'>
                            <Pink  />
                            </Box > 
                            <Image position='absolute'  zIndex='2' ml={['25%']}top='20%'src={girlImage} /> 
                        </Box>
                    </Box>  
                </Flex>
                
                <Flex
                d='column'
                p={['6']}
                flex='1'
               
                >
                    <Heading as='h1' fontSize={['2em','3em']} fontWeight='400' mt='12%'>Discover fun ways <br/>to <Text display='inline' fontWeight='600'>learn</Text></Heading>
                    <Text  mr={['25%']} my='12' fontSize={['1em','1.6em']} lineHeight='50px' opacity='0.7'>
                    Our games are designed to teach kids how to code, improve their math and problem solving skills, and build their vocabulary.
                    </Text>
                    <ButtonGroup mt='10'variant="filled" spacing="6" fontSize='1.5em'  width='100%'>
                    <Box as ='button' bgColor='#72C244' color='#FFFFFF' borderRadius={['40px']} w='35%'p={['4']}   _hover={{ bg:'#fff', color:'#000',border:'1px solid #72C244' }}>Get Started</Box>
                    <Box as='button' bgColor='#F2F2F2' color='#000' borderRadius={['35px']}  w='25%' p={['4']} border='1px solid #fff'  _hover={{ bg:'#F2F2F2', color:'#000',border:'1px solid #000' }}>Log In</Box>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}

export default Home
