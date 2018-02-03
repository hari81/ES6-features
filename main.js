//Arrow functions
var person = {
  first: "Doug",  
  actions: ['bike', 'hike', 'ski', 'surf'],
 /* printActions: function() {
    _this = this;
    this.actions.forEach(function(action){
      var str = _this.first + " likes to " + action;
      let node = document.createElement('h3');
      node.innerText = str;
      let divtag = document.getElementById('divTag');
      divtag.appendChild(node);
      console.log(str);
    })
  }*/
  /* printActions: function() {
    this.actions.forEach(function(action){
      var str = this.first + " likes to " + action;
      let node = document.createElement('h3');
      node.innerText = str;
      let divtag = document.getElementById('divTag');
      divtag.appendChild(node);
      console.log(str);
    }.bind(this));
  }*/
  /*printActions: function() {
    this.actions.forEach(action => {
      var str = this.first + " likes to " + action;
      let node = document.createElement('h3');
      node.innerText = str;
      let divtag = document.getElementById('divTag');
      divtag.appendChild(node);
      console.log(str);
    });
  }*/
  printActions() {
    this.actions.forEach(action => {
      var str = this.first + " likes to " + action;
      let node = document.createElement('h3');
      node.innerText = str;
      let divtag = document.getElementById('divTag');
      divtag.appendChild(node);
      console.log(str);
    });
  }
}

//Destructure of Array and Object;

var cities = ['Spokane', 'Boston', 'Los Angeles', 'Seattle', 'Portland'];
var [first, fourth] = cities;

console.log(first);
console.log(fourth);

var [firs,,,,last] = cities;

console.log(firs);
console.log(last);

var sandwich = {
  title: 'Reuben',
  price: 7,
  description: "Cleveland's favorite sandwich",
  ingredients:  ['bread', 'corned beef', 'dressing', 'cheese']
}

var {title, price} = sandwich;

console.log(title);
console.log(price);

var vaction = {
  destination: 'chile',
  travlers: 2,
  activity: 'skiing',
  cost: 4000
};

function vactionMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`;
}

console.log(vactionMarketing(vaction));

//Generators

function* director() {
  yield "Three";
  yield "Two";
  yield "Three";
  yield "Action";
}
var action = director();

console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
