$('head').append(
'<style type="text/css">body {display:none;}'
);
$(window).load(function() {
$('body').delay(300).fadeIn("slow");
});

$(document).ready(function() {
		$('#index').hover(function() {
        	$('body').css('background', '#ffffff');
        	$('body').css('background', '#ffffff');
			$('a').css('color', '#000000');
			$('p').css('color', '#000000');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
		$('#biocontact').hover(function() {
        	$('body').css('background', '#ff6248');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
		$('#sunfrapol').hover(function() {
        	//$('body').css('background', '#EF815E');
			$('body').css('background', '#FF6248');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
    	$('#liminallight').hover(function() {
        	$('body').css('background', '#d2e1de');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
		$('#spin').hover(function() {
        	$('body').css('background', '#ffd641');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
		$('#dearlondon').hover(function() {
        	$('body').css('background', '#0c61b5');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
		
		$('#energygiftmini').hover(function() {
        	$('body').css('background', '#00c8b5');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
			
		$('#mossactivist').hover(function() {
        	$('body').css('background', '#8cca10');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
			
		$('#unsettled').hover(function() {
        	$('body').css('background', '#e3494d');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});
			
		$('#madeintenryu').hover(function() {
        	$('body').css('background', '#6062bd');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});	
		
		$('#ambientcamera').hover(function() {
        	$('body').css('background', '#ed2833');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});	
			
		$('#lines').hover(function() {
        	$('body').css('background', '#f46998');
			$('a').css('color', '#ffffff');
			$('p').css('color', '#ffffff');
    	}, function() {
        	$('body').css('background', '');
			$('a').css('color', '');
			$('p').css('color', '');
    	});	
		
});

/* to enable hover in touch input device */
$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});