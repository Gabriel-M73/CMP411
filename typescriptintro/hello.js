function helloWorld() {
    document.getElementById("nameForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form reload
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        if (firstName && lastName) {
            document.getElementById("welcomeMessage").textContent =
                "Welcome again " + firstName + " " + lastName + "!";
        }
    });
}
