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
      Soy una estudiante de grado superior de Desarrollo de Aplicaciones Web en Madrid, España. He estado también estudiando en la universida en el grado de Ingienería Informática, pero no está finalizado por problemas personales. Los hobbies que tengo son las manualidades de cualquier tipo (origami, crochett,...). He trabajado como dependiente en tienda de venta de piezas de móviles, en bazares, y como cajera en almacenes. Tengo manejo en diferentes lenguajes de programación como html, css y javaScript. Con respecto a los lenguajes que controlo seria el chino y el españo con nivel nativo; y el inglés con nivel B2. En este portfolio hay alguno de los proyectos que he realizado.
    </p>
    <a href="mailto:jiarong.tang.daw@gmail.com">Enviar un correo →</a>
    </section>`;
};