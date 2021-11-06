$(document).ready(function() {

    /** Position fixed header **/
    const positionFixedHeader = () => {

        $(window).scroll(function() {
            let header = $('.header'),
                scroll = $(window).scrollTop();
            if (scroll >= 20) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        })
    }

    positionFixedHeader();

    /** Show popup **/
    const showPopup = () => {

        $(document).on('click', '#showPopup', function() {
            $('.modal').addClass('show');
        })

    };

    showPopup();

    const hidePopup = () => {
        $(document).on('click', '.modal__btn, .close', function() {
            $('.modal').removeClass('show');
        })
    };
    hidePopup();
});