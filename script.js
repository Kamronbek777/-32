let message = prompt("Enter number");
let h1 = document.createElement("h1");

switch (message) {
    case "1":
        h1.textContent = "Monday"
        document.body.appendChild(h1)
        break;
    case "2":
        h1.textContent = "Tuesday"
        document.body.appendChild(h1)
        break;
    case "3":
        h1.textContent = "Wednesday"
        document.body.appendChild(h1)
        break;
    case "4":
        h1.textContent = "Thursday"
        document.body.appendChild(h1)
        break;
    case "5":
        h1.textContent = "Friday"
        document.body.appendChild(h1)
        break;
    case "6":
        h1.textContent = "Saturday"
        document.body.appendChild(h1)
        break;
    case "7":
        h1.textContent = "Sunday"
        document.body.appendChild(h1)
        break;
    default:
        h1.textContent = "Wrong number"
        document.body.appendChild(h1)
        break;
}