const htmlRep = {
    createContainer(object){
        const displayContainer= document.querySelector("#output")
        const newEmployee= document.createElement("article");
        newEmployee.classList.add("employee");
        displayContainer.appendChild(newEmployee);
        const header=document.createElement("header");
        header.classList.add("employeeName")
        header.innerHTML= `<h1>${object.name}</h1>`
        newEmployee.appendChild(header)
        const employeeParagraph= document.createElement("div")
        employeeParagraph.classList.add("employeeDepartment")
        employeeParagraph.innerHTML= `<p>Works in the ${object.departmentName}</p>`
        newEmployee.appendChild(employeeParagraph);
        const employeeComputer= document.createElement("div");
        employeeComputer.classList.add("employeeComputer")
        employeeComputer.innerHTML= `<p> Uses a ${object.compName} computer. </p>`
        newEmployee.appendChild(employeeComputer);

    }

}

export default htmlRep