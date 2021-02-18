/**
 * The University of Westminster, London.
 * Web Design and Development
 * 
 * @date 18/02/2021
 * @author Justin Lange
 */

// Global variables
var chosen_numbers = [];
var generated_numbers = [];

// Function to get a number from the client
function get_number(number) {
    var input = prompt("Please enter a number (0-59)", "");

    if(input != null && chosen_numbers.includes(input) != true) {
        chosen_numbers.push(input);
        document.getElementById(number).innerHTML = input
        if(generated_numbers.includes(parseInt(input)) == true) {
            document.getElementById(number).classList.remove("bg-white")
            document.getElementById(number).classList.add("bg-orange")
            const bonusNumber = generated_numbers[generated_numbers.length - 1]
            if(input == bonusNumber) {
                document.getElementById(number).classList.remove("bg-orange")
                document.getElementById(number).classList.remove("text-black")
                document.getElementById(number).classList.add("bg-purple")
                document.getElementById(number).classList.add("text-white")
            }
        }
    } else {
        get_number(number)
    }
}

// Function to generate a new random number
function generate_number(number) {
    var random = Math.floor(Math.random() * 59) + 1;
    if(generated_numbers.includes(random) != true) {
        document.getElementById(number).innerHTML = random
        generated_numbers.push(random)
    } else {
        generate_number(number)
    }
}

generate_number("displayRandomNum1")
generate_number("displayRandomNum2")
generate_number("displayRandomNum3")
generate_number("displayRandomNum4")
generate_number("displayRandomNum5")
generate_number("displayRandomNum6")
generate_number("displayRandomNum7")
console.log(generated_numbers) // Show generated numbers in console

get_number("displayUserNum1")
get_number("displayUserNum2")
get_number("displayUserNum3")
get_number("displayUserNum4")
get_number("displayUserNum5")
get_number("displayUserNum6")


