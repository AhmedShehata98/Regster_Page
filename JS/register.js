// Adding Auth Syntax To form
const Email = document.querySelector('#Email');
const password = document.querySelector('#password');
const PassRepeated = document.querySelector('#Repassword');
const approvalBox =  document.querySelector('#agrred');
const SendDataBtn =  document.querySelector('#send');
const Span_of_Progress      = document.querySelector('section .container .main_Sign form .email .checkProgressMail span:first-of-type');
const Span_of_Pass_Progress = document.querySelector('section .container .main_Sign form .password .CheckProgPass span:first-of-type');
const Span_of_repProgress   = document.querySelector('section .container .main_Sign form .CheckProgPassrep span:first-of-type');
const Span_of_Count         = document.querySelector('section .container .main_Sign form .email .checkProgressMail span:last-of-type');
const Span_of_Pass_Count    = document.querySelector('section .container .main_Sign form .password .CheckProgPass span:last-of-type');
const Span_of_rePass_Count  = document.querySelector('section .container .main_Sign form .CheckProgPassrep span:last-of-type');

Email.addEventListener('keyup',()=>{
    return aproveMail(Email , Span_of_Progress,Span_of_Count);
})
function aproveMail(element , progBar , Count){
    if( element.value.includes('@' && '.') ){
     progBar.style.backgroundColor='green';
     progBar.style.width='100%';
     Count.innerHTML=''
     Count.innerHTML='تمام'
        
}else{
    progBar.style.backgroundColor='red';
    progBar.style.width='100%';
    Count.innerHTML=''

}

}
password.addEventListener('keyup',()=>{
    aprovePassword(password,Span_of_Pass_Progress , Span_of_Pass_Count)
})
function aprovePassword(element , prog ,Count){

    if ( /[a-z]/.test(element.value) ) {
        prog.style.backgroundColor='#F90716';
        prog.style.width='15%'
        Count.innerHTML=element.value.split('').length
    
    }
    if( /[A-Z]/.test(element.value) ){
        prog.style.backgroundColor='#D06224';
        prog.style.width='35%'
        Count.innerHTML=element.value.split('').length;

    }
    if(/[0-9]/.test(element.value) ){
        prog.style.backgroundColor='#FFCC1D';
        prog.style.width='50%'
        Count.innerHTML=element.value.split('').length;
    }
    if(/[^A-Za-z0-9]/.test(element.value) ){
        prog.style.backgroundColor='#116530';
        prog.style.width='80%'
        Count.innerHTML=element.value.split('').length;
    }
    if(element.value.split('').length >9){
        prog.style.backgroundColor='#116530';
        prog.style.width='100%'
        element.setAttribute('Pass_Status','passed')
        Count.innerHTML=element.value.split('').length;
    }

}

PassRepeated.addEventListener('keyup' , ()=>{
    MathPass(password ,PassRepeated , Span_of_repProgress ,Span_of_rePass_Count )
})
function MathPass(elementOne , elementTwo ,prog ,count){
    if (elementOne !== ""){
        if (elementTwo.value === elementOne.value) {
            prog.style.backgroundColor="#116530"
            prog.style.width='100%'
            count.innerHTML='تمام '
            
        }else{
            prog.style.backgroundColor='#F90716';
            count.innerHTML=''
    
        }
    }
}
// disableSumbit(SendDataBtn , password)
// function disableSumbit(btn ,ele){
//     btn.disabled=true
//     btn.style.backgroundColor= '#eee'
//     if ( ele.hasAttribute('Pass_Status') == true) {
        
//         btn.disabled=false
//         btn.style.backgroundColor= 'var(--main-clr)'
//     }
// }


//Adding Toggle Menu logic 
const ToggleBtn   =  document.querySelector('.toggle');
const navMenu     = document.querySelector('nav')
ToggleBtn.addEventListener('click' ,()=>{
    navMenu.classList.toggle('active')
})