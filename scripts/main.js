$(document).ready(function(){
	var arrPlansImgMax = ['images/cars/мерседес/минимальный.jpg','images/cars/мерседес/стандарт.jpg',
					'images/cars/мерседес/стандарт+.jpg','images/cars/мерседес/стандарт++.jpg',
					'images/cars/мерседес/стандарт+++.jpg','images/cars/мерседес/целиком.jpg'];

	var arrPartsImgMax = ['images/cars//мерседес/оптика.jpg','images/cars/мерседес/пороги-внутренние.jpg',
					'images/cars/мерседес/пороги-наружние.jpg','images/cars/мерседес/двери.jpg',
					'images/cars/мерседес/задние-крылья.jpg','images/cars/мерседес/капот.jpg', 
					'images/cars/мерседес/передний-бампер.jpg','images/cars/мерседес/задний-бампер.jpg'];

    $(".partial-drp").click(function(){
        $(".partial").toggle(200);
        return false;
    });

$('.car-class a').on('click', function(){
	 $(".car-class span").removeClass('current-class');
	 $(this).next('span').addClass('current-class');
	 return false;
});



	



$('.plans li').on('click', function(event){

 	$('.plans li a').removeClass('current-plan');
 	$(this).children().addClass('current-plan');

$('.modules').css('visibility', 'visible');


 	 	var index = $(this).index();
 	 	$('.plans-container .image-wrapper').empty();
 	 	$('.plans-container .image-wrapper').append('<img src='+arrPlansImgMax[index]+'>');


return false;


});


$('.partial li').on('click', function(event){
$('.modules').css('visibility', 'hidden');


 	 	var index = $(this).index();
 	 	$('.plans-container .image-wrapper').empty();
 	 	$('.plans-container .image-wrapper').append('<img src='+arrPartsImgMax[index]+'>');

		console.log(index)

return false;

});
    
});
