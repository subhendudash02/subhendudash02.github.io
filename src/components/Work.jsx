import "../styles/work.css";

import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import description from "../utils/description";

export default function Work() {
    return (
        <div className="work">
            <ul className="flowDesc">
                <SchoolIcon className="flowIcon" fontSize="large"></SchoolIcon>
                <li className="flowBox">
                    <h2>{description.college.name}</h2>
                    <i>{description.college.year}</i>
                    <p>{description.college.desc[0]}</p>
                    <p>{description.college.desc[1]}</p>
                    <p>{description.college.desc[2]}</p>
                    <p>{description.college.desc[3]}</p>
                </li>

                <li className="flowBox">
                    <h2>{description.school.name}</h2>
                    <i>{description.school.year}</i>
                    <p>{description.school.desc[0]}</p>
                </li>
            </ul>

            <ul className="flowDesc">
                <VolunteerActivismIcon className="flowIcon" fontSize="large"></VolunteerActivismIcon>
                <li className="flowBox">
                    <h2>{description.hc.name}</h2>
                    <i>{description.hc.year}</i>
                    <p>{description.hc.desc[0]}</p>
                    <p>{description.hc.desc[1]}</p>
                </li>

                <li className="flowBox">
                    <h2>{description.gwoc.name}</h2>
                    <i>{description.gwoc.year}</i>
                    <p>{description.gwoc.desc[0]}</p>
                    <p>{description.gwoc.desc[1]}</p>
                    <p>{description.gwoc.desc[2]}</p>
                </li>
            </ul>
        </div>
    );
}