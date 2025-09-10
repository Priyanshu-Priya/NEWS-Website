const sidebarCheckbox = document.getElementById('sidebar-active'); 

window.addEventListener('load', ()=> fetchNews("India"));
async function fetchNews(query) {
    try {
        const res = await fetch(`/.netlify/functions/get-news?q=${query}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.articles) {
            bindData(data.articles);
        } else {
            loadTemplate(10); // Load the template if no articles are found
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        loadTemplate(16); // Load the template 16 times on error
    }
}

function loadTemplate(count) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    // Clear existing content
    cardsContainer.innerHTML = '';

    // Load the template multiple times
    for (let i = 0; i < count; i++) {
        const cardClone = newsCardTemplate.content.cloneNode(true);
        const newsImg = cardClone.querySelector("#news-img");
        const newsTitle = cardClone.querySelector("#news-title");
        const newsSource = cardClone.querySelector("#news-source");
        const newsDesc = cardClone.querySelector("#news-desc");

        // Set placeholder text and image
        // newsImg.src = "placeholder-image.jpg"; 
        newsTitle.innerHTML = "Loading articles...";
        // newsSource.innerHTML = "Sample Source";
        newsDesc.innerHTML = `This is a sample article.  Unfortunately, we are unable to fetch live news data at this time because GitHub Pages doesn't support API calls. See the GitHub repo  to enable live updates locally. `;

        cardClone.firstElementChild.addEventListener("click", () => {
            window.open("https://github.com/Priyanshu-Priya/NEWS-Website", "_blank"); // Replace with your GitHub link
        });


        cardsContainer.appendChild(cardClone);
    }
}

function reload(){
    window.location.reload();
}

function bindData(articles){
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML= '';
    
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone , article)
        cardsContainer.appendChild(cardClone);
    });
  
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name} • ${date}`;

    // Open article link when card is clicked
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let cureSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    
    cureSelectedNav?.classList.remove('active');
    
    cureSelectedNav = navItem;
    cureSelectedNav.classList.add('active');

    
    if (sidebarCheckbox) {
        sidebarCheckbox.checked = false; // Uncheck the checkbox (hide the sidebar)
    }

}

const searchButton = document.getElementById('search-btn');
const searchText = document.getElementById('Search-Box');

// Function to handle the search action
const performSearch = () => {
    const query = searchText.value;  
    if (!query) return;
    fetchNews(query);
    sidebarCheckbox.checked = false;
}

// Trigger search when the search button is clicked
searchButton.addEventListener("click", () => {
    performSearch();
});

// Trigger search when the Enter key is pressed in the search box
searchText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});




 //Get the button:
 mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
 })
