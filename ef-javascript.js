$(document).ready(function (){


    
    function benefitShow1() {
        $("#ben1 .text-div div h1").css("display", "none");
        $("#ben1 .text-div div p").css("display", "block");
        $("#ben1").css("background-color"," #056676");
    }

    function benefitHide1() {
        $("#ben1 .text-div div h1").css("display", "block");
        $("#ben1 .text-div div p").css("display", "none");
        $("#ben1").css("background-color"," #171717");
    }

    $("#ben1").hover(benefitShow1,benefitHide1);


    function benefitShow2() {
        $("#ben2 .text-div div h1").css("display", "none");
        $("#ben2 .text-div div p").css("display", "block");
        $("#ben2").css("background-color"," #056676");

    }

    function benefitHide2() {
        $("#ben2 .text-div div h1").css("display", "block");
        $("#ben2 .text-div div p").css("display", "none");
        $("#ben2").css("background-color"," #171717");
    }

    $("#ben2").hover(benefitShow2,benefitHide2);

    function benefitShow3() {
        $("#ben3 .text-div div h1").css("display", "none");
        $("#ben3 .text-div div p").css("display", "block");
        $("#ben3").css("background-color"," #056676");

    }

    function benefitHide3() {
        $("#ben3 .text-div div h1").css("display", "block");
        $("#ben3 .text-div div p").css("display", "none");
        $("#ben3").css("background-color"," #171717");
    }

    $("#ben3").hover(benefitShow3,benefitHide3);

    function benefitShow4() {
        $("#ben4 .text-div div h1").css("display", "none");
        $("#ben4 .text-div div p").css("display", "block");
        $("#ben4").css("background-color"," #056676");

    }

    function benefitHide4() { 
        $("#ben4 .text-div div h1").css("display", "block");
        $("#ben4 .text-div div p").css("display", "none");
        $("#ben4").css("background-color"," #171717");
    }

    $("#ben4").hover(benefitShow4,benefitHide4);

    function benefitShow5() {
        $("#ben5 .text-div div h1").css("display", "none");
        $("#ben5 .text-div div p").css("display", "block");
        $("#ben5").css("background-color"," #056676");

    }

    function benefitHide5() {
        $("#ben5 .text-div div h1").css("display", "block");
        $("#ben5 .text-div div p").css("display", "none");
        $("#ben5").css("background-color"," #171717");
    }

    $("#ben5").hover(benefitShow5,benefitHide5);

    function benefitShow6() {
        $("#ben6 .text-div div h1").css("display", "none");
        $("#ben6 .text-div div p").css("display", "block");
        $("#ben6").css("background-color"," #056676");

    }

    function benefitHide6() {
        $("#ben6 .text-div div h1").css("display", "block");
        $("#ben6 .text-div div p").css("display", "none");
        $("#ben6").css("background-color"," #171717");
    }

    $("#ben6").hover(benefitShow6,benefitHide6);

    $('.gallery-pic').click(function(){
        let src = $(this).attr('src');
        let title = $(this).attr('alt');
        $('.modal-body img').attr('src', src);
        $('.modal-title').text(title);
    });

    

});
    