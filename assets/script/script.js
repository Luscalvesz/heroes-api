const access_token = '3713047672155764';
// const url = 'https://superheroapi.com/api.php/'+access_token+'/search/';
const url = 'https://superheroapi.com/api/3713047672155764/2';
const favFalse = '../assets/images/white_star.png';
const favTrue = '../assets/images/red_star.png';



async function searchHero(){
  let nameHero = document.getElementById('name').value
  let resp = document.getElementById('resp')
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/vnd.vtex.ds.v10+json' }
  };
  resp.innerHTML = ""
  fetch(`https://codeby-cors.integrationby.com.br/https://superheroapi.com/api/3713047672155764/search/${nameHero}`, options)
  // fetch(`https://codeby-cors.integrationby.com.br/https://superheroapi.com/api/3713047672155764/${number}`, options)
    .then(response => response.text())
    .then(result => {
      let data = JSON.parse(result)
      data.results.forEach(element => {
        console.log(element);
        console.log(element.name);
        
        resp.innerHTML += `
        <div class="hero">
          <img class="hero-img" src="${element.image.url}">
          <p class="hero-name">${element.name}</p>
          <div class="hero-stats">
            <h3 class="hero-stats-title">Stats</h3>
            <div class="hero-stats-box">
              <p class="hero-stats-box-value">Combat: ${element.powerstats.combat}</p>
              <p class="hero-stats-box-value">Durability: ${element.powerstats.durability}</p>
            </div>
            <div class="hero-stats-box">
              <p class="hero-stats-box-value">Intelligence: ${element.powerstats.intelligence}</p>
              <p class="hero-stats-box-value">Power: ${element.powerstats.power}</p>
            </div>
            <div class="hero-stats-box">
              <p class="hero-stats-box-value">Speed: ${element.powerstats.speed}</p>
              <p class="hero-stats-box-value">Strength: ${element.powerstats.strength}</p>
            </div>
          
          </div>
        </div>
        
        `



        // <p class="hero-stats-value">Combat: ${element.powerstats.combat}</p>
        //     <p class="hero-stats-value">Durability: ${element.powerstats.durability}</p>
        //     <p class="hero-stats-value">Intelligence: ${element.powerstats.intelligence}</p>
        //     <p class="hero-stats-value">Power: ${element.powerstats.power}</p>
        //     <p class="hero-stats-value">Speed: ${element.powerstats.speed}</p>
        //     <p class="hero-stats-value">Strength: ${element.powerstats.strength}</p>

      });
      

    })
    .catch(err => console.error(err));


}

