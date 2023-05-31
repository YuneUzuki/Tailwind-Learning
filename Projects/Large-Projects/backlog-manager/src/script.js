var currentTheme = 'dark'
var menuToggled = true;

function SetBaseTheme()
{
    currentTheme = 'dark';
    document.documentElement.classList.add(currentTheme);
    document.getElementById("theme-icon").innerHTML = `<svg class="w-6 h-6 invert" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Environment / Moon"> <path id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`;
    document.getElementById("theme-icon-small").innerHTML = `<svg class="w-6 h-6 invert" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Environment / Moon"> <path id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`;
    document.getElementById("hamburger-icon").innerHTML = `<svg class="w-6 h-6 dark:invert hover:drop-shadow-md duration-200" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"/></svg>`
}

function ChangeTheme()
{
    if(currentTheme == 'dark')
    {
        currentTheme = 'light';
        document.documentElement.classList.remove('dark');
        document.getElementById("theme-icon").innerHTML = `<svg class="w-6 h-6" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Environment / Sun"> <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`
        document.getElementById("theme-icon-small").innerHTML = `<svg class="w-6 h-6" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Environment / Sun"> <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`
    }
    else
    { 
        currentTheme = 'dark';
        document.documentElement.classList.add('dark');
        document.getElementById("theme-icon").innerHTML = `<svg class="w-6 h-6 invert" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Environment / Moon"> <path id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`;
        document.getElementById("theme-icon-small").innerHTML = `<svg class="w-6 h-6 invert" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Environment / Moon"> <path id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`;
    }
}

function ToggleMenu()
{
    if(menuToggled)
    {
        document.getElementById('nav-menu').classList.add('none');
        document.getElementById('hamburger-icon').innerHTML = `<svg class="w-6 h-6 dark:invert hover:drop-shadow-md duration-200" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"/></svg>`
        menuToggled = false;
    }
    else
    {
        document.getElementById('nav-menu').classList.remove('none');
        document.getElementById('hamburger-icon').innerHTML = `<svg class="w-6 h-6 dark:invert" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"> <title>cancel2</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </svg>`;
        menuToggled = true;
    }
}