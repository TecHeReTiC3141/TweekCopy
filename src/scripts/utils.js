export function formTransition(from, to) {
    const fromForm = document.querySelector(`.blur-bg[data-id="${from}"]`);
    const toForm = document.querySelector(`.blur-bg[data-id="${to}"]`);
    fromForm.classList.remove("active");
    toForm.classList.add("active");
}