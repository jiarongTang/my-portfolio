import "./ExperienciaCard.css";

export const ExperienciaCard = (experiencia) => {
    let detalle = '';
    for (const texto of experiencia.tareas) {
        detalle += `<li>${texto}</li>`;
    }

    return `<div class="experiencia-card">
                <div class="header">
                    <h2>${experiencia.puesto}</h2>
                </div>
                <div class="empresa">
                    <h3>${experiencia.empresa}</h3>
                </div>
                <div class="detail">
                    <ul>
                        ${detalle}
                    </ul>
                </div>

            </div>`;
};  