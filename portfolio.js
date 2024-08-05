function sendmail()
{
    var params={
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value
    };


const serviceID = "service_lklvi5x";
const templete_ID = "template_od0mi9f";

emailjs
.send(serviceID,templete_ID,params)
.then((res)=>{
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("company").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("Your Request as be sended..");
})
.catch((err)=>console.log(err));
}