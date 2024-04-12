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


/* Validation code 

$(validasi).ready(function(){
  $('#formvalidasi').validate({
      rules:{
          nama:{
              minlength: 2
          },
          email:{
              email: true,
              required: true
          },
          Description: {
              required: true
          }
      },
      messages: {
          Nama:{
              required: "Isi namanya",
              minlength: "Nama harus lebih dari 2 huruf"
          },
          Email:{
              email: "Masukan email dengan benar",
              required: "Masukkan email"
          },
          Description: {
              required: "Masukan Pesan"
          },
      },
      submitHandler: function(form) {
          form.submit();
      }
  });
}); */
