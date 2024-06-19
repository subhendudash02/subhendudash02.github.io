import workStyle from "../styles/Projects.module.css";

// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkIcon from '@mui/icons-material/Link';

import { Button } from "@mui/material";
import Image from "next/image";

export default function ProjectTile(props) {

    return (
        <div className={workStyle.card}>
            <div className={workStyle.cardBody}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <Button className={workStyle.cardButton} variant="contained">Learn More</Button>
            </div>
            <div className={workStyle.cardImage}>
                <Image src={props.img} alt={props.title} className={workStyle.image} />
            </div>
            {/* <LinkIcon className={workStyle.githubLink} fontSize="medium" color="primary" onClick={() => {router.push(props.visitLink)}} /> */}
            {/* <GitHubIcon className={workStyle.githubLink} fontSize="large" color="primary" onClick={() => {router.push(props.githubLink)}} /> */}
        </div>
    );
}