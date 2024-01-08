const buttons = document.querySelectorAll('.card-button');
const submit = document.querySelector('.card-submit-button');
const card = document.querySelectorAll('[class*="card"');
const thanks = document.querySelectorAll('[class*="thanks"');
const text = document.querySelector(".thanks-notification-text");

let selected = 0;


buttons.forEach(button => {

    button.addEventListener('click', event => {

        if( button.classList.contains("active")){
            buttons.forEach(boton => boton.classList.remove('active'));
        } else {
            buttons.forEach(boton => boton.classList.remove('active'));
            button.classList.add("active");
        }
    })

})



    submit.addEventListener('click', event => {
        // console.log(event.currentTarget.textContent)
        // card.style.display = 'none';

        buttons.forEach(button => {
            if (button.classList.contains('active')){
                selected = button.textContent;
            };
        })

        if (selected !== 0) {

        card.forEach(element => {
            element.style.display = "none";
        });

        thanks.forEach(element => {
            text.textContent = `You selected ${selected} out of 5`;
            element.style.display = "inherit";
        });

    }

    })
