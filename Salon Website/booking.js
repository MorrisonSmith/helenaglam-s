document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const hairType = document.getElementById("hairType").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `📅 *New Salon Booking*%0A
👤 Name: ${name}%0A
📞 Phone: ${phone}%0A
💇 Hair Type: ${hairType}%0A
✨ Service: ${service}%0A
📆 Date: ${date}%0A
⏰ Time: ${time}%0A
📝 Message: ${message}`;

    const ownerNumber = "+231776147785"; // replace with owner WhatsApp number

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
    
});



