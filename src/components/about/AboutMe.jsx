import RedirectButton from "../Buttons/RedirectButton/RedirectButton";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <section className='about layout-grid'>
      <div className='about__left'>
        <h2>Um pouco sobre a minha trajetória</h2>
        <p>
          Me chamo Lucas Raiony, tenho 23 anos e sou um desenvolvedor Front-end
          com foco em aplicações web. Já trabalhei como Designer Gráfico e UI
          Designer desenvolvendo marcas e interfaces para empresas e
          profissionais independentes. Atualmente concentro meus estudos e
          carreira na área da programação web.
          <br />
          <br />
          Aficionado por design e tecnologia, encontrei no Front-end uma forma
          de unir ambos para criar sistemas incríveis visando a experiência e
          satisfação dos usuários.{" "}
        </p>
        <RedirectButton
          name='Saiba mais'
          link='https://www.linkedin.com/in/lucas-raiony-b9899a2b5/'
        />
      </div>
      <div className='about__right'>
        <div className='about__right__skills'>
          <h2>Habilidades</h2>
          <ul className='about__right__skills__tags'>
            <li className='about__right__skills__tags__item'>HTML</li>
            <li className='about__right__skills__tags__item'>CSS3</li>
            <li className='about__right__skills__tags__item'>JavaScript</li>
            <li className='about__right__skills__tags__item'>React</li>
            <li className='about__right__skills__tags__item'>Sass</li>
            <li className='about__right__skills__tags__item'>Git</li>
            <li className='about__right__skills__tags__item'>Axios</li>
            <li className='about__right__skills__tags__item'>Fech API</li>
            <li className='about__right__skills__tags__item'>TypeScript</li>
          </ul>
        </div>
        <div className='about__right__education'>
          <h2>Educação</h2>
          <h3>Tecnologia em sistemas para internet</h3>
          <span>Instituto Federal de Brasília | fev 2019 - fev 2022</span>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
