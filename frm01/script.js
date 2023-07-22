function createScene() {

    let playground = document.getElementById("playground");
    playground.innerHTML = "";
    
    var car = document.createElement("div");
    car.id = "car";
    playground.appendChild(car);
    
    var sand = document.createElement("div");
    sand.id = "sand";
    playground.appendChild(sand);

    var offset = -10;
    while (offset < 100) {
        var treeIndex = parseInt(Math.floor(Math.random() * 4.99) + 1);
        var tree = document.createElement("div");
        tree.className = "tree";
        tree.style.backgroundImage = "url('frm01/tree" + treeIndex + ".png')";
        offset += Math.random() * 10 + 10;
        tree.style.left = offset + "%";
        tree.style.bottom = (Math.random() * 15 + 15) + "px";
        playground.appendChild(tree);
    }

    var offset = -10;
    while (offset < 100) {
        var cloud = document.createElement("div");
        cloud.className = "cloud";
        cloud.style.backgroundImage = "url('frm01/cloud1.png')";
        offset += Math.random() * 10 + 10;
        cloud.style.left = offset + "%";
        cloud.style.bottom = (Math.random() * 250 + 250) + "px";
        playground.appendChild(cloud);
    }

}

var problem_status = true;

function resetProblemStatus() {
    problem_status = true;
}

function getProblemStatus() {
    return problem_status;
}

function handleData(data) {
    var t = parseFloat(data.split(";")[0]);
    var x = parseFloat(data.split(";")[1]);
    var car = document.getElementById("car");
    car.style.left = x + "px";
    problem_status = problem_status && validateOutput(t, x);
}

createScene();