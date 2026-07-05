const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const submitBtn = document.querySelector(".submit-btn");

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    status.className = "form-status";
    status.innerText = "";
    
const phone = document.getElementById("phone").value.trim();

if (!/^[0-9]{10}$/.test(phone)) {

    status.className = "form-status error";
    status.innerHTML = "❌ Please enter a valid 10-digit WhatsApp number.";

    submitBtn.disabled = false;
    submitBtn.innerText = "Send my brief";

    return;
}
    const formData = new FormData(form);

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbx1PWawjdpAnYSBoEA7ictNkwuTprGIBDC8fIf6tKOj3-uijHIbA9PSpf5UIPJPiADkfw/exec",
            {
                method: "POST",
                body: formData,
                mode: "no-cors"
            }
        );

        status.classList.add("success");
        status.innerHTML =
            "✅ Thank you! Your request has been submitted successfully. We'll contact you within 24 hours.";

        form.reset();

    } catch (err) {

        console.error(err);

        status.classList.add("error");
        status.innerHTML =
            "❌ Something went wrong. Please try again.";

    }

    submitBtn.disabled = false;
    submitBtn.innerText = "Send my brief";

});