function FB(nmb) {
    if (isNaN(nmb)) {
        return NaN;
    } else {
        if (nmb % 3 !== 0 && nmb % 5 !== 0) {
            return nmb;
        } else {
            if (nmb % 3 === 0 && nmb % 5 === 0) {
                return "FizzBuzz";
            } else if (nmb % 5 === 0 && nmb % 3 !== 0) {
                return "Buzz";
            } else {
                return "Fizz";
            }
        }
    }
}
for (let i = 0; i < 101; i++) {
       console.log(FB(i))
}
