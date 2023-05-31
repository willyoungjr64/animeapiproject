const quoteHTML1 = document.getElementById("quote1");
const quoteHTML2 = document.getElementById("quote2");
const animeImg = document.getElementById("anime-img");
const animeURL = document.getElementById("anime-url");
const animeTitle = document.getElementById("anime-title");
const animeScore = document.getElementById("anime-score");
const animeButton = document.getElementById("anime-button");
const animeFinishedAiring = document.getElementById("finished-airing");
const animeSynopsis = document.getElementById("synopsis");
const animeAirDate= document.getElementById("airDate");


//console.log(animeURL.innerHTML);
async function fetchQuote() {

  let score;
  let title;
  let imgUrl;
  let url;
  let finishedAiring;
  let synopsis;
  let airDate;
  const res = await fetch("https://api.jikan.moe/v4/random/anime");
  //   const res2 = await fetch("https://api.kanye.rest");

  const json = await res.json();
  //   console.log(randomAnime);
  title = json.data.title;
  //console.log(json.data.images.jpg.image_url);
  score = json.data.score;

  imgUrl = json.data.images.jpg.image_url;
  url = json.data.url;
  finishedAiring = json.data.status;
  synopsis = json.data.synopsis;
  airDate = json.data.aired.prop.from.day + "/" + json.data.aired.prop.from.month + "/" + json.data.aired.prop.from.year;
  //console.log(airDate);


  if (score > 7) {
    animeScore.innerHTML = `Score: ${score} maybe watch it 👍`;
    animeFinishedAiring.innerHTML = finishedAiring;
    animeSynopsis.innerHTML = synopsis;
    animeAirDate.innerHTML = `Air Date: ${airDate}`;

  } else {
    animeScore.innerHTML = `This anime has less than a 7 on MyAnimeList (${score}). 👎 Do not watch.`;
    animeFinishedAiring.innerHTML = finishedAiring;
    animeSynopsis.innerHTML = synopsis;
    animeAirDate.innerHTML = `Air Date: ${airDate}`;
  }
  animeImg.src = imgUrl;
  animeTitle.innerHTML = title;

  animeURL.innerHTML = `<a href="${url}">${title}</a>`;



  
  
  //   const json2 = await res2.json();

  //   quoteHTML1.innerHTML = `This is an inspirational quote: <br>
  //                         ${json.quote}`;

  //   quoteHTML2.innerHTML = `This is an inspirational quote: <br>
  //                         ${json2.quote}`;
}
// console.log(quoteHTML);
// quoteHTML.innerHTML = logJSONData();
// logJSONData();

// async function init() {
//   await fetchQuote();
// }

// console.log(fetchQuote());
