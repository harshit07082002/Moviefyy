import {elements} from './views/assets';
import * as LikeView from './views/LikeView';
import Like from './modals/like';
import { clearPrevData } from './views/searchView';

if(localStorage.getItem("array")===null){

        const like=new Like();}

        window.addEventListener('load',()=>{
    const data=JSON.parse(localStorage.getItem("array"));
    if(data)
    {   deleteData();
        if(data.length==0)
        {
            printError();
        }
        else{
            printData(data);
        }
    }
});

elements.likeMovies.addEventListener('click',(e)=>{

    if(e.target.matches(".cancel *"))
    {    const data=JSON.parse(localStorage.getItem("array"));
        const id=e.target.id;
        console.log(id);
        let data2=[];
        for(let i=0;i<data.length;i++)
        {
            if(data[i].id==id)
            {
            }
            else data2.push(data[i]);
        }
        console.log(data2);
        localStorage.setItem("array",JSON.stringify(data2));
        deleteData();
        if(data2.length>0)
       printData(data2);
       else 
       printError();
    }
});

elements.likeMovies.addEventListener('click',(e)=>{
if(e.target.matches(".btn *"))
{  if(confirm("Do you Really want to clear the Liked List?")){ 
    let ar=[];
   
    localStorage.setItem("array",JSON.stringify(ar));
    deleteData()
    printError();}
}
});

elements.likeMovies.addEventListener('click',(e)=>{
    if(e.target.matches(".card *")&& !e.target.matches(".cancel *"))
    {
        const id= e.target.id;
        const data=JSON.parse(localStorage.getItem("array"));
        let name;
        data.forEach(element => {
            if(element.id == id)
            {
                name=element.name;
            }
        });
        localStorage.setItem("like-redirect",name);
        location.href="/search.html";
    }
});

const doSomething=()=>{
    const val=LikeView.data();
    if(val!="")
    {
       localStorage.setItem("like-search-data",val);
       window.location.href = "/search.html";
    }
}


// Click Listeners

elements.search.addEventListener('click',()=>{
    doSomething();
})
document.addEventListener('keypress',function(e){
    if(e.keyCode===13)
    {
    doSomething();
    }
});

const deleteData=()=>{
    elements.like.innerHTML="";
    elements.likeMovies.innerHTML="";
}

const printError=()=>{
const string=`
 <div class="one">
<div class="img">  
<img src="img/nothing-found.png" alt="" height="300vw"></div>
  <div class="eror1">
  <h2 >OOPS.. </h2>
  <h2 >NO Liked Movies Found :(</h2>
</div>
</div> 
`;
elements.like.insertAdjacentHTML('afterbegin',string);
}

const printData=(data)=>{
    const string=`
    <h1>  Liked Movies</h1> 
    <div class="btn">
    <button class="clear-all">
    Clear All
    </button>
    </div>
        <div class="container">
          <div class="left-main">
           
          ${cardsLeft(data)}
          
       </div>
       <div class="right-main">
           ${cardRight(data)}
       </div>
       </div> 
   `;
   elements.likeMovies.insertAdjacentHTML('afterbegin',string);
}
const cardsLeft=(data)=>{
   let res=``;
    for(var i=0;i<data.length;i+=2){
    let string=`
   <div class="card" id="${data[i].id}">
   <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${data[i].img}" height="200px" id="${data[i].id}" alt="Movie Image">
   <div class="heading" id="${data[i].id}">
       <h2 id="${data[i].id}">${checkTitle(data[i].name)}</h2>
       <div class="rating" id="${data[i].id}">
           <img src="./img/star.png" height="30px" id="${data[i].id}" alt="star">
           <p id="${data[i].id}">${data[i].rating}/10</p>
       </div>
       <button class="cancel" id="${data[i].id}">
           <img src="./img/cancel.png" alt="remove" id="${data[i].id}" height="30px">
       </button>
   </div>
</div>
   `; 
   res+=string;
}
return res;
}
const cardRight=(data)=>{
   let res=``;
    for(var i=1;i<data.length;i+=2){
    let string=`
    <div class="card" id="${data[i].id}">
    <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${data[i].img}" height="200px" id="${data[i].id}" alt="Movie Image">
    <div class="heading" id="${data[i].id}">
        <h2 id="${data[i].id}">${checkTitle(data[i].name)}</h2>
        <div class="rating" id="${data[i].id}">
            <img src="./img/star.png" height="30px" id="${data[i].id}" alt="star">
            <p id="${data[i].id}">${data[i].rating}/10</p>
        </div>
        <button class="cancel" id="${data[i].id}">
            <img src="./img/cancel.png" alt="remove" id="${data[i].id}" height="30px">
        </button>
    </div>
 </div>
   `; 
   res+=string;
}
return res;
}


const checkTitle=(title,limit=11)=>{
    
    if(title.length>limit){
    const ar=title.split(' ');
    let a=0;
    const newAr=[];
    for(var i=0;i<ar.length;i++)
    {
        a+=ar[i].length;
        if(a<=limit)
        {
            newAr.push(ar[i]);
        }
        else break;
    }
    return `${newAr.join(' ')} ...`;
    }
    return title;
}