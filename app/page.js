"use client"


import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Container, Typography, AppBar, Toolbar, Button, Box, Grid } from "@mui/material";
import Head from "next/head";
// import { Ribeye } from "next/font/google";
// import { calculateBackoffMillis } from "@firebase/util";
// import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
// import { POST } from "./api/checkout_session/route";
import getStripe from "../utils/get-stripe";

function Home() {

  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: 'POST',
      headers: {
        origin: 'https//localhost:3000',
      },
    })
    const checkoutSessionJson = await checkoutSession.json()

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if (error) {
      console.warn(error.message)
    }
  }

  return (
    <Container maxWidth="100vw" sx={{ padding: 0 }}>
      {/* <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create Flashcard from Saas"  />
      </Head> */}

      <AppBar position="static" style={{ width: '100vw' }}>
        <Toolbar style={{ display: "flex", color: '#fff' }}>
          <Typography variant="h5" style={{ flexGrow: 1 }}>Nautilus</Typography>
          <SignedOut>
            <Button href="/sign-in" color="inherit" sx={{ bgcolor: "#2F60DD", padding: '10px', margin: '5px' }}>Log In</Button>
            <Button href="/sign-up" color="inherit" sx={{ bgcolor: "#2F60DD", padding: '10px', margin: '5px' }}>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
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
          Your study partner Nautilus Card</Typography>
        <Typography variant="h5"
          sx={{
            color: 'white',
            padding: '20px',
          }}
        >
          {' '}
          the easiest way to create flashcards.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} href="http://localhost:3000/generate">Start Now</Button>
      </Box>

      <Box display="flex" flexDireciton="row" justifyContent="center" alignItems="center">

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="2px solid #333"
          borderRadius="2px"
          sx={{ m: 4, p: 4, borderRadius: 2 }}>
          <Typography variant="h3" textAlign="center">
            Receive exactly 10 flashcards.
          </Typography>
          <Typography variant="h6" textAlign="center">
            {''}
            Optimize your study sessions with precisely 10 expertly crafted flashcards. Perfect for quick reviews and focused learning.
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="2px solid #333"
          borderRadius="2px"
          sx={{ m: 4, p: 4, borderRadius: 2 }}>
          <Typography variant="h3" textAlign="center">
            Effort less Flashcard creation.
          </Typography>
          <Typography variant="h6" textAlign="center">
            {''}
            Just provide your content, and our advanced AI will generate clear, concise, and informative flashcards designed for effective learning and study.
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="2px solid #333"
          borderRadius="2px"
          sx={{ m: 4, p: 4, borderRadius: 2 }}>
          <Typography variant="h3" textAlign="center">
            Customize the cards.
          </Typography>
          <Typography variant="h6" textAlign="center">
            {''}
            Get flashcards tailored to your needs. Our AI not only generates questions and answers but also includes context and relevant details to ensure you grasp the material fully.
          </Typography>
        </Box>

      </Box>

      <Box display="flex" flexDireciton="row" justifyContent="center" alignItems="center">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="2px solid #333"
          borderRadius="2px"
          sx={{ m: 4, p: 4, borderRadius: 2 }}>
          <Typography variant="h4">
            Our standard plan.
          </Typography>
          <Typography variant="h4">
            {''}
            $0 / Month
          </Typography>
          <Button contained color="inherit" sx={{ m: 2, border: 1 }}>Buy</Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border="2px solid #333"
          borderRadius="2px"
          sx={{ m: 4, p: 4, borderRadius: 2 }}>
          <Typography variant="h4">
            Our premium plan.
          </Typography>
          <Typography variant="h4">
            {''}
            $10 / Month
          </Typography>
          <Button contained color="inherit" sx={{ m: 2, border: 1 }} onClick={handleSubmit}>Buy</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
