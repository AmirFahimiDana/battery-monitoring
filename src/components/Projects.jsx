import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

//boxshadow for box element
//import iamges
import projectlogo from "../assets/project-page-logo.png";
//pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//box (div)
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import styles from "./projects.module.css";
//button icons imports
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from "@mui/icons-material/GridView";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// navigate user after Login
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

//Alerts

import styled from "@emotion/styled";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import projectData from "../data/mockData";

import ProjectCard from './ProjectCard';


const defaultTheme = createTheme();

const Projects = () => {
    const [state, setState] = useState({
        expired: true,
    });

    const [openFilter, setOpenFilter] = useState(false);

    const [projectName, setProjectName] = useState("");

    const [projectFiltered, setProjectFiltered] = useState([]);

    useEffect(() => {
        setProjectFiltered(projectData);
    }, [])

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const filterHandler = () => {
        setOpenFilter(!openFilter)
    }

    const btnFilterHandler = () => {

        // if (projectName && state) {
        //     setProjectFiltered(projectFiltered.map(pd => pd.projectTitle === projectName && pd.remainingDays <= 0))
        // }
        // else if (state) {
        //     projectFiltered.push(projectData.find(pd => pd.remainingDays <= 0))
        // } else if (projectName && !state) {
        //     projectFiltered.push(projectData.find(pd => pd.projectTitle === projectName))
        // }

        // console.log(projectFiltered);

    }

    const navigate = useNavigate();

    const logOutHandler = () => {
        navigate("/");
    };

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 25,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#FE4B24',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#FE4B24',
                    opacity: 0.5,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
        },
    }));

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />

                <Grid item xs={false} sm={4} md={2} sx={{ backgroundColor: "#ffffff" }}>

                    <Box className={styles.project_sidebar}>
                        <Box className={styles.pr_left_col}>
                            <img src={projectlogo} alt="" style={{ marginRight: "12px" }} />
                            <Typography variant="subtitle1" component="p">
                                <b>Battery</b>
                                <br />
                                Monitoring System
                            </Typography>
                            <Button
                                variant="outline"
                                endIcon={<SettingsOutlinedIcon />}
                            ></Button>
                        </Box>

                        <Box className={styles.project_user}>
                            <Button variant="outline" startIcon={<GridViewIcon />} sx={{ backgroundColor: "#F3F1EF" }}>
                                Projects
                            </Button>

                            <Button
                                variant="outline"
                                startIcon={<PeopleOutlineIcon />}
                                onClick={() => navigate("/users")}
                            >
                                Users
                            </Button>
                        </Box>

                        <Box>
                            <Button
                                variant="outline"
                                onClick={logOutHandler}
                                startIcon={<LogoutIcon />}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={10}
                    sx={{ backgroundColor: "#F3F1EF", borderRadius: "30px 0 0 30px" }}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: "0px",
                            // width: "70%",
                        }}
                    >


                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                //width: "100%",
                            }}
                        >
                            <Box sx={{ display: "flex", flexFlow: "row", justifyContent: "space-between", width: "82%" }}>
                                <Box sx={{ display: "flex", flexFlow: "column", justifyContent: "space-between", width: "90%", marginLeft: "-130px" }}>
                                    <Typography gutterBottom component="div" sx={{ fontFamily: "Helvetica", fontWeight: "700px", fontSize: "22px", color: "black" }}>
                                        Projects
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontFamily: "Helvetica", fontWeight: "300px", fontSize: "15px", marginBottom: "20px", color: "#808080" }}>
                                        Home/Projects
                                    </Typography>
                                </Box>
                                <Button variant="outlined" startIcon={<FilterListIcon />}
                                    sx={
                                        {
                                            backgroundColor: "#E3DCD4",
                                            width: "80px",
                                            height: "20px",
                                            textAlign: "center",
                                            fontWeight: "500px",
                                            fontSize: "11px",
                                            color: "#A1876D",
                                            border: "none",
                                            "&:hover": {
                                                border: "none"
                                            }
                                        }
                                    }
                                    onClick={filterHandler}>
                                    FILTER
                                </Button>

                            </Box>

                            <Box className={styles.project_wrapper}>
                                <Card className={styles.project_card}
                                    onClick={() => navigate('/add-new-project')}>
                                    <CardHeader
                                        className={styles.add_new_project}
                                        sx={{ paddingBottom: "60px" }}
                                        avatar={
                                            <Avatar
                                                className={styles.add_new_icon}
                                                sx={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius: "8px",
                                                }}
                                                aria-label="recipe"
                                            >
                                                <AddCircleOutlineOutlinedIcon />
                                            </Avatar>
                                        }
                                        title="Add New"
                                        subheader="Project"
                                    />
                                </Card>

                                {projectFiltered.map(pd => <ProjectCard key={pd.id} {...pd} />)}

                            </Box>

                            <Box className={styles.projects_pagination}>
                                <Stack spacing={2}>
                                    <Pagination count={10} variant="outlined" />
                                </Stack>
                            </Box>

                        </Box>
                        <Box
                            sx={
                                {
                                    display: openFilter ? "flex" : "none",
                                    flexFlow: "column",
                                    justifyContent: "space-between",
                                    height: "85vh",
                                    width: "250px",
                                    marginTop: "50px",
                                    backgroundColor: "#fff"
                                }
                            }>
                            <Box sx={
                                {
                                    display: "flex",
                                    flexFlow: "column",
                                    alignItems: "center",
                                    marginTop: "20px",
                                    padding: "0",

                                    // marginLeft: "20px"
                                }}>
                                <Typography variant="subtitle1" component="p">
                                    <b>Filter Projects</b>
                                </Typography>
                                <TextField
                                    id="filled-basic"
                                    label="Project Name"
                                    variant="filled"
                                    sx={{ marginTop: "10px", marginBottom: "10px" }}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    value={projectName}
                                />
                                <FormControlLabel
                                    control={
                                        <IOSSwitch checked={state.expired} onChange={handleChange} name="expired" />
                                    }
                                    label="Expired Projects"
                                />
                            </Box>
                            <Button variant="outlined"
                                onClick={btnFilterHandler}
                                sx={
                                    {
                                        backgroundColor: "#FE4B24",
                                        width: "92px",
                                        height: "36px",
                                        textAlign: "center",
                                        fontWeight: "500px",
                                        fontSize: "11px",
                                        color: "#fff",
                                        marginBottom: "25px",
                                        marginLeft: "130px",
                                        border: "none",
                                        "&:hover": {
                                            border: "none"
                                        }
                                    }
                                }>
                                FILTER
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    );
};

export default Projects;