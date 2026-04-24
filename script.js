function handleSubmit(e){
    e.preventDefault();

    let data = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    let formdata = JSON.parse(localStorage.getItem("form_data")) || [];

    formdata.push(data);

    localStorage.setItem("form_data", JSON.stringify(formdata));

    console.log(formdata);

    alert("Form Submitted : Thank you for connecting with me !!!!");

    e.target.reset();

    return false; 
}