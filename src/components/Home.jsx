import "../styles/home.css";

import theme from '../utils/themes.js';
import social from "../utils/social.js";

import { ThemeProvider } from "@emotion/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SvgIcon } from '@mui/material';

export default function Home() {
    return (
        <div className="home">
            <h1 className="mainHeading">Welcome to my Portfolio!</h1>
            <ThemeProvider theme={theme}>
                <a href={social.github}><GitHubIcon className="socIcon" fontSize="large" color="primary" /></a>
                <a href={social.devto}><LogoDevIcon className="socIcon" fontSize="large" color="primary" /></a>
                <a exact="true" href={social.email}><EmailRoundedIcon className="socIcon" fontSize="large" color="primary" /></a>
                <a href={social.linkedin}><LinkedInIcon className="socIcon" fontSize="large" color="primary" /></a>
                <a href={social.twitter}><TwitterIcon className="socIcon" fontSize="large" color="primary" /></a>
                <a href={social.stackoverflow}><SvgIcon className="socIcon" fontSize="large" color="primary">
                    <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                    </SvgIcon></a>
            </ThemeProvider>
        </div>
    );
}