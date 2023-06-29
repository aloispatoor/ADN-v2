import '../styles/app.scss';
function Footer(){
    return (
        <footer>
            <div id="rainbowLine"></div>
            <nav>
                <div className="footerSections">
                    <p className="walkwayFont">ADN</p>
                    <p className="walkwayFont">Au-delà des Normes</p>
                    <div className="socialNetworks">
                        <a href="https://www.facebook.com/AuDeladesNormes" target="_blank"><i
                            className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/AuDN24" target="_blank"><i
                            className="fab fa-twitter-square"></i></a>
                        <a href="https://instagram.com/au.dela.des.normes.24" target="_blank"><i
                            className="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCP22Pg2BFAXY3jVZs7fpM0Q" target="_blank"><i
                            className="fa-brands fa-youtube"></i></a>
                        <a href="mailto:contact@audeladesnormes.org"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="footerSections">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/legal_mentions">Mention Légales</a></li>
                        <li><a href="/cgu">Conditions générales d'utilisation</a></li>
                        <li><a href="/status">Statuts</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="https://www.helloasso.com/associations/au-dela-des-normes/adhesions/adhesion"
                               target="_blank">Adhérer</a></li>
                    </ul>
                </div>

            </nav>
            <div className="allRightsReserved">
                <p>Charte graphique, Logo et site web réalisé par <span className="bold"><a
                    href="http://www.alois-patoor.ovh" target="_blank">Aloïs Patoor</a></span> - Tous droits réservés
                </p>
            </div>
        </footer>
    )
}
export default Footer