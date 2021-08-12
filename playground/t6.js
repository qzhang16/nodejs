const name = 'Andrew';
const userAge = 27;

//object property shorthand
const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
};

console.log(user);

// object destruction
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

const {label,stock,rating=5} = product; //default
console.log(label,stock,rating);

const {label:productLabel} = product; //rename
console.log(productLabel,stock,rating);

const greet = (client = 'user') => { //function parameter default  value
    console.log(client);
};
greet('Jack');
greet();