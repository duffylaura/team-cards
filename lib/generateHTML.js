const contact = require("./00contactCard");

//TO DO: Make classes for the three types of positions, extend contact class. 

function generateCards(contact) {
    if (contact.position === "Manager") {
        return (
            `
                <div class = "tile is-child box">
                        <p class = "title is-2"> Manager </p>
                        <div class = "has-background-link-light"
                        <p> Name: ${contact.name} </p>
                        <p> ID: ${contact.id} </p>
                        <p> Email: <a href="mailto: ${contact.email}">${contact.email}</a> </p>
                        <p> Office Number: ${contact.extra} </p>
                        </div>
                </div>
            `
        )
    }

    if (contact.position === "Engineer") {
        return (
            `
                <div class = "tile is-child box">
                        <p class = "title is-2"> Engineer </p>
                        <div class = "has-background-link-light"
                        <p> Name: ${contact.name} </p>
                        <p> ID: ${contact.id} </p>
                        <p> Email: <a href="mailto: ${contact.email}">${contact.email}</a> </p>
                        <p> GitHub: <a href = "https://github.com/${contact.extra}"> ${contact.extra} </a> </p>
                        </div>
                </div>
            `
        )
    }

    if (contact.position === "Intern") {
        return (
            `
                <div class = "tile is-child box">
                        <p class = "title is-2"> Intern </p>
                        <div class = "has-background-link-light"
                        <p> Name: ${contact.name} </p>
                        <p> ID: ${contact.id} </p>
                        <p> Email: <a href="mailto: ${contact.email}">${contact.email}</a> </p>
                        <p> School: ${contact.extra}</p>
                        </div>
                </div>
            `
        )
    };
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
                <p class = "title is-1"> My Team </p>
            </div>
        </div>

    <div class = "tile is-ancestor">
    <div class = "tile is-4 is-vertical">
   
        ${insert} 

    </div> <!-- closes the div containers for all contact cards -->
    </div>  <!-- closes the div containers for all contact cards -->
    </body>
    </html>`

    ) 

}; 

module.exports = generateHTML; 