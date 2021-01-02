import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>

                <main>
                    <h1>Leve a felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças!</p>
                </main>

                <div className="location">
                    <strong>Pouso Alegre</strong>
                    <span>Minas Gerais</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="#8D734B" />
                </Link>

            </div>
        </div>
    );
}

export default Landing;
