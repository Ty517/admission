function validateLogin() {
    var sid = document.getElementById("sid").value;
    var password = document.getElementById("password").value;

    if (sid === "24045" && password === "123") {

        window.location.href = "webtech.html";
        return false;
    } else {
        alert("Invalid Student ID or password. Please try again.");
        return false;
    }
}
