var $btnIcon = $('#btn i')

$('#btn').on('click', function () {

      $('body').toggleClass('open')

      // console.log($('body').hasClass('open'))

      if ($('body').hasClass('open')) {
            $('#btn i')
                  .removeClass('ri-menu-line')
                  .addClass('ri-close-line')
      } else {
            $('#btn i')
                  .removeClass('ri-close-line')
                  .addClass('ri-menu-line')
      }

})