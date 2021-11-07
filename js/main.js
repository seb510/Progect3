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

    /** Show popup **/
    const showPopup = () => {

        $(document).on('click', '#showPopup', function() {
            $('.modal').addClass('show');
        })

    };

    const hidePopup = () => {
        $(document).on('click', '.modal__btn, .close', function() {
            $('.modal').removeClass('show');
        })
    };

    positionFixedHeader();
    showPopup();
    hidePopup();
});