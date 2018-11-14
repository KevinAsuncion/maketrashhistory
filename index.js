var number = 0; 

document.getElementById("cup-img").addEventListener("click", function () {
    number++
    document.getElementById("cup-number").innerHTML = number;
});