const botoes = Document.queryselectorA11(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick=fungtion(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classlist.remove("ativo")
        }

        botoes[i].classlist.remove("ativo");
    }
    console.log();
}