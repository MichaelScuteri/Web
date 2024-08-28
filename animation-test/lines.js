document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('line1').classList.add('output');
    }, 3500);  

    setTimeout(function() {
        document.getElementById('line2').classList.add('output');
    }, 3700); 

    setTimeout(function() {
        document.getElementById('line3').classList.add('output');
    }, 3900); 

    setTimeout(function() {
        document.getElementById('line4').classList.add('output');;
    }, 4100); 

    setTimeout(function() {
        document.getElementById('line4').classList.add('output');;
    }, 4300); 

    setTimeout(function() {
        document.getElementById('line5').classList.add('output');
    }, 4500);

    setTimeout(function() {
        document.getElementById('line6').classList.add('output');
    }, 4700);

    setTimeout(function() {
        document.getElementById('line7').classList.add('output');
    }, 4800);

    setTimeout(function() {
        document.getElementById('line8').classList.add('output');
    }, 4900);

    setTimeout(function() {
        document.getElementById('line9').classList.add('output');
    }, 5000);

    setTimeout(function() {
        document.getElementById('line10').classList.add('output');
    }, 5200);

    setTimeout(function() {
        window.location.href = 'https://'; // Replace with your desired URL
    }, 5500);
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = ['line1', 'line2', 'line3', 'line4'];
    let shownElements = 0;

    function showElement(id, delay) {
        setTimeout(function() {
            document.getElementById(id).classList.add('output');
            shownElements++;
            if (shownElements === elements.length) {
                // Redirect after all elements have been shown
                setTimeout(function() {
                    window.location.href = homeUrl; // Replace with your desired URL
                }, 1000); // Delay before redirection if needed
            }
        }, delay);
    }

    showElement('line1', 3500);
    showElement('line2', 3700);
    showElement('line3', 3900);
    showElement('line4', 4100);
    showElement('line5', 4300);
    showElement('line6', 4500);
    showElement('line7', 4600);
    showElement('line8', 4700);
    showElement('line9', 4800);
    showElement('line10', 5200);
});

