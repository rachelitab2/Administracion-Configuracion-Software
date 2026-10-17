
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(
        "#versionado .details-button"
    );

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            details.hidden = isExpanded;
            button.setAttribute("aria-expanded", String(!isExpanded));
            button.textContent = isExpanded ? "Ver más" : "Ver menos";
        });
    });
});

