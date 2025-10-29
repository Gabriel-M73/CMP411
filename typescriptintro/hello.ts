function helloWorld() {
    (<HTMLInputElement>document.getElementById("nameForm")).addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent form reload
      const firstName: string = (<HTMLInputElement>document.getElementById("firstName")).value.trim();
      const lastName: string = (<HTMLInputElement>document.getElementById("lastName")).value.trim();

      if (firstName && lastName) {
        (<HTMLInputElement>document.getElementById("welcomeMessage")).textContent = 
          "Welcome again " + firstName + " " + lastName + "!";
      }
    });
}