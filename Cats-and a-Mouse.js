function catAndMouse(x, y, z) {
    let catAPos = Math.abs(z - x); //Absolute value z - x
    let catBPos = Math.abs(z - y);
    if (catAPos < catBPos) {
        return "Cat A";
    } else if (catBPos < catAPos) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
console.log(catAndMouse(2, 5, 4));
console.log(catAndMouse(2, 4, 5));