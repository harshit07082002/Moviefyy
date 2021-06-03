import Search from './modals/Search';
import {elements} from './views/assets';
import * as searchView from './views/searchView';
import Like from './modals/like';
// import {click} from './search1';
if(localStorage.getItem("array")===null){
        const like=new Like();}

const doSomething=()=>{
    const val=searchView.data();
    if(val!="")
    {
       localStorage.setItem("element",val);
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

elements.photo1.addEventListener('click',()=>{
    localStorage.setItem("photo1","the godfather");
    // window.location.href = "/search.html";
});
elements.photo2.addEventListener('click',()=>{
    localStorage.setItem("photo2","the Dark Knight");
    // window.location.href = "/search.html";
});
elements.photo3.addEventListener('click',()=>{
    localStorage.setItem("photo3","Iron Man");
    // window.location.href = "/search.html";
});
elements.photo4.addEventListener('click',()=>{
    localStorage.setItem("photo4","The Shawshank Redemption");
    // window.location.href = "/search.html";
});
elements.photo5.addEventListener('click',()=>{
    localStorage.setItem("photo5","Fight Club");
    // window.location.href = "/search.html";
});
elements.photo6.addEventListener('click',()=>{
    localStorage.setItem("photo6","Titanic");
    // window.location.href = "/search.html";
});
elements.photo7.addEventListener('click',()=>{
    localStorage.setItem("photo7","12 Angry men");
    // window.location.href = "/search.html";
});
elements.photo8.addEventListener('click',()=>{
    localStorage.setItem("photo8","The Matrix");
    // window.location.href = "/search.html";
});
elements.photo9.addEventListener('click',()=>{
    localStorage.setItem("photo9","The Social Network");
    // window.location.href = "/search.html";
});
elements.photo10.addEventListener('click',()=>{
    localStorage.setItem("photo10","Crazy stupid love");
    // window.location.href = "/search.html";
});
elements.photo11.addEventListener('click',()=>{
    localStorage.setItem("photo11","Avengers");
    // window.location.href = "/search.html";
});
elements.photo12.addEventListener('click',()=>{
    localStorage.setItem("photo12","interstellar");
    // window.location.href = "/search.html";
});
elements.photo13.addEventListener('click',()=>{
    localStorage.setItem("photo13","Spiderman");
    // window.location.href = "/search.html";
});
elements.photo14.addEventListener('click',()=>{
    localStorage.setItem("photo1","steve Jobs");
    // window.location.href = "/search.html";
});
elements.photo15.addEventListener('click',()=>{
    localStorage.setItem("photo15","Hulk");
    // window.location.href = "/search.html";
});