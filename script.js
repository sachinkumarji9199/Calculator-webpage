const inputvalue = document.getElementById('inputBox');
let buttons = document.queryselectorAll('button');

let string =''

  buttons.forEach(button =>{
      element.addEventListener('click', (e) =>{ 
           if(e.target.innerText == '='){
              string = string(eval(string))
             inputBox.value = string;
           }
           else if(e.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
           }
           else if( e.target.innerText == 'DEL'){
              string = string.substring(0, string.length-1)
              inputBox.value = string;
           }
           
           else{
            string += e.target.innerText
            inputBox.value = string
           }
      
       })
})