let nome = "padrao"
let xp = 0
let nivel = "nenhum"

if (xp <1.000 ) nivel = "Ferro"
else if (1.001 < xp < 2.000) nivel = "Bronze"
else if (2.001 < xp < 5.000) nivel = "Prata"
else if (5.001 < xp < 7.000) nivel = "Ouro"
else if (7.001 < xp < 8.000) nivel = "Platina"
else if (8.001 < xp < 9.000) nivel = "Ascendente"
else if (9.001 < xp < 10.000) nivel = "Imortal"
else if (xp >= 10.001) { 
    nivel ="Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)