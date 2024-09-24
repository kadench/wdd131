const PI = 3.14;

function getArea(radius, PI=3.14) {
    let area = radius * radius * PI;
    return area;
};

let radius = 3;
let area = 0;
area = getArea(radius);
radius = 4;
area = getArea(radius);
