import workStyle from "@/styles/Work.module.css";
import Navbar from "@/utils/navbar";

import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import description from "@/utils/description";
import ProjectTile from "@/utils/projectTile";
import projectDesc from "@/utils/projectDesc";

import hangman from "../../assets/hangman.png";
import num from "../../assets/numerical-methods.png";
import profile from "../../assets/profile-fetcher.png";
import pyagenda from "../../assets/pyagenda.png";

export default function Work() {
    return (
        <>
        <Navbar />
        <div className={workStyle.work}>
            <ul className={workStyle.flowDesc}>
                <SchoolIcon className={workStyle.flowIcon} fontSize="large"></SchoolIcon>
                <li className={workStyle.flowBox}>
                    <h2>{description.college.name}</h2>
                    <i>{description.college.year}</i>
                            
                    { description.college.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>

                <li className={workStyle.flowBox}>
                    <h2>{description.school.name}</h2>
                    <i>{description.school.year}</i>
                    { description.school.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>

                <VolunteerActivismIcon className={workStyle.flowIcon} fontSize="large"></VolunteerActivismIcon>
                <li className={workStyle.flowBox}>
                    <h2>{description.hc.name}</h2>
                    <i>{description.hc.year}</i>
                    { description.hc.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>

                <li className={workStyle.flowBox}>
                    <h2>{description.gwoc.name}</h2>
                    <i>{description.gwoc.year}</i>
                    { description.gwoc.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>
            </ul>

            <h1>Projects</h1>

            <div className={workStyle.projects}>
                <ProjectTile img={hangman} 
                            title={projectDesc.hangman.title}
                            description={projectDesc.hangman.description}
                            githubLink={projectDesc.hangman.githubLink}
                            visitLink={projectDesc.hangman.link}>
                </ProjectTile>

                <ProjectTile img={pyagenda} 
                            title={projectDesc.pyagenda.title}
                            description={projectDesc.pyagenda.description}
                            githubLink={projectDesc.pyagenda.githubLink}
                            visitLink={projectDesc.pyagenda.link}>
                </ProjectTile>
            </div>

            <div className={workStyle.projects}>
                <ProjectTile img={num} 
                            title={projectDesc.numericalMethods.title}
                            description={projectDesc.numericalMethods.description}
                            githubLink={projectDesc.numericalMethods.githubLink}
                            visitLink={projectDesc.numericalMethods.link}>
                </ProjectTile>

                <ProjectTile img={profile} 
                            title={projectDesc.profileFetcher.title}
                            description={projectDesc.profileFetcher.description}
                            githubLink={projectDesc.profileFetcher.githubLink}
                            visitLink={projectDesc.profileFetcher.link}>
                </ProjectTile>
            </div>
        </div>
        </>
    );
}