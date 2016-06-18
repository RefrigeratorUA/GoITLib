(function($) {
    $.fn.carousel = function(options) {
        var $moveLeft = this.find(">:first-child");
        var $moveRight = this.find(">:last-child");
        var $elementList = this.find("ul");

        var defaults = {
            delay: 6000,
            easing: "easeInCubic",
            widthLeftArrow: "20px",
            colorLeftArrow: "lightgreen"
        }
        var settings = $.extend(defaults, options);

        var pixelOffset = 310;
        var currentLeftValue = 0;
        var elementCount = $elementList.find("li").length;

        var minimumOffset = 0;
        if (elementCount > 3) {
            minimumOffset = - ((elementCount - 3) * pixelOffset);
        }
        var maximumOffset = 0;
        if (currentLeftValue <= minimumOffset) {
            $moveRight.css({"border-left":settings.widthLeftArrow + " solid transparent", "cursor":"default"});
        }
        var $autoScrollRight = function() {
            if (currentLeftValue != minimumOffset) {
                $moveLeft.css({"border-right":settings.widthLeftArrow + " solid " + settings.colorLeftArrow, "cursor":"pointer"});
                currentLeftValue -= 310;
                $elementList.animate({left: currentLeftValue + "px"}, 1000, settings.easing);
                if (currentLeftValue == minimumOffset) {
                    $moveRight.css({"border-left":settings.widthLeftArrow + " solid transparent", "cursor":"default"});
                    clearInterval($autoScrollGo);
                    setTimeout(function(){
                        if (currentLeftValue == minimumOffset) {
                            currentLeftValue = 0;
                            $elementList.animate({left: currentLeftValue + "px"}, 1500, "easeOutBack");
                            $moveLeft.removeAttr("style");
                            $moveRight.removeAttr("style");
                            $autoScrollGo = setInterval($autoScrollRight, settings.delay);
                        }
                    }, settings.delay);
                }
            }
        };

        var $autoScrollGo = setInterval($autoScrollRight, settings.delay);

        $moveLeft.on('click', function(e){
            e.preventDefault();
            if (currentLeftValue != maximumOffset) {
                if ($moveRight.attr("style")) {
                    $moveRight.removeAttr("style");
                }
                currentLeftValue += 310;
                clearInterval($autoScrollGo);
                $elementList.animate({left: currentLeftValue + "px"}, 200);
                $autoScrollGo = setInterval($autoScrollRight, settings.delay);
                if (currentLeftValue == maximumOffset) {
                    $moveLeft.removeAttr("style");
                }
            }
        });
        $moveRight.on('click', function(e){
            e.preventDefault();
            if (currentLeftValue != minimumOffset) {
                $moveLeft.css({"border-right":settings.widthLeftArrow + " solid " + settings.colorLeftArrow, "cursor":"pointer"});
                currentLeftValue -= 310;
                clearInterval($autoScrollGo);
                $elementList.animate({left: currentLeftValue + "px"}, 200);
                $autoScrollGo = setInterval($autoScrollRight, settings.delay);
                if (currentLeftValue == minimumOffset) {
                    $moveRight.css({"border-left":settings.widthLeftArrow + " solid transparent", "cursor":"default"});
                    clearInterval($autoScrollGo);
                    setTimeout(function(){
                        if (currentLeftValue == minimumOffset) {
                            currentLeftValue = 0;
                            $elementList.animate({left: currentLeftValue + "px"}, 1500, "easeOutBack");
                            $moveLeft.removeAttr("style");
                            $moveRight.removeAttr("style");
                            $autoScrollGo = setInterval($autoScrollRight, settings.delay);
                        }
                    }, settings.delay);
                }
            }
        });
        return this;
    }
})(jQuery);
