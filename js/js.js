function checkEmpty() {
    var checkFirst = document.getElementById("first").value;
    var checkLast = document.getElementById("last").value;
    if (checkFirst == null || checkFirst == "") {
        alert("Bạn không được để trống tên!!!");
        checkFirst.select();
        return false;
    } else if (checkLast == null || checkLast == "") {
        alert("Bạn không được để trống họ!!!")
        checkLast.select();
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    if (email == "" || email == null) {
        alert("Email không được để trống!");
        email.select();
        return false;
    }

    var regexEmail = /^[\w\.\-]+@\w+(\.\w+){1,3}$/;
    if (!regexEmail.test(email)) {
        alert("Email phải thỏa mãn định dạng abc@xyz.com.vn");
        regexEmail.select();
        return false;
    }
}

function checkMessage() {
    var checkMessage = document.getElementById("message").value;
    if (checkMessage == null || checkMessage == "") {
        alert("Hộp thoại phải được để trống!!!");
        checkMessage.select();
        return false;
    }
}

function check() {
    checkEmpty();
    checkEmail();
    checkMessage();
}