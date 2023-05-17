const bigger = () => {
    document.getElementById("text").style.fontSize = "24pt";
}

const fancy = () => {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline"};

const boring = () => {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

const moo = () => {
    var str = document.getElementById("text");
    str.value = str.value.toUpperCase();
    var parts = str.value.split(" ");
    str.value = parts.join("-Moo");
}