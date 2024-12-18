document.addEventListener(`DOMContentLoaded`,()=>{
const searchBar = document.querySelector(`.search-bar`);
const searchicon = document.querySelector(`.search-icon`);

function toggleSearch(){
    searchBar.classList.toggle(`active`);
    if(searchBar.classList.contains(`active`)){
        searchBar.focus();
    }
}

searchicon.addEventListener(`click`,(event)=>{
    event.stopPropagation();
    toggleSearch();
})

document.addEventListener(`click`, (event)=>{
    if (!searchBar.contains(event.target)&&! 
    searchicon.contains(event.target)){
        searchBar.classList.remove(`active`);
    }
})
})