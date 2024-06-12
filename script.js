// Seu JSON
var data = {
    "clientes": [],
    "admins": []
  };
  
  // Função para lidar com o login
  function handleLogin(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
  
    // Coleta os dados do formulário
    var nome = document.getElementById('nome').value;
    var usuario = document.getElementById('usuario').value;
  
    // Verifica se o usuário é um cliente ou um administrador
    if (usuario === 'cliente') {
      // Adiciona o novo cliente ao JSON
      data.clientes.push({
        id: data.clientes.length + 1,
        nome: nome,
        senha: senha
      });
  
      // Redireciona para a página do cliente
      window.location.href = 'cliente.html';
    } else if (usuario === 'admin') {
      // Adiciona o novo administrador ao JSON
      data.admins.push({
        id: data.admins.length + 1,
        nome: nome,
        senha: senha
      });
  
      // Redireciona para a página do administrador
      window.location.href = 'admin.html';
    }
  }
  
  // Adiciona o manipulador de eventos ao formulário
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  