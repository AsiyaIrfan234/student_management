import inquirer from "inquirer";

const ramdomNumber: number = Math.floor(10000 + Math.random() * 90000 )

let myBalance: number = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter student name:",
            validate: function (value) {
                if (value.trim() !=="") {
                    return true;
                }
                return "Please enter a non-empty value.";
            },
        },
        {
            name: "courses",
            type: "list",
            message: "select the course to enrolled",
            choices: ["HTML", "CSS", "Typescript", "Javascript", "python"]
        }
    ]  
);

const tutionFee: {[key: string]: number} = {
    "HTML": 3000,
    "CSS": 3500,
    "Tyscript": 6000,
    "Javascript": 6500
};

console.log(`\nTushion Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balnce: ${myBalance}\n`);

let paymentType = await inquirer.prompt ([
    {
        name: "payment",
        type: "list",
        message: "select payment.method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() ! == "") {
                return true;
            }
            return "Please enter a non-empty value,";
        },
    }
]);

console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tushionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tushionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully registered for this ${answer.courses}.\n`);

let ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View status", "Exit"]
    }
])

if (ans.select === "view status"){
    console.log("\n********status********\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${ramdomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tushion Fees paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
} else {
    console.log("\nExiting Student Management System\n");   
}

} else {
    console.log("Invalid amount due to course\n");

}





