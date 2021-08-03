const emailNode = document.querySelector('[data-email]');
const passwordNode = document.querySelector('[data-password]');

document.querySelector('[data-email]').addEventListener("input", () => {
    const emailMessage = document.querySelector('[data-error-massage-email]');

    if (!emailNode.validity.valid) {
        emailMessage.classList.remove('hidden');
    } else {
        emailMessage.classList.add('hidden');
    }

});

document.querySelector('[data-password]').addEventListener("input", () => {
    const passwordMessage = document.querySelector('[data-error-massage-password]');

    if (passwordNode.value.length < 6 && passwordNode.value.length != 0) {
        passwordMessage.classList.remove('hidden');
    } else {
        passwordMessage.classList.add('hidden');
    }
    
});
