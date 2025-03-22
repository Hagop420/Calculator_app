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

              })
            }





  CC.addEventListener('click' , () => {
          CC.style.display = 'none'
        })


     setTimeout(() => {
       // if letter entered
      if (isNaN(inputsNumbers[0].value) || isNaN(inputsNumbers[1].value)) {
        input.style.border = 'red solid 2px'
        errorMsg.style.display = 'flex'
        equalSign.remove()
        plusButton.addEventListener('click' , () => {
          errorMsg.innerHTML = 'Invalid numerals'
         setTimeout(() => {
          errorMsg.remove()
         }, 2000)

        })
      }

      if(Number(input.value)){
  input.style.border = '#f3f3f3 solid 2px'
          errorMsg.style.display = 'none'

        }

        if(inputsNumbers[0].value!== '' || inputsNumbers[1] !== ''){
                    CC.style.display = 'inline'
        }





        // if fields r backspaced

        if(e.key === 'Backspace'){
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
          // sign.style.display = 'block'
document.querySelectorAll('.flexedAnswer').forEach((el) => {
  el.style.display = "none"
});        equalSign.className = 'equalsTo'
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
      // - gone
     document.querySelector('.answerMinused').style.display = 'none'

// +

}else if(operation === 'minus'){
       answerMinus.innerText = parseFloat(inputsNumbers[0].value) - parseFloat(inputsNumbers[1].value)
                  answerMinus.className = 'flexedAnswer answerMinused'
                       answerMinus.remove()
                  sign.appendChild(answerMinus);
                  document.querySelector('.answerMinused').style.display = 'flex'
                  // + gone
                  document.querySelector('.plusedAnswer').style.display = 'none'
}else if(operation === 'multiply'){
       answerMultiply.innerText = parseFloat(inputsNumbers[0].value) * parseFloat(inputsNumbers[1].value)
                  answerMultiply.className = 'flexedAnswer answerMultiplied'
                  answerMultiply.remove()
                  sign.appendChild(answerMultiply);
                  document.querySelector('.answerMultiplied').style.display = 'flex'
                  // - gone
                  document.querySelector('.answerMinused').style.display = 'none'
}else if(operation === 'divide'){
       answerDivide.innerText = parseFloat(inputsNumbers[0].value) / parseFloat(inputsNumbers[1].value)
                  answerDivide.className = 'flexedAnswer answerDivided'
                  answerDivide.remove()
                  sign.appendChild(answerDivide);
                  document.querySelector('.answerDivided').style.display = 'flex'
                  // * gone
                  document.querySelector('.answerMultiplied').style.display = 'none'
}

});




      }
    }, 0);


    // console.log(CC)


  })

})
