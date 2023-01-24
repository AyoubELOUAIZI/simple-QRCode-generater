var generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", function () {

    var description = document.getElementById("description").value;
    if(description==""){
        alert("Please enter a description and try agian");
        return;
    }else{
        document.getElementById("qr-code").innerHTML="";
    }

    var qr = new QRCode(document.getElementById("qr-code"), {
        text: description,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });


});