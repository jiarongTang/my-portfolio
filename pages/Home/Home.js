import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, soy </p>
    <h1>Jiarong Tang</h1>
    <p class="texto">
      Estudiante de Desarrollo de Aplicaciones Web y Máster de Full Stack, con conocimientos en base de datos y experiencia en lenguajes como Java, PHP y JavaScript. Apasionada por el desarrollo de interfaces web empleando lenguaje de marcas. En busca de trabajo y ganar experiencia en el sector tecnológico.
    </p>
    <a href="mailto:jiarong.tang.daw@gmail.com">Enviar un correo →</a>
    <a href="../../public/curriculum.pdf" download="curriculum_jiarong_tang.pdf" class="boton-curriculum">Descargar CV</a>
    </section>`;
};