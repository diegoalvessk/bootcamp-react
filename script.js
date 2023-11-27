document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('botao');

    function bg() {
        var cor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = cor;
    }

    btn.addEventListener('click', bg);

    function random(max) {
        return Math.floor(Math.random() * (max + 1));
    }
});
