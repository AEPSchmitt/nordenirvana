var foadSignupSubmit = false;
 
function foadMemberSignupSubmit() {
                             foadSignupSubmit = true;
                             if(foadMemberSignupValidate()) { document.getElementById('FOADMEMBERSIGNUPFORM').submit(); }
                             else { alert('Der er en eller flere fejl i de indtastede felter, sørg for at alle felter markeret med rød stjerne er udfyldt korrekt!'); }
}
 
function foadInputValidate() {
                             if(foadSignupSubmit == false) return;
                             foadMemberSignupValidate();
}
 
function foadMemberSignupValidate() {
                             var errorCount = 0;                        
                             errorCount += foadFormValidateZip('FOAD_ZIP');
                             errorCount += foadFormValidateEmail('FOAD_EMAIL');
                             errorCount += foadFormValidatePhone('FOAD_PHONE');
                             errorCount += foadFormValidatePhone('FOAD_MOBILE');
                             errorCount += foadFormValidateDate('FOAD_BIRTH');
                             errorCount += foadFormValidateEmail('FOAD_EXTRA2');
                             errorCount += foadFormValidatePhone('FOAD_EXTRA3');
return (errorCount == 0);
}
 
function foadFormValidateName(ID) {
                             var illegalChars = /\W/; var str = foadTrim(document.getElementById(ID).value);
                             if(str.length == 0 || (str.length == 1 && illegalChars.test(str))) { document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1; }
                             else { document.getElementById(ID+'_HIGHLIGHT').innerHTML = ''; return 0; }
}
 
function foadFormValidateZip(ID) {
                             if(!foadFormValidateNumber(document.getElementById(ID).value,4)) { document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1; }
                             else { document.getElementById(ID+'_HIGHLIGHT').innerHTML = ''; return 0; }
}
 
function foadFormValidateDate(ID) {
                             var parts = (foadTrim(document.getElementById(ID).value)).split('.');
                             if(parts.length != 3 || ( isNaN(parseInt(parts[0],10)) || isNaN(parseInt(parts[1],10)) || isNaN(parseInt(parts[2],10)) ) || ( parseInt(parts[0],10) <= 0 || parseInt(parts[0],10) > 31) || ( parseInt(parts[1],10) <= 0 || parseInt(parts[1],10) > 12) || ( parseInt(parts[2],10) <= 1900 || parseInt(parts[2],10) > 2050)) {
                                                          document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1;
                             } else { document.getElementById(ID+'_HIGHLIGHT').innerHTML = ''; return 0; }
}
 
function foadFormValidatePhone(ID) {
                             if(!foadFormValidateNumber(document.getElementById(ID).value,8)) { document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1; }
                             else { document.getElementById(ID+'_HIGHLIGHT').innerHTML = ''; return 0; }
}
 
function foadFormValidateEmail(ID) {
                             var email = foadTrim(document.getElementById(ID).value); var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ; var illegalChars= /[\(\)\<\>\,\;\:\\"\[\]]/ ;
                             if (email == '' || !emailFilter.test(email) || illegalChars.test(email)) { document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1; }
                             else { document.getElementById(ID+'_HIGHLIGHT').innerHTML = ''; return 0; }
}
 
function foadFormValidateNumber(value,digits) { var num = parseInt(value,10); if(isNaN(num) || (num+'').length != digits) return false; else return true; }
 
function foadFormValidateInput(ID) {
                             if(document.getElementById(ID).value == '') { document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1; }
                             else { document.getElementById(ID+'_HIGHLIGHT').innerHTML = ''; return 0; }
}
                                                         
 
function foadFormValidateString(ID,length,lengthtype) {
                             document.getElementById(ID+'_HIGHLIGHT').innerHTML ='';
                             var value = document.getElementById(ID).value; if(value === undefined || value === null) value = '';
                             if(lengthtype == 1 && value.length != length) document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*';
                             else if(lengthtype == 2 && value.length < length) document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*';
                             return 0;
}
 
function foadFormValidateInteger(ID, length, lengthtype) {
                             document.getElementById(ID+'_HIGHLIGHT').innerHTML ='';
                             var value = document.getElementById(ID).value; if(value === undefined || value === null) value = '';                        
                             if(isNaN(parseInt(value))) { document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*'; return 1; }
                             value = parseInt(value)+'';
                             if(lengthtype == 1 && value.length != length) document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*';
                             else if(lengthtype == 2 && value.length < length) document.getElementById(ID+'_HIGHLIGHT').innerHTML ='*';
                             return 0;
}
 
function foadLTrim( value ) { var re = /\s*((\S+\s*)*)/; return value.replace(re, "$1"); }
function foadRTrim( value ) { var re = /((\s*\S+)*)\s*/; return value.replace(re, "$1"); }
function foadTrim( value ) { return foadRTrim(foadRTrim(value)); }