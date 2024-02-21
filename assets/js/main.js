console.log('funziona')
//test the console


const elementList = document.getElementById("list")
//var for the id list

for (let i = 1; i<=100; i++){
    console.log(i)  //stamp variable i
    const markupListItem = `<li>${i}</li>`
    console.log(markupListItem)
}