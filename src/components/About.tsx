import cert from "../assets/certs/frontend-cert.png";
import pdfCert from "../assets/certs/frontend-cert.pdf";

function About(){
    return(
    <div id="about" className="container m-2 google-sans flex align-center">
        <ul>
            <li>FullStack(LAMP, ROR, MERN, CLOUD)</li>
            {/* <li>Comptia A+ Certified</li>
            <li>Comptia Network+ Certified</li> */}
            <li>Frontend and Mobile Development Certfication</li>
            <li>Game Developer in free time</li>
            <li>Writing and Painting as a hobby</li>
        </ul>
        <div className="flex column align-center">
            <img src={cert} />
            <a href={pdfCert}>Download PDF</a>
        </div>
    </div>
);
}

export default About;