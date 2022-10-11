function mergeSort(array) {
    mergeSortRecursive(array, 0, array.length - 1);
}

function mergeSortRecursive(array, initial, final) {
    if (initial < final) {
        const midpoint = initial + Math.floor(((final - initial + 1) / 2), -1);

        mergeSortRecursive(array, initial, midpoint - 1);
        mergeSortRecursive(array, midpoint, final);
        merge(array, initial, midpoint, final);
    }
}

function merge(array, initial, midpoint, final) {
    const left = [];
    for(let j = initial;j <= midpoint - 1;j++)
        left.push(array[j]);

    const right = [];
    for(let j = midpoint;j <= final;j++)
        right.push(array[j]);

    let originalIndex = initial;
    let leftIndex = 0;
    let rightIndex = 0;

    while((leftIndex <= (midpoint - 1) - initial + 1) && (rightIndex <= final - midpoint + 1)) {
        if(left[leftIndex] <= right[rightIndex]) {
            array[originalIndex] = left[leftIndex];
            leftIndex += 1;
        } else {
            array[originalIndex] = right[rightIndex];
            rightIndex += 1;
        }
        originalIndex += 1;
    }

    if(leftIndex <= (midpoint - 1) - initial + 1) {
        for (let j = leftIndex; j <= (midpoint - 1) - initial + 1; j++) {
            array[originalIndex] = left[j];
            originalIndex += 1;
        }
    }

    if(rightIndex <= final - midpoint + 1) {
        for (let j = rightIndex; j <= final - midpoint + 1; j++) {
            array[originalIndex] = right[j];
            originalIndex += 1;
        }
    }
}

module.exports = mergeSort;