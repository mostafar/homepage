
function arrangeBadges() {

    var x = document.getElementById('badges');
    var m = new Masonry (x, {
        columnWidth: 100,
        itemSelector: '.item'
    });
}

/* Google Plus */
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();
