let form = document.getElementById("form");

function handleSubmit(e){
    e.preventDefault();
    let data = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    const formdata = JSON.parse(localStorage.getItem("form_data")) || [];
    formdata.push(data);
    localStorage.setItem("form_data", JSON.stringify(formdata));
    form.reset ();
    console.log(data)
    const getdata = JSON.parse(localStorage.getItem("form_data"));
    console.log(getdata)
}

form.addEventListener("submit", function(e) {
    handleSubmit(e);
    alert("Form Submitted : Thank you for connecting with me !!!!");
});
