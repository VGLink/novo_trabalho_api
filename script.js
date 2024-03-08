//tentando o api
// renderizar pagina e DOM esteja totalmente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
// Endpoint de todas as ligas
const url = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const ligas = data.leagues.filter(liga => liga.strSport === 'Soccer'&& liga.strLeague !== '_No League');
    //tem que fazer um filtro porque o arquivo Json tem outros esportes alem do futebol
    //tem que filtar uma linha com 'no league' para nao exibir na divExibição

    // Mapeando as ligas e exibindo o nome da Liga e o país que acontece e o nome alternativo
    const htmlArray = ligas.map(liga => {
      console.log(`Nome da Liga: ${liga.strLeagueAlternate} \n Liga: ${liga.strLeague}`);
      return `<div class="leagues">
                <h2>${liga.strLeague}</h2>
                <p>${liga.strLeagueAlternate}</p>
                
              </div>`;
              
    });

    // Transforma o array de strings em uma única string
    const htmlString = htmlArray.join('');

    // Adiciona a string HTML ao DOM, por exemplo, dentro de um elemento com ID 'suaDiv'
    document.getElementById('divExibicao').innerHTML = htmlString;
  })
  .catch(error => console.error('Erro na requisição:', error));
});

 

