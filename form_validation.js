function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var uid_len = uid.value.length;
var passid_len = passid.value.length;
var lettersuname = /^[A-Za-z]+$/;
var lettersuadd = /^[0-9a-zA-Z]+$/;
var numbers = /^[0-9]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;


if(uid_len == 0 || uid_len >= 12 || uid_len <5)
    {

        alert("User Id should not be empty / lenght be between "+5+" to "+12);
        uid.focus(); 
        return false;

    }
else if(passid_len == 0 || passid_len >= 12 || passid_len <7)
    {
        alert("Password should not be empty / lenght be between "+5+" to "+12);
        passid.focus();
        return false;
    }
else if(uname.value.match(lettersuname)==null)
    {
        alert("Username must have alphabet charcters only");
        uname.focus();
        return false;
    }
else if(uadd.value.match(lettersuadd)==null)
    {
        alert("User address must have alphanumeric characters only");
        uadd.focus();
        return false;
    }

else if(uzip.value.match(numbers)==null)
    {
        alert("ZIP code must have numeric characters only");
        uzip.focus();
        return false;
    }
else if(uemail.value.match(mailformat)==null)
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
else if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    alert('Form Successfully Submitted');
    window.location.href="submit.html";
    return false;

}

