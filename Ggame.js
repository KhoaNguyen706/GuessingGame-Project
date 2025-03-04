const numval = document.getElementById('numval');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
let computer_number = Math.floor(Math.random()*100)+1


btn.addEventListener('click',function guess(){
    const input_value = parseFloat(numval.value);
    result.style.animation = 'none';
    result.offsetHeight; 
    result.style.animation = 'shake 0.5s ease-in-out';

    if(isNaN(input_value)){
        result.textContent=`Please enter your guess`
    }else{
        if(input_value === computer_number){
            result.textContent=`Correct Number`
            result.style.animation = 'none';
        }else if( input_value > computer_number){
            result.textContent=`Too high`
        }else{
            result.textContent=`Too low`
        }
    }
})