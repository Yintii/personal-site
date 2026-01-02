
import PROJECTS from '../assets/data/portfolio_data.ts';


function getColor(tech: string){
    switch(tech){
        case "React":
        case "Go":
            return "lightblue";
        case "Rails":
            return "maroon";
        case "Typescript":
            return "blue";
        case "PostgreSQL":
            return "purple";
        case "Godot":
            return "darkblue";
        case "C#":
            return "orange";
        default:
            break;
    }
}

function Portfolio(){
    const projects = PROJECTS.map((project) => {
        return(
            <div className="portfolio-project flex column align-center round-corners p-1 m-1">
                <h3>{project.name}</h3>
                <img src={project.image}/>
                <div className="techBubbles flex space-evenly">
                    {project.technologies.map(tech => {
                        return(
                            /*make a random color background each time*/
                            <p 
                                key={tech} 
                                className="tech round-corners p-1 m-1"
                                style={{ backgroundColor: getColor(tech)}}
                            >
                                {tech}
                            </p>
                        );
                    })}
                </div>
                <div className='project-links flex m-1'>
                    <a className='p-1' href={project.github}>Github</a>
                    {project.liveURL && (
                        <a className='p-1' href={project.liveURL}>Live Site</a>
                    )}
                </div>
            </div>
        );
    });

    return(
        <div id="portfolio" className="google-sans flex wrap align-center space-around section pad-lg">
        {projects}
        </div>
    );
}

export default Portfolio;