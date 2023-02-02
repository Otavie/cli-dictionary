const gitWordMeaning = document.getElementById('git-word-meaning');
const emacsWordMeaning = document.getElementById('emacs-word-meaning');
const viWordMeaning = document.getElementById('vi-word-meaning');

const gitSearchInput = document.getElementById('git-search-input');
const emacsSearchInput = document.getElementById('emacs-search-input');
const viSearchInput = document.getElementById('vi-search-input');

const theGitWord = document.querySelector('.git-word');
const theEmacsWord = document.querySelector('.emacs-word');
const theViWord = document.querySelector('.vi-word');

const gitUsage = document.querySelector('.git-usage');
const emacsUsage = document.querySelector('.emacs-usage');
const viUsage = document.querySelector('.vi-usage');


const gitUsageDetails = document.querySelector('.git-usage-details');
const emacsUsageDetails = document.querySelector('.emacs-usage-details');
const viUsageDetails = document.querySelector('.vi-usage-details');

const gitUsageDetailsMore = document.querySelector('.git-usage-details-more');
const emacsUsageDetailsMore = document.querySelector('.emacs-usage-details-more');
const viUsageDetailsMore = document.querySelector('.vi-usage-details-more');

const controlAlt = document.querySelector('.ctrl_alt');

const container = document.querySelector('.container')

async function searchGitCommand() {
    const gitSearchInputValue = (gitSearchInput.value).toLowerCase();

    if(!gitSearchInputValue){
        gitWordMeaning.innerText = 'Search box is empty. Enter a valid word/command!';
        theGitWord.innerText = '';
        gitUsage.innerText = '';
        gitUsageDetails.innerText = '';
        gitUsageDetailsMore.innerText = '';
    }else{
        const response = await fetch('git_commands.json');
        const data = await response.json();
        const words = data.words;
    
        for (const item of words) {
            if (item.word === gitSearchInputValue) {
                    theGitWord.innerText = `>> ${item.title}`;
                    gitWordMeaning.innerText = item.meaning;
                    gitUsage.innerText = '>> Usage: ';
                    gitUsageDetails.innerText = item.usage;
                    gitUsageDetailsMore.innerText = item.usage_more;
                    return;
                }else{
                    gitWordMeaning.innerText = 'Word not found. Enter a valid word/command!';
                    theGitWord.innerText = '';
                    gitUsage.innerText = '';
                    gitUsageDetails.innerText = '';
                    gitUsageDetailsMore.innerText = '';
                }
            }
        }

}


async function searchEmacsCommand() {
    const emacsSearchInputValue = (emacsSearchInput.value).toLowerCase();

    if(!emacsSearchInputValue){
        gitWordMeaning.innerText = 'Search box is empty. Enter a valid word/command!';
        theEmacsWord.innerText = '';
        emacsUsage.innerText = '';
        emacsUsageDetails.innerText = '';
        emacsUsageDetailsMore.innerText = '';
        controlAlt.innerHTML = '';
    }else{
        const response = await fetch('emacs_commands.json');
        const data = await response.json();
        const words = data.words;
    
        for (const item of words) {
            if (item.word === emacsSearchInputValue) {
                    theEmacsWord.innerText = `>> ${item.title}`;
                    emacsWordMeaning.innerText = item.meaning;
                    emacsUsage.innerText = '>> Usage: ';
                    emacsUsageDetails.innerText = item.usage;
                    emacsUsageDetailsMore.innerText = item.usage_more;
                    controlAlt.innerHTML = "Note: C-x means 'Hold Ctrl and x' | M-x means 'Hold Alt and x'";
                    return;
                }else{
                    emacsWordMeaning.innerText = 'Word not found. Enter a valid word/command!';
                    theEmacsWord.innerText = '';
                    emacsUsage.innerText = '';
                    emacsUsageDetails.innerText = '';
                    emacsUsageDetailsMore.innerText = '';
                    controlAlt.innerHTML = '';
                }
            }
        }

}


async function searchViCommand() {
    const viSearchInputValue = (viSearchInput.value).toLowerCase();

    if(!viSearchInputValue){
        viWordMeaning.innerText = 'Search box is empty. Enter a valid word/command!';
        theViWord.innerText = '';
        viUsage.innerText = '';
        viUsageDetails.innerText = '';
        viUsageDetailsMore.innerText = '';
        controlAlt.innerHTML = '';
    }else{
        const response = await fetch('vi_commands.json');
        const data = await response.json();
        const words = data.words;
    
        for (const item of words) {
            if (item.word === viSearchInputValue) {
                    theViWord.innerText = `>> ${item.title}`;
                    viWordMeaning.innerText = item.meaning;
                    viUsage.innerText = '>> Usage: ';
                    viUsageDetails.innerText = item.usage;
                    viUsageDetailsMore.innerText = item.usage_more;
                    controlAlt.innerHTML = "Note: C-x means 'Hold Ctrl and x' | M-x means 'Hold Alt and x'";
                    return;
                }else{
                    viWordMeaning.innerText = 'Word not found. Enter a valid word/command!';
                    theViWord.innerText = '';
                    viUsage.innerText = '';
                    viUsageDetails.innerText = '';
                    viUsageDetailsMore.innerText = '';
                    controlAlt.innerHTML = '';
                }
            }
        }
  
}


gitSearchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchGitCommand();
    }  
});

emacsSearchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchEmacsCommand();
    }  
});

viSearchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchViCommand();
    }  
});

const toggleButton = document.querySelector('.toggle-button');
const toggleIcon = document.querySelector('.toggle-icon');
const searchInputs = document.querySelectorAll('.search-input');
const searchCommand = document.querySelector('.search-command');
const details = document.querySelectorAll('.details');
const sectionContainer = document.querySelector('.section-container');

function changeBG(){
    container.classList.toggle('dark-mode');
    toggleIcon.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    searchCommand.classList.toggle('dark-mode');
    searchCommand.classList.toggle('dark-mode');
    viUsageDetails.classList.toggle('dark-mode');
    gitUsageDetails.classList.toggle('dark-mode');
    emacsUsageDetails.classList.toggle('dark-mode');
    controlAlt.classList.toggle('dark-mode');
    searchInputs.forEach((searchInput) =>{
        searchInput.classList.toggle('dark-mode');
    });
    sectionContainer.classList.toggle('dark-mode');
    details.forEach((detail) =>{
        detail.classList.toggle('dark-mode');
    });
}

toggleButton.addEventListener('click', changeBG);

const navLists = document.querySelectorAll('nav li');
const gitSection = document.querySelector('.git-section');
const emacsSection = document.querySelector('.emacs-section');
const viSection = document.querySelector('.vi-section');
const menu = document.querySelector('.menu');
const navMobileNav = document.querySelector('nav.mobile-nav');
const gitItem = document.querySelector('.git-item');
const emacsItem = document.querySelector('.emacs-item');
const viItem = document.querySelector('.vi-item');

function navFunction(){
    const sectionName = this.textContent.slice(1, -2);
    gitSection.classList.remove('active')
    gitSection.classList.remove('show')
    emacsSection.classList.remove('show')
    viSection.classList.remove('show')

    if(sectionName.includes('git')){
        gitItem.classList.add('active');
        emacsItem.classList.remove('active');
        viItem.classList.remove('active');
        menu.style.backgroundColor = '#F1502F';
        gitSection.classList.add('show');
        navMobileNav.classList.remove('active');
        navMobileNav.style.backgroundColor = '#F1502F';
    } else if (sectionName.includes('emacs')){
        emacsItem.classList.add('active');
        gitItem.classList.remove('active');
        viItem.classList.remove('active');
        menu.style.backgroundColor = '#5E5BA8';
        emacsSection.classList.add('show');
        navMobileNav.classList.remove('active');
        navMobileNav.style.backgroundColor = '#5E5BA8';
    }else if (sectionName.includes('vi')){
        viItem.classList.add('active');
        gitItem.classList.remove('active');
        emacsItem.classList.remove('active');
        menu.style.backgroundColor = '#018749';
        viSection.classList.add('show');
        navMobileNav.classList.remove('active');
        navMobileNav.style.backgroundColor = '#018749';
    }
}

navLists.forEach(navList =>{
    navList.addEventListener('click', navFunction)
})

// navUlLists.forEach(navList =>{
//     navList.addEventListener('click', navFunction)
// })

const mobileToggleButton = document.getElementById('mobile-toggle-button');
const mobileNav = document.querySelector('.mobile-nav')

mobileToggleButton.addEventListener('click', function() {
    mobileNav.classList.toggle('active')
})

