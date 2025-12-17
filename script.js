// Навигация между страницами
const nextButtons = document.querySelectorAll('.next');
const pages = document.querySelectorAll('.page');

nextButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        pages[index].classList.remove('active');
        pages[index + 1].classList.add('active');
    });
});

// Показать/скрыть текст
const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const nextText = btn.nextElementSibling;
        if (nextText.style.display === 'block') {
            nextText.style.display = 'none';
        } else {
            nextText.style.display = 'block';
        }
    });
});
