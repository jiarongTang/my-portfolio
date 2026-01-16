import "./Experiencia.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";
import { ExperienciaCard } from "../../components/ExperienciaCard/ExperienciaCard";
import { experiencias } from "../../data/experiencias";

export const Experiencia = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="experiencia">
        <h2>Experiencia laboral</h2>
        ${Divider()}
        <div class="experiencia-container">
    </section>`;
    const container = document.querySelector(".experiencia-container");
    for (const experiencia of experiencias) {
        const figure = document.createElement("figure");
        figure.innerHTML = ExperienciaCard(experiencia);
        container.appendChild(figure);
    }
};