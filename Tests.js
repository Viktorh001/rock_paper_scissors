//write a javascript program that runs through a list of arrays, finds numbers divisible byr
//3 and sums them up and returns the answer to the console.

function sumOddNumbers(numbers) {
    let sum = 0;
    for (const i of mylist) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
    }


    const mylist = [1,2,3,4,5];
    console.log(sumOddNumbers(mylist));

    //use the filter method to find odd numbers and return then in javascript

    function isOdd(num) {
        return num % 2 !== 0;

        const array = [1,2,3,4,5];
    }