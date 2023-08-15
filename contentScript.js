console.log("hello from cs.js")
//confirm("Hello from cs.js")

// const aTags = document.getElementsByTagName("a")
// for(const tag of aTags){
//     tag.textContent = "Hello World!"
// }


const table = document.getElementsByClassName("attendance")
console.log(table)


const table2 = document.getElementById("mytable")
var rowLength = table2.rows.length;
console.log(rowLength)

const currentTime = new Date();
console.log(`Current time= ${currentTime}`)

var startTime, endTime;
var totalTime = 0;

for (let i = 0; i < rowLength; i++) {
    console.log(table2.rows[i].cells[1].innerText)
    if(table2.rows[i].cells[1].innerText==="Entry")
    {
        var hour=table2.rows[i].cells[0].innerText.split(":")[0];
        var min=table2.rows[i].cells[0].innerText.split(":")[1];
        var sec=table2.rows[i].cells[0].innerText.split(":")[2];
        if(hour<6) hour +=12
        startTime= new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),hour,min,sec)
        console.log(`Current time= ${startTime.valueOf()}`)
        
    }
    else if(table2.rows[i].cells[1].innerText==="Exit")
    {
        var hour=table2.rows[i].cells[0].innerText.split(":")[0];
        var min=table2.rows[i].cells[0].innerText.split(":")[1];
        var sec=table2.rows[i].cells[0].innerText.split(":")[2];
        if(hour<6) hour +=12
        
        endTime= new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),hour,min,sec)
        console.log(`End time= ${endTime.valueOf()}`)

        totalTime+= (endTime-startTime)
        console.log(totalTime)
    }
}
totalTime+= currentTime-startTime

var extraHrs= Math.trunc(totalTime/3600000)
var extraMin= Math.trunc(totalTime/60000)%60

console.log(extraHrs)
console.log(extraMin)

const heading = document.getElementById("header")

var hh= parseInt(heading.textContent.split(":")[0])
var mm= parseInt(heading.textContent.split(":")[1])

hh+=extraHrs+((mm+extraMin)/60)
mm+=(mm+extraMin)%60

heading.textContent = `${hh}:${mm}`
