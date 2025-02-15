namespace empresa{
    let p = new Pessoa ();
p.nome = "Brenda";
p.anoNasc = 2008;

document.getElementById("nome").textContent = p.nome;
document.getElementById("ano").textContent = p.anoNasc.toString();
document.getElementById("idade").textContent = p.calacularIdade(2025).toString();

}