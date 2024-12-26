document.getElementById('calculateButton').addEventListener('click', function () {
    // Hämta värden från formuläret
    const K = parseFloat(document.getElementById('K').value);
    const B = parseFloat(document.getElementById('B').value);
    const l = parseFloat(document.getElementById('l').value);
    const lambda = parseFloat(document.getElementById('lambda').value);

    if (isNaN(K) || isNaN(B) || isNaN(l) || isNaN(lambda)) {
        alert("Fyll i alla fält med giltiga värden.");
        return;
    }

    // Beräkna hastighet: v = sqrt(K / B^1.17) * l^0.39
    const velocity = Math.sqrt(K / Math.pow(B, 1.17)) * Math.pow(l, 0.39);

    // Beräkna tid: t = lambda / v
    const time = lambda / velocity;

    // Visa resultat
    document.getElementById('velocity').textContent = velocity.toFixed(2);
    document.getElementById('time').textContent = time.toFixed(4);
});
