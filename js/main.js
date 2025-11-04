// js/main.js

import { initSpa } from './spa.js';
import { initValidation } from './validacao.js';
import { initMenu } from './menu.js';
import { initDarkMode } from './dark-mode.js';

document.addEventListener('DOMContentLoaded', () => {

    console.log('App (main.js) iniciada...');


    initMenu();
    initDarkMode();


    if (document.querySelector('.hero-section')) {
        console.log('Página Principal detectada. Iniciando SPA...');
        
        initSpa(initValidation); 
    }

    if (document.querySelector('.form-cadastro')) { 
        console.log('Formulário de cadastro detectado. Iniciando Validação...');
        initValidation();
    }
});