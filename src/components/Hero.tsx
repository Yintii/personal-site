import cert from "../assets/certs/frontend-cert.png";
import pdfCert from "../assets/certs/frontend-cert.pdf";

function Hero(){
    return(


<div id="about" className="container m-2 google-sans flex wrap space-around align-center">
        <div id="hero" className="container flex column align-center google-sans">
            <h1>Web Developer</h1>        
            <ul>
                <li>FullStack(LAMP, ROR, MERN, CLOUD)</li>
                <li>Frontend and Mobile Development Certfication</li>
                <li>Game Developer in free time</li>
                <li>Writing and Painting as a hobby</li>
            </ul>

            <h3>Currently pursuing additional certifications:</h3>
            <ul>
                <li>Comptia A+</li>
                <li>Comptia Network+</li>
            </ul>
        </div>
        <div className="flex column">
            <img className="round-corners" src={cert} />
            <a href={pdfCert}>Download PDF</a>
        </div>
    </div>

    );
}

export default Hero;