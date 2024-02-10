$( document ).ready(function() {

	/* esconde a barra de navegação ao carregar a página caso a resolução da mesma seja maior que 768px*/
	if ($(document).width()<=768) {
		$( "#header-desktop" ).hide();
	} else {
        $( "#header-mobile" ).hide();
    }

    /* mostra e esconde a barra de navegação baseado na mudança de resolução da tela */
	$(window).on('resize', function(){
    	var win = $(this);
    	if (win.width() <=768) {
    		$( "#header-desktop" ).hide();
    		$( "#header-mobile" ).show();
    	} else {
    		$( "#header-desktop" ).show();
    		$( "#header-mobile" ).hide();
    	}
	});

    /* esconde a barra de navegação ao carregar a página */
    $( "#navbar-mobile" ).hide();

    /* mostra e esconde a barra de navegação */
	$( "#btn-menu" ).on( "click", function() {
        $( "#navbar-mobile" ).slideToggle( "slow" );
        $(this).toggleClass('fa-bars fa-xmark');
    });
    
});