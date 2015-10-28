function quickSort3(arr) {

    var swap = function (arr, m, n) {
        var temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    }

    // 数组分堆，左小右大
    var partition = function (arr, left, right) {
        var moveIndex = left;
        var pivot = arr[right];
        for (var i = left; i < right; i++) {
            if (arr[i] < pivot) {
                swap(arr, moveIndex, i);
                // 交换位置后，storeIndex 自增1，代表下一个可能要交换的位置
                moveIndex++;
            }
        }
        // 将基准元素放置到每次移动后的正确位置上
        swap(arr, moveIndex, right);
        return moveIndex;
    };

    var sort = function (arr, left, right) {
        if (left > right) {
            return;
        }
        var moveIndex = partition(arr, left, right);
        sort(arr, left, moveIndex - 1);
        sort(arr, moveIndex + 1, right);
    };

    sort(arr, 0, arr.length - 1);
    return arr;
}


var randomArr3 = getRandomArr(count, maxNum);
var t7 = performance.now();
quickSort3(randomArr3);
var t8 = performance.now();
$('timeCost3').innerHTML = (t8 - t7);

var randomArr4 = getRandomArr(count, maxNum);
var t9 = performance.now();
randomArr4.sort(function (a, b) {
    return a - b;
})
var t10 = performance.now();
$('timeCost4').innerHTML = (t10 - t9);