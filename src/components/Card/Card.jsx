import React from 'react';
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import "./Card.css";

const Card = () => {
    return (
        <div className='card-container'>
            <div className='card-section'>
            <div className='card'>
                <img src={card1} alt="card" />
                <div className='contant'>
                    <h3>Objectives of the IQAC</h3>
                    <p>The general objective of the IQAC is to promote a quality assureance culture within the university.
                        The specific objectives are to: 
                         isntitutionalizze he specific objectives are to: 
                         isntitutionalizze the quality assurance culture the quality assurance culture in accordance with notional QA guide lines and internation proctices.
                    </p>
                </div>
            </div>
            <div className='card'>
                <img src={card2} alt="card" />
                <div className='contant'>
                    <h3>Functions of IQAC</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipi
                        sicing elit. Beatae, unde reiciendis eveniet sunt perspiciatis non quae ut suscipit 
                        ipsam sint culpa itaque ab sit, placeat dicta illum laborum enim asperiores? Porro
                        </p>
                </div>
            </div>
            <div className='card'>
                <img src={card3} alt="card" />
                <div className='contant'>
                    <h3>Establishment of IQAC</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipi
                        sicing elit. Beatae, unde reiciendis eveniet sunt perspiciatis non quae ut suscipit 
                        ipsam sint culpa itaque ab sit, placeat dicta illum laborum enim asperiores? Porro
                        </p>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Card;