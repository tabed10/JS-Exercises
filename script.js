/* JavaScript code here */

console.log("External Javascript")

// Task 2: Array Sum

function sum(arr){
    var sum = 0;
    arr.forEach(function(item, index){
        sum = sum + item;
})
return sum;
}

console.log(sum([1, 2, 3, 4]))

// Task 3: Email validation
/* var validationEmail = function(email) */
function validationEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

console.log(validationEmail("ssssssdsdas"))
console.log(validationEmail("sabbirhossainabed@gmail.com"))

/*object*/

var company = {
    name: 'Google', 
    age: 19, 
    ceo: {
    first_name: 'Sundar', 
    last_name: 'Pichai'
    }
};
console.log(company)
company.updateAge = function(newAge){
    this.age = newAge;
}

company.updateAge(23);
console.log(company["age"]);

 
/*Task 4: Given the following array of objects, write a function that prints the status at a given index:*/

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
//function getReadingStatus(index){
function getProp(index, prop){
//return library[index].readingStatus
return library[index][prop]

}   
//console.log(getReadingStatus(1)) 
console.log(getProp(1, 'author'))
/*Task 5*/

var cart = [ 
    {
        name: 'Shoes',
        price: 560,
        quantity: 4
    },
    {
        name: 'Regular Tees',
        price: 455.50,
        quantity: 6
    },
    {
        name: 'Socks',
        price: 65.99,
        quantity: 2
    }];
    
    // 5a - Add a new item
    function addItem(newItem){
        cart.push(newItem);
    }
    addItem({name: 'Socks',
    price: 65.99,
    quantity: 2});
    console.log(cart)

    // 5b - sort by a given property
    function sortCart(prop){
        cart.sort(function(a,b){
            if ( a[prop] < b[prop] ){
                return 1;
              }
              if ( a[prop] > b[prop]){
                return 1;
              }
              return 0;
        }) 
    }
        sortCart('name')
        console.log(cart)

    //5c - find item by name
    findByName = function(name){
        var myArr =  cart.filter(function(item) {
            return item.name == name;
    });
    console.log(myArr)
    }
    findByName("Shoes")

    //5d - get total cost
    function getTotalCost(){
        var totalCost = 0;
        for (var i in cart){
            totalCost += cart[i].price;
        }
        return totalCost;
    }
     console.log(getTotalCost());
