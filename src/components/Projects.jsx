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

import projectData from "../data/mockData";
import ProjectCard from "./ProjectCard";

const defaultTheme = createTheme();

const Projects = () => {


    const navigate = useNavigate();

    const logOutHandler = () => {
        navigate("/");
    };

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
                            <Button variant="outline" startIcon={<GridViewIcon />}>
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
                            <Typography component="p"
                                sx={
                                    {
                                        backgroundColor: "#E3DCD4",
                                        width: "80px",
                                        height: "20px",
                                        textAlign: "center",
                                        fontWeight: "500px",
                                        fontSize: "11px"
                                    }
                                }>FILTER
                            </Typography>
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

                            {projectData.map(pd => <ProjectCard key={pd.id} {...pd} />)}

                        </Box>

                        <Box className={styles.projects_pagination}>
                            <Stack spacing={2}>
                                <Pagination count={10} variant="outlined" />
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Projects;