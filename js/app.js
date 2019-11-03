document.addEventListener('DOMContentLoaded', function () {
    //Charge seulement quand le DOM est entiérement chargé

    //manipule collapse menu de la page Gallery
    let saison = document.querySelector('#saison>a');
    let is_collapsed = document.querySelector('.gallery-collapsed-menu');
    let icon_fleche = document.querySelector('#saison > a > i');
    let section_grid = document.querySelectorAll('.gallery-grid-wrapper');
    let li_collapsed = document.querySelectorAll('.gallery-collapsed-menu>li');
    //gestion des link navbar
    let navbar_link = document.querySelectorAll('.navbar-wrapper-link>li>a');
    let div_link = document.querySelectorAll('.main-bloc');

    saison.addEventListener('click', function (event) {
        is_collapsed.classList.toggle('is-active');
        icon_fleche.classList.toggle('fa-caret-right');
        icon_fleche.classList.toggle('fa-sort-down');
        event.preventDefault();
    }) //fin saison listener

    li_collapsed.forEach(li => {
        li.addEventListener('click', function (event) {
            let target = this.getAttribute('data-target');
            section_grid.forEach(element => {
                if (element.id == target) {
                    element.classList.remove('is-none')
                } else {
                    element.classList.add('is-none')
                }
            });



        });
    }) //fin li_collapsed for each

    navbar_link.forEach(link => {
        link.addEventListener('click', function (event) {
            let target = this.getAttribute('data-target');
            console.log(target);
            
            div_link.forEach(element => {
                if (element.id == target) {
                    element.classList.remove('is-none');
                    event.preventDefault();
                } else {
                    element.classList.add('is-none');
                    event.preventDefault();
                }
            });


        })



    }); //fin navbar_link for each


}); // fin document ready