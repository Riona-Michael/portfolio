const buttons = document.querySelectorAll(".collapse-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        // Toggle active class
        btn.classList.toggle("active");

        // Toggle accordion content
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
