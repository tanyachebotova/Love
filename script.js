document.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const nextText = btn.nextElementSibling;
        nextText.style.display = nextText.style.display === 'block' ? 'none' : 'block';
    });
});
