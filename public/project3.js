
const calculate = function () {

    let salary = document.getElementById("sal").value;
    let inp1 = document.getElementById("gelly").value;
    let inp2 = document.getElementById("inp2").value;
    let inp3 = document.getElementById("inp3").value;
    let inp4 = document.getElementById("inp4").value;
    let inp5 = document.getElementById("inp5").value;
    let inp6 = document.getElementById("inp6").value;
    let inp7 = document.getElementById("inp7").value;
    let inp8 = document.getElementById("inp8").value;
    let inp9 = document.getElementById("inp9").value;
    let inp10 = document.getElementById("inp10").value;
    let total = parseFloat(inp1) + parseFloat(inp2) + parseFloat(inp3) + parseFloat(inp4) + parseFloat(inp5) + parseFloat(inp6) + parseFloat(inp7) + parseFloat(inp8) + parseFloat(inp9) + parseFloat(inp10);
    let expance = salary - total;
    let print = `your monthly salary is ${salary} 
    and spend money by you in this month is ${total}. 
    Now you have left amount ${expance} that you can save it`;
    let greater = `your expance is very high compair to your salary. total expances = ${expance}, total salary = ${salary}`;


    if (salary > expance) {
        document.getElementById("empty-salary").innerHTML = print;
    } else if (salary < expance) {
        document.getElementById("empty-salary").innerHTML = greater;
    }

    console.log(expance, salary);
}

calculate();