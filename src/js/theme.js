const theme = document.getElementById('dark');
const button = document.getElementById('button');
const html = document.querySelector('html')
console.log(theme)


// mobile
theme.addEventListener('click', () => {
     html.classList.toggle('dark')
})

// desktop
button.addEventListener('click', () => {
     html.classList.toggle('dark')
})

// Hamburger button
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', () => {
     navMenu.classList.toggle('hidden')
})