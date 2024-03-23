import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Connections from 'api';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { SET_REMEMBER_ME } from 'store/actions';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(customization.rememberme);

    const googleHandler = async () => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2
                .init({
                    client_id: '799616009286-ck594ue3589h93vq4hlqcsmrg71uuekd.apps.googleusercontent.com'
                })
                .then((auth2) => {
                    const element = document.getElementById('google-signin-btn');
                    auth2.attachClickHandler(
                        element,
                        {},
                        (googleUser) => {
                            // Handle the signed-in user here
                            const profile = googleUser.getBasicProfile();
                            console.log('ID: ' + profile.getId());
                            console.log('Name: ' + profile.getName());
                            console.log('Image URL: ' + profile.getImageUrl());
                            console.log('Email: ' + profile.getEmail());
                        },
                        (error) => {
                            console.error(error);
                        }
                    );
                });
        });
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSessions = (token, data) => {
        checked ? localStorage.setItem('token', token) : sessionStorage.setItem('token', token);
        checked ? localStorage.setItem('user', JSON.stringify(data)) : sessionStorage.setItem('user', JSON.stringify(data));
    };

    const handleLoginSuccess = async (response) => {
        try {
            // Access user information after successful login
            const profileObj = await response.profileObj;
            console.log(response);

            // Send the user profile to your backend for further processing (optional)
        } catch (error) {
            console.error(error);
            // Handle potential errors during data retrieval
        }
    };

    useEffect(() => {
        dispatch({ type: SET_REMEMBER_ME, checked }); //
    }, [dispatch, checked]);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                {/* <Grid item xs={12}>
                    <AnimateButton>
                        <GoogleLogin
                            clientId="799616009286-ck594ue3589h93vq4hlqcsmrg71uuekd.apps.googleusercontent.com"
                            onSuccess={handleLoginSuccess}
                            onError={(error) => console.error(error)}
                            useOneTap
                        />
                    </AnimateButton>
                </Grid> */}
                {/* <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid> */}
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign in with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    setSubmitting(true);
                    var Api = Connections.api + Connections.signIn;
                    var headers = {
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    };

                    var Data = {
                        email: values.email,
                        password: values.password
                    };

                    fetch(Api, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(Data)
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            if (response.success) {
                                setSubmitting(false);
                                handleSessions(response.access_token, response.data);
                                navigate('/');
                            } else {
                                setStatus({ success: false });
                                setErrors({ submit: response.message });
                                setSubmitting(false);
                            }
                        })
                        .catch((err) => {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        });
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login" color="secondary">
                                Email Address
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email Address"
                                color="secondary"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login" color="secondary">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                color="secondary"
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="secondary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Link
                                to="/forgot-password"
                                variant="subtitle1"
                                style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}
                            >
                                Forgot Password?
                            </Link>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
