import "./Experiencia.css";
import { cleanPage } from "../../utils/cleanPage";

export const About_Me = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="experiencia">
        <div class="experienciaContainer">
            <h2>Desarrollador Junior (Practicas)</h2>
            <h3>FirstLine S.L. (Madrid)</h3>
            <ul>
                <li>Desarrollo de flujos basicos para automatizar procesos internos simulados</li>
                <li> Aprendizaje de conceptos basicos de automatizacion N8N</li>
            </ul>
        </div>
    </section>`;
};