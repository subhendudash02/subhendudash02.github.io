import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import { Stack, Typography } from "@mui/material";

export default function ProjectTile(props) {
    return (
        <div className="card">
            <img src={props.img} alt="projectTile" />
            <h1>{props.title}</h1>

            <button className="githubLink">
                <Stack direction="row" alignItems="center" gap={1}>
                    <GitHubIcon fontSize="small" color="white" />
                    <Typography variant="p"><a href={props.githubLink} target="_blank" rel="noreferrer">GitHub</a></Typography>
                </Stack>
            </button>

            <button className="githubLink">
                <Stack direction="row" alignItems="center" gap={1}>
                    <LinkIcon fontSize="small" color="white" />
                    <Typography variant="p"><a href={props.visitLink} target="_blank" rel="noreferrer">Visit here</a></Typography>
                </Stack>
            </button>

            <p>{props.description}</p>
        </div>
    );
}