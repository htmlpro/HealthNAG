

$('.benefits-slider .slide-wrapper').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.reviews-slider .slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.5,
    autoplay: true,
  autoplaySpeed: 2000,

    adaptiveHeight: true
  });
  $(document).ready(function(){
    $('.faq .plus1').click(function(){
        $(this).siblings('p').slideToggle();
        $(this).parent().toggleClass('minus');
    });
     var maxHeight = -1;
$('.ingredients .col-6').each(function() {
    $(this).children(".ingredient0").each(function(){ 
       maxHeight = maxHeight > $('.ingredient0').height() ? maxHeight : $('.ingredient0').height();
    }).height(maxHeight);
    maxHeight = -1;
}); 
});



$(document).on('change','.ProductForm__Variants input[type="radio"]',function(){
	var getThis = $(this).val();
  	$('.no-js.ProductForm__Option select option').removeAttr('selected');
      $('.no-js.ProductForm__Option select option[value="'+getThis+'"]').attr({'selected':'selected'});
	console.log('this is selected: '+getThis)
});
 $(document).ready(function () {
            $(function () {
                $('a[href*=\\#]:not([href=\\#])').on('click', function () {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
                  
                  if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top - 136}, 1000);
                        return false;
                    }
              
            })
            });
 });

   
function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

