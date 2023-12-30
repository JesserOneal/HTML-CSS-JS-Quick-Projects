const points = [
    "I think yes",
    "The answer is in the stars",
    "No",
    "Go watch the Street Fighter Movie from the 90's... you will love it"
];


function sylviaSays(){
    let chicken = points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="40px";
    document.getElementById('yourAudioTag').play();
    setTimeout(timeup, 3000);


    function timeup(){
        document.getElementById("response").innerHTML="Sylvia Ball";
        document.getElementById("response").style.fontSize ="60px";
        document.getElementById("clear").value="";
    }
}

var input = document.getElementById("response");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button-1").click();
    
  }
});