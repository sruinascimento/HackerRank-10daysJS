function getSecondLargest(nums) {
    if (nums.length > 100 || nums.length < 1) return false;
    let numberMax = 0;
    for (let n of nums) {
        if (numberMax < n) numberMax = n;
    }

    if (numberMax === 0) return numberMax;

    let secondNumberMax = 0;
    for (let n of nums) {
        if ((secondNumberMax < n) && (n < numberMax)) secondNumberMax = n;              
    }
    
    return secondNumberMax;
}
//console.log(getSecondLargest([0, 0]));

//================================================================

function reverseString(s) {
    try{
        s = s.split("").reverse().join(""); 
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(s);
    }

}

reverseString(1234);


//===============================================================

function isPositive(a) {
    if (a === 0) {
        throw new SyntaxError("Zero Error");
    }
    
    if (a < 0) {
        throw new SyntaxError("Negative Error");
    }
    return "YES";
}

const a = [-1, 0, 1]

for (let i = 0; i < 3; i++) {
    try {
        console.log(isPositive(a[i]));
    } catch (error) {
        console.log(error.message);
    }
}

