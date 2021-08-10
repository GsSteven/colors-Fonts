
$("document").ready(() => {

    //toggle light and dark mode
    $("#lightDarkMode").click(() => {
        if ($("body").css("backgroundColor") !== "rgb(0, 0, 0)") {
            $('nav').css("background-color", 'rgb(0, 0, 0)');
            $('.navLink').css('color', 'rgb(255, 255, 255)');
            $("#lightDarkImg").attr("src", './images/sun.svg');
            $("#lightDarkMode").attr("title", "Light Mode");
            $(".grabPalette").children('img').attr("src", "./images/pinWhite.svg");
            $('body').css({ "backgroundColor": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" });
            $('.fontNav').css("backgroundColor", "rgb(0, 0, 0)");
            $('.fontName').css("borderBottom", '1px solid white');
            $('#hideShowArrow').attr("src", "./images/upArrowWhite.svg");
        } else {
            $('nav').css("background-color", 'rgb(255, 255, 255)');
            $('.navLink').css('color', 'rgb(0, 0, 0)');
            $("#lightDarkImg").attr("src", './images/moon.svg');
            $("#lightDarkMode").attr("title", "Dark Mode");
            $(".grabPalette").children('img').attr("src", "./images/pin.svg");
            $('body').css({ "backgroundColor": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)" });
            $('.fontNav').css("backgroundColor", "rgb(255, 255, 255)");
            $('.fontName').css("borderBottom", '1px solid black');
            $('#hideShowArrow').attr("src", "./images/upArrow.svg");
        }
    })

    //on color click show rgb
    $('.color').click(function () {
        const color = $(this).css("backgroundColor");
        const splitColor = color.replace(/\D/g, ' ').trim().split(' ');
        const simpleRGB = `${splitColor[0]} ${splitColor[2]} ${splitColor[4]}`;
        //show or hide rgb value
        if (!$(this).html()) {
            $(this).html(simpleRGB);
        } else {
            $(this).html('');
        }

        function isDark(color) {
            var match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(color);
            return parseFloat(match[1])
                + parseFloat(match[2])
                + parseFloat(match[3])
                < 3 * 256 / 2; // r+g+b should be less than half of max (3 * 256)
        }
        //if color is dark make rgb text white
        if (isDark(color)) {
            $(this).css("color", "white");
        }
    });

    //set chosen pallete to top of page
    $('.grabPalette').click(function () {
        if ($("body").css("backgroundColor") !== "rgb(0, 0, 0)") {
            $(this).children('img').attr("src", './images/pin.svg');
        } else {
            $(this).children('img').attr("src", './images/pinWhite.svg');
        }
        $(this).parent().toggleClass("topOfPage");
    });

    //change test text on input changes
    //change text
    $("#text1").change(e => {
        const value = e.target.value;
        $(".font1").html(value);
    });
    $("#text2").change(e => {
        const value = e.target.value;
        $(".font2").html(value);
    });

    //change font size
    $("#text1Size").change(e => {
        const value = e.target.value;
        $(".font1").css("fontSize", `${value}px`);
    });
    $("#text2Size").change(e => {
        const value = e.target.value;
        $(".font2").css("fontSize", `${value}px`);
    });

    //change font color
    $("#text1Color").change(e => {
        const value = e.target.value;
        $(".font1").css("color", value);
    });
    $("#text2Color").change(e => {
        const value = e.target.value;
        $(".font2").css("color", value);
    });

    //toggle font Nav
    $("#hideShowFontNav").click(() => {
        $('.fontHeadContainer').slideToggle();
        $('.fontSubContainer').slideToggle();
        $('.backgroundUpload').slideToggle();
        $('#hideShowArrow').toggleClass('flip');
    });

    //handle background color change
    $("#backgroundColorPick").change(e => {
        const value = e.target.value;
        $(".selectedFonts").css("backgroundColor", value);
    });

    //handle image 'uploading'
    $("#imageUpload").change(e => {
        const image = e.target.files[0];
        const tempURL = URL.createObjectURL(image);
        $(".selectedFonts").css("backgroundImage", `url(${tempURL})`);
        $("#clearImage").css("display", "block");
        $(".radioContainer").css("display", "flex");
        $("#imagePositionHead").css("display", "block");
    });

    //handle clearing background image
    $("#clearImage").click(function () {
        $(".selectedFonts").css("backgroundImage", ``);
        $(this).css("display", "none");
        $('.radioContainer').css("display", "none");
        $('#imagePositionHead').css("display", "none");
    });

    //handle background image position change
    $(".backgroundRadioButtons").change(e => {
        const value = e.target.value;
        $(".selectedFonts").css("backgroundPosition", value);
    });
})
