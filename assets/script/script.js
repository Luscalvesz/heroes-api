
// async function searchHero() {
//   let nameHero = document.getElementById('name').value
//   let resp = document.getElementById('resp')
//   const options = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json', Accept: 'application/vnd.vtex.ds.v10+json' }
//   };
//   resp.innerHTML = ""
//   fetch(`https://codeby-cors.integrationby.com.br/https://superheroapi.com/api/3713047672155764/search/${nameHero}`, options)
//     // fetch(`https://codeby-cors.integrationby.com.br/https://superheroapi.com/api/3713047672155764/${number}`, options)
//     .then(response => response.text())
//     .then(result => {
//       let data = JSON.parse(result)
//       data.results.forEach(element => {

//         resp.innerHTML += `
//         <div class="hero">
//           <img class="hero-img" src="${element.image.url}">
//           <p class="hero-name">${element.name}</p>
//           <div class="hero-stats">
//             <h3 class="hero-stats-title">Stats</h3>
//             <div class="hero-stats-box">
//               <p class="hero-stats-box-value">Combat: ${element.powerstats.combat}</p>
//               <p class="hero-stats-box-value">Durability: ${element.powerstats.durability}</p>
//             </div>
//             <div class="hero-stats-box">
//               <p class="hero-stats-box-value">Intelligence: ${element.powerstats.intelligence}</p>
//               <p class="hero-stats-box-value">Power: ${element.powerstats.power}</p>
//             </div>
//             <div class="hero-stats-box">
//               <p class="hero-stats-box-value">Speed: ${element.powerstats.speed}</p>
//               <p class="hero-stats-box-value">Strength: ${element.powerstats.strength}</p>
//             </div>
          
//           </div>
//         </div>
        
//         `

//       });


//     })
//     .catch(err => console.error(err));


// }

function search(event) {
  setTimeout(() => {

    let nameHero = document.getElementById('name').value
    let resp = document.getElementById('resp')
    let alert = document.getElementById('alert')

    if (nameHero.length < 3) {
      alert.classList.add('show')
    } else {
      alert.classList.remove('show')

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
            // console.log(element);
            // console.log(element.name);

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
          });


        })
        .catch(err => console.error(err));




    }





  }, 1000);


}
