"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const ramdomNumber = Math.floor(10000 + Math.random());
let myBalance = 0;
let answer = await inquirer_1.default.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "course",
        type: "list",
        message: "select the course to enrolled",
        Choices: ["HTML", "CSS", "Typescript", "Javascript", "python"]
    }
]);
const tutionFee = {
    "HTML": 3000,
    "CSS": 3500,
    "Tyscript": 6000,
    "Javascript": 6500
};
console.log(`\nTushion Fees: ${tutionFee[answer.course]}`);
