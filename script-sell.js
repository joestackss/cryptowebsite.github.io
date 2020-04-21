
    $(function () {
        let headerElem = $('header');
        let logo = $('#logo');
        let navMenu = $('#nav-menu');
        let navToggle = $('#nav-toggle');
        let active = $('#active')

       navToggle.on('click', () => {
           navMenu.css('right', '0');
       });

       $('#close-flyout').on('click', () => {
            navMenu.css('right', '-100%');
       });

       $(document).on('click', (e) => {
           let target = $(e.target);
           if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
               navMenu.css('right', '-100%');
           }
       });

       $(document).scroll(() => {
           let scrollTop = $(document).scrollTop();

           if (scrollTop > 0) {
               navMenu.addClass('is-sticky');
               logo.css('color', '#000');
               headerElem.css('background', '#fff');
               navToggle.css('border-color', '#fff');
               navToggle.find('.strip').css('background-color', '#fff');
               active.css ('border-color', '#000')
           } else {
               navMenu.removeClass('is-sticky');
               logo.css('color', '#fff');
               headerElem.css('background', '#032030');
               navToggle.css('bordre-color', '#fff');
               navToggle.find('.strip').css('background-color', '#fff');
               active.css ('border-color', '#fff')
           }

           headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
       });

       $(document).trigger('scroll');
    });

    $(document).ready( function() {
    $('.cookies-used').fadeIn();
    intert.setEvents();
    });

    var intert = {};

    intert.setEvents = function() {
    $('.black-complete-background').click( function() {
        $('.password-reset-div').fadeOut();
    });
    }

    intert.showPasswordForgotten = function() {
    $('.password-reset-div').fadeIn();
    }

    intert.closePF = function() {
    $('.password-reset-div').fadeOut();
    }

    $('#file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $('#filename').html(filename);

    });