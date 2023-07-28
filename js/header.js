
const option = document.getElementById('menu_navbar');
const top_menu = document.getElementById('top_menu')
const search = document.getElementById('search')
const top_menu_nav = document.getElementById('top-menu-nav')
const Icon = document.getElementById('icon')
const searchIcon = document.getElementById('search_icon')
const topNavigation = document.getElementById('top-navigation')
const container = document.getElementById('container')
const headerScroll = document.querySelector('header')



window.addEventListener("scroll", ()=>{
    headerScroll.classList.remove('header')
    headerScroll.classList.add('header_scroll')
  });
  


option.addEventListener('click', ()=>{
    if(top_menu.style.visibility == 'hidden'){
        top_menu.style.visibility = 'visible'
    }else{
        top_menu.style.visibility = 'hidden'
    }
    
})



const croi = document.createElement("i")
/* croi.textContent = 'X' */
croi.classList.add("bx","bx-x")

const formSearch = document.createElement('form');
formSearch.className = 'form_search';
const inputSearch = document.createElement('input');
inputSearch.className = 'input_search';
inputSearch.type = 'text'
inputSearch.setAttribute("placeholder", "Rechercher...")

search.addEventListener('click', ()=>{

    Icon.replaceChild(croi, searchIcon) 
    formSearch.appendChild(inputSearch)

container.replaceChild(formSearch, topNavigation)

container.classList.remove('container')
container.classList.add('containerjs')


})

croi.addEventListener('click', ()=>{

    container.replaceChild(topNavigation, formSearch)
    Icon.replaceChild(searchIcon, croi) 
    container.classList.remove('containerjs')
    container.classList.add('container')
})

