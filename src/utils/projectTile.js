import workStyle from "../styles/Projects.module.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Markdown from "markdown-to-jsx";

import { Box, Button, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProjectTile(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();

    return (
        <div className={workStyle.card}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            { props.expand == true ? <ExpandMoreIcon className={workStyle.cardButton} onClick={handleOpen}fontSize="medium"></ExpandMoreIcon> : null }
            <LinkIcon className={workStyle.cardButton} fontSize="medium" color="primary" onClick={() => {router.push(props.visitLink)}} />
            <GitHubIcon className={workStyle.cardButton} fontSize="medium" color="primary" onClick={() => {router.push(props.githubLink)}} />

            <Modal open={open} onClose={handleClose}>
                <Box className={workStyle.projectWindow}>
                    <CloseIcon className={workStyle.closeButton} onClick={handleClose} />
                    <h1>{props.title}</h1>
                    <Image src={props.img} className={workStyle.modalImage} />
                    <br />
                    <Markdown children={props.fullDesc}></Markdown>
                </Box>
            </Modal>
        </div>
    );
}