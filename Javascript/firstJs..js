const user = {
    name: "Manjulika",
    age: 14,
    address: "New york",
    getFirstName: function () {
        console.log(this.name);
    },
    getDetails: () => {
        console.log(`The user's name is ${user.name} and they are ${user.age} years old`);
    },
};

user.getFirstName();
user.getDetails();
