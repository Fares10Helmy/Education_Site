
//typed js pulgn
var typed = new Typed('.element', { 
    // Waits 1000ms after typing "First"
    strings: ['Hallo, my name is ', 'Fares Helmy','START OUR JOURENY'],
    loop:true ,
    typeSpeed:90 ,

});

// haga as7al mra wa7da
$("a").not("a[data-toggle='pill']").click(function(){
    let Href = $(this).attr("href");  //herf bta3 a2 link attos 3aleh
    
    let sectionLocation = $(Href).offset().top;  // makan el section fe 2l app

    $("html,body").animate({scrollTop:sectionLocation},2000);
}) 



//jquery
let aLocationTop = $(".about").offset().top    // makan 2i 7aga fe app



$(window).scroll(function(){     // user 3ml scroll wla l2

  let x = $(window).scrollTop(); // nzl feen bel scroll


    if( x > aLocationTop-70 )
    {
        $("#btn-up").fadeIn(800);
    }
    else
    {
        $("#btn-up").fadeOut(800);
    }

})

//btn up
$("#btn-up").click(function(){
    // $(window).scrollTop(0);  without animate
    $("html,body").animate({scrollTop:0},2000)
})