var alert = document.getElementById("showAlert");

function showalert() {
    showAlert.style.display = 'none';
}

function showinfo() {
    var un = document.getElementById("uname").value;
    var pw = document.getElementById("psw").value;

    document.getElementById("username").innerHTML = un;
    document.getElementById("password").innerHTML = pw;
    account.style.display = 'block';
}

function closeInfo() {
    account.style.display = 'none';
}