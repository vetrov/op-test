(function () {
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

    var sections;

    function init() {
        sections = document.querySelectorAll('.section');
        sections.forEach(function (section) {
            var arrow = section.querySelector('.section__arrow');
            arrow.addEventListener('click', onClick.bind(section));
        });
    }

    function onClick(e) {
        var section = this;
        closeAllSections();
        section.classList.add('section--active');
    }

    function closeAllSections() {
        sections.forEach(function (section) {
            section.classList.remove('section--active');
        });
    }

}());
