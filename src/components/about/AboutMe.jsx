import RedirectButton from "../Buttons/RedirectButton/RedirectButton";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <section className='about layout-grid'>
      <div className='about__left'>
        <h2>Um pouco sobre a minha trajetória</h2>
        <p>
          Me chamo Lucas Raiony, tenho 23 anos e sou um desenvolvedor Front-end
          especializado em aplicações web. Anteriormente, atuei como Designer
          Gráfico e UI Designer, contribuindo para o desenvolvimento de marcas e
          interfaces para diversas empresas e profissionais autônomos.
          Atualmente, dedico-me integralmente à área de programação web.
          <br />
          <br />
          Com uma paixão por design e tecnologia, encontrei no Front-end uma
          maneira de integrar ambos os campos, criando sistemas incríveis que
          priorizam a experiência e satisfação dos usuários.
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
            <li className='about__right__skills__tags__item'>Tailwind</li>
            <li className='about__right__skills__tags__item'>Git</li>
            <li className='about__right__skills__tags__item'>Figma</li>
            <li className='about__right__skills__tags__item'>UI</li>
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
