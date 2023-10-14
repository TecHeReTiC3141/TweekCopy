const formBlurDict = {
    "login-form": "login-form",
    "task-menu": "task-menu",
    "update-user-form": "update-user-form",
    "signup-form": "signup-form",
}

export function formTransition(from, to) {
    const fromForm = document.querySelector(`.blur-bg[data-id="${from}"]`);
    fromForm.classList.remove("active");
    openForm(to);
}

export function openForm(formBlurId) {
    const formBlur = document.querySelector(`[data-id='${formBlurId}']`);
    formBlur.classList.add('active');
    formBlur.querySelector(`.${formBlurId}`).animate([
        {
            top: "6rem",
            opacity: .5,
        },
        {
            top: "3.5rem",
            opacity: 1,
        },
    ], {
        duration: 300,
        fill: "forwards",
    });
}