const prefecture = [
    '北海道',
    '青森県',
    '岩手県',
];
const city = {
    '北海道': [
        '札幌市',
        '函館市',
        '小樽市',
        '旭川市',
        '室蘭市',
        '釧路市',
        '帯広市',
        '北見市',
        '夕張市',
        '岩見沢市',
        '網走市',
        '留萌市',
        '苫小牧市',
        '稚内市',
        '美唄市',
        '芦別市',
        '江別市',
        '赤平市',
        '紋別市',
        '士別市',
        '名寄市',
        '三笠市',
        '根室市',
        '千歳市',
        '滝川市',
        '砂川市',
        '歌志内市',
        '深川市',
        '富良野市',
        '登別市',
        '恵庭市',
        '伊達市',
        '北広島市',
        '石狩市',
        '北斗市',
    ],
    '青森県': [
        '青森市',
        '弘前市',
        '八戸市',
        '黒石市',
        '五所川原市',
        '十和田市',
        '三沢市',
        'むつ市',
        'つがる市',
        '平川市',
    ],
    '岩手県': [
        '盛岡市',
        '宮古市',
        '大船渡市',
        '花巻市',
        '北上市',
        '久慈市',
        '遠野市',
        '一関市',
        '陸前高田市',
        '釜石市',
        '二戸市',
        '八幡平市',
        '奥州市',
        '滝沢市',
    ],
}
$(function() {
    // SERVICE CLICK EVENT
    $('.serviceBox').click(function() {
        const serviceBoxId = $(this).attr('id').slice(-1);
        const activeServiceDescriptionText = '#serviceDescriptionText' + serviceBoxId;

        $('.serviceBox').removeClass('active');
        $(this).addClass('active');

        $('.serviceDescriptionText').removeClass('active');
        $(activeServiceDescriptionText).addClass('active');
    });

    // PREFECTURE SELECT EVENT
    $('select[name="prefecture"]').change(function() {
        const selectedPrefecture = $(this).val();
        const cities = city[selectedPrefecture];

        $('select[name="city"]').empty();
        // $('select[name="city"]').append('<option value="" selected disabled>---</option>');
        cities.forEach(function(city) {
            $('select[name="city"]').append(`<option value="${city}">${city}</option>`);
        });
    });

    // HUMBURGER MENU CLICK EVENT
    $("#humburgerMenuButton").click(function () {
        if ($(this).hasClass('closeMenuButton')) {
            $(this).removeClass('closeMenuButton');
            $('.navList').slideToggle(300, function() {
                $(this).removeAttr('style');
            });
        } else {
            $(this).addClass('closeMenuButton');
            $('.navList').slideToggle(300);
        }
    });
});
