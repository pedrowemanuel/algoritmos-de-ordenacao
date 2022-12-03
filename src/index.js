const mergeSort = require('./merge-sort');
const insertionSort = require('./insertion-sort');

const timesMergeSort = [];
const timesInsertionSort = [];
const m = Math.floor(Math.random() * (20 - 10 + 1) + 10);
const inputsSize = [];

for (let i = 0; i < 10; i++) {
    const n = Math.floor(Math.random() * (10000 - 10 + 1) + 10);
    inputsSize.push(n);
}

// ordenar os tamanhos de entrada
mergeSort(inputsSize);

for (let i = 0; i < inputsSize.length; i++) {
    const n = inputsSize[i];

    let totalTimesMergeSort = 0;
    let totalTimesInsertionSort = 0;

    for (let j = 0; j < m; j++) {
        const arrayMergeSort = [];
        const arrayInsertionSort = [];

        for (let size = 1; size <= n; size++) {
            const randomNumber = (Math.random() * (4 * n)) - (2 * n);
            arrayMergeSort.push(randomNumber);
            arrayInsertionSort.push(randomNumber);
        }

        let start = new Date().getTime();
        mergeSort(arrayMergeSort);
        let total = new Date().getTime() - start;
        totalTimesMergeSort += total;

        start = new Date().getTime();
        insertionSort(arrayInsertionSort);
        total = new Date().getTime() - start;
        totalTimesInsertionSort += total;
    }

    timesMergeSort.push([n, Number((totalTimesMergeSort / m).toFixed(4))]);
    timesInsertionSort.push([n, Number((totalTimesInsertionSort / m).toFixed(4))]);
}

console.log(timesMergeSort);
console.log(timesInsertionSort);
