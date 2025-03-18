const wholeContainer = document.querySelector('.container')
const inputsNumbers = document.querySelectorAll('input')
const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const multiplyButton = document.querySelector('.multiplied')
const divideButton = document.querySelector('.divided')



// induvidual inputs
const input_one = document.querySelector('.number_one')
const input_two = document.querySelector('.number_two')

// error message query
const errorMsg = document.querySelector('.error_msg')
errorMsg.style.display = 'none'
// if input values r not a number



// append a = sign

        const sign = document.querySelector('.equalCreate')

        const equalSign = document.createElement('button')





        inputsNumbers.forEach((input) => {
          input.style.color = '#f3f3f3'
          input.addEventListener('keydown' , (e) => {
     setTimeout(() => {
       // if letter entered
      if (isNaN(input.value)) {
        input.style.border = 'red solid 2px'
        errorMsg.style.display = 'flex'
        equalSign.remove()
      }

      if(Number(input.value)){
  input.style.border = '#f3f3f3 solid 2px'
          errorMsg.style.display = 'none'

        }



        // if fields r backspaced

        if(e.key === 'Backspace'){
          sign.style.display = 'none'
        }

        // if its not empty and there both numbers
        if(inputsNumbers[0].value !== ''
        && inputsNumbers[1].value !== ''
        && Number(inputsNumbers[0].value)
        && inputsNumbers[1].value !== ''
        && Number(inputsNumbers[1].value)){
          sign.style.display = 'block'
        equalSign.className = 'equalsTo'
        equalSign.innerText = '🟰'
        sign.appendChild(equalSign)
        sign.style.display = 'flex'
        sign.style.justifyContent = 'center'




        // Calculations







        // plus

              const answer = document.createElement('span')


        plusButton.addEventListener('click' , () => {
          answerMinus.remove()
          inputsNumbers[0].value + inputsNumbers[1].value
            equalSign.addEventListener('click' , () => {
              // const answer = document.createElement('span')
              answer.innerText = parseFloat(inputsNumbers[0].value) + parseFloat(inputsNumbers[1].value)
              answer.className = 'flexedAnswer'
              sign.appendChild(answer)

            }, {once: true})

if(answer.innerText !== ''){
  answer.remove()
}

        })


        // minus



        const answerMinus = document.createElement('span')

          minusButton.addEventListener('click' , () => {
            answer.remove()
        inputsNumbers[0].value - inputsNumbers[1].value
            equalSign.addEventListener('click' , () => {

              answerMinus.innerText = parseFloat(inputsNumbers[0].value) - parseFloat(inputsNumbers[1].value)
              answerMinus.className = 'flexedAnswer'
              sign.appendChild(answerMinus)
              answer.remove()

              if(answerMinus.innerText < 0){
               answerMinus.style.color = 'red'
               }

            }, {once: true})
            // if(answerMinus.innerText !== ''){
            //   answer.remove()
            // }
        })





        // times/mulitiplied





        // divided by









      }
    }, 0);



  })

})
