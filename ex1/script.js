function addHandler() {
    let firstNumber = parseFloat($("#first-number").val());
    let secondNumber = parseFloat($('#second-number').val()); 
    
    $("#result").text(firstNumber+secondNumber);
}

function subtractHandler() {
    let firstNumber = parseFloat($("#first-number").val());
    let secondNumber = parseFloat($('#second-number').val()); 
    
    $("#result").text(firstNumber-secondNumber);
}

function multiplyHandler() {
    let firstNumber = parseFloat($("#first-number").val());
    let secondNumber = parseFloat($('#second-number').val()); 
    
    $("#result").text(firstNumber*secondNumber);
}

function divideHandler() {
    let firstNumber = parseFloat($("#first-number").val());
    let secondNumber = parseFloat($('#second-number').val()); 
    
    $("#result").text(firstNumber/secondNumber);
}


$(document).ready(function() {
    $('#add').click(addHandler);
    $('#subtract').click(subtractHandler);
    $('#multiply').click(multiplyHandler);
    $('#divide').click(divideHandler);
});