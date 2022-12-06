import "../styles/work.css";

import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import description from "../utils/description";

import bg from "../assets/homebg.jpg";
import hangman from "../assets/hangman.png";
import num from "../assets/numerical-methods.png";
import profile from "../assets/profile-fetcher.png";

export default function Work() {
    return (
        <div className="work">
            <ul className="flowDesc">
                <SchoolIcon className="flowIcon" fontSize="large"></SchoolIcon>
                <li className="flowBox">
                    <h2>{description.college.name}</h2>
                    <i>{description.college.year}</i>
                            
                    { description.college.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>

                <li className="flowBox">
                    <h2>{description.school.name}</h2>
                    <i>{description.school.year}</i>
                    { description.school.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>

                <VolunteerActivismIcon className="flowIcon" fontSize="large"></VolunteerActivismIcon>
                <li className="flowBox">
                    <h2>{description.hc.name}</h2>
                    <i>{description.hc.year}</i>
                    { description.hc.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>

                <li className="flowBox">
                    <h2>{description.gwoc.name}</h2>
                    <i>{description.gwoc.year}</i>
                    { description.gwoc.desc.map((i, ind) => {
                        return <p key={ind}>{i}</p>;
                    }) }
                </li>
            </ul>

            <h1>Projects</h1>

            <div className="projects">
                <div className="card">
                    <img src={hangman} alt="hangman" />
                    <h1>Hangman</h1>
                    <p>Hangman game in animal theme</p>
                </div>
                <div className="card">
                    <img src={bg} alt="pyagenda" />
                    <h1>pyagenda</h1>
                    <p>pyagenda keeps track of all your activities and notifies you when they are due.</p>
                </div>
            </div>

            <div className="projects">
                <div className="card">
                    <img src={num} alt="numerical-methods" />
                    <h1>numerical methods</h1>
                    <p>This website demonstrates different iterative numerical methods to solve a single equation as well as system of equations upto 100 iterations instantly.</p>
                </div>
                <div className="card">
                    <img src={profile} alt="profile-fetcher" />
                    <h1>GitHub Profile Fetcher</h1>
                    <p>	Fetches GitHub profile of a user</p>
                </div>
            </div>
        </div>
    );
}