import { AvatarPNG, Email, Figma, Linkedin } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarPNG} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Meenakshi Rathod <br /> Developer
              </h1>
            </div>
            <p className="header-text text-white">
              {/* <ul>
                <li>Total 8.5+ years of experience in IT industry.</li>
                <li>Primary skill ReactJS and good exposure in it.</li>
                <li>Good communication and interpersonal skills.</li>
                <li>A team player with leadership qualities.</li>
                <li>Knowledge of Agile Methodology.</li>
              </ul> */}
              Enthusiastic Senior Software Developer with a strong commitment to
excellence and continuous learning. Skilled in modern front-end
frameworks, RESTful APIs, and code collaboration. Proven track record
in mentoring junior developers and leading high-impact projects.
Passionate about embracing new technologies and ensuring optimal
software performance. A self-driven team player who values
collaboration and achieving results through persistence and hard work.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span>rathod.meenakshi7@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span>(+91) 9763363404</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span>Pune, Maharashtra, India</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={15} />
                </span>
                <p className="info-item-text">
                  Website:{" "}
                  <span>
                    coming soon...
                  </span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
              {/* <li className="social-item">
                <Link to="/">
                  <img src={Dribble} />
                  <span className="tooltip text">Dribble</span>
                </Link>
              </li> */}
              <li className="social-item">
                {/* <Link to="/"> */}
                  <img src={Linkedin} />
                  <span className="tooltip text">Linkedin</span>
                {/* </Link> */}
              </li>
              <li className="social-item">
                {/* <Link to="/"> */}
                  <img src={Email} />
                  <span className="tooltip text">Email</span>
                {/* </Link> */}
              </li>
              <li className="social-item">
                {/* <Link to="/"> */}
                  <img src={Figma} />
                  <span className="tooltip text">Figma</span>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
