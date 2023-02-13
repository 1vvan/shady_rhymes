
// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})

// Spoiler Visualize
document.querySelectorAll('.visualize__spoiler_title').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.visualize__spoiler_text').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.visualize__spoiler_text').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})


// Spoiler Footer
document.querySelectorAll('.footer__title').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.footer__links').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.footer__links').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})