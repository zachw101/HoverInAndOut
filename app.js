$(document).ready(function(){
    console.log('jQuery init');
    //attach a click event listener to all the img tags when the document is ready
        $('img').click(function(){
            $(this).hide();
        });

$( "img" ).hover(
    function() {
        $( this ).attr("src", 'img/two.jpg' );
        console.log('hover');
    },
    function() {
        $( this ).attr( "src", $(this.attr( "src")));
        console.log('unhover');
    }
    );
    });