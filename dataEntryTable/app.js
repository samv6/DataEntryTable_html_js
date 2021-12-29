function startload(){
const startingMinutes = 10;
        let  time = startingMinutes * 60;
        const countdownel = document.getElementById("timer");
        const interval = setInterval(updateCounter,1000);
        function  updateCounter(){
            const minutes = Math.floor(time/60);
            let second =   time % 60;
            countdownel.innerHTML = minutes + ":" + second ;
            time--;
             if(minutes == 0 && second ==0){
                    clearInterval(interval);
                    alert("Your times is up ");
                    location.reload();
            }
        }
    }
    var index,table = document.getElementById("myTableData");
function addRow() {
          
    var myName = document.getElementById("name");
    var addr = document.getElementById("addr");
    var empid = document.getElementById("empid");
    var mobno = document.getElementById("mobno");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(0).innerHTML= '<input type="button" value = "Update" onClick="Javacsript:changeContent()"></input>';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= addr.value;
    row.insertCell(3).innerHTML= empid.value;
    row.insertCell(4).innerHTML= mobno.value;
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
function changeContent() {

    var name = window.prompt("name").value;
    var addr = window.prompt("addr").value;
    var empid = window.prompt("empid").value;
    var mobno = window.prompt("mobno").value;

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    table.row[index].cells[0].innerHTML = name;
    table.row[index].cells[1].innerHTML = addr;
    table.row[index].cells[2].innerHTML = empid;
    table.row[index].cells[3].innerHTML = mobno;
    console.log(name);
}