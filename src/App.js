import Project from "./components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import projects from "./data/projects.json";
import skills from "./data/skills.json";

function App() {
  return (
    <div className=" text-slate-950 text-xs max-w-2xl lg:max-w-3xl mx-auto pt-12 pb-6 px-4">
      
      <main>
        <section id="about" className='mb-4 pb-4 border-b'>
          <div className="flex items-center">
            <img src='portrait.jpg' alt="my face" className='w-32 rounded-xl mr-4'></img>
            <div>
              <b className='font-semibold text-lg'>Hello! I'm</b>
              <h2 className="text-2xl font-bold">Noel Tesaluna</h2>
            </div>
          </div>
          <p className='text-base mt-2 mb-4 text-gray-600'> I recently graduated from RMIT Melbourne with a Bachelor of Computer Science Degree. </p>
          <p className="mb-4">  I am currently seeking to apply my experience and build upon my existing technical skills in the field of software development.</p>
          <div className="flex gap-2">
            <a href="mailto:noel.anthony.t@gmail.com" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 transition">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl"/>
            </a>    
            <a href="https://github.com/noeltesaluna" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 transition">
              <FontAwesomeIcon icon={faGithub} className="text-xl"/>
            </a>    
            <a href="https://www.linkedin.com/in/noel-tesaluna/" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 transition">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl"/>
            </a>      
             
          </div>

          
        </section>

        <section id="skills" className="mb-4 pb-4 border-b">
        <h2 className="text-lg font-semibold mb-4">Skills</h2>
        {skills.map((section, index) => {
          return (
            <div className="mb-2" key={index}>
              <h3 className="font-semibold">{section.heading}</h3>
                {section.items.map((item) => 
                  <>
                    {item}
                    {index < section.items.length - 1 && ', '}
                  </>
                )}
            </div>
          )
        })}
        </section>

        <section id="school-projects" className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Projects</h2>
            {projects.map((project) =>
              <Project key={project.id} title={project.title} year={project.year} img={project.img}>
                {project.description}
              </Project>
            )}
        </section>
      </main>

      <footer>
          <div className="container text-xs mx-auto flex justify-between">
              <p>&copy; 2025 Noel Tesaluna - All Rights Reserved.</p>
              <a href="https://github.com/noeltesaluna/personal-website" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 underline transition">
                Source Code
              </a>
          </div>
      </footer>
    </div>
  );
}

export default App;
