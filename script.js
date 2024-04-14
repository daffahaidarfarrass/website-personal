const navbarNav = document.querySelector(".navbar-nav");

document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active')
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/* Validation code */

function validasi() {
    var Name = document.form.Name.value;
    var Email = document.form.Email.value;
    var Description = document.form.Description.value;
    var atposition = Email.indexOf("@");  
    var dotposition = Email.lastIndexOf(".");

    if (Name !== "" && (Email !== "" ) && Description !== "") {
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=Email.length){
            alert('Masukan Email yang valid')
        }
        if (Name.length<=2){
            alert('Masukan Nama yang valid')
        }
        else{
            alert('Terimakasih Telah Menghubungi')
            return true;
        }
    } else {
        alert('Anda harus mengisi data dengan lengkap!');
    }
}
