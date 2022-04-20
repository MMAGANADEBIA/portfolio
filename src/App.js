import Wave from 'react-wavify';
import Typed from 'react-typed'; import './App.css';
import { Parallax } from 'react-parallax';
import profile from './profile.png';
import bash from './icons/bash.svg';
import javascript from './icons/javascript.svg';
import linux from './icons/linux.svg';
import html from './icons/html.svg';
import react from './logo.svg';
import node from './icons/node-js.svg';
import express from './icons/express.svg';
import npm from './icons/npm.svg';
import expo from './icons/client.svg';
import bootstrap from './icons/Bootstrap_logo.svg';
import css from './icons/CSS3_logo.svg';
import python from './icons/python.svg';
import unity from './icons/unity.svg';
import csharp from './icons/csharp.svg';
import neon from './parallax/neon.png';
import heart from './icons/heart.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wave id="headerWave" fill="f79902"
          paused={false}
          options={{
            height: 30,
            amplitude: 40,
            speed: 0.15,
            points: 3
          }} />
        <div id="headerProfile">
          <img id="profilePic"  src={profile} alt="My face" />
          <h1 id="profileName" >Mario Josue Magaña Debia</h1>
        </div>
      </header>
      <div id="description">
        <Typed
          strings={[
            'Software Engineer.',
            'Web Developer.',
            'Mobile developer.',
            'Backend.',
            'FrontEnd.',
            'ReactJS.',
            'React-Native.',
            'Linux.',
            'NodeJS.',
            'Express.',
            'NPM.',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="typingAnimation"
        />
        {/*   <div> */}
        {/*     <h2>Code with love </h2> */}
        {/*     <img className="heart" src={heart} alt="heart" /> */}
        {/* </div> */}
      </div>
        <div id='aboutMe'>
      <Parallax blur={1} bgImage={neon} bgImageAlt="parallax background" strength={200}>
          <div id='aboutContent'>
            <h3>Hi! I'm Mario.</h3>
            <p id='aboutContentPharagraph'>I'm a software engineer that love code. <br />
              Also I like free and open source software, Linux and learn.<br />
              I like to create web pages from backend to frontend, using technologies like
              NodeJS, Express, HTML, CSS, JavaScript, React and Bootstrap.<br />
              I like playing drums, guitar and play videogames in my free time.<br />
              Learn new things is one of the things I like.<br />
              I listen metal and rap music.<br />
              I like philosophy, especially Albert Camus.<br />
              In loving with nature.</p>
          </div>
      </Parallax>
        </div>

      <div id='aboutTechnologies'>
        <h3>Technologies I know.</h3>
        <div id='technologies'>
          <div id='techRows'>

            <div id='firstRow'>

              <div classNam>
                <img className='techIcons' src={html} alt="html logo" />
                <p>HTML</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={css} alt="css logo" />
                <p>CSS</p>
              </div>
              <div className='zoom'>
                <img className="techIcons" src={javascript} alt="javascript logo" />
                <p>JavaScript</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={bootstrap} alt="bootstrap logo" />
                <p>Bootstrap</p>
              </div>
            </div>

            <div id='secondRow'>
              <div className='zoom'>
                <img className='techIcons' src={linux} alt="linux icon" />
                <p>Linux</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={bash} alt="bash logo" />
                <p>Bash</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={python} alt="python logo" />
                <p>Python</p>
              </div>

              <div className='zoom'>
                <img className='techIcons' src={node} alt="nodejs logo" />
                <p>NodeJS</p>
              </div>
            </div>

            <div id='thirdRow'>
              <div className='zoom'>
                <img className='techIcons' src={npm} alt="npm logo" />
                <p>NPM</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={express} alt="express logo" />
                <p>Express</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={react} alt="react logo" />
                <p>ReactJS</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={react} alt="react native logo" />
                <p>React Native</p>
              </div>
            </div>

            <div id='fourthRow'>
              <div className='zoom'>
                <img className='techIcons' src={expo} alt="expo logo" />
                <p>Expo</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={unity} alt="unity logo" />
                <p>Unity</p>
              </div>
              <div className='zoom'>
                <img className='techIcons' src={csharp} alt="csharp logo" />
                <p>C#</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id='projects'>

      </div>
      <footer>
        <Wave id="footerWave" fill="f79902"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }} />
      </footer>
    </div>
  );
}

export default App;
