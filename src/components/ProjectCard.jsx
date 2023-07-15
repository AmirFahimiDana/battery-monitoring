import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import zap1 from "../assets/zap1.png";
import styles from "./projects.module.css";

function ProjectCard(props) {
    const { id, projectTitle, zoneCount, remainingDays } = props;

    return (
        <>
            <Card className={styles.project_card} key={id}>
                <CardHeader
                    sx={{ paddingBottom: "0px" }}
                    avatar={
                        <Avatar
                            sx={{
                                bgcolor: "#ff0000",
                                width: "50px",
                                height: "50px",
                                borderRadius: "8px",
                            }}
                            aria-label="recipe"
                        >
                            <img src={zap1} alt="" />
                        </Avatar>
                    }
                    action={
                        <IconButton
                            aria-label="settings"
                            sx={{ paddingLeft: "30px" }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    }

                />
                <CardContent>
                    <Typography gutterBottom component="div" className={styles.main_title}>
                        {projectTitle}
                    </Typography>
                    <Typography gutterBottom component="div" className={styles.sub_title}>
                        {`${zoneCount} Zones `}
                    </Typography>

                </CardContent>
                <CardActions disableSpacing>
                    <Stack sx={{ width: "auto" }} spacing={2}>
                        <Typography component="p"
                            sx={
                                {
                                    padding: "4px 7px",
                                    width: "75px",
                                    height: "17px",
                                    fontSize: "8px",
                                    borderRadius: "3px",
                                    textAlign: "center",
                                    marginTop: "30px",
                                    marginLeft: "15px",
                                    backgroundColor: remainingDays > 0 ? "#C4EBCF" : "#EBC8C4",
                                    color: remainingDays > 0 ? "#35B158" : "#B13535"
                                }
                            }>
                            {remainingDays > 0 ? `${remainingDays} DAYS LEFT` : "EXPIRED"}
                        </Typography>
                    </Stack>
                </CardActions>
            </Card >
        </>
    )
}

export default ProjectCard