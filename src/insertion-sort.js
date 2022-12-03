function insertionSort(array) {
    for (let j = 1; j < array.length; j++) {
        const value = array[j];
        let i = j - 1;
        if (i >= 0) {
            const position = binarySearch(array, value, 0, i);
            array.splice(j, 1);
            array.splice(position, 0, value);
        }
    }
}

function binarySearch(array, value, initial, final) {
    const length = final - initial + 1;

    if(length <= 2) {
        if (value <= array[initial]) {
            return initial;
        }

        if (value < array[final]) {
            return final
        }

        return final + 1;
    }

    const half = initial + Math.floor((length) / 2, -1);

    if (value > array[half - 1] && value < array[half + 1]) {
        return half;
    }

    if(value >= array[half]) {
        return binarySearch(array, value, half, final);
    }

    return binarySearch(array, value, initial, half - 1);
}

module.exports = insertionSort;