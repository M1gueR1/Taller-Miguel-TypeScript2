import { series } from './data.js';
var totalSeasons = 0;
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('promedio');
actualizandoTablas(series);
function actualizandoTablas(series) {
    console.log('Desplegando series');
    for (var i in series) {
        var serie = series[i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.position, "</td>\n                           <td><a href=\"#\" class=\"serie-link\" data-id=\"").concat(serie.position, "\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.amountOfSeasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    document.querySelectorAll('.serie-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var id = Number(e.target.getAttribute('data-id'));
            var selectedSerie;
            var verificando;
            verificando = true;
            for (var i = 0; i < series.length && verificando == true; i++) {
                if (series[i].position === id) {
                    selectedSerie = series[i];
                    detalleCards(selectedSerie);
                    verificando = false;
                }
            }
        });
    });
}
promedioDiv.innerHTML = "Seasons average: ".concat(calcularPromedioTemporadas(series));
var detalleContainer = document.getElementById('detalles');
function calcularPromedioTemporadas(series) {
    for (var i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
    }
    var promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
}
function detalleCards(serie) {
    var linkImg = serie.linkImg, name = serie.name, description = serie.description, linkSerie = serie.linkSerie;
    var imgElement = "<img class=\"card-img-top\" src=\"".concat(linkImg, "\" alt=\"").concat(name, "\">");
    var titleElement = "<h5 class=\"card-title\">".concat(name, "</h5>");
    var descriptionElement = "<p class=\"card-text\">".concat(description, "</p>");
    var linkElement = "<a href=\"".concat(linkSerie, "\" target=\"_blank\" class=\"card-link\">").concat(linkSerie, "</a>");
    var cardBody = "\n      <div class=\"card-body\">\n        ".concat(titleElement, "\n        ").concat(descriptionElement, "\n        ").concat(linkElement, "\n      </div>\n    ");
    var card = "\n      <div class=\"card\" style=\"width: 18rem;\">\n        ".concat(imgElement, "\n        ").concat(cardBody, "\n      </div>\n    ");
    detalleContainer.innerHTML = card;
}
