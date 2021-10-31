function initListeners() {

    // I don't know what to do why do these things keep failing on me I do exactly as the lecture says I'm actually gonna cry, sorry this assignment isn't even half-done. This just isn't working and I don't know why.

    $("#submit").click(function (e) {
        e.preventDefault();
        let email = $("#email").val();
        let pass = $("#pass").val();
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let pass = $("#pass").val();
        console.log("inputs " + email + pass);
        console.log("inputs " + firstName + lastName + email + pass);
        
    });

    $("edit").click(function(e){
        let userObj = {
            firstName: "MacKenzie",
            lastName: "Millard",
            email: "mill@h.com",
            password: "thisisapassword",
        };

        console.log(userObj);
        $("email").val(userObj.email);
        $("pass").val(userObj.pass);
        $("firstName").val(userObj.firstName);
        $("lastName").val(userObj.lastName);
    });
}

$(document).ready(function() {
    initListeners();
});