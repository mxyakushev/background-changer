const button = document.querySelector('.btn');
const outputText = document.querySelector('#output__text');
const keywordColors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

button.addEventListener('click', () => {
    outputText.innerText = randomColor();
    document.body.style.backgroundColor = outputText.innerText;
})

function randomColor(){
        let color = '';
        let random = randomNumber(3);

        switch (random) {
            case 0:{
                color = '#';
                color += Math.random().toString(16).slice(2, 8);
                break;
            }
            case 1:{
                let x = randomNumber(256);
                let y = randomNumber(256);
                let z = randomNumber(256);
                let a = randomNumber(11) / 10;

                if (a == 1) {
                    color = `rgba(${x}, ${y}, ${z})`;
                }
                else {
                    color = `rgba(${x}, ${y}, ${z}, ${a})`;
                }
                break;
            }
            case 2: {
                color = keywordColors[randomNumber(16)];
                break;
            }
            default: {
                alert('Something is wrong, press the button again');
            }
        }

        return color;
}

function randomNumber(rangeNum) {
    return Math.floor(Math.random() * rangeNum);
} 