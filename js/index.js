$(document).ready(function() {

    let app = $('.app');
    let location = $('.location');

    location.on('click', function() {
        let self =  $(this);
        self.find('.new').show();
    })

})