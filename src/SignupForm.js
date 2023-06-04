import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Avatar, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Set the height of the parent element to the full viewport height
    backgroundColor: '#dee2e6', // Green background color
  },
  container: {
    width: '400px', // Adjust the width as per your needs
    height: '500px', // Adjust the height as per your needs
    backgroundColor: '#f8f9fa;', // Green background color
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  textField: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
  },
}));



const SignupForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={classes.root}>
    <Container className={classes.container}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center" direction="column">
          <Avatar alt="Profile Image" src="/path/to/image" className={classes.avatar} />
        </Grid>

        <Grid item xs={12} md={12} container spacing={2}>
          <Grid item xs={6} md={6} style={{paddingLeft:0}}>
            <TextField label="First Name" fullWidth className={classes.textField} />
          </Grid>
          <Grid item xs={6} md={6} style={{paddingRight:0}}>
            <TextField label="Last Name" fullWidth className={classes.textField} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            fullWidth
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Create Account
          </Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default SignupForm;
