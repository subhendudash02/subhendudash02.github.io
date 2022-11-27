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
                    
                    { description.college.desc.map(i => {
                        return <p>{i}</p>;
                    }) }
                </li>

                <li className="flowBox">
                    <h2>{description.school.name}</h2>
                    <i>{description.school.year}</i>
                    { description.school.desc.map(i => {
                        return <p>{i}</p>;
                    }) }
                </li>

                <VolunteerActivismIcon className="flowIcon" fontSize="large"></VolunteerActivismIcon>
                <li className="flowBox">
                    <h2>{description.hc.name}</h2>
                    <i>{description.hc.year}</i>
                    { description.hc.desc.map(i => {
                        return <p>{i}</p>;
                    }) }
                </li>

                <li className="flowBox">
                    <h2>{description.gwoc.name}</h2>
                    <i>{description.gwoc.year}</i>
                    { description.gwoc.desc.map(i => {
                        return <p>{i}</p>;
                    }) }
                </li>
            </ul>
        </div>
    );
}