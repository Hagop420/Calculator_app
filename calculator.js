let operation = null
const wholeContainer = document.querySelector('.container')
const inputsNumbers = document.querySelectorAll('input')
const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const multiplyButton = document.querySelector('.multiplied')
const divideButton = document.querySelector('.divided')

const CCappendH1 = document.querySelector('.append_CC')

// induvidual inputs
const input_one = document.querySelector('.number_one')
const input_two = document.querySelector('.number_two')

// error message query
const errorMsg = document.querySelector('.error_msg')
errorMsg.style.display = 'none'
// if input values r not a number

              const CC = document.createElement('button')


// append a = sign

        const sign = document.querySelector('.equalCreate')

        const equalSign = document.createElement('button')





        inputsNumbers.forEach((input) => {


let appendedChild = false;



                          // if the operand buttons r clicked but there's no input values
                          function errorIfBlank(){
                              if(input_one.value === '' || input_two.value === ''){
    errorMsg.style.display = 'flex'
                  errorMsg.innerHTML = 'Please enter both fields to continue'
                  setTimeout(() => errorMsg.style.display = 'none' , 2000)
    }
                          }

                          function invalidEntry(){
                            errorMsg.style.display = 'flex'
                            errorMsg.innerHTML = 'Invalid entry'
                          setTimeout(() => errorMsg.style.display = 'none' , 2000)
                          }

      function errorDisplay(){
        errorMsg.style.display = 'none'
      }



plusButton.addEventListener('click' , errorIfBlank)
minusButton.addEventListener('click' , errorIfBlank)
multiplyButton.addEventListener('click' , errorIfBlank)
divideButton.addEventListener('click' , errorIfBlank)


input.style.color = '#f3f3f3'
input.addEventListener('keydown' , (e) => {


                if (!appendedChild) {
      appendedChild = true;
       // creating a cc reset
              CC.className = 'CC_reset_btn'
              CC.innerText = 'CC'

              CCappendH1.appendChild(CC)
              const one = document.querySelector('.CC_reset_btn')
                  CC.style.scale = 1
              // CCappendH1.children[1].style.display = 'none'
              CC.addEventListener('click' , () => {
                inputsNumbers[0].value = ''
                inputsNumbers[1].value = ''
                inputsNumbers[0].style.border = '#f3f3f3 solid 2px'
                inputsNumbers[1].style.border = '#f3f3f3 solid 2px'
                document.querySelector('.flexedAnswer').style.display = 'none'
              })
            }







  CC.addEventListener('click' , () => {
          CC.style.display = 'none'
          inputsNumbers[0].style.border = '#f3f3f3 solid 2px'
                inputsNumbers[1].style.border = '#f3f3f3 solid 2px'
          equalSign.style.display = 'none'
        })


     setTimeout(() => {


       // if letter entered
      if (isNaN(inputsNumbers[0].value) || isNaN(inputsNumbers[1].value)) {
        input.style.border = 'red solid 2px'

        errorMsg.style.display = 'flex'
                          errorMsg.innerHTML = 'Invalid entry'
                          setTimeout(() => errorMsg.style.display = 'none' , 2000)
        equalSign.remove()
        plusButton.addEventListener('click' , () => {
          errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2000)

        })
        minusButton.addEventListener('click' , () => {
          errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2200)

        })
        multiplyButton.addEventListener('click' , () => {
          errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2300)

        })
        divideButton.addEventListener('click' , () => {
           errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2400)

        })
      }

      if(isNaN(inputsNumbers[0].value) && isNaN(inputsNumbers[1].value)){
             input.style.border = 'red solid 2px'

        errorMsg.style.display = 'flex'
                          errorMsg.innerHTML = 'Invalid entry'
                          setTimeout(() => errorMsg.style.display = 'none' , 2000)
        equalSign.remove()
        plusButton.addEventListener('click' , () => {
          errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'

         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2420)

        })
        minusButton.addEventListener('click' , () => {
                            errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2440)

        })
        multiplyButton.addEventListener('click' , () => {
                            errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2460)

        })
        divideButton.addEventListener('click' , () => {
                            errorMsg.style.display = 'flex'
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.style.display = 'none';
         }, 2500)

        })
      }



      if(Number(input.value)){
  input.style.border = '#f3f3f3 solid 2px'
          errorMsg.style.display = 'none'


        }

        if(inputsNumbers[0].value!== '' || inputsNumbers[1].value !== ''){
                    CC.style.display = 'inline'
        }


        if(inputsNumbers[0].value== '' || inputsNumbers[1].value == ''){
          equalSign.style.display = 'none'
        }







        // if fields r backspaced

        if(e.key === 'Backspace'){
          errorMsg.style.display = 'none'
          sign.style.visibility = 'none'
          const answerBoxed = document.querySelectorAll('.flexedAnswer')
          if(inputsNumbers[0].value === '' && inputsNumbers[1].value === ''){
            CC.style.display = 'none'
          }
          answerBoxed.forEach((eachAnswer) => {
            eachAnswer.style.display = 'none'
          })
        }







        // if its not empty and there both numbers
        // equal sign appending
        if(inputsNumbers[0].value !== ''
        && inputsNumbers[1].value !== ''
        && Number(inputsNumbers[0].value)
        && inputsNumbers[1].value !== ''
        && Number(inputsNumbers[1].value)){
          errorMsg.style.display = 'none'
          plusButton.addEventListener('click' , errorDisplay)
minusButton.addEventListener('click' , errorDisplay)
multiplyButton.addEventListener('click' , errorDisplay)
divideButton.addEventListener('click' , errorDisplay)
          // sign.style.display = 'block'
document.querySelectorAll('.flexedAnswer').forEach((el) => {
  el.style.display = "none"

});
          equalSign.style.display = 'inline'
equalSign.className = 'equalsTo'
        equalSign.innerText = '🟰'
        sign.appendChild(equalSign)
        sign.style.display = 'flex'
        sign.style.justifyContent = 'center'




        // Calculations






        // plus

              const answer = document.createElement('span')

              // creating all answers element spans
          const answerPlus = document.createElement('span')
          const answerMinus = document.createElement('span')
          const answerMultiply = document.createElement('span')
          const answerDivide = document.createElement('span')


plusButton.addEventListener('click', () => {
  operation = 'plus';
});
minusButton.addEventListener('click', () => {
  operation = 'minus';
});

multiplyButton.addEventListener('click', () => {
  operation = 'multiply';
});
divideButton.addEventListener('click', () => {
  operation = 'divide';
});

equalSign.addEventListener('click', () => {


  document.querySelectorAll('.flexedAnswer').forEach(el => el.remove());

const num1 = parseFloat(inputsNumbers[0].value);
  const num2 = parseFloat(inputsNumbers[1].value);


if(operation === 'plus'){
       answerPlus.innerText = parseFloat(inputsNumbers[0].value) + parseFloat(inputsNumbers[1].value)
     answerPlus.className = 'flexedAnswer plusedAnswer'
     answerPlus.remove()
      sign.appendChild(answerPlus);
      document.querySelector('.plusedAnswer').style.display = 'flex'
         const valPlused = document.querySelector('.plusedAnswer').innerHTML
                  if(valPlused < 0){
                    document.querySelector('.plusedAnswer').style.color = 'red'
                  }
      // - gone
     document.querySelector('.answerMinused').style.display = 'none'

// +

}else if(operation === 'minus'){
       answerMinus.innerText = parseFloat(inputsNumbers[0].value) - parseFloat(inputsNumbers[1].value)
                  answerMinus.className = 'flexedAnswer answerMinused'
                       answerMinus.remove()
                  sign.appendChild(answerMinus);
                  document.querySelector('.answerMinused').style.display = 'flex'
                  const valMinus = document.querySelector('.answerMinused').innerHTML
                  if(valMinus < 0){
                    document.querySelector('.answerMinused').style.color = 'red'
                  }
                  // + gone
                  document.querySelector('.plusedAnswer').style.display = 'none'
}else if(operation === 'multiply'){
       answerMultiply.innerText = parseFloat(inputsNumbers[0].value) * parseFloat(inputsNumbers[1].value)
                  answerMultiply.className = 'flexedAnswer answerMultiplied'
                  answerMultiply.remove()
                  sign.appendChild(answerMultiply);
                  document.querySelector('.answerMultiplied').style.display = 'flex'
                   const valMultiply = document.querySelector('.answerMultiplied').innerHTML
                  if(valMultiply < 0){
                    document.querySelector('.answerMultiplied').style.color = 'red'
                  }
                  // - gone
                  document.querySelector('.answerMinused').style.display = 'none'
}else if(operation === 'divide'){
       answerDivide.innerText = parseFloat(inputsNumbers[0].value) / parseFloat(inputsNumbers[1].value)
                  answerDivide.className = 'flexedAnswer answerDivided'
                  answerDivide.remove()
                  sign.appendChild(answerDivide);
                  document.querySelector('.answerDivided').style.display = 'flex'
                    const valDivided = document.querySelector('.answerDivided').innerHTML
                  if(valDivided < 0){
                    document.querySelector('.answerDivided').style.color = 'red'
                  }
                  // * gone
                  document.querySelector('.answerMultiplied').style.display = 'none'
}else if(!operation){
  errorMsg.style.display = 'flex'
  errorMsg.innerHTML = 'Please select an operand'
    setTimeout(() => errorMsg.style.display = 'none' , 2000)
}


});








      }
    }, 0);

  })


})
