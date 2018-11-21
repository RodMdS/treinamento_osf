$("#custom-form").submit( function(event) {
    //console.log(this) dá um print no elemento html
    let $customForm = $(this);
    //console.log($customForm);
    let arrayForm = ($customForm.serializeArray());
    //console.log(arrayForm);
    let formName = arrayForm[0];
    let formEmail = arrayForm[1];
    alert("name " + formName.value);
    //console.log("Oi")
})