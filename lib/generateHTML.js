const manager = require("./01manager");
const engineer = require("./02engineer");
const intern = require("./03intern");

function getBodyContent (cards) { 

const bodyCode = []; 

for (i=0; i>cards.length; i++) {

    if (cards[i] == manager) {

        let x = 
            `
            <div class="tile is-ancestor"> 
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <div class="content has-text-centered">
                        <h2 class = "title is-2"> Manager </h2>
                        <p> Name: ${cards[i].manager.name} </p>
                        <p> ID: ${cards[i].manager.id} </p>
                        <p> Email: ${cards[i].manager.email} </p>
                        <p> Office Number: ${cards[i].manager.officeNumber} </p>
                    </div>  
                </div>
            </div>
            `
        bodyCode.push(x); 
    }

    if (cards[i] == engineer) {

        let y = 
            `
            <div class="tile is-ancestor"> 
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <div class="content has-text-centered">
                        <h2 class = "title is-2"> Engineer </h2>
                        <p> Name: ${cards[i].engineer.name} </p>
                        <p> ID: ${cards[i].engineer.id} </p>
                        <p> Email: ${cards[i].engineer.email} </p>
                        <p> GitHub Username: ${cards[i].engineer.github} </p>
                    </div>  
                </div>
            </div>
            `
        bodyCode.push(y); 
    }

    if (cards[i] == intern) {
       let w = 
            `
            <div class="tile is-ancestor"> 
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <div class="content has-text-centered">
                        <h2 class = "title is-2"> Intern </h2>
                        <p> Name: ${cards[i].intern.name} </p>
                        <p> ID: ${cards[i].intern.id} </p>
                        <p> Email: ${cards[i].intern.email} </p>
                        <p> School: ${cards[i].intern.school} </p>
                    </div>  
                </div>
            </div>
            `
        bodyCode.push(w);      
    }

}

return (bodyCode); 
}



function generateHTML (cards) {

    var insert = getBodyContent(cards); 
    // insert = insert.toString();

    return (
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Cards</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel = "stylsheet" href = "style.css">
    </head>
    
    <body>
        <div class = "hero">
            <div class = "hero-body">
                <h1 class = "title is-1"> My Team </h1>
            </div>
        </div>

    <div>
   
        ${insert}

    </div> <!-- closes the div for all contact cards -->
    </body>
    </html>`

    ) 

}; 

module.exports = generateHTML; 