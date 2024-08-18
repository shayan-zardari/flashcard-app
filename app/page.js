"use client"

  
import { getStripe } from "/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
// import { Container } from "@mui/system";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import Head from "next/head";

function Home() {
  return (  
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="discription" content="Create Flashcard from Saas"  />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexgrow: 1}}>Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit">Log In</Button>
            <Button color="inherit"  >Sign Up</Button> 
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Home;