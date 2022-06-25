// Crie um array que receba 5 itens e exiba no console.

let nome = ["Mylena","Leila","Leonardo","Maju","Bruno"]

console.log("Meus parentes", nome)

// Utilize um método para adicionar um nome ao inicio do array.

nome.unshift("Gumercy")
console.log("Novo membro", nome)

// Utilize um método para remover o último nome do array.

nome.pop()
console.log("Menos um membro", nome)

// Utilize um método para adicionar dois nomes ao fim do array.
nome.push("Carlos","Sonia")
console.log("Mais dois parentes", nome)

// Utilize um método para remover o primeiro nome do array.
nome.shift()
console.log("Menos um numero", nome)

// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
 console.log(numbers)

 numbers.sort(function(a, b){
return a - b;
 })
 console.log(numbers);