const bubblesort = (input) => {
    var _sorted = false
    var last = input.length - 1
    while (!_sorted) {
        _sorted = true
        for (var n = 0; n <= last ; n++) {
            if (input[n] > input[n + 1]) {
                var temp = input[n + 1];
                input[n + 1] = input[n];
                input[n] = temp;
                _sorted = false;
            } 
        }
        last--
    }
}
var a = [22,90,3,4321,2,3,1]

const bubbleSort_ = (input) =>{
    var sorted = []
    var length = input.length
    for(var a = 0; a < length - 1; a++ ){
        var smallest = input[input.length - 1], index = input.length - 1;
        for(var j = input.length - 1; j > 0; j--){
            if(input[j] < smallest){
                smallest = input[j];
                index = j
            }
        }
        sorted.push(input.splice(index,1)[0])
    }
    var index_ = sorted.length;
    //Initialization: Prior to the first start of iteration, we assume/base case is input[0] is the biggest
    //element.
    //Maintanence: switch the element if the left side element is greater than it.
    //Termination: 
    for (var a = sorted.length - 1; a > 0 ; a-- ){
        if (input[0] <= sorted[a] ){
            index_ = a
        }
    }
    sorted.splice(index_,0,input[0])
    return sorted
}

const bubblesorttttt= (input) =>{
    //loop invariant: at each start of iteration the first i - 1 element is in right place
    var length = input.length
    //initialization: before i = 0,(or before the loop start), we have no element is in right place
    for (var i = 0; i < length; i++){
        var index = length - 1
        var key = input[index];
        for(var j = length - 2; j >= i ; j--){
            if (input[j] < key){
                key = input[j];
                index = j;
            }
        }
        input[index] = input[i];
        input[i] = key
    }
}
bubblesorttttt(a)