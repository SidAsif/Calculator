let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = " ";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})

//--------------Dark mode & light mode --------------
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const container = document.getElementsByClassName('container')[0];

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        container.style.background = ' #071013';
        body.style.background = '#DADFF7;
        body.style.color = 'black';
        body.style.transition = '2s';
    }
    else {
        container.style.background = ' linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)';
        body.style.background = 'rgb(25, 25, 25)';
        body.style.transition = '2s';
    }
})
