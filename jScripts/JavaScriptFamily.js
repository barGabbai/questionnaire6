
$(document).ready(function () {

    $("#containerOfSite").fitVids();


    if ($(window).width() > 720) {
        if ($('#back-to-top').length) {
            var scrollTrigger = 100, //px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });

        }
    }

    else {

        $('#back-to-top').removeClass('show');


    }

    $('#contactInfo').hide();

    //$('#contactContainer2').hide();
    //$('#contactContainer').hide();
    $('footer').show();

    var offsetHelp = $('#introAbout').outerHeight() + 170;
    var offsetKnow = $('#introAbout').outerHeight() + 350;


    $("#img1InnerNav2-3").click(function () {
        if ($(window).height() < 750) {

            $('html, body').animate({
                scrollTop: $("#dykFamily").position().top - offsetHelp
            }, 700);
        }

        else {
            $('html, body').animate({
                scrollTop: $("#dykFamily").position().top - offsetKnow
            }, 700);
        }

        $("#img1InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

        $("#img2InnerNav2-3").css('opacity', '1');
    });

    $("#img2InnerNav2-3").click(function () {
        $('html, body').animate({
            scrollTop: $("#assistanceFamily").position().top - offsetHelp
        }, 700);
        $("#img2InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

        $("#img1InnerNav2-3").css('opacity', '1');
    });

    
    //var topOfdykFamilyyDiv = $("#dykFamily").offset().top - 620;
    //var topOfassistanceFamilyeDiv = $("#assistanceFamily").offset().top - 520;

    //$(window).scroll(function () {
    //    if ($(window).scrollTop() > topOfdykFamilyyDiv) { //scrolled past the other div?
    //        $("#img1InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img2InnerNav2-3").css('opacity', '1');
    //    }

    //    if ($(window).scrollTop() > topOfassistanceFamilyeDiv) { //scrolled past the other div?
    //        $("#img2InnerNav2-3").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img1InnerNav2-3").css('opacity', '1');

    //    }

    //});

    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function () {
        if (window.innerWidth > window.innerHeight) {
            $("#introAbout").css("position", "fixed");
            $(".innerPagesNav").css("position", "fixed");
            $(".bgNav").css("position", "fixed");
        }

        else {
            $("#introAbout").css("position", "absolute");
            $(".innerPagesNav").css("position", "absolute");
            $(".bgNav").css("position", "absolute");

        }
    });
    //var topOfHistoryDiv = $("#historyPage").offset().top;
    //var topOfWhoWeAreDiv = $("#whoAreWePage").offset().top + 390;
    //var topOfNumbersDiv = $("#numbersPage").offset().top + 630;
    //var topOfSayingDiv = $("#sayingPage").offset().top + 1160;
    //var topOfContactDiv = $("#contactPage").offset().top + 1690;

    //$(window).scroll(function () {
    //    if ($(window).scrollTop() > topOfHistoryDiv) { //scrolled past the other div?
    //        $("#img1Nav2").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img2Nav2").css('opacity', '1');
    //        $("#img3Nav2").css('opacity', '1');
    //        $("#img4Nav2").css('opacity', '1');
    //        $("#img5Nav2").css('opacity', '1');
    //    }

    //    if ($(window).scrollTop() > topOfWhoWeAreDiv) { //scrolled past the other div?
    //        $("#img2Nav2").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img1Nav2").css('opacity', '1');
    //        $("#img3Nav2").css('opacity', '1');
    //        $("#img4Nav2").css('opacity', '1');
    //        $("#img5Nav2").css('opacity', '1');
    //    }

    //    if ($(window).scrollTop() > topOfNumbersDiv) { //scrolled past the other div?
    //        $("#img3Nav2").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img1Nav2").css('opacity', '1');
    //        $("#img2Nav2").css('opacity', '1');
    //        $("#img4Nav2").css('opacity', '1');
    //        $("#img5Nav2").css('opacity', '1');
    //    }

    //    if ($(window).scrollTop() > topOfSayingDiv) { //scrolled past the other div?
    //        $("#img4Nav2").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img1Nav2").css('opacity', '1');
    //        $("#img2Nav2").css('opacity', '1');
    //        $("#img3Nav2").css('opacity', '1');
    //        $("#img5Nav2").css('opacity', '1');
    //    }

    //    if ($(window).scrollTop() > topOfContactDiv) { //scrolled past the other div?
    //        $("#img5Nav2").css('opacity', '0'); //reached the desired point -- show div

    //        $("#img1Nav2").css('opacity', '1');
    //        $("#img2Nav2").css('opacity', '1');
    //        $("#img3Nav2").css('opacity', '1');
    //        $("#img4Nav2").css('opacity', '1');
    //    }
    //});

    
    //ftg

    //$('#progressBar').click(function () {

    //    $('.firstNum').animate({ width: '62%' }, 2000);
    //    $('.secondNum').animate({ width: '57%' }, 2000);
    //    $('.thirdNum').animate({ width: '46%' }, 2000);
    //    $('.fourthNum').animate({ width: '41%' }, 2000);
    //});



    //$(window).scroll(function () {
    //    var hT = $('#startAnimation').offset().top,
    //        hH = $('#startAnimation').outerHeight(),
    //        wH = $(window).height(),
    //        wS = $(this).scrollTop();
    //    if (wS > (hT + hH - wH)) {

    //        $('.firstNum').animate({ width: '72%' }, 2000);
    //        $('.secondNum').animate({ width: '67%' }, 2000);
    //        $('.thirdNum').animate({ width: '56%' }, 2000);
    //        $('.fourthNum').animate({ width: '48%' }, 2000);
    //    }

    //});

    $("#aboutUsLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity","0");
        }
    });

    $("#familyLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity", "1");
        }
    });

    $("#friendshipLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity", "1");
        }
    });

    $("#careerLink").click(function () {
        if ($(window).width() < 768) {
            $(".bgNav").css("opacity", "1");
        }
    });

    if ($(window).width() < 768) {
        $("#screenFooter").hide();
        $("#mobileFooter").show();
    }

    else {
        $("#screenFooter").show();
        $("#mobileFooter").hide();
        $("#contactM2").hide();
    }

    //$('#historyBtn').on('click', function () {
    //    if ($('#historyBtn').attr("aria-expanded") == "false") {  

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleHistory').css("font-size", "26pt");
    //            $('#hamNavHistoryImg').width("90px");
    //            $('#hamNavHistoryImg').height("90px");
    //            $('#hamNavHistoryImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "20pt");
    //            $('#hamNavWhoWeAreImg').width("67px");
    //            $('#hamNavWhoWeAreImg').height("67px");
    //            $('#hamNavWhoWeAreImg').css("border-radius", "50%");

    //            $('#hamNavTitleNumbers').css("font-size", "20pt");
    //            $('#hamNavNumbersImg').width("67px");
    //            $('#hamNavNumbersImg').height("67px");
    //            $('#hamNavNumbersImg').css("border-radius", "50%");

    //            $('#hamNavTitleSaying').css("font-size", "20pt");
    //            $('#hamNavSayingImg').width("67px");
    //            $('#hamNavSayingImg').height("67px");
    //            $('#hamNavSayingImg').css("border-radius", "50%");

    //            $('#hamNavTitleContact').css("font-size", "20pt");
    //            $('#hamNavNetworkImg').width("67px");
    //            $('#hamNavNetworkImg').height("67px");
    //            $('#hamNavNetworkImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleHistory').css("font-size", "20pt");
    //            $('#hamNavHistoryImg').width("70px");
    //            $('#hamNavHistoryImg').height("70px");
    //            $('#hamNavHistoryImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "15pt");
    //            $('#hamNavWhoWeAreImg').width("57px");
    //            $('#hamNavWhoWeAreImg').height("57px");

    //            $('#hamNavTitleNumbers').css("font-size", "15pt");
    //            $('#hamNavNumbersImg').width("57px");
    //            $('#hamNavNumbersImg').height("57px");

    //            $('#hamNavTitleSaying').css("font-size", "15pt");
    //            $('#hamNavSayingImg').width("57px");
    //            $('#hamNavSayingImg').height("57px");

    //            $('#hamNavTitleContact').css("font-size", "15pt");
    //            $('#hamNavNetworkImg').width("57px");
    //            $('#hamNavNetworkImg').height("57px");
    //        }


    //    }

    //    else {
            

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleHistory').css("font-size", "20pt");
    //            $('#hamNavHistoryImg').width("67px");
    //            $('#hamNavHistoryImg').height("67px");
    //            $('#hamNavHistoryImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleHistory').css("font-size", "15pt");
    //            $('#hamNavHistoryImg').width("57px");
    //            $('#hamNavHistoryImg').height("57px");
    //            $('#hamNavHistoryImg').css("border-radius", "50%");


    //        }
    //    }

    //});

    //$('#whoWeAreBtn').on('click', function () {
    //    if ($('#whoWeAreBtn').attr("aria-expanded") == "false") {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleWhoWeAre').css("font-size", "26pt");
    //            $('#hamNavWhoWeAreImg').width("90px");
    //            $('#hamNavWhoWeAreImg').height("90px");
    //            $('#hamNavWhoWeAreImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "20pt");
    //            $('#hamNavHistoryImg').width("67px");
    //            $('#hamNavHistoryImg').height("67px");
    //            $('#hamNavHistoryImg').css("border-radius", "50%");

    //            $('#hamNavTitleNumbers').css("font-size", "20pt");
    //            $('#hamNavNumbersImg').width("67px");
    //            $('#hamNavNumbersImg').height("67px");
    //            $('#hamNavNumbersImg').css("border-radius", "50%");

    //            $('#hamNavTitleSaying').css("font-size", "20pt");
    //            $('#hamNavSayingImg').width("67px");
    //            $('#hamNavSayingImg').height("67px");
    //            $('#hamNavSayingImg').css("border-radius", "50%");

    //            $('#hamNavTitleContact').css("font-size", "20pt");
    //            $('#hamNavNetworkImg').width("67px");
    //            $('#hamNavNetworkImg').height("67px");
    //            $('#hamNavNetworkImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleWhoWeAre').css("font-size", "20pt");
    //            $('#hamNavWhoWeAreImg').width("70px");
    //            $('#hamNavWhoWeAreImg').height("70px");
    //            $('#hamNavWhoWeAreImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "15pt");
    //            $('#hamNavHistoryImg').width("57px");
    //            $('#hamNavHistoryImg').height("57px");

    //            $('#hamNavTitleNumbers').css("font-size", "15pt");
    //            $('#hamNavNumbersImg').width("57px");
    //            $('#hamNavNumbersImg').height("57px");

    //            $('#hamNavTitleSaying').css("font-size", "15pt");
    //            $('#hamNavSayingImg').width("57px");
    //            $('#hamNavSayingImg').height("57px");

    //            $('#hamNavTitleContact').css("font-size", "15pt");
    //            $('#hamNavNetworkImg').width("57px");
    //            $('#hamNavNetworkImg').height("57px");
    //        }
    //    }

    //    else {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleWhoWeAre').css("font-size", "20pt");
    //            $('#hamNavWhoWeAreImg').width("67px");
    //            $('#hamNavWhoWeAreImg').height("67px");
    //            $('#hamNavWhoWeAreImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleWhoWeAre').css("font-size", "15pt");
    //            $('#hamNavWhoWeAreImg').width("57px");
    //            $('#hamNavWhoWeAreImg').height("57px");
    //            $('#hamNavWhoWeAreImg').css("border-radius", "50%");
    //        }
    //    }
    //});

    //$('#numbersBtn').on('click', function () {
    //    if ($('#numbersBtn').attr("aria-expanded") == "false") {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleNumbers').css("font-size", "26pt");
    //            $('#hamNavNumbersImg').width("90px");
    //            $('#hamNavNumbersImg').height("90px");
    //            $('#hamNavNumbersImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "20pt");
    //            $('#hamNavHistoryImg').width("67px");
    //            $('#hamNavHistoryImg').height("67px");
    //            $('#hamNavHistoryImg').css("border-radius", "50%");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "20pt");
    //            $('#hamNavWhoWeAreImg').width("67px");
    //            $('#hamNavWhoWeAreImg').height("67px");
    //            $('#hamNavWhoWeAreImg').css("border-radius", "50%");

    //            $('#hamNavTitleSaying').css("font-size", "20pt");
    //            $('#hamNavSayingImg').width("67px");
    //            $('#hamNavSayingImg').height("67px");
    //            $('#hamNavSayingImg').css("border-radius", "50%");

    //            $('#hamNavTitleContact').css("font-size", "20pt");
    //            $('#hamNavNetworkImg').width("67px");
    //            $('#hamNavNetworkImg').height("67px");
    //            $('#hamNavNetworkImg').css("border-radius", "50%");

    //        }

    //        else {
    //            $('#hamNavTitleNumbers').css("font-size", "20pt");
    //            $('#hamNavNumbersImg').width("70px");
    //            $('#hamNavNumbersImg').height("70px");
    //            $('#hamNavNumbersImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "15pt");
    //            $('#hamNavHistoryImg').width("57px");
    //            $('#hamNavHistoryImg').height("57px");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "15pt");
    //            $('#hamNavWhoWeAreImg').width("57px");
    //            $('#hamNavWhoWeAreImg').height("57px");

    //            $('#hamNavTitleSaying').css("font-size", "15pt");
    //            $('#hamNavSayingImg').width("57px");
    //            $('#hamNavSayingImg').height("57px");

    //            $('#hamNavTitleContact').css("font-size", "15pt");
    //            $('#hamNavNetworkImg').width("57px");
    //            $('#hamNavNetworkImg').height("57px");
    //        }
    //    }

    //    else {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleNumbers').css("font-size", "20pt");
    //            $('#hamNavNumbersImg').width("67px");
    //            $('#hamNavNumbersImg').height("67px");
    //            $('#hamNavNumbersImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleNumbers').css("font-size", "15pt");
    //            $('#hamNavNumbersImg').width("57px");
    //            $('#hamNavNumbersImg').height("57px");
    //            $('#hamNavNumbersImg').css("border-radius", "50%");
    //        }
    //    }
    //});

    //$('#sayingBtn').on('click', function () {
    //    if ($('#sayingBtn').attr("aria-expanded") == "false") {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleSaying').css("font-size", "26pt");
    //            $('#hamNavSayingImg').width("90px");
    //            $('#hamNavSayingImg').height("90px");
    //            $('#hamNavSayingImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "20pt");
    //            $('#hamNavHistoryImg').width("67px");
    //            $('#hamNavHistoryImg').height("67px");
    //            $('#hamNavHistoryImg').css("border-radius", "50%");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "20pt");
    //            $('#hamNavWhoWeAreImg').width("67px");
    //            $('#hamNavWhoWeAreImg').height("67px");
    //            $('#hamNavWhoWeAreImg').css("border-radius", "50%");

    //            $('#hamNavTitleNumbers').css("font-size", "20pt");
    //            $('#hamNavNumbersImg').width("67px");
    //            $('#hamNavNumbersImg').height("67px");
    //            $('#hamNavNumbersImg').css("border-radius", "50%");

    //            $('#hamNavTitleContact').css("font-size", "20pt");
    //            $('#hamNavNetworkImg').width("67px");
    //            $('#hamNavNetworkImg').height("67px");
    //            $('#hamNavNetworkImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleSaying').css("font-size", "20pt");
    //            $('#hamNavSayingImg').width("70px");
    //            $('#hamNavSayingImg').height("70px");
    //            $('#hamNavSayingImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "15pt");
    //            $('#hamNavHistoryImg').width("57px");
    //            $('#hamNavHistoryImg').height("57px");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "15pt");
    //            $('#hamNavWhoWeAreImg').width("57px");
    //            $('#hamNavWhoWeAreImg').height("57px");

    //            $('#hamNavTitleNumbers').css("font-size", "15pt");
    //            $('#hamNavNumbersImg').width("57px");
    //            $('#hamNavNumbersImg').height("57px");

    //            $('#hamNavTitleContact').css("font-size", "15pt");
    //            $('#hamNavNetworkImg').width("57px");
    //            $('#hamNavNetworkImg').height("57px");
    //        }
    //    }

    //    else {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleSaying').css("font-size", "20pt");
    //            $('#hamNavSayingImg').width("67px");
    //            $('#hamNavSayingImg').height("67px");
    //            $('#hamNavSayingImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleSaying').css("font-size", "15pt");
    //            $('#hamNavSayingImg').width("57px");
    //            $('#hamNavSayingImg').height("57px");
    //            $('#hamNavSayingImg').css("border-radius", "50%");
    //        }
    //    }
    //});

    //$('#contactBtn').on('click', function () {
    //    if ($('#contactBtn').attr("aria-expanded") == "false") {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleContact').css("font-size", "26pt");
    //            $('#hamNavNetworkImg').width("90px");
    //            $('#hamNavNetworkImg').height("90px");
    //            $('#hamNavNetworkImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "20pt");
    //            $('#hamNavHistoryImg').width("67px");
    //            $('#hamNavHistoryImg').height("67px");
    //            $('#hamNavHistoryImg').css("border-radius", "50%");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "20pt");
    //            $('#hamNavWhoWeAreImg').width("67px");
    //            $('#hamNavWhoWeAreImg').height("67px");
    //            $('#hamNavWhoWeAreImg').css("border-radius", "50%");

    //            $('#hamNavTitleNumbers').css("font-size", "20pt");
    //            $('#hamNavNumbersImg').width("67px");
    //            $('#hamNavNumbersImg').height("67px");
    //            $('#hamNavNumbersImg').css("border-radius", "50%");

    //            $('#hamNavTitleSaying').css("font-size", "20pt");
    //            $('#hamNavSayingImg').width("67px");
    //            $('#hamNavSayingImg').height("67px");
    //            $('#hamNavSayingImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleContact').css("font-size", "20pt");
    //            $('#hamNavNetworkImg').width("70px");
    //            $('#hamNavNetworkImg').height("70px");
    //            $('#hamNavNetworkImg').css("border-bottom-right-radius", "0px");

    //            $('#hamNavTitleHistory').css("font-size", "15pt");
    //            $('#hamNavHistoryImg').width("57px");
    //            $('#hamNavHistoryImg').height("57px");

    //            $('#hamNavTitleWhoWeAre').css("font-size", "15pt");
    //            $('#hamNavWhoWeAreImg').width("57px");
    //            $('#hamNavWhoWeAreImg').height("57px");

    //            $('#hamNavTitleSaying').css("font-size", "15pt");
    //            $('#hamNavSayingImg').width("57px");
    //            $('#hamNavSayingImg').height("57px");

    //            $('#hamNavTitleNumbers').css("font-size", "15pt");
    //            $('#hamNavNumbersImg').width("57px");
    //            $('#hamNavNumbersImg').height("57px");
    //        }
    //    }

    //    else {

    //        if ($(window).width() > 420) {
    //            $('#hamNavTitleContact').css("font-size", "20pt");
    //            $('#hamNavNetworkImg').width("67px");
    //            $('#hamNavNetworkImg').height("67px");
    //            $('#hamNavNetworkImg').css("border-radius", "50%");
    //        }

    //        else {
    //            $('#hamNavTitleContact').css("font-size", "15pt");
    //            $('#hamNavNetworkImg').width("57px");
    //            $('#hamNavNetworkImg').height("57px");
    //            $('#hamNavNetworkImg').css("border-radius", "50%");
    //        }
            
    //    }
    //});


    //fgdgdffd

    //$('.panel-collapse').on('shown.bs.collapse', function (e) {
    //    var $panel = $(this).closest('.panel');
    //    $('html,body').animate({
    //        scrollTop: $panel.offset().top-300
    //    }, 500);
    //}); 


    //$('#forMeLink').on('click', function () {
    //    $('#siteIntro').hide();
    //    $('#forMeSection').show();
    //});


    //$(".panel-title").on('click', function () {

    //    if ($(this).hasClass("unbold")) {
    //        $(this).removeClass('unbold');
    //        $(this).addClass('bold');
    //    }

    //    else {
    //        $(this).removeClass('bold');
    //        $(this).addClass('unbold');
    //    }


    //});

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('[data-toggle="popover"]').popover({
        //trigger: 'focus',
        trigger: 'focus',
        placement:'bottom',
        html: true
    });

    $(document).on('click', function (e) {
        if ((e.target.id === 'locationImg') || (e.target.id === 'phoneImg') || (e.target.id === 'emailImg') || (e.target.id === 'facebookImg')) {

            if (e.target.id === 'locationImg') {
                $('#locationImg').css("opacity", "0");
            }

            else if (e.target.id === 'phoneImg') {
                $('#phoneImg').css("opacity", "0");
            }

            else if (e.target.id === 'emailImg') {
                $('#emailImg').css("opacity", "0");
            }

            else if (e.target.id === 'facebookImg') {
                $('#facebookImg').css("opacity", "0");
            }
        }
        else {
            $('#locationImg').css("opacity", "1");
            $('#phoneImg').css("opacity", "1");
            $('#emailImg').css("opacity", "1");
            $('#facebookImg').css("opacity", "1");
        }
    });

    $('#locationImg').on('click', function () {
        $('#phoneImg').css("opacity", "1");
        $('#emailImg').css("opacity", "1");
        $('#facebookImg').css("opacity", "1");
    });

    $('#phoneImg').on('click', function () {
        $('#locationImg').css("opacity", "1");
        $('#emailImg').css("opacity", "1");
        $('#facebookImg').css("opacity", "1");
    });

    $('#emailImg').on('click', function () {
        $('#locationImg').css("opacity", "1");
        $('#emailImg').css("opacity", "1");
        $('#facebookImg').css("opacity", "1");
    });


    $('.goalsLink').on('click', function () {
        $('.goalsWWA').show();
        $('.howItWorks').hide();
    });

    $('.howItWorksLink').on('click', function () {
        $('.howItWorks').show();
        $('.goalsWWA').hide();
    });

    $('#goalsLink').on('click', function () {
        $('#goals').show();
        $('#howItWorks').hide();
    });

    $('#howItWorksLink').on('click', function () {
        $('#howItWorks').show();
        $('#goals').hide();
    });

    //$(".form-group option").click(function () {
    //    var selText = $(this).text();
    //    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    //});

    $('#exampleFormControlSelect1').on('change', function () {
        if ($(this).find("option:selected").attr("id") == "umElFahem") {
            $('#nameOfOrg').html("ريان مراكز تشغيل- ריאן חברה ערבית");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: דועאא עזב");
            $('#locationImg1').attr('data-content', "מרכז ריאן, שכונת אלדהר");
            $('#phoneImg1').attr('data-content', 'טלפון: 04-7703250<br/>טלפון נייד: 052-7709775');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/FANAR.RAYAN/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "eilat") {
            $('#nameOfOrg').html("מרכז צעירים אילת");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: אורלי מלכה");
            $('#locationImg1').attr('data-content', "דרך יותם 4, אילת");
            $('#phoneImg1').attr('data-content', 'טלפון: 08-6367594');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/EilatYouthCenter/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "efrat") {
            $('#nameOfOrg').html("מטה צעירים אפרת");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: ליאורה ציון-תאיר");
            $('#locationImg1').attr('data-content', "פיטום הקטורת 1 ב', אפרת");
            $('#phoneImg1').attr('data-content', 'טלפון: 02-9939453<br/>טלפון נייד: 054-7230075');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:bodner@efrat.muni.il" class="outerLinks" >bodner@efrat.muni.il</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/%D7%9E%D7%98%D7%94-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A4%D7%A8%D7%AA-339371922889349/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "beerSheva") {
            $('#nameOfOrg').html("סטארט אפ - הזדמנויות לצעירים");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: נועה פילד");
            $('#locationImg1').attr('data-content', 'השלום 16, באר שבע');
            $('#phoneImg1').attr('data-content', 'טלפון: 08-6650840<br/>טלפון נייד: 050-8783870');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/MERKAZSTARTUP/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "beitJan") {
            $('#nameOfOrg').html("מרכז הצעירים שלי");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: מיה קבלאן");
            $('#locationImg1').attr('data-content', "בניין הרשות המקומית, בית ג'אן");
            $('#phoneImg1').attr('data-content', 'טלפון: 052-9252808<br/>טלפון נוסף: 052-3068888');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:samimas69@gmail.com" class="outerLinks" >samimas69@gmail.com</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/groups/1518355791796834/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "bneiShimon") {
            $('#nameOfOrg').html("");
            $('#contactInfo').show();
        }

        else if ($(this).find("option:selected").attr("id") == "hadera") {
            $('#nameOfOrg').html("טורבינה מרכז צעירים חדרה");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: שירה לברון");
            $('#locationImg1').attr('data-content', 'הנשיא 15, חדרה');
            $('#phoneImg1').attr('data-content', 'טלפון: 04-6331787<br/>טלפון נייד: 054-6565095');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:haderay@gmail.com" class="outerLinks" >haderay@gmail.com</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/%D7%98%D7%95%D7%A8%D7%91%D7%99%D7%A0%D7%94-%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A8%D7%94-653718471351501/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "holon") {
            $('#nameOfOrg').html("מרכז צעירים חולון");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: עדי קרספי");
            $('#locationImg1').attr('data-content', 'אליעזר בן יהודה 18, קומה 4, חולון');
            $('#phoneImg1').attr('data-content', 'טלפון: 03-6366090');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/tzeirim.holon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "tiratCarmel") {
            $('#nameOfOrg').html("מרכז צעירים והון אנושי-טירת כרמל");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: אביב ארם");
            $('#locationImg1').attr('data-content', 'עזרא לניאדו 1, טירת כרמל');
            $('#phoneImg1').attr('data-content', 'טלפון: 04-8581406<br/>טלפון נוסף: 04-8570271');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/tzeirimtiratcarmel/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "yokneam") {
            $('#nameOfOrg').html("מרכז צעירים יקנעם");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: מיכל בירן זקצר");
            $('#locationImg1').attr('data-content', 'הצאלים 1, יקנעם');
            $('#phoneImg1').attr('data-content', 'טלפון: 04-9591236<br/>טלפון נייד: 052-8753266');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/merkazyoqneam/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "jerusalem") {
            $('#nameOfOrg').html("מרכז צעירים ירושלים");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: רייצ'ל ענקי");
            $('#locationImg1').attr('data-content', 'שבטי ישראל 22, ירושלים');
            $('#phoneImg1').attr('data-content', '*טלפון: 8162<br/>טלפון נייד: 052-6141419');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:maydale@young-jerusalem.org.il" class="outerLinks" >maydale@young-jerusalem.org.il</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/youngJLM/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "netanya") {
            $('#nameOfOrg').html("הגג - בית הצעירים בנתניה");
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: הילה לוי קולטוצ'ניק");
            $('#locationImg1').attr('data-content', 'שטמפפר 4, נתניה');
            $('#phoneImg1').attr('data-content', 'טלפון: 09-9669987<br/>טלפון נוסף: 09-8321460');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:info@hagag.org" class="outerLinks" >info@hagag.org</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/hagag.netanya/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "aco") {
            $('#nameOfOrg').html('מרכז צעירים ולהב"ה עכו');
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', 'רכז: שלומית יוסף');
            $('#locationImg1').attr('data-content', 'מרכז צעירים ולהב"ה, עכו');
            $('#phoneImg1').attr('data-content', 'טלפון: 04-9917477<br/>טלפון נייד: 054-7384803');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:tzeirimacco@gmail.com" class="outerLinks" >tzeirimacco@gmail.com</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/tzeirim.acco/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "afula") {
            $('#nameOfOrg').html('מרכז צעירים עפולה');
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', 'רכז: רווית זהרי');
            $('#locationImg1').attr('data-content', 'דרך חטיבה תשע 15, עפולה');
            $('#phoneImg1').attr('data-content', 'טלפון: 04-6484284<br/>טלפון נייד: 054-6386890');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:mazkirut@yaic.org.il" class="outerLinks" >mazkirut@yaic.org.il</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/pages/%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%A2%D7%A4%D7%95%D7%9C%D7%94/1501851256720492" class="outerLinks"  target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "pardesHana") {
            $('#nameOfOrg').html('"הפרדס" - מרכז הצעירים פרדס חנה כרכור');
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', "רכז: אלה דור-און");
            $('#locationImg1').attr('data-content', "כורש 7, פרדס חנה-כרכור");
            $('#phoneImg1').attr('data-content', 'טלפון: 077-5524074<br/>טלפון נייד: 053-7370659');
            //$('#emailImg').hide();
            $('#emailImg1').hide();
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/hapardes/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "rlz") {
            $('#nameOfOrg').html('מרכז צעירים ראשון לציון');
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', 'רכז: שירי דלל');
            $('#locationImg1').attr('data-content', 'רמז 80, רחובות');
            $('#phoneImg1').attr('data-content', 'טלפון: 03-6042598');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:merkazrishon@gmail.com" class="outerLinks" >merkazrishon@gmail.com</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/merkazrishon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "rehovot") {
            $('#nameOfOrg').html('הפלטפורמה');
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', 'רכז: שירי דלל');
            $('#locationImg1').attr('data-content', 'יבניאלי 4, ראשון לציון');
            $('#phoneImg1').attr('data-content', 'טלפון: 03-6042598');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:merkazrishon@gmail.com" class="outerLinks" >merkazrishon@gmail.com</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/merkazrishon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "shaarHanegev") {
            $('#shaarHanegev').html('מרכז צעירים שער הנגב');
            $('#contactInfo').show();

            $('#coordinatorImg1').attr('data-content', 'רכז: מזי כהן');
            $('#locationImg1').attr('data-content', 'מכללת ספיר');
            $('#phoneImg1').attr('data-content', 'טלפון: 077-9802237');
            //$('#emailImg').show();
            $('#emailImg1').show();
            $('#emailImg1').attr('data-content', '<a href="mailto:youngs@sng.org.il" class="outerLinks" >youngs@sng.org.il</a>');
            $('#facebookImg1').attr('data-content', '<a href="https://www.facebook.com/tzeirimsng/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }
    });

    $('#exampleFormControlSelect2').on('change', function () {
        if ($(this).find("option:selected").attr("id") == "umElFahemM") {
            $('#nameOfOrgM').html("ريان مراكز تشغيل- ריאן חברה ערבית");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: דועאא עזב");
            $('#locationImgM').attr('data-content', "מרכז ריאן, שכונת אלדהר");
            $('#phoneImgM').attr('data-content', 'טלפון: 04-7703250<br/>טלפון נייד: 052-7709775');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/FANAR.RAYAN/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "eilatM") {
            $('#nameOfOrgM').html("מרכז צעירים אילת");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: אורלי מלכה");
            $('#locationImgM').attr('data-content', "דרך יותם 4, אילת");
            $('#phoneImgM').attr('data-content', 'טלפון: 08-6367594');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/EilatYouthCenter/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "efratM") {
            $('#nameOfOrgM').html("מטה צעירים אפרת");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: ליאורה ציון-תאיר");
            $('#locationImgM').attr('data-content', "פיטום הקטורת 1 ב', אפרת");
            $('#phoneImgM').attr('data-content', 'טלפון: 02-9939453<br/>טלפון נייד: 054-7230075');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:bodner@efrat.muni.il" class="outerLinks" >bodner@efrat.muni.il</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/%D7%9E%D7%98%D7%94-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A4%D7%A8%D7%AA-339371922889349/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "beerShevaM") {
            $('#nameOfOrgM').html("סטארט אפ - הזדמנויות לצעירים");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: נועה פילד");
            $('#locationImgM').attr('data-content', 'השלום 16, באר שבע');
            $('#phoneImgM').attr('data-content', 'טלפון: 08-6650840<br/>טלפון נייד: 050-8783870');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/MERKAZSTARTUP/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "beitJanM") {
            $('#nameOfOrgM').html("מרכז הצעירים שלי");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: מיה קבלאן");
            $('#locationImgM').attr('data-content', "בניין הרשות המקומית, בית ג'אן");
            $('#phoneImgM').attr('data-content', 'טלפון: 052-9252808<br/>טלפון נוסף: 052-3068888');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:samimas69@gmail.com" class="outerLinks" >samimas69@gmail.com</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/groups/1518355791796834/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "bneiShimonM") {
            $('#nameOfOrgM').html("");
            $('#contactInfoM').show();
        }

        else if ($(this).find("option:selected").attr("id") == "haderaM") {
            $('#nameOfOrgM').html("טורבינה מרכז צעירים חדרה");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: שירה לברון");
            $('#locationImgM').attr('data-content', 'הנשיא 15, חדרה');
            $('#phoneImgM').attr('data-content', 'טלפון: 04-6331787<br/>טלפון נייד: 054-6565095');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:haderay@gmail.com" class="outerLinks" >haderay@gmail.com</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/%D7%98%D7%95%D7%A8%D7%91%D7%99%D7%A0%D7%94-%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A8%D7%94-653718471351501/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "holonM") {
            $('#nameOfOrgM').html("מרכז צעירים חולון");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: עדי קרספי");
            $('#locationImgM').attr('data-content', 'אליעזר בן יהודה 18, קומה 4, חולון');
            $('#phoneImgM').attr('data-content', 'טלפון: 03-6366090');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/tzeirim.holon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "tiratCarmelM") {
            $('#nameOfOrgM').html("מרכז צעירים והון אנושי-טירת כרמל");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: אביב ארם");
            $('#locationImgM').attr('data-content', 'עזרא לניאדו 1, טירת כרמל');
            $('#phoneImgM').attr('data-content', 'טלפון: 04-8581406<br/>טלפון נוסף: 04-8570271');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/tzeirimtiratcarmel/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "yokneamM") {
            $('#nameOfOrgM').html("מרכז צעירים יקנעם");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: מיכל בירן זקצר");
            $('#locationImgM').attr('data-content', 'הצאלים 1, יקנעם');
            $('#phoneImgM').attr('data-content', 'טלפון: 04-9591236<br/>טלפון נייד: 052-8753266');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/merkazyoqneam/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "jerusalemM") {
            $('#nameOfOrgM').html("מרכז צעירים ירושלים");
            $('#contactInFoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: רייצ'ל ענקי");
            $('#locationImgM').attr('data-content', 'שבטי ישראל 22, ירושלים');
            $('#phoneImgM').attr('data-content', '*טלפון: 8162<br/>טלפון נייד: 052-6141419');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:maydale@young-jerusalem.org.il" class="outerLinks" >maydale@young-jerusalem.org.il</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/youngJLM/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "netanyaM") {
            $('#nameOfOrgM').html("הגג - בית הצעירים בנתניה");
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: הילה לוי קולטוצ'ניק");
            $('#locationImgM').attr('data-content', 'שטמפפר 4, נתניה');
            $('#phoneImgM').attr('data-content', 'טלפון: 09-9669987<br/>טלפון נוסף: 09-8321460');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:info@hagag.org" class="outerLinks" >info@hagag.org</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/hagag.netanya/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "acoM") {
            $('#nameOfOrgM').html('מרכז צעירים ולהב"ה עכו');
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', 'רכז: שלומית יוסף');
            $('#locationImgM').attr('data-content', 'מרכז צעירים ולהב"ה, עכו');
            $('#phoneImgM').attr('data-content', 'טלפון: 04-9917477<br/>טלפון נייד: 054-7384803');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:tzeirimacco@gmail.com" class="outerLinks" >tzeirimacco@gmail.com</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/tzeirim.acco/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "afulaM") {
            $('#nameOfOrgM').html('מרכז צעירים עפולה');
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', 'רכז: רווית זהרי');
            $('#locationImgM').attr('data-content', 'דרך חטיבה תשע 15, עפולה');
            $('#phoneImgM').attr('data-content', 'טלפון: 04-6484284<br/>טלפון נייד: 054-6386890');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:mazkirut@yaic.org.il" class="outerLinks" >mazkirut@yaic.org.il</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/pages/%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%A2%D7%A4%D7%95%D7%9C%D7%94/1501851256720492" class="outerLinks"  target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "pardesHanaM") {
            $('#nameOfOrgM').html('"הפרדס" - מרכז הצעירים פרדס חנה כרכור');
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', "רכז: אלה דור-און");
            $('#locationImgM').attr('data-content', "כורש 7, פרדס חנה-כרכור");
            $('#phoneImgM').attr('data-content', 'טלפון: 077-5524074<br/>טלפון נייד: 053-7370659');
            //$('#emailImg').hide();
            $('#emailImgM').hide();
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/hapardes/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "rlzM") {
            $('#nameOfOrgM').html('מרכז צעירים ראשון לציון');
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', 'רכז: שירי דלל');
            $('#locationImgM').attr('data-content', 'רמז 80, רחובות');
            $('#phoneImgM').attr('data-content', 'טלפון: 03-6042598');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:merkazrishon@gmail.com" class="outerLinks" >merkazrishon@gmail.com</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/merkazrishon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "rehovotM") {
            $('#nameOfOrgM').html('הפלטפורמה');
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', 'רכז: שירי דלל');
            $('#locationImgM').attr('data-content', 'יבניאלי 4, ראשון לציון');
            $('#phoneImgM').attr('data-content', 'טלפון: 03-6042598');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:merkazrishon@gmail.com" class="outerLinks" >merkazrishon@gmail.com</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/merkazrishon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "shaarHanegevM") {
            $('#shaarHanegevM').html('מרכז צעירים שער הנגב');
            $('#contactInfoM').show();

            $('#coordinatorImgM').attr('data-content', 'רכז: מזי כהן');
            $('#locationImgM').attr('data-content', 'מכללת ספיר');
            $('#phoneImgM').attr('data-content', 'טלפון: 077-9802237');
            //$('#emailImg').show();
            $('#emailImgM').show();
            $('#emailImgM').attr('data-content', '<a href="mailto:youngs@sng.org.il" class="outerLinks" >youngs@sng.org.il</a>');
            $('#facebookImgM').attr('data-content', '<a href="https://www.facebook.com/tzeirimsng/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }
    });

    $('#exampleFormControlSelect3').on('change', function () {
        if ($(this).find("option:selected").attr("id") == "umElFahemM2") {
            $('#nameOfOrgM2').html("ريان مراكز تشغيل- ריאן חברה ערבית");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: דועאא עזב");
            $('#locationImgM2').attr('data-content', "מרכז ריאן, שכונת אלדהר");
            $('#phoneImgM2').attr('data-content', 'טלפון: 04-7703250<br/>טלפון נייד: 052-7709775');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/FANAR.RAYAN/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "eilatM2") {
            $('#nameOfOrgM2').html("מרכז צעירים אילת");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: אורלי מלכה");
            $('#locationImgM2').attr('data-content', "דרך יותם 4, אילת");
            $('#phoneImgM2').attr('data-content', 'טלפון: 08-6367594');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/EilatYouthCenter/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "efratM2") {
            $('#nameOfOrgM2').html("מטה צעירים אפרת");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: ליאורה ציון-תאיר");
            $('#locationImgM2').attr('data-content', "פיטום הקטורת 1 ב', אפרת");
            $('#phoneImgM2').attr('data-content', 'טלפון: 02-9939453<br/>טלפון נייד: 054-7230075');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:bodner@efrat.muni.il" class="outerLinks" >bodner@efrat.muni.il</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/%D7%9E%D7%98%D7%94-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%90%D7%A4%D7%A8%D7%AA-339371922889349/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "beerShevaM2") {
            $('#nameOfOrgM2').html("סטארט אפ - הזדמנויות לצעירים");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: נועה פילד");
            $('#locationImgM2').attr('data-content', 'השלום 16, באר שבע');
            $('#phoneImgM2').attr('data-content', 'טלפון: 08-6650840<br/>טלפון נייד: 050-8783870');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/MERKAZSTARTUP/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "beitJanM2") {
            $('#nameOfOrgM2').html("מרכז הצעירים שלי");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: מיה קבלאן");
            $('#locationImgM2').attr('data-content', "בניין הרשות המקומית, בית ג'אן");
            $('#phoneImgM2').attr('data-content', 'טלפון: 052-9252808<br/>טלפון נוסף: 052-3068888');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:samimas69@gmail.com" class="outerLinks" >samimas69@gmail.com</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/groups/1518355791796834/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "bneiShimonM2") {
            $('#nameOfOrgM2').html("");
            $('#contactInfoM2').show();
        }

        else if ($(this).find("option:selected").attr("id") == "haderaM2") {
            $('#nameOfOrgM2').html("טורבינה מרכז צעירים חדרה");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: שירה לברון");
            $('#locationImgM2').attr('data-content', 'הנשיא 15, חדרה');
            $('#phoneImgM2').attr('data-content', 'טלפון: 04-6331787<br/>טלפון נייד: 054-6565095');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:haderay@gmail.com" class="outerLinks" >haderay@gmail.com</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/%D7%98%D7%95%D7%A8%D7%91%D7%99%D7%A0%D7%94-%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%97%D7%93%D7%A8%D7%94-653718471351501/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "holonM2") {
            $('#nameOfOrgM2').html("מרכז צעירים חולון");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: עדי קרספי");
            $('#locationImgM2').attr('data-content', 'אליעזר בן יהודה 18, קומה 4, חולון');
            $('#phoneImgM2').attr('data-content', 'טלפון: 03-6366090');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/tzeirim.holon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "tiratCarmelM2") {
            $('#nameOfOrgM2').html("מרכז צעירים והון אנושי-טירת כרמל");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: אביב ארם");
            $('#locationImgM2').attr('data-content', 'עזרא לניאדו 1, טירת כרמל');
            $('#phoneImgM2').attr('data-content', 'טלפון: 04-8581406<br/>טלפון נוסף: 04-8570271');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/tzeirimtiratcarmel/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "yokneamM2") {
            $('#nameOfOrgM2').html("מרכז צעירים יקנעם");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: מיכל בירן זקצר");
            $('#locationImgM2').attr('data-content', 'הצאלים 1, יקנעם');
            $('#phoneImgM2').attr('data-content', 'טלפון: 04-9591236<br/>טלפון נייד: 052-8753266');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/merkazyoqneam/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "jerusalemM2") {
            $('#nameOfOrgM2').html("מרכז צעירים ירושלים");
            $('#contactInFoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: רייצ'ל ענקי");
            $('#locationImgM2').attr('data-content', 'שבטי ישראל 22, ירושלים');
            $('#phoneImgM2').attr('data-content', '*טלפון: 8162<br/>טלפון נייד: 052-6141419');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:maydale@young-jerusalem.org.il" class="outerLinks" >maydale@young-jerusalem.org.il</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/youngJLM/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "netanyaM2") {
            $('#nameOfOrgM2').html("הגג - בית הצעירים בנתניה");
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: הילה לוי קולטוצ'ניק");
            $('#locationImgM2').attr('data-content', 'שטמפפר 4, נתניה');
            $('#phoneImgM2').attr('data-content', 'טלפון: 09-9669987<br/>טלפון נוסף: 09-8321460');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:info@hagag.org" class="outerLinks" >info@hagag.org</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/hagag.netanya/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "acoM2") {
            $('#nameOfOrgM2').html('מרכז צעירים ולהב"ה עכו');
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', 'רכז: שלומית יוסף');
            $('#locationImgM2').attr('data-content', 'מרכז צעירים ולהב"ה, עכו');
            $('#phoneImgM2').attr('data-content', 'טלפון: 04-9917477<br/>טלפון נייד: 054-7384803');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:tzeirimacco@gmail.com" class="outerLinks" >tzeirimacco@gmail.com</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/tzeirim.acco/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "afulaM2") {
            $('#nameOfOrgM2').html('מרכז צעירים עפולה');
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', 'רכז: רווית זהרי');
            $('#locationImgM2').attr('data-content', 'דרך חטיבה תשע 15, עפולה');
            $('#phoneImgM2').attr('data-content', 'טלפון: 04-6484284<br/>טלפון נייד: 054-6386890');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:mazkirut@yaic.org.il" class="outerLinks" >mazkirut@yaic.org.il</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/pages/%D7%9E%D7%A8%D7%9B%D7%96-%D7%A6%D7%A2%D7%99%D7%A8%D7%99%D7%9D-%D7%A2%D7%A4%D7%95%D7%9C%D7%94/1501851256720492" class="outerLinks"  target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "pardesHanaM2") {
            $('#nameOfOrgM2').html('"הפרדס" - מרכז הצעירים פרדס חנה כרכור');
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', "רכז: אלה דור-און");
            $('#locationImgM2').attr('data-content', "כורש 7, פרדס חנה-כרכור");
            $('#phoneImgM2').attr('data-content', 'טלפון: 077-5524074<br/>טלפון נייד: 053-7370659');
            //$('#emailImg').hide();
            $('#emailImgM2').hide();
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/hapardes/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "rlzM2") {
            $('#nameOfOrgM2').html('מרכז צעירים ראשון לציון');
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', 'רכז: שירי דלל');
            $('#locationImgM2').attr('data-content', 'רמז 80, רחובות');
            $('#phoneImgM2').attr('data-content', 'טלפון: 03-6042598');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:merkazrishon@gmail.com" class="outerLinks" >merkazrishon@gmail.com</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/merkazrishon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "rehovotM2") {
            $('#nameOfOrgM2').html('הפלטפורמה');
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', 'רכז: שירי דלל');
            $('#locationImgM2').attr('data-content', 'יבניאלי 4, ראשון לציון');
            $('#phoneImgM2').attr('data-content', 'טלפון: 03-6042598');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:merkazrishon@gmail.com" class="outerLinks" >merkazrishon@gmail.com</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/merkazrishon/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }

        else if ($(this).find("option:selected").attr("id") == "shaarHanegevM2") {
            $('#shaarHanegevM2').html('מרכז צעירים שער הנגב');
            $('#contactInfoM2').show();

            $('#coordinatorImgM2').attr('data-content', 'רכז: מזי כהן');
            $('#locationImgM2').attr('data-content', 'מכללת ספיר');
            $('#phoneImgM2').attr('data-content', 'טלפון: 077-9802237');
            //$('#emailImg').show();
            $('#emailImgM2').show();
            $('#emailImgM2').attr('data-content', '<a href="mailto:youngs@sng.org.il" class="outerLinks" >youngs@sng.org.il</a>');
            $('#facebookImgM2').attr('data-content', '<a href="https://www.facebook.com/tzeirimsng/" class="outerLinks" target=_blank>לעמוד הפייסבוק</a>');
        }
    });

    $('#careerNav').on('click', function () {
        $('#careerNav').css('opacity', '0');
        $('#careerSpan').css('font-weight', 'bold');
        $('#careerSpan').css('opacity', '1');

        $('#contactM2').hide();


        $('#friendshipSpan').css('opacity', '0.7');
        $('#familySpan').css('opacity', '0.7');
        $('#aboutSpan').css('opacity', '0.7');

        $('#aboutNav').css('opacity', '1');
        $('#aboutSpan').css('font-weight', 'normal');
        $('#familyNav').css('opacity', '1');
        $('#familySpan').css('font-weight', 'normal');
        $('#friendshipNav').css('opacity', '1');
        $('#friendshipSpan').css('font-weight', 'normal');

        $('.title').html("הקריירה שלנו");
        $('#aboutUsSection').hide();
        $('#aboutMobile').hide();
        $('#familySection').hide();
        $('#friendshipSection').hide();
        $('#careerSection').show();
        $('#careerMobile').show();

        $(".contactLinkInnerPages").css("height", "100px");

    });


    $('#friendshipNav').on('click', function () {
        $('#friendshipNav').css('opacity', '0');
        $('#friendshipSpan').css('font-weight', 'bold');
        $('#friendshipSpan').css('opacity', '1');

        $('#contactM2').hide();


        $('#careerSpan').css('opacity', '0.7');
        $('#familySpan').css('opacity', '0.7');
        $('#aboutSpan').css('opacity', '0.7');

        $('#careerNav').css('opacity', '1');
        $('#careerSpan').css('font-weight', 'normal');
        $('#familyNav').css('opacity', '1');
        $('#familySpan').css('font-weight', 'normal');
        $('#aboutNav').css('opacity', '1');
        $('#aboutSpan').css('font-weight', 'normal');

        $('.title').html("החברים מסביבנו");
        $('#careerSection').hide();
        $('#familySection').hide();
        $('#aboutUsSection').hide();
        $('#careerMobile').hide();
        $('#aboutMobile').hide();
        $('#friendshipSection').show();

        $(".contactLinkInnerPages").css("height", "200px");

    });

    $('#familyNav').on('click', function () {
        $('#familyNav').css('opacity', '0');
        $('#familySpan').css('font-weight', 'bold');
        $('#familySpan').css('opacity', '1');

        $('#contactM2').hide();

        $('#friendshipSpan').css('opacity', '0.7');
        $('#careerSpan').css('opacity', '0.7');
        $('#aboutSpan').css('opacity', '0.7');

        $('#careerNav').css('opacity', '1');
        $('#careerSpan').css('font-weight', 'normal');
        $('#friendshipNav').css('opacity', '1');
        $('#friendshipSpan').css('font-weight', 'normal');
        $('#aboutNav').css('opacity', '1');
        $('#aboutSpan').css('font-weight', 'normal');

        $('.title').html("המשפחה בחיינו");
        $('#careerSection').hide();
        $('#aboutUsSection').hide();
        $('#aboutMobile').hide();

        $('#friendshipSection').hide();
        $('#careerMobile').hide();
        $('#familySection').show();

        $(".contactLinkInnerPages").css("height", "200px");

    });

//    if ($(".title").html() == "קצת עלינו"){
//    $("#aboutNav").css("opacity", "0");
//}

//    if ($(".title").html() == "הקריירה שלנו") {
//        $("#careerNav").css("opacity", "0");
//    }

//    if ($(".title").html() == "המשפחה בחיינו") {
//        $("#familyNav").css("opacity", "0");
//    }

//    if ($(".title").html() == "החברים מסביבנו") {
//        $("#friendshipNav").css("opacity", "0");
//    }

    //$('#aboutNav').on('click', function () {
    //    $('#aboutNav').css('opacity', '0');
    //    $('#aboutSpan').css('font-weight', 'bold');
    //    $('#aboutSpan').css('opacity', '1');

    //    $('#friendshipSpan').css('opacity', '0.7');
    //    $('#familySpan').css('opacity', '0.7');
    //    $('#careerSpan').css('opacity', '0.7');

    //    $('#careerNav').css('opacity', '1');
    //    $('#careerSpan').css('font-weight', 'normal');
    //    $('#familyNav').css('opacity', '1');
    //    $('#familySpan').css('font-weight', 'normal');
    //    $('#friendshipNav').css('opacity', '1');
    //    $('#friendshipSpan').css('font-weight', 'normal');

    //    $('.title').html("קצת עלינו");
    //    $('#careerSection').hide();
    //    $('#familySection').hide();
    //    $('#friendshipSection').hide();
    //    $('#careerMobile').hide();
    //    $('#aboutUsSection').show();
    //    $('#aboutMobile').show();

        //if ($(window).width() < 765) {
        //    $("#contactContainer2").css("visibility","hidden");
        //}

        //else {
        //    $("#contactContainer2").css("display","block");

        //}

    //    $(".contactLinkInnerPages").css("height", "100px");


    $(".contactLinkInnerPages").click(function () {
        $(".contactLinkInnerPages").css("height", "100px");
    });

    $('#img1InnerNav2-1').on('click', function () {
        $('#img1InnerNav2-1').css("opacity", "0");
        $('#span1InnerNav-1').css("font-weight", "bold");
        $('#img1InnerNav2S-1').css("opacity", "1");

        $('#img2InnerNav2-1').css("opacity", "1");
        $('#span2InnerNav-1').css("font-weight", "normal");

    });

    $('#img2InnerNav2-1').on('click', function () {
        $('#img2InnerNav2-1').css("opacity", "0");
        $('#span2InnerNav-1').css("font-weight", "bold");
        $('#img2InnerNav2S-1').css("opacity", "1");

        $('#img1InnerNav2-1').css("opacity", "1");
        $('#span1InnerNav-1').css("font-weight", "normal");


    });

    $('#img1InnerNav2-2').on('click', function () {
        $('#img1InnerNav2-2').css("opacity", "0");
        $('#span1InnerNav-2').css("font-weight", "bold");
        $('#img1InnerNav2S-2').css("opacity", "1");

        $('#img2InnerNav2-2').css("opacity", "1");
        $('#span2InnerNav-2').css("font-weight", "normal");

    });

    $('#img2InnerNav2-2').on('click', function () {
        $('#img2InnerNav2-2').css("opacity", "0");
        $('#span2InnerNav-2').css("font-weight", "bold");
        $('#img2InnerNav2S-2').css("opacity", "1");

        $('#img1InnerNav2-2').css("opacity", "1");
        $('#span1InnerNav-2').css("font-weight", "normal");
    });

    $('#img1InnerNav2-3').on('click', function () {
        $('#img1InnerNav2-3').css("opacity", "0");
        $('#span1InnerNav-3').css("font-weight", "bold");
        $('#img1InnerNav2S-3').css("opacity", "1");

        $('#img2InnerNav2-3').css("opacity", "1");
        $('#span2InnerNav-3').css("font-weight", "normal");

    });

    $('#img2InnerNav2-3').on('click', function () {
        $('#img2InnerNav2-3').css("opacity", "0");
        $('#span2InnerNav-3').css("font-weight", "bold");
        $('#img2InnerNav2S-3').css("opacity", "1");

        $('#img1InnerNav2-3').css("opacity", "1");
        $('#span1InnerNav-3').css("font-weight", "normal");
    });

    $('#img1Nav2').on('click', function () {
        $('#img1Nav2').css("opacity", "0");
        $('#span1Nav2').css("font-weight", "bold");
        $('#img2Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img2Nav2').on('click', function () {
        $('#img2Nav2').css("opacity", "0");
        $('#span2Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img3Nav2').on('click', function () {
        $('#img3Nav2').css("opacity", "0");
        $('#span3Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img2Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img4Nav2').on('click', function () {
        $('#img4Nav2').css("opacity", "0");
        $('#span4Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img2Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img5Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span5Nav2').css("font-weight", "normal");
    });

    $('#img5Nav2').on('click', function () {
        $('#img5Nav2').css("opacity", "0");
        $('#span5Nav2').css("font-weight", "bold");
        $('#img1Nav2').css("opacity", "1");
        $('#img2Nav2').css("opacity", "1");
        $('#img3Nav2').css("opacity", "1");
        $('#img4Nav2').css("opacity", "1");
        $('#span1Nav2').css("font-weight", "normal");
        $('#span2Nav2').css("font-weight", "normal");
        $('#span3Nav2').css("font-weight", "normal");
        $('#span4Nav2').css("font-weight", "normal");
    });


  


    Element.prototype.hasClass = function (className) {
        return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);


    };
    var totalItems = $('.item').length;
    var currentIndex = $('div.active').index() + 1;

 

   


    $("#sortable").sortable({
        axis: "x"
    });

    $("#sortable").disableSelection();

    //var mySlider = $("#slider").slider({
    //    min: 1,
    //    max: 5,
    //    step: 1,
    //    value: 3,

    //});



});