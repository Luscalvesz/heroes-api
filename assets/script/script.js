console.log('Thanks to https://superheroapi.com/index.html for making this possible S2');

function steps() {
  let stepsInfo = document.getElementById('stepsInfo')
  let stepsFav = document.getElementById('stepsFav')
  let stepsImg = document.getElementById('stepsImg')
  let stepsFind = document.getElementById('stepsFind')
  let stepsImgTxt = document.getElementById('stepsImgTxt')

  setTimeout(() => {
    stepsFind.classList.add('active')
  }, 1000);
  setTimeout(() => {
    stepsFind.classList.add('bounce')
  }, 2400);
  setTimeout(() => {
    stepsImg.classList.add('active')
    stepsImgTxt.classList.add('active')
  }, 3000);
  setTimeout(() => {
    stepsInfo.classList.add('active')
  }, 5000);
  setTimeout(() => {
    stepsFav.classList.add('active')
  }, 7000);








}








function search() {
  setTimeout(() => {
    let nameHero = document.getElementById('name').value
    let resp = document.getElementById('resp')
    let alert = document.getElementById('alert')
    document.getElementById('stepsFind').style.opacity="0"

    // let batata = document.getElementById('batata')

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
          console.log(data);
          // n = 0


          // var batataArr = document.querySelectorAll('#batata')[n].textContent

          // if (element.id  ) {
            // var arr = []

          data.results.forEach(element => {

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
            <div class="hero-stats-buttons">
              <button class="hero-stats-buttons-btn" onclick="seeMore()">See More</button>
              <button class="hero-stats-buttons-btn squad" value="" onclick="addSquad(${element.id})">Add to Squad</button>
            </div>
          </div>
        </div>
        `
        // <button class="hero-stats-buttons-btn squad" value="${element.id}" onclick="addSquad(event)">Add to Squad</button>
            
            // arr.push(element.id)
            
            // // console.log(arr);
            // arr.forEach(id => {
            //   console.log("id", id);
            //   console.log(element.id);
            //   if (element.id == id) {
            //     console.log('qudhaidsdahsdoasuhdd');
            //   }
            //   // var t = arr[0].includes(sla)
            // })

            // var sla = 577

            // console.log(t);

            // console.log(arr);
            // n++
          });


          // }


        })
        .catch(err => console.error(err));




    }





  }, 2000);


}


var ids = []
function addSquad(id){

  ids.push(id)
  console.log(ids);
  localStorage.setItem('squad', ids)

}
window.onload = steps()