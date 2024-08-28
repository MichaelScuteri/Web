document.addEventListener("DOMContentLoaded", () => {
    let counter = 3;
    const boxContainer = document.querySelector('.container');

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    function adjustBoxWidths() {
        const boxes = boxContainer.querySelectorAll('.box');
        const widthPercentage = 100 / boxes.length + '%';
        boxes.forEach(box => {
            box.style.width = widthPercentage;
        });
    }

    function initializeBox(selectId, boxElement) {
        const colorInput = document.querySelector(selectId);

        boxElement.classList.add('box');

        const randomColor = getRandomColor();
        boxElement.style.backgroundColor = randomColor;
        colorInput.value = randomColor;

        boxElement.addEventListener('click', () => {
            colorInput.click();
        });

        colorInput.addEventListener('input', function() {
            boxElement.style.backgroundColor = this.value;
        });
    }

    initializeBox('#select1', document.querySelector('.box1'));
    initializeBox('#select2', document.querySelector('.box2'));
    initializeBox('#select3', document.querySelector('.box3'));

    adjustBoxWidths();

    function addNewBox() {
        counter++;
        
        const newBox = document.createElement('div');
        newBox.className = 'box';
        const randomColor = getRandomColor();
        newBox.style.backgroundColor = randomColor;

        boxContainer.appendChild(newBox);

        const newColorInput = document.createElement('input');
        newColorInput.type = 'color';
        newColorInput.id = `select${counter}`;
        newColorInput.value = randomColor;
        document.body.appendChild(newColorInput);

        initializeBox(`#${newColorInput.id}`, newBox);

        adjustBoxWidths();
    }

    document.querySelector('button').onclick = function () {
        addNewBox();
    }
});




