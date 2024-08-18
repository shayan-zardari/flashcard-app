"use client"

  
import { getStripe } from "/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
// import { Container } from "@mui/system";
import { Container, Typography, AppBar, Toolbar, Button, Box } from "@mui/material";
import Head from "next/head";
import { Ribeye } from "next/font/google";
import { calculateBackoffMillis } from "@firebase/util";

function Home() {
  return (  
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create Flashcard from Saas"  />
      </Head>

      <AppBar position="static" style={{ width: '100%', padding: 0 }}>
        <Toolbar style={{display: "flex", marginRight: 50, marginLeft: 50,}}>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit">Log In</Button>
            <Button color="inherit">Sign Up</Button> 
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box  
        width="100vw" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        >
        <Typography variant="h2">Your study partner Nautius Card</Typography>
        <Typography variant="h5">
          {' '}
          the easiest way to create flashcards.
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>Start Now</Button>
      </Box>

      <Box>
        
      </Box>

    </Container>
  );
}

export default Home;