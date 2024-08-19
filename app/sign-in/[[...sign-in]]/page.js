import Link from 'next/link';
import { SignIn } from "@clerk/nextjs";
import { Container, AppBar, Toolbar, Box, Typography, Button} from "@mui/material";

export default function SignInPage() {
    return (
    <Container maxWidth="100vw">
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{
                    flexGrow:1,
                }}>
                    Nautilus                      
                </Typography>  
                <Button color="inherit"><Link href="/sign-in" passHref>log In</Link ></Button>
                <Button color="inherit"><Link href="/sign-  up" passHref>Sign Up</Link ></Button>  
            </Toolbar>
        </AppBar>

        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            >
            <Typography variant="h4">
                Sign In
                <SignIn />
            </Typography>
        </Box>
    </Container>
)}