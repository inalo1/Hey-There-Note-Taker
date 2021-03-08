// ==================================================================================
// Object Literal: a simple way to define an object
// PROBLEM: We can't duplicate object because it has behavior (has at least one method)
// ==================================================================================

// circle object has 3 member (radius, location, draw)
const circle = {
    // where radius and location are properties
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    // where draw is a method
    draw: function () {
        console.log('draw')
    }
};

// dot method: how we access the circle object's members
circle.draw()

// ==================================================================================
// SOLUTION: Factories or Constructor Functions
// ==================================================================================

// ----------------------------------------------------------------------------------
// Factory Function: returns an object
// ----------------------------------------------------------------------------------
function createCircle(radius){
    // where it returns an object
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    };
}

// where we call the function // where 1 is the radius
const circle = createCircle(1);

// ----------------------------------------------------------------------------------
// Constructor Function: uses 'this' & 'new' operator 
// ----------------------------------------------------------------------------------

// NOTE: the name of the function needs to be capitalized when defining it using 'constructor function'
function Circle(radius){
    // setting the this.radius property to radius argument
    this.radius = radius,
    // setting the this.draw method to a function
    this.draw = function () {
            console.log('draw');
        }
};

// where we call the function using 'new' operator // where 1 is the radius
// the 'new' operator will create an empty object {} and will set 'this' to point to that object
const another = new Circle (1);
 