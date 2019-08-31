$(document).ready(function () {

    // Scroll
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                1000,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Modal callBack
    var modalOpen = $('.js-modal-open');
    var modalClose = $('.modal-callback__close');
    var modalCallback = $('.modal-callback__box');
    var sendMessage = $('.js-send');
    var phoneMask = $('.phone-mask');

    phoneMask.mask("+7 (999) 99-99-999");


    modalOpen.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
        modalCallback.addClass('modal-callback__box--active');
    });

    modalClose.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
    });

    modalCallback.on('click', function (e) {
        if (e.target.className === 'modal-callback__box modal-callback__box--active') {
            modalCallback.removeClass('modal-callback__box--active');
        }
        
    });

    // Modal thanks

    var modalThanks = $('.modal-thanks__box');
    var modalthanksOpen = $('.js-thanks-open')
    var modalthanksClose = $('.modal-thanks__close');

    modalthanksOpen.on('click', function () {
        modalThanks.removeClass('modal-thanks__box--active');
        modalThanks.addClass('modal-thanks__box--active');
    });


    sendMessage.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
        modalThanks.removeClass('modal-thanks__box--active');
        modalThanks.addClass('modal-thanks__box--active');

    });

    modalthanksClose.on('click', function () {
        modalThanks.removeClass('modal-thanks__box--active');
    });

    modalThanks.on('click', function () {
        modalThanks.removeClass('modal-thanks__box--active');
    });

    // Modal security

    var modalSecuritu = $('.modal-security__box');
    var modalSecurituOpen = $('.js-security-open');
    var modalSecurituClose = $('.modal-security__close');

    modalSecurituOpen.on('click', function () {
        modalSecuritu.removeClass('modal-security__box--active');
        modalSecuritu.addClass('modal-security__box--active');
    });

    modalSecurituClose.on('click', function () {
        modalSecuritu.removeClass('modal-security__box--active');
    });

    modalSecuritu.on('click', function () {
        modalSecuritu.removeClass('modal-security__box--active');
    });

    // Slider review

    var review = {
        obj: {},
        el: '.review__sl',
        options: {
            horizontal: 1,
            itemNav: 'basic',
            activateOn: 'click',
            activateMiddle: 1,
            elasticBounds: 1,
            touchDragging: 1,
            startAt: 0,
            mouseDragging: 1,
            cycleBy: 1,
            cycleInterval: 1000,
            speed: 500,
            pauseOnHover: true,
            startPaused: true,
            scrollBar: $('.scrollbar'),
            dragHandle: true,
            clickBar: true,
            smart: 1,
        },
    };

    review.obj = new Sly($(review.el), review.options);
    review.obj.init();

    // Slider action

    $('.action__sl').slick({
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 1024,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: "unslick"
            },
            {
                breakpoint: 400,
                settings: {
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '35px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    // Timer
    jQuery(".action__timer").eTimer({
        etDate: "25.04.2019.0.0",
        etSep: ":",
        etFontFamily: "Lato",
        etTextColor: "#988673;",
        etNumberFontFamily: "Lato",
        etNumberSize: 53,
        etNumberColor: "#988673;",
    });

    // Security scroll
    $(".modal-security__text").mCustomScrollbar({
        axis: "y",
    });


});

// Map

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("js-map", {
        center: [55.757977, 37.637184],
        zoom: 15,
        controls: []
    }, {
            searchControlProvider: 'yandex#search'
        }),
        HintLayout = ymaps.templateLayoutFactory.createClass("<div class='my-hint'>" +
            "<div class='my-hint__addrexs'>" +
            '<i class="icon-002-facebook-placeholder-for-locate-places-on-maps"></i>' +
            '<span> {{ properties.address }}</span>' +
            '</div>' +
            '<div class="my-hint__phone">' +
            '<a href="#"><i class="icon-001-telephone"></i>{{ properties.phone }}</a>' +
            '</div>' +
            '</div>', {
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );

        myMap.behaviors.disable(['drag', 'scrollZoom']);

    var myPlacemark = new ymaps.Placemark([55.757977, 37.627184], {}, {
        hintContent: 'Хинт метки',
        iconLayout: 'default#image',
        iconImageHref: '../img/placeholder.png',
        iconImageSize: [19, 25],
        iconImageOffset: [0, 0],
        address: "ул. Первая, 20, офис 303",
        phone: "+7 (987) 654 32 10"
    }, {
            hintLayout: HintLayout
        });

    myMap.geoObjects.add(myPlacemark);
}