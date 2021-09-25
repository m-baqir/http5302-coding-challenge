function allEmployees() {
    let url = 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php';
    let request = new XMLHttpRequest();
    //make API request
    request.open("GET", url, true);
    //request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        //check if request is ok
        if (request.readyState == 4 && request.status == 200) {
            let employees = JSON.parse(request.responseText);
            let listemployees = document.getElementById("container");
            console.log(employees);
            let box = '';
            for (let i = 1; i <= Object.keys(employees).length; i++) {
                //console.log(employees[i]['roles'][0]['rolecolor']);
                box += `<div class='box'>`;
                //check if employee is featured
                if (employees[i]['employeeisfeatured'] == 1) {
                    box += `<i class='fas fa-crown' style='font-size:24px;color:red;display:block;float:right;'></i>`;
                }
                //get employee image
                box += `<img src='http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg' width='100'/>`;
                box += `<h2>${employees[i]['employeefname']} ${employees[i]['employeelname']}</h2>`;
                box += `<p>${employees[i]['employeebio']}</p>`;
                //get employee roles
                for (let x = 0; x < employees[i]['roles']['length']; x++) {
                    box += `<h4 style='color:white;background-color:${employees[i]['roles'][x]['rolecolor']};'>${employees[i]['roles'][x]['rolename']}</h4>`;
                }
                box += `</div>`;
            }
            //display in the html
            listemployees.innerHTML = box;
        }
    }
    request.send();
}
allEmployees();
