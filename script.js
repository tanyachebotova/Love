// Кнопки "Показать больше"
document.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const nextText = btn.nextElementSibling;
        if(nextText.style.display === 'block') {
            nextText.style.display = 'none';
        } else {
            nextText.style.display = 'block';
        }
    });
});
