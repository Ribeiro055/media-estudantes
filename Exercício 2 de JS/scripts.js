let students = [
  { name: "Thomas", score1: 9, score2: 7 },
  { name: "Gabriela", score1: 10, score2: 8 },
  { name: "Pedro", score1: 6, score2: 7 },
  { name: "Charles", score1: 4, score2: 10 },
  { name: "Henrique", score1: 5, score2: 6 },
]

const avarage = (score1, score2) => {
  return ((score1 + score2)/2).toFixed(1)
}

function result(students) {

  for (let media of students) {
    if(avarage(media.score1, media.score2) >= 7) {
      alert(`A média do(a) aluno(a) ${media.name} é de ${avarage(media.score1, media.score2)}
      Parabéns, ${media.name}! Você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do(a) aluno(a) ${media.name} é de ${avarage(media.score1, media.score2)}
      Não foi dessa vez, ${media.name}. Tente novamente!`)  
    }
  }
  
  for(let student of students) {
    alert(result(student))  
  }
}

result(students);