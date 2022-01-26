$( document ).ready(function() {
    
	$( ".btn-click" ).click(function() {
		alert( "Ay WOW! Masunurin! Sana all!" );
	  });
	$( ".btn-hide" ).click(function() {
		$(".target-hide").hide();
	  });
	$( ".btn-show" ).click(function() {
		$(".target-show").show();
	  });
	$( ".btn-toggle" ).click(function() {
		$(".target-toggle").toggle();
	  });
	$( ".btn-slideDown" ).click(function() {
		$(".target-slideDown").slideDown("slow");
	  });
	$( ".btn-slideUp" ).click(function() {
		$(".target-slideUp").slideUp();
	  });
	$( ".btn-slideToggle" ).click(function() {
		$(".target-slideToggle").slideToggle();
	  });
	$( ".btn-fadeIn" ).click(function() {
		$(".target-fadeIn").fadeIn();
	  });
	$( ".btn-fadeOut" ).click(function() {
		$(".target-fadeOut").fadeOut();
	  });
	$( ".btn-addClass" ).click(function() {
		$(".target-addClass").addClass("addClass-output");
	  });
	$( ".btn-before" ).click(function() {
		$(".btn-before").before("<button class='btn'>Added Button</button>");
	  });
	$( ".btn-after" ).click(function() {
		$(".btn-after").after("<button class='btn'>Added Button</button>");
	  });
	$( ".btn-append" ).click(function() {
		$(".target-append").append("<br><p>Appended Text</p>");
	  });
	$( "#check-attr" ).change(function() {
		var $input = $( this );
		$( ".target-attr" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
		  ".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
		  ".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
	  })
	  .change();
	  $( ".btn-val" ).click(function() {
		$("input:text").val("Yesterday I did nothing and today I'm finishing what I did yesterday");
	  });
	$( ".btn-html" ).click(function() {
		$(".target-html").html("<p class='target'>I thought about losing weight once, but I don't like losing</p>");
	  });
	$( ".btn-text" ).click(function() {
		$(".target-text").text("A satisfactory. Hehe.");
	  });
});