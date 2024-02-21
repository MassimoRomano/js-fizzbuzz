console.log('funziona')
//test the console


const elementList = document.getElementById("list")
//var for the id list

for (let i = 1; i <= 100; i++){  //stamp variable i


//add var for multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0){
    const multipleSame = document.createElement('li')
    multipleSame.innerText = 'FIZZBUZZ'
    elementList.append(multipleSame)
    }

//add var for mutiple of 3
    else if ( i % 3 === 0){
        const multipleThree = document.createElement('li')
        multipleThree.innerText = 'FIZZ'
        elementList.append(multipleThree) 
    }

    //add var for multiple of 5
    else if (i % 5 === 0){
        const multipleFive = document.createElement('li')
        multipleFive.innerText = 'BUZZ'
        elementList.append(multipleFive)

    }
  
    //add else for normal list number
    else{
        const multipleNone = document.createElement('li')
        multipleNone.innerText = i
        elementList.append(multipleNone)
    }
    

   
}