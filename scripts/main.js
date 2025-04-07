import { series } from './data.js';
var totalSeasons = 0;
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('promedio');
var detalleContainer = document.getElementById('detalles');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.position, "</td>\n                             <td><a href=\"#\" class=\"serie-link\" data-id=\"").concat(serie.position, "\">").concat(serie.name, "</a></td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.amountOfSeasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    document.querySelectorAll('.serie-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var id = Number(e.target.getAttribute('data-id'));
            var selectedSerie;
            for (var i = 0; i < series.length; i++) {
                if (series[i].position === id) {
                    selectedSerie = series[i];
                    showSerieDetail(selectedSerie);
                    break;
                }
            }
        });
    });
}
promedioDiv.innerHTML = "Seasons average: ".concat(calcularPromedioTemporadas(series));
function calcularPromedioTemporadas(series) {
    for (var i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
    }
    var promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
}
function showSerieDetail(serie) {
    detalleContainer.innerHTML = "\n      <img class=\"card-img-top\" src=\"".concat(serie.linkImg, "\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.linkSerie, "\" target=\"_blank\" class=\"card-link\">").concat(serie.linkSerie, "</a>\n      </div>\n    ");
}
