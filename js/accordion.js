const accordionContents = document.getElementsByClassName('accordion__container');

for (i = 0; i < accordionContents.length; i++) {
    accordionContents[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}