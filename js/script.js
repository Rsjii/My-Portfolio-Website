$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    
    });


    document.addEventListener("DOMContentLoaded", function() {
        const arrows = document.querySelectorAll(".skills__arrow");
        const skillLists = document.querySelectorAll(".skills__list");
    
        arrows.forEach((arrow, index) => {
            arrow.addEventListener("click", () => {
                skillLists[index].classList.toggle("active");
                arrow.classList.toggle("active");
            });
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const readMoreLinks = document.querySelectorAll('.read__more');
        
        readMoreLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const moreInfo = this.nextElementSibling;
                moreInfo.classList.toggle('show');
                if (moreInfo.classList.contains('show')) {
                    this.textContent = 'Read Less';
                } else {
                    this.textContent = 'Read More';
                }
            });
        });
    });
    
    
