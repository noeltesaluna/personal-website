import Project from "./components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className=" text-slate-950 text-xs max-w-lg lg:max-w-xl mx-auto pt-12 pb-6 ">
      
      <main>
        <section id="about" className='mb-4 pb-4 border-b'>
          <div className="flex items-center">
            <img src='portrait2.jpg' alt="my face" className='w-32 rounded-xl mr-4'></img>
            <div>
              <b className='font-semibold text-lg'>Hello! I'm</b>
              <h2 className="text-2xl font-bold">Noel Tesaluna</h2>
            </div>
          </div>
          <p className='text-base mt-2 mb-4 text-gray-600'> I am currently studying Computer Science at RMIT Melbourne. </p>
          <p className="mb-4"> I am currently seeking to apply my experience and build upon my existing technical skills in the field of software development.</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/noel-tesaluna/" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 transition">
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
        Java, Python, C++, JavaScript, HTML, CSS, React, Node.js, JUnit, Maven, Git, GitHub, Docker, Visual Studio Code, 
        MySQL, SQLite, phpMyAdmin, Sequelize, GraphQL
        </section>

        <section id="school-projects" className="mb-8">
            <h2 className="text-lg font-semibold mb-4">School Projects</h2>
            <p className="mb-4"> Projects below are available upon request due to RMIT's academic integrity.</p>
            <Project title="The Big Problem" year="2022" img="thebigproblem.png">
              A static website displaying data about homelessness within Australia. Built in HTML, CSS and Javalin. 
              Data stored and retrieved using SQLite. Utilised GitHub which allowed collaboration with a partner. 
            </Project>
            <Project title="Loop Cinemas" year="2023" img="loopcinemas.png">
              Collaborated with a peer using GitHub to develop a full stack cinema website using modern web technologies such as React, GraphQL, and Sequelize with ORM capabilities. 
              The project featured an interactive and dynamic interface, supported by a robust MySQL database managed with phpMyAdmin for efficient data management and retrieval.
              Additionally, the website included an admin page to manage movies, reviews, and users, as well as to display statistics.
            </Project>
            <Project title="Super Price" year="2023" img="superprice.png">
              Collaborated with a team of six in an Agile Scrum environment, utilizing GitHub for version control, Docker for containerization, and GitHub Actions for CI/CD. 
              Employed Maven, Spring Boot, and JUnit to create a back-end with REST APIs, while developing a user-friendly interface using React and TypeScript for the SuperPrice website.
            </Project>
        </section>
      </main>

      <footer>
          <div className="container text-xs mx-auto flex justify-between">
              <p>&copy; 2024 Noel Tesaluna - All Rights Reserved.</p>
              <a href="https://github.com/noeltesaluna/personal-website" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 underline transition">
                Source Code
              </a>
          </div>
      </footer>
    </div>
  );
}

export default App;
