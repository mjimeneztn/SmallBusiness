import htmlRep from "./dom.js"

const data = {
    getData() {
        return fetch("http://localhost:8088/Employees")
            .then(response => response.json())
            .then(parsedData => parsedData.forEach(obj => {
                console.log("obj:", obj)
                
                let department = obj.departmentId
                let computer = obj.computerId

                fetch(`http://localhost:8088/Computers/${computer}`)
                    .then(response => response.json())
                    .then(parsedComputer => {
                        obj.compName = parsedComputer.name
                fetch(`http://localhost:8088/Departments/${department}`)
                     .then(response => response.json())
                     .then(parsedDepartment => {
                         obj.departmentName = parsedDepartment.name
            htmlRep.createContainer(obj)
                            })
                    })
            }))
    }
}



export default data