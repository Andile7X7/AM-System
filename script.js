
    let MobileNavButton = document.querySelector(".Menu")
    let MobileNav = document.querySelector(".MobileNav")

    console.log(MobileNav.tagName)

    function toggleMobileNav(){
    MobileNav.classList.toggle('Visible')
    }

    if (window.location.pathname.includes('/Services.html')){
        document.getElementById('ServicesLink').classList.add('active')
         console.log('working')
    }
    if (document.getElementById("contact-form")){
        document.getElementById('ContactLink').classList.add('active')
        console.log(document.getElementById('ContactLink').classList)
    }
    document.querySelector('.Logo').addEventListener('click', function(){
    window.location.href = 'index.html'
    })

    function GoToForm(){
    window.location.href = 'contact.html'
    }


let modal = document.querySelector(".Modal-Success");
console.log('style is:' + modal.style.display)


 const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();
    const phone = form.querySelector("[name='cellphone']").value.trim();
    const business = form.querySelector("[name='business_type']").value.trim();
    console.log(name, email, message, phone, business)


  if (!name || !email || !message || !phone || !business) {
    window.alert("Please fill in all fields before submitting.");
    return; // stop here, don't send
  }

    emailjs.sendForm("service_6xcqdpr", "template_gybxhdf", this)
      .then(function() {
        modal.style.display = 'block'
        form.reset();
      }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });

  let closeModal = document.getElementById('closeModal')

  if (closeModal){
    closeModal.addEventListener('click', function(){
        document.querySelector('.Modal-Success').style.display = 'none'
    })
  }


