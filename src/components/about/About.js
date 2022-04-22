import './about.css';
import { Parallax } from 'react-parallax';
import neon from '../../parallax/neon.png';
import secondProfile from '../../profile/secondProfile.jpg';

function About() {
  return (
    <div>
      <div id='aboutMe'>
        <Parallax blur={3} bgImage={neon} bgImageAlt="parallax background" strength={200}>
          <div id="parallaxContainer" >
            <div id='aboutContent'>
              <h3>Hi! I'm Mario.</h3>
              <p id='aboutContentPharagraph'>I'm a software engineer that love code. <br />
                Also I like free and open source software, Linux and learn new things.<br />
                I like to create web pages from backend to frontend, using technologies like
                NodeJS, Express, HTML, CSS, JavaScript, React and Bootstrap.<br />
                I like playing drums, guitar and play videogames in my free time.<br />
                Learn new things is one of the things I like.<br />
                I listen metal and rap music.<br />
                I like philosophy, especially Albert Camus.<br />
                Loving the nature.<br />
                Editing pictures of myself are one of my hobbies.<br />
                Fascinated by space. <br />
                In love with arts. <br />
                I'm trying to know more about cybersecurity and hacking.<br />
              </p>
            </div>
            <div>
              <img className='secondProfileImage' src={secondProfile} alt="my face" />
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default About;
