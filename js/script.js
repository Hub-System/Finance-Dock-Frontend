const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const invertedTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', invertedTheme);
    document.body.classList.toggle('light-mode'); // Adiciona ou remove a classe 'light-mode' ao corpo do documento
}

function toggleLocalStorage() {
    if (isLight()) {
        localStorage.removeItem("light");
    } else {
        localStorage.setItem("light", "set");
    }
}

function isLight() {
    return localStorage.getItem("light");
}

if (isLight()) {
    toggleRootClass();
}
