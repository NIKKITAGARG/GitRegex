let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == '`'){
            screen.value = screen.value.slice(0, -1);
        }
        // if(document.getElementById('back')){
        //     screen.value = screen.value.slice(0, -1);
        // }
        else if(buttonText == '='){
            try{
                screen.value = eval(screenValue);
            }
            catch(err){
                alert("Enter the valid Input");
            }
        }
        else if(buttonText == 'AC'){
            screenValue = "";
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // console.log(buttonText);
    })
}