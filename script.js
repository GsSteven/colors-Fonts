
$("document").ready(() => {
    //toggle light and dark mode
    $("#lightDarkMode").click(() => {
        if ($("body").css("backgroundColor") !== "rgb(0, 0, 0)") {
            $("#lightDarkImg").attr("src", './images/sun.svg');
            $("#lightDarkMode").attr("title", "Light Mode");
            $('body').css({ "backgroundColor": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" });
            $('.fontNav').css("backgroundColor", "rgb(0, 0, 0)");
            $('.fontName').css("borderBottom", '1px solid white');
            $('#hideShowArrow').attr("src", "./images/upArrowWhite.svg");
        } else {
            $("#lightDarkImg").attr("src", './images/moon.svg');
            $("#lightDarkMode").attr("title", "Dark Mode");
            $('body').css({ "backgroundColor": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)" });
            $('.fontNav').css("backgroundColor", "rgb(255, 255, 255)");
            $('.fontName').css("borderBottom", '1px solid black');
            $('#hideShowArrow').attr("src", "./images/upArrow.svg");
        }
    })
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

    //change font color with Hex Code
    $("#text1ColorHex").change(e => {
        const value = e.target.value;
        $(".font1").css("color", `#${value}`);
    });
    $("#text2ColorHex").change(e => {
        const value = e.target.value;
        $(".font2").css("color", `#${value}`);
    });

    //change font color with RGBA
    $("#text1ColorRGBA").change(e => {
        const value = e.target.value.split(' ');
        const opacity = value[3] ? value[3] : 1;
        $(".font1").css("color", `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${opacity})`);
    });
    $("#text2ColorRGBA").change(e => {
        const value = e.target.value.split(' ');
        const opacity = value[3] ? value[3] : 1;
        $(".font2").css("color", `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${opacity})`);
    });

    //toggle font Nav
    $("#hideShowFontNav").click(() => {
        $('.fontHeadContainer').slideToggle();
        $('.fontSubContainer').slideToggle();
        $('#hideShowArrow').toggleClass('flip');
    })
})
