export function initMenu() {
    console.log('Menu Hambúrguer (menu.js) iniciado.');

    const btnMobile = document.getElementById('btn-mobile');
    const menuPrincipal = document.getElementById('menu-principal');

    if(!btnMobile || !menuPrincipal) {
        console.warn('Elementos no menu mobile não encontrados. O Menu não funcionará.');
        return;
    }
    btnMobile.addEventListener('click', () => {
        console.log('Botão hambúrguer clicado.');

        menuPrincipal.classList.toggle('ativo');
        btnMobile.classList.toggle('ativo');

        const menuEstaAtivo = menuPrincipal.classList.contains('ativo');
        btnMobile.setAttribute('aria-expanded', menuEstaAtivo);
    });
}