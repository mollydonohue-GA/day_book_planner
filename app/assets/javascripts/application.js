// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

(function(){

    // List your words here:
    var words = [
        'thoughts.',
        'tasks.',
        'schedule.',
        'photos.',
        'LIFE.'
        ], i = 0,
         delay = 1;

    setInterval(function(){
        $('#changing-word').fadeOut(function(){
            var word = words[i=(i+1)%words.length]
            $(this).html(word).fadeIn();
            $(this).css('textColor', 'orange'); // or color of choice

            if (word == 'LIFE.'){
             delay = 5;
            }else {
             delay = 1;
            }
        });
       //  seconds
    }, delay * 2500);

})();