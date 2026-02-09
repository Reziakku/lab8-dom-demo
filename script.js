    const title = document.getElementById("title");
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const emailInput = document.getElementById('emailInput');
    const output = document.getElementById('output');

    const description = document.querySelector('.description');
    const button = document.querySelector('#btnClick');
    
    button.addEventListener('click', () => {
    
        // get input values

        let name = nameInput.value;
        let age = ageInput.value;
        let email = emailInput.value;

        // dispaly output
        output.innerHTML = '<h2> hello</h2>';

        // conditional statement

        if(age == 18){
            output.innerHTML += `<p>Welcome ${name}, you are now an adult loose equaility</p>`;
        }
        else {
            output.innerHTML += `<p>Hello ${name}, I am ${age} years old and my email is ${email}</p>`;
        }

        if(age == 18){
            output.innerHTML += `<p>Welcome ${name}, you are now an adult strict equaility</p>`;
        }
        else {
            output.innerHTML += `<p>Hello ${name}, I am ${age} years old </p>`;
        }
        if(name !=="" && age !=="" && email!== ""){
            output.innerHTML +=`<p>Hi ${name}, I am ${age}, years old and my email is ${email}`
        }
        else {
            output.innerHTML += `<p>Please fill up the fields</p>`;
        }
    });
