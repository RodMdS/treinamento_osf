$("#myForm").submit( function(event) {
    event.preventDefault();
    let $customForm = $(this);
    let arrayForm = ($customForm.serializeArray());
    let formName = arrayForm[0];
    let formEmail = arrayForm[1];
    let formComplaint = arrayForm[2];
    alert("Denúncia feita. Entraremos em contato, " + formName.value + ". Aguarde nosso retorno.");
});