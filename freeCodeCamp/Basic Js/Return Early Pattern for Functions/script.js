// Setup
function abTest(a, b) {
    // Only change code below this line
    return a < 0 || b < 0 ? undefined : Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);