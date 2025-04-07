import { Serie } from './Serie.js';
import { series } from './data.js';

let totalSeasons = 0;
let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('promedio')!;


actualizandoTablas(series);



function actualizandoTablas(series: Serie[]): void {
  console.log('Desplegando series');

  for (let i in series) {
    const serie = series[i];
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.position}</td>
                           <td><a href="#" class="serie-link" data-id="${serie.position}">${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.amountOfSeasons}</td>`;
    seriesTbody.appendChild(trElement);
  }

  document.querySelectorAll('.serie-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Number((e.target as HTMLElement).getAttribute('data-id'));
      let selectedSerie: Serie;
      let verificando: boolean;
      verificando = true;

      for (let i = 0; i < series.length && verificando == true; i++) {
        if (series[i].position === id) {
          selectedSerie = series[i];
          detalleCards(selectedSerie);
          verificando = false;
        }
      }
    });
  });
}

promedioDiv.innerHTML = `Seasons average: ${calcularPromedioTemporadas(series)}`;
const detalleContainer: HTMLElement = document.getElementById('detalles')!;

function calcularPromedioTemporadas(series: Serie[]): number {
    for (let i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
      }
    let promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
  }

  function detalleCards(serie: Serie): void {
    const { linkImg, name, description, linkSerie } = serie;
  
    const imgElement = `<img class="card-img-top" src="${linkImg}" alt="${name}">`;
    const titleElement = `<h5 class="card-title">${name}</h5>`;
    const descriptionElement = `<p class="card-text">${description}</p>`;
    const linkElement = `<a href="${linkSerie}" target="_blank" class="card-link">${linkSerie}</a>`;
  
    const cardBody = `
      <div class="card-body">
        ${titleElement}
        ${descriptionElement}
        ${linkElement}
      </div>
    `;
  
    const card = `
      <div class="card" style="width: 18rem;">
        ${imgElement}
        ${cardBody}
      </div>
    `;
  
    detalleContainer.innerHTML = card;
}

  