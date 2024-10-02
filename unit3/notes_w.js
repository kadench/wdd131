const exampleArray = [1,2,3];

// There is more than one way to define a function in javascript
function example1()  {

};

const example2 = function() {
    return 1*2;
};

exampleArray.forEach(example2);

exampleArray.forEach(function() {

});

const example4 = () => {

};

// Callback functions