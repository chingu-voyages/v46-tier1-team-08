import '../components/Footer.css'
import  github from '../img/github.png'

const Footer = () => {
    return (
      <div className="footer">
        <div className="link">
          <a href="https://github.com/chingu-voyages/v46-tier1-team-08/tree/main">
            <img className="github" src={github}></img>
            Chingu Team 8 Repo
          </a>
        </div>
      </div>
    );
}
 


export default Footer;