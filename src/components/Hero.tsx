import cert from "../assets/certs/frontend-cert.png";
import pdfCert from "../assets/certs/frontend-cert.pdf";

function Hero(){
    return(


<div id="about" className="container m-2 google-sans flex wrap align-center">
        <div id="hero" className="container google-sans">
            <h2>Web Developer</h2>
            <div>
                <span>Wordpress</span> 
                <span>|</span> 
                <span>React</span>
                <span>|</span>
                <span>Ruby on Rails</span>
            </div>
        
        <ul>
            <li>FullStack(LAMP, ROR, MERN, CLOUD)</li>

            <li>Frontend and Mobile Development Certfication</li>
            <li>Game Developer in free time</li>
            <li>Writing and Painting as a hobby</li>
        </ul>

        Currently pursuing additional certifications:
        <ul>
            <li>Comptia A+</li>
            <li>Comptia Network+</li>
        </ul>
        </div>
        <div className="flex column align-center">
            <img className="round-corners" src={cert} />
            <a href={pdfCert}>Download PDF</a>
        </div>
    </div>

    );
}

export default Hero;