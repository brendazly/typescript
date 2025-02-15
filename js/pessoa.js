"use strict";
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
var empresa;
(function (empresa) {
    class Pessoa {
        get nome() {
            return this._nome; // Retorna o valor de "_nome".
        }
        set nome(nome) {
            this._nome = nome; // Atribui o valor recebido ao atributo "_nome".
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        calacularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
    }
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
