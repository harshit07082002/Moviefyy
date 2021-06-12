import { elements } from './assets';

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
export const printData = (data) => {
  if (data.id !== '' && data.title !== '' && data.rating !== '') {
    let point = 0;
    if (data.cast.length > 0) {
      point++;
    }
    if (data.length !== '') point++;
    if (data.year != '') point++;
    if (data.plot !== '') point++;
    if (data.poster !== '') point++;
    if (data.rating_votes !== '') point++;
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
            <img src="${data.poster}"  height="600px" alt="">
        </div>
        <div class="writing">
            <div class="heading">
              
          <img src="img/${
            isLiked(data.id) ? 'filled-heart' : 'outline-heart'
          }.png" alt="heart" height="40px" class="like">
            
            <h1>${data.title}</h1>
        </div>
        <div class="container">
            <div class="card">
              <p>${data.year}</p>  
              <p>${data.length}</p>
            </div>
            <div class="card">
              <p id="imb">IMDB RATING</p>
              <div class="rating">
                  <img src="img/star.png" height="40px" alt="star">  
              <p>${data.rating}/10</p>
            </div>
            </div>
            <div class="card">
              <p>VOTES</p>  
              <p>${data.rating_votes}</p>
            </div>
        </div>
        <div class="desc">
            <p>${data.plot}</p>
        </div>
        
        <div class="trailer">
            <a href="${
              data.trailer.link === '' ? '#' : data.trailer.link
            }" target="__parent"> <p>Watch Trailer</p> <img src="img/outline_play_arrow_white_24dp.png" alt="play"></a>
        </div>
        </div>
    </div> 
    <div class="comp">
     <h2>Top Cast</h2> 
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
  for (let i = 0; i < data.cast.length; i += 2) {
    let temp = `
        <div class="cont">
        <p class="dark1">${data.cast[i].character}</p>
        <p>~ ${data.cast[i].actor}</p>
      </div> `;
    res += temp;
  }
  return res;
};
const rightCast = (data) => {
  let res = ``;
  for (let i = 1; i < data.cast.length; i += 2) {
    let temp = `
        <div class="cont">
        <p class="dark1">${data.cast[i].character}</p>
        <p>~ ${data.cast[i].actor}</p>
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
      name: data.title,
      img: data.poster,
      rating: data.rating,
      id: data.id,
    };
    var a = JSON.parse(localStorage.getItem('array'));
    a.push(obj);
    console.log(a);
    localStorage.setItem('array', JSON.stringify(a));

    // change img

    target.src = `img/filled-heart.png`;
  }
};
