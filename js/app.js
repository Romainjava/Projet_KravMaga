let saison = document.querySelector('#saison>a');
let is_collapsed = document.querySelector('.gallery-collapsed-menu');
let icon_fleche = document.querySelector('#saison > a > i')
saison.addEventListener('click', function(event){
    is_collapsed.classList.toggle('is-active')
    icon_fleche.classList.toggle('fa-caret-right')
    icon_fleche.classList.toggle('fa-sort-down')
    event.preventDefault();  
})