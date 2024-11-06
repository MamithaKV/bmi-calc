document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  
    if (weight > 0 && height > 0) {
      const bmi = (weight / (height * height)).toFixed(1);
      document.getElementById('bmi-value').textContent = bmi;
      
      let classification = '';
  
      if (bmi < 18.5) {
        classification = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        classification = 'Normal weight';
      } else if (bmi >= 25 && bmi <= 29.9) {
        classification = 'Overweight';
      } else if (bmi >= 30) {
        classification = 'Obesity';
      } else {
        classification = 'Unknown';
      }
  
      document.getElementById('bmi-classification').textContent = classification;
      document.getElementById('result').style.display = 'block';
    } else {
      alert('Please enter valid weight and height');
    }
  });
  