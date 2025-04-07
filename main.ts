import { Serie } from './Serie.js';
import { series } from './data.js';

let totalSeasons = 0;
let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('promedio')!;
const detalleContainer: HTMLElement = document.getElementById('detalles')!;

renderSeriesInTable(series);



function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.position}</td>
                             <td><a href="#" class="serie-link" data-id="${serie.position}">${serie.name}</a></td>
                             <td>${serie.channel}</td>
                             <td>${serie.amountOfSeasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
    document.querySelectorAll('.serie-link').forEach(link => 
      {
        link.addEventListener('click', (e) => 
        {
          e.preventDefault();
          const id = Number((e.target as HTMLElement).getAttribute('data-id'));
          let selectedSerie: Serie;
          
          for (let i = 0; i < series.length; i++) 
          {
            if (series[i].position === id) 
            {
              selectedSerie = series[i];
              showSerieDetail(selectedSerie);
              break;
            }
          }
        });
      });
  }

promedioDiv.innerHTML = `Seasons average: ${calcularPromedioTemporadas(series)}`;


function calcularPromedioTemporadas(series: Serie[]): number {
    for (let i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
      }
    let promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
  }

  function showSerieDetail(serie: Serie): void {
    detalleContainer.innerHTML = `
      <img class="card-img-top" src="${serie.linkImg}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.linkSerie}" target="_blank" class="card-link">${serie.linkSerie}</a>
      </div>
    `;
  }