function toggleLogin() {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn.innerText === 'Iniciar sesión') {
        loginBtn.innerText = 'Cerrar sesión';
    } else {
        loginBtn.innerText = 'Iniciar sesión';
    }
}

function addDefinition() {
    const addDefinitionBtn = document.getElementById('add-definition-btn');
    addDefinitionBtn.style.display = 'none';
    alert('Petlopedia está definida por TI');
}

function likeDefinition(button, title) {
    const currentLikes = parseInt(button.innerText.split(' ')[0]);
    button.innerText = `${currentLikes + 1} me gusta`;
    alert(`${title} was liked`);
}