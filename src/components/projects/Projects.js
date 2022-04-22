import "./projects.css"
import Aos from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import weatherRN from '../../projectImages/appScreen.png';
import hSAutomation from '../../projectImages/handShakeAutomation.jpg';
import agendaWeb from '../../projectImages/agendaWebApp.jpg';
import archBtw from '../../projectImages/archBtw.jpg';

function Projects() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div id='projects'>
      <div >
        <h1>Some projects I worked on.</h1>
        <div className="project left" data-aos="fade-right" >
          <img className="projectImageMobile" src={weatherRN} alt="weather app" />
          <div className="information">
            <h3 className="appName">Weather app</h3>
            <p className="description">A simple app with actual and weekly weather information
              made with React Native and Expo.
              It uses your gps position and Dark Sky API to get
              weather information from your position.</p>
          </div>
        </div>
      </div>

      <div >
        <div className="project right" data-aos="fade-left">
          <div className="information">
            <h3>Hand Shake Automation</h3>
            <p>Bash script to automate the process of getting
              the hand shake of a WiFi network using AirCrackNG tool.
              To use in Linux systems Debian based.
            </p>
          </div>
          <img className="projectImage" src={hSAutomation} alt="hand shake automation" />
        </div>
      </div>

      <div >
        <div className="project left" data-aos="fade-right">
          <img className="bigImageProject" src={agendaWeb} alt="weather app" />
          <div className="information">
            <h3 className="appName">Agenda Web App</h3>
            <p className="description">A simple agenda web app
              made with NodeJS, Express and SQLite as local database.
              The agenda has user login and CRUD in the user information
              and other CRUD in the contacts table with relations.
            </p>
          </div>
        </div>
      </div>

      <div >
        <div className="project right" data-aos="fade-left">
            <div className="information">
              <h3>I use Arch BTW</h3>
              <p>
                I have 3 years as a Linux (or GNU/LINUX ;) ) user.
                I can use and understand Debian based distros and now I'm using Arch Linux. :)
              </p>
            </div>
            <img className="bigImageProject" src={archBtw} alt="hand shake automation" />
        </div>
      </div>

    </div>
  );
}

export default Projects;
