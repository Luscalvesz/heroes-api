const access_token = '3713047672155764';
// const url = 'https://superheroapi.com/api.php/'+access_token+'/search/';
const url = 'https://superheroapi.com/api/3713047672155764/2';
const favFalse = '../assets/images/white_star.png';
const favTrue = '../assets/images/red_star.png';



async function searchHero(){
  let nameHeroe = document.getElementById('name').value
  let resp = document.getElementById('resp')
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/vnd.vtex.ds.v10+json' }
  };
  resp.innerHTML = ""
  fetch(`https://codeby-cors.integrationby.com.br/https://superheroapi.com/api/3713047672155764/search/${nameHeroe}`, options)
  // fetch(`https://codeby-cors.integrationby.com.br/https://superheroapi.com/api/3713047672155764/${number}`, options)
    .then(response => response.text())
    .then(result => {
      let data = JSON.parse(result)
      data.results.forEach(element => {
        console.log(element);
        console.log(element.name);




        // resp.innerHTML += `<p class="item">Name: ${element.name}</p>`
        resp.innerHTML += `
        <div class="heroe">
          <img class="heroe-img" src="${element.image.url}">
          <p class="heroe-name">Name: ${element.name}</p>
          <div class="heroe-stats">
            <h3 class="heroe-stats-title">Stats</h3>
            <p class="heroe-stats-value">Combat: ${element.powerstats.combat}</p>
            <p class="heroe-stats-value">Durability: ${element.powerstats.durability}</p>
            <p class="heroe-stats-value">Intelligence: ${element.powerstats.intelligence}</p>
            <p class="heroe-stats-value">Power: ${element.powerstats.power}</p>
            <p class="heroe-stats-value">Speed: ${element.powerstats.speed}</p>
            <p class="heroe-stats-value">Strength: ${element.powerstats.strength}</p>
          
          </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        `

      });
      

    })
    .catch(err => console.error(err));


}

