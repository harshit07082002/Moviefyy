import { elements } from './assets';

const genre = {
  28 : "Action",
  12 : "Adventure",
  16 : "Animation",
  35 : "Comedy",
  80 : "Crime",
  99 : "Documentry",
  18 : "Drama",
  10751 : "Family",
  14 : "Fantasy",
  36 : "History",
  27 : "Horror",
  10402 : "Music",
  9648 : "Mystery",
  10749 : "Romance",
  878 : "Science Fiction",
  10770 : "TV Movie",
  53 : "Thriller",
  10752 : "War",
  37 : "Western"
};

export const data = () => {
  return elements.searchText.value;
};
export const data1 = () => {
  return elements.searchText1.value;
};
export const clearSearch = () => {
  elements.searchText1.value = '';
};
export const addLoader = () => {
  const string = ` <div class="loader">
    <img src="./img/loop.png" alt="loading">
</div> `;

  elements.loader.insertAdjacentHTML('afterbegin', string);
};
export const deleteLoader = () => {
  elements.loader.innerHTML = '';
};
export const printData = (res) => {
  if (res.length === 0)
    {
      printError();
      return;
    }
  const data = res[0];  
  console.log(data);
  if (data.imdb_id !== '' && data.original_title !== '' && data.vote_average) {
    let point = 0;
    if (data.length !== '') point++;
    if (data.release_date != '') point++;
    if (data.overview !== '') point++;
    if (data.poster_path !== '') point++;
    if (data.vote_count !== '') point++;
    if (point > 2) printing(data);
    else {
      printError();
    }
  } else {
    printError();
  }
};

export const clearPrevData = () => {
  elements.addError.innerHTML = '';
  elements.main.innerHTML = '';
};

const printError = () => {
  const string = ` <div class="one">
    <div class="img">  
    <img src="img/11104.jpg" alt="" height="300vw"></div>
      <div class="eror1">
      <h1 >OOPS.. </h1>
      <h1 >NO RESULT FOUND :(</h1>
  </div>
  </div> `;
  elements.addError.insertAdjacentHTML('afterbegin', string);
};

const isLiked = (id) => {
  // if(localStorage.getItem("array"));
  const data = JSON.parse(localStorage.getItem('array'));
  if (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        return true;
      }
    }
  }
  return false;
};

const printing = (data) => {
  const string = `
    <div class="mainContent">
        <div class="image">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}"  height="600px" alt="">
        </div>
        <div class="writing">
            <div class="heading">
              
          <img src="img/${
            isLiked(data.id) ? 'filled-heart' : 'outline-heart'
          }.png" alt="heart" height="40px" class="like">
            
            <h1>${data.original_title}</h1>
        </div>
        <div class="container">
            <div class="card">
              <p>${data.release_date}</p>  
              <p>${data.length ? data.length : 120} min</p>
            </div>
            <div class="card">
              <p id="imb">IMDB RATING</p>
              <div class="rating">
                  <img src="img/star.png" height="40px" alt="star">  
              <p>${data.vote_average}/10</p>
            </div>
            </div>
            <div class="card">
              <p>VOTES</p>  
              <p>${data.vote_count}</p>
            </div>
        </div>
        <div class="desc">
            <p>${data.overview}</p>
        </div>
        </div>
    </div> 
    <div class="comp">
     <h2>Movie Genres</h2> 
    <div class="cast">
    <div class="left-cast">
     ${leftCast(data)}        
    </div>
      <div class="right-cast">
        ${rightCast(data)}
    </div>
</div>
 </div>
    `;
  elements.main.insertAdjacentHTML('afterbegin', string);
};

const leftCast = (data) => {
  let res = ``;
  for (let i = 0; i < data.genre_ids.length; i += 2) {
    let temp = `
        <div class="cont">
        <p class="dark1">${genre[data.genre_ids[i]]}</p>
      </div> `;
    res += temp;
  }
  return res;
};
const rightCast = (data) => {
  let res = ``;
  for (let i = 1; i < data.genre_ids.length; i += 2) {
    let temp = `
        <div class="cont">
        <p class="dark1">${genre[data.genre_ids[i]]}</p>
      </div> `;
    res += temp;
  }
  return res;
};
export const updateChanges = (data, target) => {
  if (isLiked(data.id)) {
    // remove element from array

    const a = JSON.parse(localStorage.getItem('array'));

    for (var i = 0; i < a.length; i++) {
      if (a[i].id == data.id) {
        a.splice(i, 1);
      }
    }
    localStorage.setItem('array', JSON.stringify(a));

    // change img

    target.src = `img/outline-heart.png`;
  } else {
    // remove element from array
    // console.log(JSON.parse(localStorage.getItem("array")));
    const obj = {
      name: data.original_title,
      img: data.poster_path,
      rating: data.vote_average,
      id: data.id,
    };
    var a = JSON.parse(localStorage.getItem('array'));
    if(a) {
    a.push(obj);
    console.log(a);
    localStorage.setItem('array', JSON.stringify(a));
    }
    else{
      var ar =[];
      ar.push(obj);
      localStorage.setItem('array', JSON.stringify(ar));
    }

    // change img

    target.src = `img/filled-heart.png`;
  }
};
