$(function() {
    // CLICK EVENT
    $('.serviceBox').click(function() {
        const serviceBoxId = $(this).attr('id').slice(-1);
        const activeServiceDescriptionText = '#serviceDescriptionText' + serviceBoxId;

        $('.serviceBox').removeClass('active');
        $(this).addClass('active');

        $('.serviceDescriptionText').removeClass('active');
        $(activeServiceDescriptionText).addClass('active');
    });
});
