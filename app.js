$(document).ready(function () {
    console.log('jQuery init');
    //attach a click event listener to all the img tags when the document is ready
    $('img').click(function () {
        $(this).hide();
    });

    var imgSourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function () {
        $('img[data-alt-src]').each(function () {
            new Image().src = $(this).data('alt-src');
        }).hover(imgSourceSwap, imgSourceSwap);
    });
});