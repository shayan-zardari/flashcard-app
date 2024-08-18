"use client"

  
import { getStripe } from "/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Container, Typography, AppBar, Toolbar, Button, Box } from "@mui/material";
import Head from "next/head";
import { Ribeye } from "next/font/google";
import { calculateBackoffMillis } from "@firebase/util";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";

function Home() {
  return (  
    <Container maxWidth="100vw" sx={{padding: 0}}>
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create Flashcard from Saas"  />
      </Head>

      <AppBar position="static" style={{ width: '100%'}}>
        <Toolbar style={{display: "flex", color: '#fff'}}>
          <Typography variant="h5" style={{flexGrow: 1}}>Nautilus</Typography>
          <SignedOut>
            <Button href="/sign-in" color="inherit" sx={{bgcolor: "#2F60DD", padding: '10px', margin: '5px'}}>Log In</Button>
            <Button href="/sign-up" color="inherit" sx={{bgcolor: "#2F60DD", padding: '10px', margin: '5px'}}>Sign Up</Button> 
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box  
        sx={{
            backgroundImage: 'url(https://svgshare.com/i/19QR.svg)',
            backgroundSize: 'cover',       
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
          }}
        height="800px"
        width="100vw" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        >
        <Typography variant="h1"
          sx={{
            color: 'white',
            padding: '20px',
            textAlign: 'center',
          }}
          >
          Your study partner Nautius Card</Typography>
        <Typography variant="h5"
          sx={{
            color: 'white',
            padding: '20px',
          }}
          >
          {' '}
          the easiest way to create flashcards.
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>Start Now</Button>
      </Box>

      <Box>
        <Typography variant="h2">Feature 1</Typography>
        <Typography variant="h2">Feature 2</Typography>
        <Typography variant="h2">Feature 3</Typography>
      </Box>

    </Container>
  );
}

export default Home;