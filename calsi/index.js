let screen= document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue ='';
for(item of buttons){
    item.addEventListener('click', (e)=> {
            buttonText = e.target.innerText;
            console.log(buttonText)
            if (buttonText== 'X'){
                buttonText = '*';
                screen.Value += buttonText; 
                screen.Value = screenValue;
                
                document.getElementById("screen").Value += "X";
                function getOutput() {
                    return document.getElementById("screen").innerText;
               }
                  screen.value += buttonText;
              
            }
            else if (buttonText == 'C') {
                screen.value = "";
                screen.Value =screenValue;
            }

            else if (buttonText == '=') {
                screen.Value = eval(screenValue);
                screenValue += screen.value.buttonText;
                screen.value=screenValue;
                // screen.value += screenValue;
            }
            else {
                screenValue += buttonText;
                screen.Value = screenValue;
            }

        })
}