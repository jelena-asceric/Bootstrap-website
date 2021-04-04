$(document).ready(function(){
    // funkcija za slajd show za izreke
    slideShowCitati();

    //animacija za skrolovanje klikom na link u navigacionom meniju
    $('.navmenu-link').on('click', function(e){
        e.preventDefault();

        let dataDiv = $(this).data('div');
        $('html, body').animate({
            scrollTop: $(dataDiv).offset().top
        }, 2000);
    })

    // skrolovanje - back to top
    // prikaz / uklanjanje strelice
    $(window).scroll(function(){
   
		let skrolovano = $(this).scrollTop();

		if(skrolovano > 300){
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
    });
    
    //klik na strelicu
    $('#back-to-top').click(function(){
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });


    // galerija slika - colorbox plugin
    $(".image-popup").colorbox({rel:'image-popup'});
});

function slideShowCitati(){
    var trenutni = $('#citati-tekst .aktivan');

    var sledeci = trenutni.next().length ? trenutni.next() :
    trenutni.parent().children(':first');

    trenutni.removeClass('aktivan');
    sledeci.addClass('aktivan');

    setTimeout(slideShowCitati, 3500);
}