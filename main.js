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
var vaction = {

}