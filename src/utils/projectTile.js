import workStyle from "../styles/Work.module.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function ProjectTile(props) {
    return (
        <div className={workStyle.card}>
            <Image className={workStyle.cardImage} src={props.img} alt="projectTile" />
            <h1>{props.title}</h1>

            <button className={workStyle.githubLink}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <GitHubIcon fontSize="small" color="white" />
                    <Typography variant="p"><a href={props.githubLink} target="_blank" rel="noreferrer">GitHub</a></Typography>
                </Stack>
            </button>

            <button className={workStyle.githubLink}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <LinkIcon fontSize="small" color="white" />
                    <Typography variant="p"><a href={props.visitLink} target="_blank" rel="noreferrer">Visit here</a></Typography>
                </Stack>
            </button>

            <p>{props.description}</p>
        </div>
    );
}