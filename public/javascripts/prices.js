const monthlyBtn = document.querySelector(".billing-toggle button:first-child");
const yearlyBtn = document.querySelector(".billing-toggle button:last-child");

const prices = document.querySelectorAll(".price");

const monthlyPrices = [
    "₹9,999",
    "₹19,999",
    "₹39,999"
];

const yearlyPrices = [
    "₹7,999",
    "₹15,999",
    "₹31,999"
];

monthlyBtn.addEventListener("click", () => {

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    prices.forEach((price, index) => {

        price.innerHTML = `
            ${monthlyPrices[index]}
            <span>/month</span>
        `;

    });

});

yearlyBtn.addEventListener("click", () => {

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    prices.forEach((price, index) => {

        price.innerHTML = `
            ${yearlyPrices[index]}
            <span>/month</span>
        `;

    });

});