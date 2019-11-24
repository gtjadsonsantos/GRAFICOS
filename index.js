const canvas = document.querySelector("#canvas")
const contx = canvas.getContext('2d')
const subtitle = document.querySelector("#list")

const width = 10
let space = 30
const people = [
    {id: 1, salary: 2100, spent: 1000, color:'#eb4034',name:"Jadson" },
    {id: 2, salary: 2100, spent: 500 , color:'#d49b5b',name:"Bruna" },
    {id: 2, salary: 2100, spent: 1500, color:'#dbf54c',name:"Leonel" },
    {id: 2, salary: 2100, spent: 500 , color:'#90c93e',name:"Bianca" },
    {id: 2, salary: 2100, spent: 1500, color:'#1fa37c',name:"Cristian" },
    {id: 2, salary: 2100, spent: 1600, color:'#1caad9',name:"Paulo" },
    {id: 2, salary: 2100, spent: 1700, color:'#0f3970',name:"Anderson" },
    {id: 2, salary: 2100, spent: 2000, color:'#d50ef0',name:"Roberto" },
    {id: 2, salary: 2100, spent: 2000, color:'#000',name:"Cassia" },
]

people.forEach(people=>{
    const heigth = (( people.spent / people.salary ) * 100) * 3 
    contx.fillStyle = people.color
    contx.fillRect(space,(300 - heigth ),10,heigth)
    space += 50;
    subtitle.innerHTML += `<span style="background-color:${people.color}; width: 100px; color: #fff">${people.name}</span>`
    
})
