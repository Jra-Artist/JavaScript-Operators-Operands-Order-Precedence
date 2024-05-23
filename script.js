function calculateAverage() {
    // Get the grades from the input fields
    var subject1 = parseFloat(document.getElementById('subject1').value);
    var subject2 = parseFloat(document.getElementById('subject2').value);
    var subject3 = parseFloat(document.getElementById('subject3').value);
    var subject4 = parseFloat(document.getElementById('subject4').value);
    var subject5 = parseFloat(document.getElementById('subject5').value);

    // Check if all inputs are valid numbers
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers for all subjects.";
        return;
    }

    // Calculate the average
    var average = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;

    // Display the average in the result div
    document.getElementById('result').innerHTML = "Average Grade: " + average.toFixed(2);
}
