let navLinks;

export function initSpa(validationCallback) {
    
    navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (evento) => {
            
            evento.preventDefault(); 
            const url = link.getAttribute('href'); 
            
            console.log(`Link "Sequestrado"! URL: ${url}. (A página NÃO recarregou).`);
            
            loadPage(url, validationCallback);
        });
    });

    if (navLinks.length > 0) {
        navLinks[0].click(); 
    }
}

async function loadPage(url, validationCallback) {

    console.log(`Carregando Página: ${url}`);

    try {
        const response = await fetch(url);
        const pageText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(pageText, 'text/html');

        const newMainContent = doc.querySelector('main').innerHTML;

        const mainElement = document.querySelector('main');
        mainElement.innerHTML = newMainContent;

        if (url.includes('cadastro.html')) {
            console.log('Página de cadastro carregada. Ativando validação...');
            validationCallback();
        }
        initMainLinks(validationCallback);

    } catch(error) {
        console.error('Erro ao carregar a página:', error);
        alert('Não Foi Possível carregar o conteúdo. Tente novamente.');
    } 
       
   
}

function initMainLinks(validationCallback) {
    const mainElement = document.querySelector('main');
    if(!mainElement) return;

    const links = mainElement.querySelectorAll('a');
    links.forEach(link => {
        if (link.href.startsWith(window.location.origin) && !link.href.endsWith('#')) {
            link.addEventListener('click', (evento) => {
                evento.preventDefault();
                const url = link.getAttribute('href');

                loadPage(url, validationCallback);
            });
        }
    });
}