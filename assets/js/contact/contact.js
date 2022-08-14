function sendMessage() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let mess=document.getElementById("mess").value;
    if (name&&email&&mess){
        document.documentElement.scrollTop = 40;
    } else {
      formSection.innerHTML ="<b>Successfully send messenger!</b>"   
    }
    document.getElementById("result").innerHTML = "<div class='success-img'><img src='./assets/image/contact/tich.jpg'></div> <div style='margin-left: 32%; color: red;'> <b>Successfully send messenger!</b></div>"
    document.getElementById("form_contact").reset();
        
}