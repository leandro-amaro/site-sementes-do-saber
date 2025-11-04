
import { showModal } from './modal.js';

export function initValidation() {
    console.log('JS de validação (com blur e máscaras) carregado.');

    const formulario = document.querySelector('.form-cadastro');
    if (!formulario) {
        return; 
    }

    const inputNome = document.querySelector('#nome');
    const inputEmail = document.querySelector('#email');
    const inputCpf = document.querySelector('#cpf');
    const inputTel = document.querySelector('#telefone');
    const inputDataNasc = document.querySelector('#datanasc');
    const inputCep = document.querySelector('#cep');
    const inputRua = document.querySelector('#rua');
    const inputNumero = document.querySelector('#numero');
    const inputCidade = document.querySelector('#cidade');
    const inputEstado = document.querySelector('#estado');

    const errorNome = document.querySelector('#error-nome');
    const errorEmail = document.querySelector('#error-email');
    const errorCpf = document.querySelector('#error-cpf');
    const errorTel = document.querySelector('#error-telefone');
    const errorDataNasc = document.querySelector('#error-datanasc');
    const errorCep = document.querySelector('#error-cep');
    const errorRua = document.querySelector('#error-rua');
    const errorNumero = document.querySelector('#error-numero');
    const errorCidade = document.querySelector('#error-cidade');
    const errorEstado = document.querySelector('#error-estado');

    console.log("DEBUG: O JS encontrou o <p> do telefone?", errorTel);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const telRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const cepRegex = /^\d{5}-\d{3}$/; 

    

    function mascaraCpf(event) {
        let valor = event.target.value.replace(/\D/g, ''); 
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); 
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); 
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
        event.target.value = valor.substring(0, 14); 
    }

    function mascaraTelefone(event) {
        let valor = event.target.value.replace(/\D/g, '');
        valor = valor.replace(/^(\d{2})(\d)/, '($1) $2'); 
        if (valor.length > 10) {
            valor = valor.replace(/(\s\d{5})(\d{4})$/, '$1-$2');
        } else {
            valor = valor.replace(/(\s\d{4})(\d{4})$/, '$1-$2');
        }
        event.target.value = valor.substring(0, 15); 
    }

    function mascaraCep(event) {
        let valor = event.target.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{5})(\d{1,3})$/, '$1-$2'); 
        event.target.value = valor.substring(0, 9); 
    }


    function validarCampoObrigatorio(input, errorElement, nomeCampo) {
        const valor = input.value.trim();
        if (valor === '') {
            errorElement.textContent = `O Campo "${nomeCampo}" não pode estar vazio.`;
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validarNome() {
        return validarCampoObrigatorio(inputNome, errorNome, 'Nome Completo');
    }

    function validarEmail() {
        if (!validarCampoObrigatorio(inputEmail, errorEmail, 'Email')) {
            return false;
        }
        
        const valor = inputEmail.value.trim();
        if (!emailRegex.test(valor)) {
            errorEmail.textContent = 'Por Favor, insira um formato de email válido.';
            return false;
        }

        errorEmail.textContent = ''; 
        return true;
    }

    function validarCpf() {
        if (!validarCampoObrigatorio(inputCpf, errorCpf, 'CPF')) {
            return false;
        }
        
        const valor = inputCpf.value.trim();
        if (!cpfRegex.test(valor)) {
            errorCpf.textContent = 'Formato de Cpf Inválido. Use XXX.XXX.XXX-XX.';
            return false;
        }
        
        errorCpf.textContent = '';
        return true;
    }

    function validarTelefone() {
        if (!validarCampoObrigatorio(inputTel, errorTel, 'Telefone')) {
            return false;
        }
        
        const valor = inputTel.value.trim();
        if (!telRegex.test(valor)) {
            errorTel.textContent = 'Formato de Telefone Inválido. Use (XX) XXXXX-XXXX.';
            return false;
        }

        errorTel.textContent = '';
        return true;
    }
    
    function validarDataNasc() {
        return validarCampoObrigatorio(inputDataNasc, errorDataNasc, 'Data de Nascimento');
    }

    function validarCep() {
        if (!validarCampoObrigatorio(inputCep, errorCep, 'CEP')) {
            return false;
        }

        const valor = inputCep.value.trim();
        if (!cepRegex.test(valor)) {
            errorCep.textContent = 'Formato de CEP Inválido. Use XXXXX-XXX.';
            return false;
        }

        errorCep.textContent = '';
        return true;
    }

    function validarRua() {
        return validarCampoObrigatorio(inputRua, errorRua, 'Rua');
    }
    function validarNumero() {
        return validarCampoObrigatorio(inputNumero, errorNumero, 'Número');
    }
    function validarCidade() {
        return validarCampoObrigatorio(inputCidade, errorCidade, 'Cidade');
    }
    function validarEstado() {
        return validarCampoObrigatorio(inputEstado, errorEstado, 'Estado');
    }


    inputCpf.addEventListener('input', mascaraCpf);
    inputTel.addEventListener('input', mascaraTelefone);
    inputCep.addEventListener('input', mascaraCep);

    inputNome.addEventListener('blur', validarNome);
    inputEmail.addEventListener('blur', validarEmail);
    inputCpf.addEventListener('blur', validarCpf);
    inputTel.addEventListener('blur', validarTelefone);
    inputDataNasc.addEventListener('blur', validarDataNasc);
    inputCep.addEventListener('blur', validarCep);
    inputRua.addEventListener('blur', validarRua);
    inputNumero.addEventListener('blur', validarNumero);
    inputCidade.addEventListener('blur', validarCidade);
    inputEstado.addEventListener('blur', validarEstado);


    formulario.addEventListener('submit', function(evento){
        evento.preventDefault(); 
        console.log('Botão ENVIAR clicado!');

        const isNomeValid = validarNome();
        const isEmailValid = validarEmail();
        const isCpfValid = validarCpf();
        const isTelValid = validarTelefone();
        const isDataNascValid = validarDataNasc();
        const isCepValid = validarCep();
        const isRuaValid = validarRua();
        const isNumeroValid = validarNumero();
        const isCidadeValid = validarCidade();
        const isEstadoValid = validarEstado();

        
        const isFormValid = isNomeValid && isEmailValid && isCpfValid && isTelValid && 
        isDataNascValid && isCepValid && isRuaValid && isNumeroValid && 
        isCidadeValid && isEstadoValid;

        if (isFormValid) {
            console.log('Formulário Válido! Pronto pra salvar.');
            const dadosVoluntario = {
                nomeCompleto: inputNome.value.trim(),
                email: inputEmail.value.trim(),
                cpf: inputCpf.value.trim(),
                telefone: inputTel.value.trim(),
                dataNascimento: inputDataNasc.value.trim(),
                cep: inputCep.value.trim(),
                rua: inputRua.value.trim(),
                numero: inputNumero.value.trim(),
                cidade: inputCidade.value.trim(),
                estado: inputEstado.value.trim()
            };

            const dadosVoluntarioJSON = JSON.stringify(dadosVoluntario);
        
            try {
                localStorage.setItem('voluntarioCadastrado', dadosVoluntarioJSON);
                console.log('Dados do voluntário salvos no LocalStorage!');
                
              
                showModal('Sucesso!', 'Seu cadastro foi realizado. Entraremos em contato em breve.'); 
                
                formulario.reset();
                
                errorNome.textContent = '';
                errorEmail.textContent = '';
                errorCpf.textContent = '';
                errorTel.textContent = '';
                errorDataNasc.textContent = '';
                errorCep.textContent = '';
                errorRua.textContent = '';
                errorNumero.textContent = '';
                errorCidade.textContent = '';
                errorEstado.textContent = '';
    
            } catch (error) {
                console.error('Erro ao salvar no LocalStorage:', error);
                
            
                showModal('Erro', 'Houve um erro ao salvar seu cadastro. Por favor, tente novamente.');
            }
                
        } else {
            console.warn('Formulário INVÁLIDO. Por Favor, corrija os erros.');
            
           
            showModal('Formulário Inválido', 'Por favor, corrija os campos destacados em vermelho antes de enviar.');
        }
     });
}