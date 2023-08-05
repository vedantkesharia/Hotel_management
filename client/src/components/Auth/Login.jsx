import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from 'react-toastify';
import toast,{Toaster} from 'react-hot-toast'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const toast = useHotToast(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      console.log('Token:', token);
      console.log('User:', user);

      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      // toast.error('Invalid credentials. Please try again.');
      toast.error('Invalid credentials. Please try again.'); 
      
    }
  };

  return (
    <div style={{ fontFamily: 'Roboto', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container className="my-5 gradient-form" style={{marginTop:'16px',marginBottom:'16px', height: '50%', width: '80%', backgroundColor: 'white', padding: '2rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container spacing={2}>
          <Grid item md={6} className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: '185px', display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}
                  alt="logo"
                />
                <Typography sx={{ textAlign: 'center', fontFamily: 'Montserrat',fontWeight:'bold'  }} variant="h4" mt={1} mb={5} pb={1}>
                  We are Invictus Resorts
                </Typography>
              </div>

              <Typography variant="body1">
                Please login to your account
              </Typography>

              <TextField
                label="Email address"
                fullWidth
                variant="outlined"
                margin="dense"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                margin="dense"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <br />
                <Button
                  variant="contained"
                  className="mb-4 w-100"
                  style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
                <Toaster />
              </div>

              <br />
              {/* <br /> */}
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <Typography variant="body2" className="mb-0">
                  Don't have an account?
                  <Link to="/register"> Register Here</Link>
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item md={6} className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4" style={{ backgroundColor: 'white', padding: '2rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',height:'88%',borderRadius:'12px'}}>
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <Typography variant="h4" className="mb-4">
                  We are more than just a company
                </Typography>
                <Typography variant="body1" className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;








