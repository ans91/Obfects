const multipleOfGivenNum= (p)=>{
    var digits = p.toString().split('');
    var realDigits = digits.map(Number);
    let num = 0;
    realDigits.forEach((i) => {
        num=num+i;
    });
    return num;
}

console.log(multipleOfGivenNum(46044));