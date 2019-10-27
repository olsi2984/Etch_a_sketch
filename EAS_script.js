function createGrid(n) {    
     
    for (let index = 0; index < n*n; index++) {
        
        const container = document.querySelector('#container');
        const div1 = document.createElement("div");
        container.appendChild (div1);
        
    }

}

createGrid(16);