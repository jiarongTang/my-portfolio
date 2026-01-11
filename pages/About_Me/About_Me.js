import "./About_Me.css";
import { cleanPage } from "../../utils/cleanPage";

export const About_Me = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="aboutMe">
        <div class="section">
            <h2>Softskills</h2>
            <ul class="skills texto2">
                <li>Trabajo en equipo</li>
                <li>Gestión de estrés</li>
                <li>Adaptabilidad</li>
                <li>Empatía</li>
            </ul>
        </div>
        <div class="section">
            <h2>Hardskills</h2>
            <ul class="skills texto2">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Java</li>
            </ul>
        </div>
    </section>`;
};