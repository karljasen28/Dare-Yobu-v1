function adminLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username); console.log(password);

    if(username == "account" && password == 123) {
        console.log("OK");
        window.location = "accountadmin/dashboard.html";
    } else {
        console.log("Not OK");
    }
}