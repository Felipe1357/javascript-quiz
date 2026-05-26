const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Seja bem-vindo(a) ao Quiz Mitológico!')
console.log('Responda com a letra correta: a, b, ou c\n')

let acertos = 0

rl.question('1) Qual o nome do filho mais famoso de Poseidon?\na) Jason\nb) Annabeth\nc) Percy\n>>>', (resposta1) => {
    if (resposta1 === 'c'){
        acertos++
    }

    rl.question('2) Qual foi o monstro que atacou Percy ao chegar no acampamento?\na) Minotauro\nb) Fúrias\nc) Medusa\n>>>', (resposta2) => {
        if (resposta2 === 'a'){
            acertos++
        }

        rl.question('3) Qual é o último livro da primeira saga de Percy Jackson?\na) Mar de Monstros\nb) A Maldição do Titã\nc) O Último Olimpiano\n>>>', (resposta3) => {
            if (resposta3 === 'c'){
                acertos++
            }
            rl.close()

            if (acertos === 3){
                console.log('Parabéns! Voce acertou tudo!')
            } else if (acertos === 2){
                console.log('Muito bom, continue assim!')
            } else if (acertos === 1) {
                console.log('Muito bom, continue melhorando!')
            } else {
                console.log('Continue praticando')
            }
        })
    })
})

