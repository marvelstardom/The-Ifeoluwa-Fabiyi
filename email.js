let emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let userEmail = document.getElementById("userEmail");

    if (!userEmail) {
        alert("Not a valid email address");
    } else {
        // perform operation with form input
        alert("This form has been successfully submitted!");
        console.log(
            `This form has a userEmail of ${userEmail.value}`
        );

        userEmail.value = "";
    }
});