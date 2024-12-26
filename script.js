/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calculate() {
    // Get the input values
    var chemistry = parseFloat(document.getElementById("chemistry").value);
    var english = parseFloat(document.getElementById("english").value);
    var biology = parseFloat(document.getElementById("biology").value);
    var math = parseFloat(document.getElementById("math").value);

    // Check if inputs are not empty
    if (isNaN(chemistry) || isNaN(english) || isNaN(biology) || isNaN(math) || chemistry === "" || english === "" || biology === "" || math === "") {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    // Total marks
    var totalMarks = chemistry + english + biology + math;
    // Maximum marks
    var maxMarks = 400;
    // Calculate percentage
    var percentage = (totalMarks / maxMarks) * 100;

    // Assign grade based on percentage
    var grade = '';
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display result
    document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;
}

