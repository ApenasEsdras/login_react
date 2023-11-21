// validadores de acesso a aplicacao

const validarEmail = (email) => {
    // Utilizando uma expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email && emailRegex.test(email);
  };
  
  const validarSenha = (senha) => {
    // Verificando se a senha tem pelo menos 6 caracteres
    return senha && senha.length > 6;
  };
  
  export {
    validarEmail,
    validarSenha,
  };
  