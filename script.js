if(document.querySelector(".button")){
    document.querySelector(".button").addEventListener("click", ()=>{
        document.querySelector(".Transition").classList.add("Visible");
        setTimeout(()=>{
            window.location.href = "process.html"
        },500)
        
    })
}

if(document.querySelector(".button2")){
    document.querySelector(".button2").addEventListener("click", ()=>{
        document.querySelector(".Transition").classList.add("Visible");
        setTimeout(()=>{
            window.location.href = "process.html"
        },500)
        
    })
}

if(window.location.pathname.includes("process.html")){
    setTimeout(()=>{
        document.querySelector(".TransitionUp").classList.add("Visible");

    },500)

    //STEP 1
            setTimeout(()=>{
            document.querySelector(".Step1Card").classList.add("Visible")
            setTimeout(()=>{
                document.getElementById("Consultation").classList.add("Visible");
                document.querySelector(".Step1Content").classList.add("Visible");
                setTimeout(()=>{
                    document.getElementById("Step1P").classList.add("Visible");
                },700)
                
            },1000)
        },1000)

    //STEP 2
     setTimeout(()=>{
            document.querySelector(".Step2Card").classList.add("Visible")
            setTimeout(()=>{
                document.getElementById("Consultation2").classList.add("Visible");
                document.querySelector(".Step2Content").classList.add("Visible");
                setTimeout(()=>{
                    document.getElementById("Step2P").classList.add("Visible");
                },700)
                
            },1000)
        },3000)

}

//FORM WEBHOOK

document.getElementById('Form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const payload = Object.fromEntries(formData.entries());

  await fetch('http://localhost:5678/webhook-test/8746d3d2-e4d7-466e-96cf-be1787a86322', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  console.log(payload);
});

