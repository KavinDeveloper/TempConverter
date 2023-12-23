function convertTemperature(unit) {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultDisplay = document.getElementById('result');

    if (unit === 'celsius') {
        // Convert Celsius to Fahrenheit
        var celsiusValue = parseFloat(celsiusInput.value) || 0;
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        
        // Display the result for Celsius
        resultDisplay.innerHTML = `Result: ${celsiusValue.toFixed(2)} °C = ${fahrenheitValue.toFixed(2)} °F`;
        
        // Update Fahrenheit input
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (unit === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        var fahrenheitValue = parseFloat(fahrenheitInput.value) || 0;
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        
        // Display the result for Fahrenheit
        resultDisplay.innerHTML = `Result: ${fahrenheitValue.toFixed(2)} °F = ${celsiusValue.toFixed(2)} °C`;

        // Update Celsius input
        celsiusInput.value = celsiusValue.toFixed(2);
    }

    // Check if both inputs are empty (backspace) and clear the result
    if (celsiusInput.value === '' && fahrenheitInput.value === '') {
        resultDisplay.innerHTML = 'Result: ';
    }
}

// Clear the specific input when backspace is pressed
document.addEventListener('keydown', function(event) {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');

    if (event.key === 'Backspace' || event.key === 'Delete') {
        // Determine which input is focused and clear it
        if (document.activeElement === celsiusInput) {
            celsiusInput.value = '';
        } else if (document.activeElement === fahrenheitInput) {
            fahrenheitInput.value = '';
        }

        // Clear the result display if both inputs are empty
        if (celsiusInput.value === '' && fahrenheitInput.value === '') {
            document.getElementById('result').innerHTML = 'Result: ';
        }
    }
});




