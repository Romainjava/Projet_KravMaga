document.addEventListener('DOMContentLoaded', function () {
    //Charge seulement quand le DOM est entiérement chargé

    // ============ Element HTML ============ 
    let saison = document.querySelector('#saison>a');
    let is_collapsed = document.querySelector('.gallery-collapsed-menu');
    let icon_fleche = document.querySelector('#saison > a > i');
    let section_grid = document.querySelectorAll('.gallery-grid-wrapper');
    let li_collapsed = document.querySelectorAll('.gallery-collapsed-menu>li');
    //gestion des link navbar
    let navbar_link = document.querySelectorAll('.navbar-wrapper-link>li>a');
    let div_link = document.querySelectorAll('.main-bloc');
    //gestion du carroussel
    let carroussel = document.querySelector('.carroussel');
    let carroussel_items = document.querySelectorAll('.carroussel-items');
    let sections_evennement = document.querySelectorAll('.evenement-wrapper');
    let link_evennement = document.querySelectorAll('.evenement-wrapper > .box > .content > a');
    let revenir__link = document.querySelectorAll('.redirection__evenement>.redirection__link');


    // ============ Gere l'affichage de la gallery selon les saisons ============ 
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

    // ============ Redirige sur chaque section selon le link de la navbar ============ 
    navbar_link.forEach(link => {
        link.addEventListener('click', function (event) {
            let target = this.getAttribute('data-target');
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

    // ============ Gere les boutons actifs du carroussel et ainsi que l'affichage de la bonne section ============ 
    carroussel_items.forEach(div => {
        div.addEventListener('click', function (event) {
            let carroussel_isactive = document.querySelector('.carroussel-items--isactive');
            //attrape  la class isactive presente
            let target = this.getAttribute('data-target');

            carroussel_isactive.classList.remove('carroussel-items--isactive');
            
            this.classList.add('carroussel-items--isactive');
            //désactive ou active une des trois sections en fonction du target
            sections_evennement.forEach(element => {
                if (element.id == target) {
                    element.classList.remove('fromLeft');
                    element.classList.remove('is-none');
                } else {
                    element.classList.add('is-none');
                }
            }); //fin for each section_evennement



            event.preventDefault();
        })
    }); //fin for each carroussel_items
    // ============ Gere le link "en savoir plus" de la page evennement et son animation ============
    link_evennement.forEach(link => {
        link.addEventListener('click', function (event) {
            let target = this.getAttribute('data-target');
            let active = document.querySelector('.evenement-wrapper:not(is-none)')
            let modal = document.querySelector('#' + target);
            carroussel.classList.add('is-none');
            active.classList.add('goesLeft');
            setTimeout(function () {
                modal.classList.remove('is-none');
                modal.classList.add('fromRight');
                active.classList.remove('goesLeft');
                active.classList.add('is-none');
                
                
            }, 1000);
            event.preventDefault();
        })
    }); //fin for each link_evennement


    revenir__link.forEach(link => {
        link.addEventListener('click', function (event) {
            let target = this.getAttribute('data-target');
            let active = document.querySelector('#redirection__evenement--' + target);
            active.classList.remove('fromRight')
            active.classList.add('goesRight');
            setTimeout(function () {
                carroussel.classList.remove('is-none');
                active.classList.add('is-none');
                active.classList.remove('goesRight');
                let modal = document.querySelector('#section__evenement--' + target);
                modal.classList.add('fromLeft');
                modal.classList.remove('is-none');
            }, 1000);


            event.preventDefault();
        })


    }); //fin for each revenir_link





}); // fin document ready