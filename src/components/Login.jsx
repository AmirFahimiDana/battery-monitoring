import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TranslateIcon from "@mui/icons-material/Translate";
import loginlogo from "../assets/abstract-design-1.5x.png";
import logo from "../assets/Logo.png";
import styles from "./login.module.css";
import { red } from "@mui/material/colors";
//menu button imports
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// navigate user after Login
// import { useNavigate } from "react-router-dom";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "} Battery Management
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = () => {

    const red500 = red[500];
    //const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        //navigate("./projects");
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid md={false} container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid item sm={5} md={4} sx={{ backgroundColor: "#FE4B24" }}>
                    <Box className={styles.login_image}>
                        <span className={styles.welcome_login}>
                            Welcome <br /> Back!
                        </span>
                        <img src={loginlogo} alt="" />
                    </Box>
                </Grid>
                <Grid item elevation={6} square="true" sx={{ marginLeft: "100px" }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img src={logo} alt="" />
                        <Typography component="h1" variant="h5">
                            <b>Battery</b> Monitoring <br /> System
                        </Typography>

                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="tertiary"
                            size="small"
                        >
                            Welcome back! Please login to your account
                        </Typography>

                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1, width: '316px' }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Usename"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                variant="filled"
                            />
                            <FormControl sx={{ m: 1, width: '316px' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                    variant="filled"
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    sx={{ background: "lightgrey", webkitTapHighlightColor: "transparent" }}
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: red500 }}
                            >
                                Login
                            </Button>

                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button
                                    variant="contained"
                                    {...bindTrigger(popupState)}
                                    startIcon={<TranslateIcon />}
                                    sx={{
                                        borderRadius: "20px",
                                        height: "28px",
                                        width: "96px",
                                        backgroundColor: "#EFEFEF",
                                        color: "#808080",
                                        fontWeight: "400",
                                        fontSize: "12px",
                                        fontFamily: "Inter",
                                        border: "none",
                                        top: "51px",
                                        left: "900px",
                                        "&:hover": {
                                            backgroundColor: "#EFEFEF",
                                            color: "#808080"
                                        },
                                    }}
                                >
                                    English
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Persian</MenuItem>
                                    <MenuItem onClick={popupState.close}>Arabic</MenuItem>
                                    <MenuItem onClick={popupState.close}>France</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Login;
