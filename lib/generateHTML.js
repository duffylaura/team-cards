const contact = require("./00contactCard");

function generateCards (contact) {
    return (
        `
        <div class="tile is-ancestor"> 
        <div class="tile is-parent">
            <div class="tile is-child box">
                    <h2 class = "title is-2"> ${contact.position} </h2>
                    <p> Name: ${contact.name} </p>
                    <p> ID: ${contact.id} </p>
                    <p> Email: ${contact.email} </p>
                    <p> Office Number: ${contact.extra} </p>
            </div>
        </div>
        `
    )
}

function generateHTML (cards) {
    var insert = cards.map(generateCards);
    insert = insert.toString();

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