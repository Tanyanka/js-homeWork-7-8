$(function () {
    $('ul.tabs_list').each(function () {
        $(this).find('li').each(function (i) {
            $(this).click(function () {
                $(this).addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs_text').removeClass('active').eq(i).addClass('active')
            })
        })
    })
})
