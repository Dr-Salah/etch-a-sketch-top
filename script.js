const container = document.querySelector('.container');

const initialize = function (num) {
    for (let i=1; i<=num; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j=1; j<=num; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = '#000';
            })
        }
        container.appendChild(row)
    };
}

let input = prompt('enter number');
initialize(input);

