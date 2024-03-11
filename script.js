
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("grossMonthlyInput").addEventListener("change", function (e) {
        e.preventDefault();

        let monthlyCont = document.getElementById("grossMonthlyInput")
        var monthly = parseInt(monthlyCont.innerText);

        
        document.getElementById("fedTaxInput").innerText = (monthly * 0.12);
        document.getElementById("stateTaxInput").innerText =(monthly * 0.07);
        document.getElementById("socialSecInput").innerText =(monthly * 0.062);
        document.getElementById("medcarexInput").innerText =(monthly * 0.0145);
        document.getElementById("stateDisabilityInput").innerText =(monthly * 0.01);
        document.getElementById("retireInput").innerText =(monthly * 0.05);
        document.getElementById("medinsuranceInput").innerText =(monthly - 180);
    });
});