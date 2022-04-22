import Wave from 'react-wavify';
import Typed from 'react-typed';
import profile from '../../profile/profile.jpg';
import './header.css';

function Header() {
  return (
    <div>
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
          <img id="profilePic" src={profile} alt="My face" />
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
      </div>
    </div>
  );
}

export default Header;
