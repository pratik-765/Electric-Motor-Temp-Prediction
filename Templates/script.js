document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can get actual input values here if needed
    const ambient = parseFloat(event.target.ambient.value);
    const coolant = parseFloat(event.target.coolant.value);
    const voltage_d = parseFloat(event.target.voltage_d.value);
    const voltage_q = parseFloat(event.target.voltage_q.value);
    const speed = parseFloat(event.target.speed.value);
    const current_d = parseFloat(event.target.current_d.value);
    const current_q = parseFloat(event.target.current_q.value);

    // Replace this with actual prediction logic / API call
    const dummyPrediction = (-0.9143869588803724).toFixed(2);

    // Display the result
    document.getElementById("output").textContent =
        `Permanent Magnet surface temperature: ${dummyPrediction}`;
});
