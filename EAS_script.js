(function () {
    createGrid(16);
})();

function createGrid(n) {      
     
    for (let index = 0; index < n*n; index++) {
                
        const container = document.querySelector('#container');
        const div1 = document.createElement("div");      
        container.appendChild (div1);
        container.style.setProperty('--grid-dimension', n);
        div1.setAttribute("id", "gridcells");       
    }

}

var cells = Array.from(document.querySelectorAll('#gridcells'));
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "black";
    });
});

var btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", function(){

    var cells = Array.from(document.querySelectorAll('#gridcells'));
    cells.forEach((cell) => {    
        cell.style.backgroundColor = "transparent";
    });

    
});
          
function changeGrid() {
    let n = prompt ("Please type the number of squares per side you would like in your scetchpad");      
    createGrid(n);

} 

