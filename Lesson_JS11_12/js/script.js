$(function() {
//Carousel
    var settings = {
        delay: 6000,                         // delay autoScroll
        // easing: "easeInOutBounce",
        widthLeftArrow: "20px",
        colorLeftArrow: "lightgreen"
    }
    $('.carousel').carousel(settings);
//Template
    var tmp = $('#profile').html();
    var data = {
        name: "Ульянов Владимир Ильич",
        photo: "./img/lenin.jpg",
        work: "Вождь пролетариата. Самозванец",
        meta: ["Не хочу выступать с броневика", "Не хочу носить бревна на субботниках", "Хочу чтобы меня вынесли из мавзолея"],
        phone: "+13 666",
        social: "http://vk.com/vladimir_ilich_lenin",
        ican: "Если нужно, могу устроить революцию"
    };
    var content = tmpl(tmp, data);
    $('body').append(content);
});
