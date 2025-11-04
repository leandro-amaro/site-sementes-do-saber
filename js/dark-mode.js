

export function initDarkMode() {
    console.log('Modo Escuro (dark-mode.js) iniciado.');

    const body = document.body;
    const btnDarkMode = document.getElementById('btn-dark-mode');

    
    const aplicarTema = (tema) => {
        if (tema === 'dark') {
            body.classList.add('dark-mode');
            if (btnDarkMode) { 
                btnDarkMode.textContent = '☀️';
                btnDarkMode.setAttribute('aria-label', 'Alternar modo claro');
            }
        } else {
            body.classList.remove('dark-mode');
            if (btnDarkMode) {
                btnDarkMode.textContent = '🌙';
                btnDarkMode.setAttribute('aria-label', 'Alternar modo escuro');
            }
        }
    };

    const temaSalvo = localStorage.getItem('tema');
    
   
    const prefereDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let temaInicial = 'light'; 
    if (temaSalvo) {
        temaInicial = temaSalvo; 
    } else if (prefereDark) {
        temaInicial = 'dark'; 
    }

   
    aplicarTema(temaInicial);

    if (!btnDarkMode) {
        console.warn('Botão de modo escuro não encontrado nesta página.');
        return;
    }

    const trocarTema = () => {
        const temaAtual = body.classList.contains('dark-mode') ? 'light' : 'dark';
        aplicarTema(temaAtual);
        localStorage.setItem('tema', temaAtual);
    };
    
    btnDarkMode.addEventListener('click', trocarTema);
}