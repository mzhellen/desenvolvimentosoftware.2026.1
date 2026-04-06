# features/login.feature
# language: pt

Funcionalidade: Autenticação de Usuário
  Como um usuário do Sonozen
  Quero poder fazer login com meu e-mail e senha
  Para acessar a inteligência artificial

  Cenário: Login com sucesso
    Dado que eu estou na página de login
    Quando eu preencho o e-mail com "amanda@gmail.com" e a senha com "amanda123"
    E clico no botão "Acessar Conta"
    Então eu devo ser redirecionado para a página inicial