// switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } syntax

const month="April";
const month2=3;
switch (month2) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break; // it will break the switch statement control flow break statement is optional
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("Invalid month");
        break;
}
switch (month) {
    case "January":
        console.log("January");
        
        break;
    case "February":
        console.log("February");
        
        break;
    case "March":
        console.log("March");
        
        break; // it will break the switch statement control flow break statement is optional
    case "April":
        console.log("April");
        
        break;

    default:
       console.log("Invalid month");
        break;
}

// tru