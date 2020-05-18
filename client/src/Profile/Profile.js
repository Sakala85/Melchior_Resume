import React from "react";
import "./Profile.css";
import Avatar from "../img/avatar.jpeg";
const Profile = () => {
  return (
    <React.Fragment>
      <div className="profile__page">
        <img className="avatar__profile" src={Avatar} alt="Melchior" />
        <p className="presentation">Melchior Bengtsson</p>
        <p className="poste">
          Software Developer (Node.js, React, PHP, C, SQL)
        </p>
        <div className="div__profile">
          <h2 className="div_profile__title">Competences</h2>
          <p className="div_profile__competence">C</p>
          <p className="div_profile__competence">Node.js</p>
          <p className="div_profile__competence">React</p>
          <p className="div_profile__competence">PHP</p>
          <p className="div_profile__competence">JavaScript</p>
          <p className="div_profile__competence">HTML</p>
          <p className="div_profile__competence">CSS</p>
          <p className="div_profile__competence">Photoshop</p>
          <p className="div_profile__competence">inDesign</p>
          <p className="div_profile__competence">Illustrator</p>
        </div>
        <div className="div__profile">
          <h2 className="div_profile__title">Langages</h2>
          <p className="div_profile__langage">English - Working langage</p>
          <p className="div_profile__langage">French - Native</p>
          <p className="div_profile__langage">Spanish - Social</p>
          <p className="div_profile__langage">Swedish - Social</p>
        </div>
        <div className="div__profile">
          <h2 className="div_profile__title">Contact</h2>
          <a
            href="https://www.linkedin.com/in/melchior-bengtsson-961349162/"
            className="div_profile__link"
          >
            Linkedin
          </a>
          <a href="https://github.com/Sakala85" className="div_profile__link">
            Github
          </a>
          <a href="melchiorbengtsson@gmail.com" className="div_profile__link">
            melchiorbengtsson@gmail.com
          </a>
          <p className="div_profile__link">0662014864</p>
        </div>
        <div className="div__profile">
          <h2 className="div_profile__title">Interest</h2>
          <p className="div_profile__competence">Ice Hockey (15years)</p>
          <p className="div_profile__competence">IA</p>
          <p className="div_profile__competence">BlockChaine</p>
          <p className="div_profile__competence">Hackathon</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
