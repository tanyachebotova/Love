function toggleText(id, btn) {
    const text = document.getElementById(id);

    if (text.style.display === "block") {
        text.style.display = "none";
        btn.style.display = "inline-block";
    } else {
        text.style.display = "block";
        btn.style.display = "none";
    }
}
