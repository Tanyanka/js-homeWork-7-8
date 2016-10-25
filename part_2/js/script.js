(function($){
$(function() {
    var title = $("input").attr("title");

            $("input").hover(function () {
                $(this).after("<div class='hint'></div>");
                $(this).next(".hint").text(title);
                $(this).next('.hint').animate({opacity: "show"}, "slow");
                $(this).prop('title', '');

            }, function () {
                $(this).siblings('.hint').remove();
            });

            $("button").click(function () {
                $("input").after("<div class='hint'></div>");
                $("input").next(".hint").text(title);
                $("input").next('.hint').animate({opacity: "show"}, "slow");
            });
        });
})(jQuery)
