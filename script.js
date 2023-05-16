const quoteHTML1 = document.getElementById("quote1");
const quoteHTML2 = document.getElementById("quote2");
const animeImg = document.getElementById("anime-img");

async function fetchQuote() {
  const res = await fetch("https://api.jikan.moe/v4/random/anime");
  //   const res2 = await fetch("https://api.kanye.rest");

  const json = await res.json();
  //   console.log(randomAnime);
  console.log(json.data.title);
  console.log(json.data.images.jpg.image_url);

  animeImg.src = json.data.images.jpg.image_url;
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
