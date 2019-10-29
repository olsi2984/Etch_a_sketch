function createGrid(n) {      
     
    for (let index = 0; index < n*n; index++) {
                
        const container = document.querySelector('#container');
        const div1 = document.createElement("div");        
        
        container.appendChild (div1);

        container.style.setProperty('--grid-dimension', n);
        div1.setAttribute("id", "gridcells");    
    
    }

}

createGrid(16);


var cells = Array.from(document.querySelectorAll('#gridcells'));
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "black";
    });
});


