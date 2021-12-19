$("ul.menuPrincipal li a").click(function(e){
    var refActual = $(this).attr("href");
    var inicio= $("section").attr("id");
    $("a.active").removeClass("active");
    $(this).addClass("active");
    $("section.mostrar").removeClass("mostrar");
    $(refActual).addClass("mostrar");
});
$(document).ready(function(){
    $(".hamb").click(function(e){
        e.preventDefault();
        remover();
    });
    $("header a").click(function(e){
        remover();
        var click = $(this).attr("href");
        $("html, body").animate({
            "scrollTop": $(click).offset().top - 100
        });
    });
})

function remover(){
    $("header").toggleClass("menuVisible");
    $("header").toggleClass("visibleMovil");
    $(".hamb i").toggleClass("fa-times");
    $("header").toggleClass("transicion");
}
