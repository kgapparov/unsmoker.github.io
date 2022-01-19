
$(document).ready(function () {
    $("#create").click(function (e) { 
        e.preventDefault();
        let account = createAccount($("#name").val(), $("#deposit").val());
        accountInfoList.push(account);
        showAccountInfo();
        $("#name").val("");
        $("#deposit").val("");
    });
});

var accountInfoList = [];

function showAccountInfo(){
    let result = "";
    for(let i = 0; i < accountInfoList.length; ++i) {
        result += "Account name: "+ accountInfoList[i].getName() + " saving Balance: "+accountInfoList[i].getDeposit()+"\n";
    }
    console.log(result);
    $("#output").val(result);
}

var createAccount = function(dname, ddeposit) {
     var name = dname;
     var  deposit = ddeposit;
    return {getName: function(){
        console.log(name);
        return name;
    }, getDeposit: function(){
        return deposit;
     }
    }
}