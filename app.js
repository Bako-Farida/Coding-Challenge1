const buttons = document.querySelectorAll('button');
    const originalColor = window.getComputedStyle(document.body).backgroundColor;

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const color = window.getComputedStyle(button).backgroundColor;
            document.body.style.backgroundColor = color;
        });
    });

    document.addEventListener('click', function() {
        document.body.style.backgroundColor = originalColor;
    });