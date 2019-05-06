$('head').append(
'<style type="text/css">body {display:none;}'
);
$(window).load(function() {
$('body').delay(300).fadeIn("slow");
});

$(document).ready(function() {
		$('#index').hover(function() {
        	$('body').css('background', '#ffffff');
        	$('#bio').css('background', '#ffffff');
			$('a').css('color', '#000000');
			$('p').css('color', '#000000');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
		$('#biocontact').hover(function() {
        	//$('body').css('background', '#ff6248');
			//$('a').css('color', '#ffffff');
			//$('p').css('color', '#ffffff');
    	}, function() {
        	//$('body').css('background', '');
			//$('a').css('color', '');
			//$('p').css('color', '');
    	});
		
		$('#sunfrapol').hover(function() {
        	//$('body').css('background', '#EF815E');
			$('body').css('background', '#FF6248');
			$('#bio').css('background', '#FF6248');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.sunfrapol').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
			$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.sunfrapol').css('display', 'none');
    	});
		
		$('#dearlondon').hover(function() {
        	$('body').css('background', '#0c61b5');
        	$('#bio').css('background', '#0c61b5');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.dearLondon').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.dearLondon').css('display', 'none');
    	});
		
    	$('#liminallight').hover(function() {
        	$('body').css('background', '#d2e1de');
        	$('#bio').css('background', '#d2e1de');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.liminallight').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.liminallight').css('display', 'none');
    	});
		
		$('#spin').hover(function() {
        	$('body').css('background', '#ffd641');
        	$('#bio').css('background', '#ffd641');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.spin').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.spin').css('display', 'none');
    	});
		
		$('#energygiftmini').hover(function() {
        	$('body').css('background', '#00c8b5');
        	$('#bio').css('background', '#00c8b5');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.energygiftmini').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.energygiftmini').css('display', 'none');
    	});
			
		$('#unsettled').hover(function() {
        	$('body').css('background', '#e3494d');
        	$('#bio').css('background', '#e3494d');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.unsettled').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.unsettled').css('display', 'none');
    	});
			
		$('#madeintenryu').hover(function() {
        	$('body').css('background', '#6062bd');
        	$('#bio').css('background', '#6062bd');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.madeintenryu').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.madeintenryu').css('display', 'none');
    	});	
		
		$('#ambientcamera').hover(function() {
        	$('body').css('background', '#ed2833');
        	$('#bio').css('background', '#ed2833');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.ambientcamera').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.ambientcamera').css('display', 'none');
    	});	
			
		$('#lines').hover(function() {
        	$('body').css('background', '#f46998');
        	$('#bio').css('background', '#f46998');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
			$('.lines').css('display', 'inline');
    	}, function() {
        	$('body').css('background', '');
        	$('#bio').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
			$('.lines').css('display', 'none');
    	});	
		
});

/* to enable hover in touch input device */
$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});


/* anchor scrolling function */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});