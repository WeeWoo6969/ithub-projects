/**Задача №4

Задана переменная word со строковым значением. 
Создайте переменную result с условием: 
если из длины переменной word вычисляется квадратный корень (без дробной части) - переменная result должна содержать ответ 1, 
в противном случае - 0  

Пример: 

let word = 'меню' 

Результат: 

1 */

const word = prompt('Your word')
const wordLength = word.length
let result = Math.sqrt(wordLength)
console.log(result)