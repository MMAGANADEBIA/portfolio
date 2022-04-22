import './footer.css';
import Wave from 'react-wavify';
import twitter from '../../icons/Twitter-logo.svg';
import git from '../../icons/Git_icon.svg';
import linkedin from '../../icons/LinkedIn_logo_initials.png';

function Footer() {
  return (
    <div>
      <footer className="appFooter">
        <Wave id="footerWave" fill="f79902"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }} />
        <div id="footerInfo">
          <a href="https://twitter.com/mmaganadebia" target="_blank" rel="noreferrer">
            <img className='footerIcon zoom' src={twitter} alt="twitter" />
          </a>
          <a href="https://github.com/mmaganadebia" target="_blank" rel='noreferrer'>
            <img className='footerIcon zoom' src={git} alt="git" />
          </a>
          <a href="https://www.linkedin.com/in/mario-maga%C3%B1a-b51062177/" target="_blank" rel="noreferrer">
            <img className='footerIcon zoom' src={linkedin} alt="linkedin" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
