import React from 'react';
import './style.css'
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';



const Landing:React.FC = () =>{
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt=""/>
                    <h2>Sua plataforma online.</h2>
                </div>
                <img className="hero-image" src={LandingImg} alt="Plataforma de estudos"/>
                <div className="buttons-container">
                    <Link to="aluno" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>
                    <Link to="professor" className="give-classes">
                        <img src={giveClassesIcon} alt="Sou Professor"/>
                        Sou Professor
                    </Link>
                    
                    
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;