for (let i = 1; i<=4; i++){
    document.getElementById('sign'+i).addEventListener('click', function() {
        window.location.href = 'page' + i + '.html';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to elements after the document content is loaded
    document.getElementById('ig').addEventListener('click', function() {
        window.location.href = 'https://www.instagram.com/carbudar.zip';
    });

    document.getElementById('email').addEventListener('click', function() {
        window.location.href = 'https://mail.google.com/mail/u/0/?fs=1&to=carlabudar@gmail.com&tf=cm';
    });

    document.getElementById('home').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

for (let x = 1; x <= 4; x++) {
    let dirContainerId = 'dirContainer' + x;
    let page = 5 - x;
    document.getElementById(dirContainerId).addEventListener('click', function() {
        window.location.href = 'page' + page + '.html';
    });
}






