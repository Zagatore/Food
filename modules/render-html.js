module.exports = function (title,data){

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="/style.css">
            <title>${title}</title>
        </head>
    <body>
        <header>
            <h2>My Food Page</h2>
            <br>
            <nav>
                <ul>
                    <li> <a href="/">home</a></li>
                    <li><a href="/food">food</a></li>
                    <li><a href="/food/create">create food</a></li>
                </ul>
            </nav>
        </header>
        <main>
            ${data}
        </main>
        <footer>
        <br>
            <p>End of the quotes.</p>

        </footer>
        <script src="client.js"></script>
    </body>
</html>
    `;
   
}