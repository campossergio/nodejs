/**
 * Fundamentos da POO
 * Encapsulamento
 */

class User {
  // ATRIBUTOS
  constructor(login, senha) {
    this.login = login;
    // ENCAPSULAMENTO
    let _senha = senha;
    this.getSenha = () => _senha;
    this.setSenha = (novaSenha) => (_senha = novaSenha);
  }

  // AÇÃO
  logar() {
    console.log("_________________________________");
    console.log(`Usuário: ${this.login}`);
    console.log(`Senha: ${this.getSenha()}`);
    if (this.login === "admin" && this.getSenha() === "123456")
      console.log("Usuário Autenticado");
    else {
      console.log("Usuário e/ou senha inválido(s)");
    }
  }
}

/**
 * SISTEMA
 */

console.clear();
const user1 = new User("admin", "1234");
user1.logar();
user1.setSenha("123456");
user1.logar();

const user2 = new User("admin", "123456");
user2.logar();
