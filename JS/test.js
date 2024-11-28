
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
console.log(arr)
arr.forEach(button => {
console.log(button)
  
    button.addEventListener('click', (e) =>{
console.log(e)

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})




// function generatpass(passLength){
//   let pass = '';
// let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//     'abcdefghijklmnopqrstuvwxyz0123456789@#$';
//     for (let i = 1; i <= passLength; i++) {
//       let char = Math.floor(Math.random()
//           * str.length + 1);
  
//       pass += str.charAt(char);
//   }
// return pass;
// }

// console.log(generatpass(12));