let userInput = document.getElementById('birthdate');
userInput.max = new Date().toISOString().split('T')[0];

function calculateAge(){
    let birthdate = new Date(userInput.value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    let month = currentDate.getMonth() - birthdate.getMonth();
    console.log(age,month);
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = `You are <span>${age}</span> years old.`;

}