import "../styles/work.css";
import SchoolIcon from '@mui/icons-material/School';

export default function Work() {
    return (
        <div className="work">
            <div className="heading center">
                <h1>Hello</h1>
            </div>

            <div class="timeline">
                <div class="container left">
                    <div class="date">15 Dec</div>
                    <SchoolIcon class="icon"></SchoolIcon>
                    <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                    </div>
                </div>
                <div class="container right">
                    <div class="date">22 Oct</div>
                    <i class="icon fa fa-gift"></i>
                    <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}