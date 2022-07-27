document.getElementById("btn").addEventListener("click", form);
function form(){
    const name = String(document.getElementById("Name1").value);
    const email = String(document.getElementById("Email1").value);
    const password = String(document.getElementById("Password1").value);  
}
// let limit1 = document.getElementsByTagName("span")[0];
function passvalid(pass){
    const name = String(document.getElementById("Name1").value);
    let l1 = String(pass.value);
    let splitarr = l1.split("");
    let capital = false;
    let number = false;
    let unique = false;
    let includes = false;
    if(l1.length <8){
        document.getElementById("passwordHelpInline1").style = "color:red;"
    }
    else{
        document.getElementById("passwordHelpInline1").style = "color:green;"
        document.getElementById("progress").style = "display:inline-block;"
    }

    for(let i=0; i<l1.length; i++){
        // if(l1.charCodeAt(i) >= 65 && l1.charCodeAt(i)<=90){
        //     capital=true;
        // }
    if(l1.match(/[A-Z]/g)){
        capital=true;
    }
    }
    if(capital){
        document.getElementById("passwordHelpInline4").style = "color:green;"
        document.getElementById("progress").style = "display:inline-block;"
    }
    else{
        document.getElementById("passwordHelpInline4").style = ""
    }
    for(let k=0; k<l1.length; k++){
        // if(l1.charCodeAt(k) >= 49 && l1.charCodeAt(k)<=57){
        //     number = true;
        // }
        if(l1.match(/[0-9]/g)){
            number=true;
        }
    }
    if(number){
        document.getElementById("passwordHelpInline2").style = "color:green;"
    }
    else{
        document.getElementById("passwordHelpInline2").style = ""
    }
    for(let h =0; h<l1.length; h++){
        if((l1.charCodeAt(h) >= 33 && l1.charCodeAt(h)<=47) || (l1.charCodeAt(h) >=58 && l1.charCodeAt(h) <= 64)){
            unique = true;
          }
    }  
    if(unique){
        document.getElementById("passwordHelpInline3").style = "color:green;"
    }
    else{
        document.getElementById("passwordHelpInline3").style = ""
    }

    let nameArr = name.split("");
    nameArr.push(nameArr.join(''), name);
    for(let i =0; i<nameArr.length; i++){
        if(splitarr.includes(nameArr[i])){
            includes = true;  
        }
        if(includes){
            document.getElementById("passwordHelpInline5").innerHTML = "You can not include your name in password.";
            document.getElementById("passwordHelpInline5").style ="color:red;"
        }
        else{
            document.getElementById("passwordHelpInline5").innerHTML = "";
        }
    }
    console.log(splitarr);

    if(l1.length >=8 && unique && number && capital){
        document.getElementById("btn").removeAttribute("disabled");
      }
}

function emailvalid(email) {
     let emailvalue = String(email.value);
    let evalue = false;
     if(emailvalue.includes("@gmail.com")){
        evalue = true;  
     }
    if(evalue){
        document.getElementById("emailvalid").style =""
     }
     else{
        document.getElementById("emailvalid").innerText ="Please enter a valid Email including @gmail.com"
        document.getElementById("emailvalid").style ="color:red font-size:large"
     }
}
