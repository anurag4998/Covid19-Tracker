import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiSurgicalMaskLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row mb-3">
        <div className="col-12 align-items-center">
          <div className="footer-text">
            <p className = "footer-text--line" >
              Made with care by <span>Anurag</span>{" "}
            </p>
            <span className="mask-icon">
              {" "}
              <RiSurgicalMaskLine />
            </span>
          </div>
          <div className="footer-icons">
            <a href=" https://github.com/anurag4998">
              <FaGithub className="git" />
            </a>
            <a href="https://www.linkedin.com/in/anurag-agrawal-674406164/">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
