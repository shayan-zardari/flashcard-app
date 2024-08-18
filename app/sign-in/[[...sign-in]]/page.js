
import { SignIn } from "@clerk/clerk-react";
import { Container, AppBar, Toolbar, Box, Typography, Button} from "@mui/material";

export default function SignInPage() {
    return 
    <Container maxWidth="100vw">
        <Appbar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{
                    flexGrow:1,
                }}>
                    Nautilus                      
                </Typography>  
            </Toolbar>
            <Button color="inherit"><Link href="/sign-in" passhref>log In</Link ></Button>
            <Button color="inherit"><Link href="/sign-  up" passhref>Sign Up</Link ></Button>  
        </Appbar>

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
}