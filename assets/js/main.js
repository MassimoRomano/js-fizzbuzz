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
    console.log(multipleSame)

    multipleSame.className = "boxS"
    }

//add var for mutiple of 3
    else if ( i % 3 === 0){
        const multipleThree = document.createElement('li')
        multipleThree.innerText = 'FIZZ'
        elementList.append(multipleThree) 
        console.log(multipleThree)

        multipleThree.className = "box3"

    }


    //add var for multiple of 5
    else if (i % 5 === 0){
        const multipleFive = document.createElement('li')
        multipleFive.innerText = 'BUZZ'
        elementList.append(multipleFive)
        console.log(multipleFive)

        multipleFive.className = "box5"

    }
  
    //add else for normal list number
    else{
        const multipleNone = document.createElement('li')
        multipleNone.innerText = i
        elementList.append(multipleNone)
        console.log(multipleNone)

        multipleNone.className = "box"
    }
    

   
}