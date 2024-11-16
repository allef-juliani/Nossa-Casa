document.addEventListener("DOMContentLoaded", () => {
    const calculatorForms = [
        document.getElementById("calculatorForm1"),
        document.getElementById("calculatorForm2"),
    ];
    const totalSpans = [
        document.getElementById("total1"),
        document.getElementById("total2"),
    ];
    const overallTotalSpan = document.getElementById("overallTotal");

    let totals = [0, 0];

    calculatorForms.forEach((form, index) => {
        form.querySelectorAll(".item").forEach((checkbox) => {
            checkbox.addEventListener("change", (e) => {
                const value = parseFloat(e.target.dataset.value);

                if (e.target.checked) {
                    totals[index] += value;
                } else {
                    totals[index] -= value;
                }

                updateTotals();
            });
        });
    });

    function updateTotals() {
        totalSpans.forEach((span, index) => {
            span.textContent = totals[index].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
        });

        const overallTotal = totals.reduce((acc, curr) => acc + curr, 0);
        overallTotalSpan.textContent = overallTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
});
