// Form validation for index.html file.
const indexFocus = () =>{
    let a = document.entryForm.username.focus();
    return true;
}
const usernameValidate =(min,max)=>{
    let b = document.entryForm.username
    var bLen = b.value.length
    if (bLen == 0 || bLen >= max || bLen <= min){
        alert('Check username!! '+' Username should not be empty & it should be between ' + min + '-'+ max + ' characters')
        b.focus();
        return false;
    }
    document.entryForm.password.focus()
    return true;
}
const passwordValidate =(min2,max2)=>{
    let c = document.entryForm.password
    var cLen = c.value.length;
    if (cLen == 0 || cLen >= max2 || cLen < min2){
        alert('Check password!! '+' Password should not be empty & it should be between ' + min2 + '-'+ max2 + ' characters')
        c.focus();
        return false;
    }
    document.entryForm.password.focus()
    return true;
}

// Form validation for vehicleEntry.html file.
const vehicleEntryFocus = () =>{
    let d = document.entryForm.ven.focus();
    return true;
}
const VENValidate =(min3,max3)=>{
    let e = document.entryForm.ven;
    var eLen = e.value.length;
    if (eLen == 0 || eLen < min3 || eLen > max3){
        alert('Vehicle Entry Number should not be empty & it should be between '+ min3 + '-' + max3 + ' characters')
        e.focus()
        return false;
    }
    document.entryForm.driversname.focus()
    return true;
}
const driversnameValidate =(min4,max4)=>{
    let f = document.entryForm.driversname;
    var fLen = f.value.length;
    if (fLen == 0 || fLen > max4 || fLen < min4){
        alert('Drivers name should not be empty & it should be between '+ min4 + '-' + max4 + ' characters')
        f.focus()
        return false;
    }
    document.entryForm.phonenumber.focus()
    return true;
}
const phonenumberValidate =(min4,max4)=>{
    let g = document.entryForm.phonenumber;
    var gLen = g.value.length;
    if (gLen == 0 || gLen ==! 10 ){
        alert('Drivers name should not be empty & it should be between '+ min4 + '-' + max4 + ' characters')
        g.focus()
        return false;
    }
    document.entryForm.phonenumber.focus()
    return true;
}