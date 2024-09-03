document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;
    const lightModeButton = document.getElementById('light_button');
    const darkModeButton = document.getElementById('dark_button');

    lightModeButton.style.display="none";
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        lightModeButton.style.display = 'block';
        darkModeButton.style.display = 'none';
    };

    const enableLightMode = () => {
        body.classList.remove('dark-mode');
        lightModeButton.style.display = 'none';
        darkModeButton.style.display = 'block';
    };

    darkModeButton.addEventListener('click', enableDarkMode);
    lightModeButton.addEventListener('click', enableLightMode);
});
