import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import FacebookIcon from "src/icons/Facebook";
import GoogleIcon from "src/icons/Google";
import Page from "src/components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  paper: {
    margin: "20px auto",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title='Login'>
      <Box
        display='flex'
        flexDirection='column'
        height='100%'
        justifyContent='center'
      >
        <Paper elevation={10} className={classes.paper}>
          <Container>
            <Formik
              initialValues={{
                email: "123@gmail.com",
                password: "123",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
                password: Yup.string()
                  .max(255)
                  .required("Password is required"),
              })}
              onSubmit={() => {
                navigate("/app/home", { replace: true });
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box mb={3}>
                    <Typography color='textPrimary' variant='h2'>
                      Sign in
                    </Typography>
                    <Typography
                      color='textSecondary'
                      gutterBottom
                      variant='body2'
                    >
                      Sign in on the internal platform with
                    </Typography>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Button
                        color='primary'
                        fullWidth
                        startIcon={<FacebookIcon />}
                        onClick={handleSubmit}
                        size='large'
                        variant='contained'
                      >
                        Facebook
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button
                        fullWidth
                        startIcon={<GoogleIcon />}
                        onClick={handleSubmit}
                        size='large'
                        variant='contained'
                      >
                        Google
                      </Button>
                    </Grid>
                  </Grid>
                  <Box mt={3} mb={1}>
                    <Typography
                      align='center'
                      color='textSecondary'
                      variant='body1'
                    >
                      or login with email address
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label='Email Address'
                    margin='normal'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type='email'
                    value={values.email}
                    variant='outlined'
                  />

                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label='Password'
                    margin='normal'
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type='password'
                    value={values.password}
                    variant='outlined'
                  />
                  <Box my={2}>
                    <Button
                      color='primary'
                      disabled={isSubmitting}
                      fullWidth
                      size='large'
                      type='submit'
                      variant='contained'
                    >
                      Sign in now
                    </Button>
                  </Box>
                  <Typography color='textSecondary' variant='body1'>
                    Don&apos;t have an account?{" "}
                    <Link
                      component={RouterLink}
                      to='/auth/registerIndividual'
                      variant='h6'
                    >
                      Sign up as individual Developer
                    </Link>
                  </Typography>
                  <Typography color='textSecondary' variant='body1'>
                    Or{" "}
                    <Link
                      component={RouterLink}
                      to='/auth/registerOrg'
                      variant='h6'
                    >
                      Sign up as Organisation
                    </Link>
                  </Typography>
                </form>
              )}
            </Formik>
          </Container>
        </Paper>
      </Box>
    </Page>
  );
};

export default LogIn;