const operation = prompt( `Введите номер математической операции: 1)сложение, 2)вычитание, 3)умножение, 4)деление?`);
const num1 = Number( prompt(`Введите первое число`) ) ;
const num2 = Number( prompt(`Введите второе число`) ) ;

if (operation === `1`) alert(num1 + num2);
if (operation === `2`) alert(num1 - num2);
if (operation === `3`) alert(num1 * num2);
if (operation === `4`) alert(num1 / num2);
