import Image from "next/image";   
import { getStripe } from "@/utils/get-stripe"
import { SingedIn, SingedOut, UserButton } from "@clerk/nextjs"
import { Container, Head } from "@mui/system";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";

export default function Home() {
  return (  
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="discription" content="Create Flashcard from Saas"  />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexgrow: 1}}>Flashcard Saas</Typography>
          <SingedOut>
            <Button color="inherit">Log In</Button>
            <Button color="inherit"  >Sign Up</Button> 
          </SingedOut>
          <SingedIn>
            <UserButton />
          </SingedIn>
        </Toolbar>
      </AppBar>
    </Container>
  );
}