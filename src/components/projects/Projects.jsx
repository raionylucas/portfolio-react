import "./Projects.scss";
import CardProject from "./projects-cards/CardProject";

function Projects() {
  return (
    <section className='projects layout-grid'>
      <h2>Projetos</h2>
      <div className='projects__cards'>
        <CardProject
          name='Data Agency'
          description='Landing page responsiva desenvolvida utilizando HTML, CSS e JavaScript.'
          projectLink='https://dataagency.vercel.app'
        />
        <CardProject />
        <CardProject />
      </div>
    </section>
  );
}

export default Projects;
