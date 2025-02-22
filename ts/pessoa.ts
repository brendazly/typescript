// namespace empresa {
//     class Pessoa{
//         private _nome:string;
//         private _anoNasc:number;

//         get nome(){
//             return this._nome;
//         }
//         set nome(nome:string){
//             this._nome=nome;-
//         }
//     }
// }

namespace empresa { // Inicia um "namespace" chamado "empresa" para organizar as classes.
   export class Pessoa { // Define uma classe chamada "Pessoa" dentro do namespace "empresa".
        private _nome: string; // Declara uma variável privada "_nome" para armazenar o nome da pessoa.
        private _anoNasc: number; // Declara uma variável privada "_anoNasc" para armazenar o ano de nascimento.

        get nome() { // Define um "getter" para acessar o valor da variável "_nome".
            return this._nome; // Retorna o valor de "_nome".
        }

        set nome(nome: string) { // Define um "setter" para modificar o valor de "_nome".
            this._nome = nome; // Atribui o valor recebido ao atributo "_nome".
        }
        get anoNasc (){
            return this._anoNasc;
        }

        set anoNasc(anoNasc:number){
            this._anoNasc =anoNasc;
        }
        public calcularIdade(anoAtual:number){
            return anoAtual - this._anoNasc;
        }
    }
}
