console.log('funziona')
//test the console


const elementList = document.getElementById("list")
//var for the id list

for (let i = 1; i <= 100; i++){  //stamp variable i

    if (i % 3 === 0 && i % 5 === 0){
    const multipleSame = document.createElement('li')
    multipleSame.innerText = 'FizzBuzz'
    elementList.append(multipleSame)
    }

    else if ( i % 3 === 0){
        const multipleThree = document.createElement('li')
        multipleThree.innerText = 'FIZZ'
        elementList.append(multipleThree) 
    }

    

   
}