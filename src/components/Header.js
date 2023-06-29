import {useState} from "react";
import '../styles/app.scss';
import logo from "../assets/img/logo.png";
import {carousel} from "../datas/carousel";
import Carousel from "react-bootstrap/Carousel";



function NavBar(){
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return(
        <nav className={`navbar ${showLinks ? "showNav" : "hideNav"} `}>
            <ul className='navbar__links'>
                <li className='navbar__item'>
                    <a href="/" className='navbar__link special-anim'>accueil</a>
                </li>
                <li className='navbar__item'>
                    <a href="/about" className='navbar__link special-anim'>à propos</a>
                </li>
                <li className='navbar__item'>
                    <a href="/contact" className='navbar__link special-anim'>contact</a>
                </li>
                <li className='navbar__item'>
                    <a href="/calendar" className='navbar__link special-anim'>nos rendez-vous</a>
                </li>
                <li className='navbar__item'>
                    <a href="/status" className='navbar__link special-anim'>nos statuts</a>
                </li>
                <li className='navbar__item'>
                    <a href="https://www.helloasso.com/associations/au-dela-des-normes/adhesions/adhesion-2023-1" className='navbar__link'>adhérer</a>
                </li>
                <li className='navbar__item'>
                    <a href="https://www.helloasso.com/associations/au-dela-des-normes/formulaires/1" id="supportBtn" className='navbar__link'>nous soutenir</a>
                </li>
            </ul>
            <button className='navbar__burger' onClick={handleShowLinks}>
                <span className='bar'></span>
            </button>
        </nav>
    )
}

function Title(){
    return (
        <div id="title">
            <div className="imgSize">
                <img src={logo} alt="Logo de l'association ADN - Au-delà des Normes"/>
            </div>
            <h1>Association LGBTQIA+ en Dordogne</h1>
        </div>
    )
}

function BackgroundCarousel({photos}){

    return (
        <div className="backgroundImg">
            <Carousel>
                {photos.map((item) => (
                <Carousel.Item key={item.id}>
                    <img className="slide" src={item.src} alt={item.alt}/>
                </Carousel.Item>
                    ))}
            </Carousel>
            <NavBar/>
            <Title/>
        </div>
    )
}

function Header(){
    return (
        <header>
            <BackgroundCarousel photos={carousel}/>
        </header>
    )
};
export default Header