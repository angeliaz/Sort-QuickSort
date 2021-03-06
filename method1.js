function $(id) {
    return document.getElementById(id);
}

// 生成0~max间的count个数
function getRandomArr(count, max){
    var arr = [];
    for(var i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
};

// 
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivotIndex = Math.floor(Math.random() * arr.length);
    var pivot = arr[pivotIndex];
    var left = [];
    var right = [];
    for (var i = 0; i <arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    return quickSort(left).concat([pivot]).concat(quickSort(right));
}

function quickSort1(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivotIndex = Math.floor(Math.random() * arr.length);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot]).concat(quickSort(right));
}

function quickSort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivotIndex = Math.floor(Math.random() * arr.length);
    var pivot = arr[pivotIndex];
    var left = [];
    var right = [];
    var equal = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }

    return quickSort(left).concat(equal).concat(quickSort(right));
}

var count = 1000000;
var maxNum = 1000000;


var randomArr2 = getRandomArr(count, maxNum);
// $('randomArr1').innerHTML = randomArr1.join(', ');
var t5 = performance.now();
var sortedArr2 = quickSort2(randomArr2);
// $('sortedArr1').innerHTML = sortedArr1;
var t6 = performance.now();
$('timeCost2').innerHTML = (t6 - t5);

var randomArr1 = getRandomArr(count, maxNum);
// $('randomArr1').innerHTML = randomArr1.join(', ');
var t3 = performance.now();
var sortedArr1 = quickSort1(randomArr1);
// $('sortedArr1').innerHTML = sortedArr1;
var t4 = performance.now();
$('timeCost1').innerHTML = (t4 - t3);


var randomArr = getRandomArr(count, maxNum);
// $('randomArr').innerHTML = randomArr.join(', ');
var t1 = performance.now();
var sortedArr = quickSort(randomArr);
// $('sortedArr').innerHTML = sortedArr;
var t2 = performance.now();
$('timeCost').innerHTML = (t2 - t1);