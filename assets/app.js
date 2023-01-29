// $('body').css("background-image", "url(asseets/img/"+Kebab.Background+")");
$('.main').css("border-color", Kebab.TemplateColorHex);
$('.main').css("-webkit-box-shadow", "0 0 10px"+Kebab.TemplateColorHex+")");
document.getElementById("main").style.boxShadow = "0px 0px 70px"+Kebab.TemplateColorHex;



$(".background").css('background',Kebab.TemplateColorHex);
$("img").attr("src","assets/img/"+Kebab.pfp);
// $("sum_light_jazz").attr("src","asseets/img/"+Kebab.Music);
// UM-Lang Settings //

$("h1.name").html(Kebab.name);
$("p.description").html(Kebab.phrase);

console.log("test")
