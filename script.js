var alertDiv = document.querySelector("#alert-btn-div");
var alertBtn = document.createElement("button");
alertDiv.appendChild(alertBtn);
alertBtn.innerText = "Alert";

alertBtn.addEventListener("click", function(){
    alert("Have a Nice Day");
});

// 2. Make a button and text box (you can just put them in your HTML). 
// When the button is clicked, display an alert with the message that is typed 
// in the text box.
var input = document.querySelector("input");
var inputBtn = document.querySelector("#input-btn");


inputBtn.addEventListener("click", function(){
    alert(input.value);
});

// 3. Create a `div` in HTML. Using JavaScript, make it change to a different 
// background color when your mouse hovers over it. The div should return to 
// its original color when the mouse exits the div.

var colorBox = document.querySelector("#color-box");
colorBox.addEventListener("mouseover", function(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    colorBox.style.backgroundColor = hue;
});

colorBox.addEventListener("mouseout", function(){
    // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    colorBox.style.backgroundColor = "yellow";
});

// 4. Put some text in a paragraph. Make it where when you click on the 
// paragraph, the color of the text switches to red. Once you get that working,
//  try to rewrite your code to make it switch to a random color each click 
//  (you don't have to show the code for just red once you get random working).
var colorP = document.querySelector("#color-p");

colorP.addEventListener("click", function(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    colorP.style.color = hue;
});

// 5. Add a button and an empty div. When the button is clicked, add a `p` 
// that contains your name to the empty div.

var addP = document.querySelector("#add-p");
var pDiv = document.querySelector("#p-div")

addP.addEventListener("click", function(){
    var para = document.createElement("para");
    para.className = "para";
    para.innerText = "Adrian";
    pDiv.appendChild(para);
});

// 6. Create a button and a `ul` in your HTML. In JavaScript, create an array 
// containing the names of your friends (at least 10. If you don't have that 
// many, include your imaginary ones). When the button is clicked, add each 
// friend's name as an `li` to the `ul` on the page.

var ulBtn = document.querySelector("#ul-btn");
var ul = document.querySelector("#friend-list")
var friends = ["Wayne", "JB", "Dylan", "Nequil", "Greg", "Chance", "Chris", "Kristine", "Markus", "Lance"];

ulBtn.addEventListener("click", function(){
    for(var i = 0; i < friends.length; i++){
    var li = document.createElement("li"); 
        var liId = li.className = "li";
        console.log(liId);       
        ul.appendChild(li);        
        li.innerText = friends[i];
    }
});

// 7. Create a button and on clikc, run a function that loops through the lis that are on the page 
// (the spans generated from step 6) and change all their text to be words from a sentence that you declare as a 
// global variable. E.g. (var sentence = 'hello world my name is john doe, goodbye forever world').

var sentence = 'hello world my name is john doe, goodbye forever world';
var sentenceSplit = sentence.split(" ")
var changeBtn = document.querySelector("#change-friend");

console.log(changeBtn);

changeBtn.addEventListener("click", function(){
    var newArray = friends.splice(0,0);
    for(var i = 0; i < friends.length; i++){
        var lis = document.querySelector('.li');      
        lis.innerText = sentenceSplit[i];
        console.log(sentenceSplit[i]);
    }
        
});

