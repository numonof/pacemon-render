/////////////////// 1-MASALA/////////////////
function sumInput() {
    let input__numbers = [];
    let addNumber = prompt("Iltimos faqat son kiriting:");
    input__numbers.push(addNumber);

    for (let element of input__numbers) {
        element = Number(element)
/////////////////////////////////////////////////////
        if(isNaN(element) || element <= 0 ) {
         function numbersAdd(numberContent) {
        let result = "";
                for (let answer of numberContent) {
                    result = (result)*1 + (answer)*1;
                }
            console.log(result); 
            }
            input__numbers.pop(addNumber);
        } else if (element >= 0) {
            let addNumber = prompt("Iltimos faqat son kiriting:");
            input__numbers.push(addNumber);
        }
/////////////////////////////////////////////////////////////////////
    }
    alert(numbersAdd(input__numbers));
}
let inputSum = sumInput();


/////////// 3 - MASALA /////////////////
let salaries = {
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800
};
let sum = 0;
for(let key in salaries){
    sum = sum + salaries[key];
};
console.log(sum);