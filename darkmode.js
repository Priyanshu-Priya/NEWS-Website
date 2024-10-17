let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
};

// Check if dark mode was previously enabled
if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode'); // Update variable here
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
