import Like from "./modals/like";
import Search from "./modals/Search";
import { elements } from "./views/assets";
import * as searchView from "./views/searchView";
// import Like from "./modals/like";
// import * as search1 from './modals/Search';

const event = {};
if(localStorage.getItem("array")===null){
    event.like=new Like();}


const ExtractData = async (query) => {
  
// Clear the Search

searchView.clearSearch();

// Clear previous data

searchView.clearPrevData();
  
// Create object of Search

event.search = new Search(query);

// Create Loader

 searchView.addLoader();

// Do async call

  await event.search.getOutput();

  // Delete Loader

  searchView.deleteLoader();

  // Print data

  console.log(event.search.result);

    searchView.printData(event.search.result);
};

elements.main.addEventListener('click',(e)=>{
    
    if(e.target.matches(".like"))
    {   
        searchView.updateChanges(event.search.result[0],e.target);

    }
})

window.addEventListener("load", () => {
  let a = localStorage.getItem("element");
  if(a){
  if (a !== "") {
    localStorage.removeItem("element");
    ExtractData(a);
  }
}
else if(localStorage.getItem("photo1"))
{
    let b=localStorage.getItem("photo1");
    localStorage.removeItem("photo1");
    ExtractData(b);
}
else if(localStorage.getItem("photo2"))
{
    let b=localStorage.getItem("photo2");
    localStorage.removeItem("photo2");
    ExtractData(b);
}
else if(localStorage.getItem("photo3"))
{
    let b=localStorage.getItem("photo3");
    localStorage.removeItem("photo3");
    ExtractData(b);
}
else if(localStorage.getItem("photo4"))
{
    let b=localStorage.getItem("photo4");
    localStorage.removeItem("photo4");
    ExtractData(b);
}
else if(localStorage.getItem("photo5"))
{
    let b=localStorage.getItem("photo5");
    localStorage.removeItem("photo5");
    ExtractData(b);
}
else if(localStorage.getItem("photo6"))
{
    let b=localStorage.getItem("photo6");
    localStorage.removeItem("photo6");
    ExtractData(b);
}
else if(localStorage.getItem("photo7"))
{
    let b=localStorage.getItem("photo7");
    localStorage.removeItem("photo7");
    ExtractData(b);
}
else if(localStorage.getItem("photo8"))
{
    let b=localStorage.getItem("photo8");
    localStorage.removeItem("photo8");
    ExtractData(b);
}
else if(localStorage.getItem("photo9"))
{
    let b=localStorage.getItem("photo9");
    localStorage.removeItem("photo9");
    ExtractData(b);
}
else if(localStorage.getItem("photo10"))
{
    let b=localStorage.getItem("photo10");
    localStorage.removeItem("photo10");
    ExtractData(b);
}
else if(localStorage.getItem("photo11"))
{
    let b=localStorage.getItem("photo11");
    localStorage.removeItem("photo11");
    ExtractData(b);
}
else if(localStorage.getItem("photo12"))
{
    let b=localStorage.getItem("photo12");
    localStorage.removeItem("photo12");
    ExtractData(b);
}
else if(localStorage.getItem("photo13"))
{
    let b=localStorage.getItem("photo13");
    localStorage.removeItem("photo13");
    ExtractData(b);
}
else if(localStorage.getItem("photo14"))
{
    let b=localStorage.getItem("photo14");
    localStorage.removeItem("photo14");
    ExtractData(b);
}
else if(localStorage.getItem("photo15"))
{
    let b=localStorage.getItem("photo15");
    localStorage.removeItem("photo15");
    ExtractData(b);
}
else if(localStorage.getItem("like-redirect"))
{
    let b=localStorage.getItem("like-redirect");
    localStorage.removeItem("like-redirect");
    ExtractData(b);
}
else if(localStorage.getItem("like-search-data"))
{
    let b=localStorage.getItem("like-search-data");
    localStorage.removeItem("like-search-data");
    ExtractData(b);
}
});

const doSomething=()=>{
    const query=searchView.data1();
    ExtractData(query);
}
elements.search1.addEventListener("click", () => {
  doSomething();
});
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    doSomething();
  }
});
