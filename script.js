function validateForm() {
    var sid = document.getElementById("sid").value;
    var names = document.getElementById("names").value;
    var email = document.getElementById("email").value;

    if (sid === "") {
        alert("Please enter Student ID.");
        return false;
    }
    if (names === "") {
        alert("Please enter Full Names.");
        return false;
    }
    if (email === "") {
        alert("Please enter Email.");
        return false;
    }
    alert("All done:) Admission successful!");
    document.getElementById("admissionForm").reset();

    return true;
}
function logout() {
    window.location.href = "index.html";
}
