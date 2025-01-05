const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    greet: function() {
        console.log("Hello, " + this.fullName() + "!");
    }
};

person.greet();

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

const person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
};

showFullName();

showFullName.call(person2);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}

const person3 = new Person('Alice', 'Wonderland');
console.log(person3.fullName());
