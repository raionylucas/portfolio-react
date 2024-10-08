import "./Projects.scss";
import CardProject from "./projects-cards/CardProject";

function Projects() {
  return (
    <section className='projects layout-grid'>
      <h2>Projetos</h2>
      <div className='projects__cards'>
        <CardProject 
        name='Gerenciador Financeiro'
        description = ' Sistema criado para gerenciar finanças pessoais desenvolvido com PHP, MySQL, Composer e Padrão MVC.' 
        projectLink='https://github.com/raionylucas/gerenciador-financeiro-php/tree/main'
        textBtnProject ='Visitar Repositório'
        />
        <CardProject
          name='Data Agency'
          description='Landing page responsiva desenvolvida utilizando HTML, CSS e JavaScript.'
          projectLink='https://dataagency.vercel.app'
          textBtnProject ='Visualizar Projeto'
        />
        <CardProject 
          name='Dr Hugo Ary Oliveira'
          description='Landign page clean e responsiva com objetivo de apresentar informações sobre o médico neurologista Dr. Hugo Ary Oliveira.'
          projectLink='https://drhugoary.com.br'
          textBtnProject='Visualizar Projeto'
        />
      </div>
    </section>
  );
}

export default Projects;
