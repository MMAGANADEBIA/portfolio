import './technologies.css';
import bash from '../../icons/bash.svg';
import javascript from '../../icons/javascript.svg';
import linux from '../../icons/linux.svg';
import html from '../../icons/html.svg';
import react from '../../logo.svg';
import node from '../../icons/node-js.svg';
import express from '../../icons/express.svg';
import npm from '../../icons/npm.svg';
import expo from '../../icons/client.svg';
import bootstrap from '../../icons/Bootstrap_logo.svg';
import css from '../../icons/CSS3_logo.svg';
import python from '../../icons/python.svg';
import unity from '../../icons/unity.svg';
import csharp from '../../icons/csharp.svg';

function Technologies() {
  return (
    <div>
      <div id='aboutTechnologies'>
        <h1>Technologies I know.</h1>
        <div id='technologies'>
          <div id='techRows'>

            {/* <div id='firstRow'> */}
            <div className="zoom">
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
            {/* </div> */}

            {/* <div id='secondRow'> */}
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
            {/* </div> */}

            {/* <div id='thirdRow'> */}
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
            {/* </div> */}

            {/* <div id='fourthRow'> */}
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
            {/* </div> */}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Technologies;
