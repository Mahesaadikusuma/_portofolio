// DESKTOP
// Dark icon
const button = document.getElementById('button-theme');
const darkD = document.getElementById("darkD");
// light icon
const lightIcon = document.getElementById("lightD") 
// DESKTOP

const html = document.querySelector('html')



// mobile
const toggleMobile = document.getElementById('toggleMobile')
const MobileLight = document.getElementById('light-mobile')
const MobileDark = document.getElementById('dark-mobile')
toggleMobile.addEventListener('click', () => {
     toggleDarkMode();
})

// desktop
button.addEventListener('click', () => {
     toggleDarkMode();
})

// function updateIcon() {
//      const isDarkMode = html.classList.contains('dark');
//      if (isDarkMode) {
//           console.log('selamat anda is dark')
//           darkD.classList.remove('hidden');
//           lightIcon.classList.add('hidden');

//           // Mobile
//           MobileDark.classList.remove('hidden');
//           MobileLight.classList.add('hidden');

//           localStorage.theme = 'dark'


//      } else {
//           console.log('selamat anda is light')
//           darkD.classList.add('hidden');
//           lightIcon.classList.remove('hidden');

//           // Mobile
//           MobileDark.classList.add('hidden');
//           MobileLight.classList.remove('hidden');
          
//           localStorage.theme = "light";
//      }

//  }

function toggleDarkMode() {
     html.classList.toggle('dark');
     updateIcon();
     saveThemePreference();
 }

function updateIcon() {
     const isDarkMode = html.classList.contains('dark');
     
     darkD.classList.toggle('hidden', !isDarkMode);
     lightIcon.classList.toggle('hidden', isDarkMode);

     MobileDark.classList.toggle('hidden', isDarkMode);
     MobileLight.classList.toggle('hidden', !isDarkMode);

     localStorage.theme = isDarkMode ? 'dark' : 'light';
}

function saveThemePreference() {
     const isDarkMode = html.classList.contains('dark');
     localStorage.theme = isDarkMode ? 'dark' : 'light';
 }

 if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     // document.documentElement.classList.add('dark')
     html.classList.add('dark');
   } else {
     // document.documentElement.classList.remove('dark')
     html.classList.remove('dark');
   }

// Hamburger button
const hamburger = document.getElementById('hamburger')
const iconAlign = document.getElementById('align-right')
const iconClose = document.getElementById('close')
const navMenu = document.getElementById('nav-menu')

// hamburger.addEventListener('click', () => {
//      const isMenu = navMenu.classList.contains('hidden');
//      // navMenu.classList.toggle('hidden')
//      if (isMenu) {
//           navMenu.classList.remove('hidden');
//           iconAlign.classList.add('hidden');
//           iconClose.classList.remove('hidden');
//      } else {
//           iconAlign.classList.remove('hidden');
//           iconClose.classList.add('hidden');
//           navMenu.classList.add('hidden');
//      }
// })

hamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
     const isMenu = navMenu.classList.contains('hidden');
     navMenu.classList.toggle('hidden');

     iconAlign.classList.toggle('hidden', isMenu);
     iconClose.classList.toggle('hidden', !isMenu);
}

