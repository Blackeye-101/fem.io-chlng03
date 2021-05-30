const email = document.querySelector('input');
const btn=document.querySelector('button');

function validate(test){
    if(test !==true){
        document.querySelector('.icon').style.visibility='visible';
        document.querySelector('.error-msg').style.visibility='visible';
        document.querySelector('input.email').classList.add('wrong');
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
    const test = regex.test(email.value);
    validate(test);
});