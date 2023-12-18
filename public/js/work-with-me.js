const questionsObj = document.querySelectorAll('.question')
const questions = Object.values(questionsObj)


const displayAnswer = () => {
    questions.forEach(question => {
        question.addEventListener('mouseover', () => {
            question.childNodes[3].classList.remove('hidden')
            question.childNodes[1].classList.add('font-bold')
        })
        question.addEventListener('mouseout', () => {
            question.childNodes[3].classList.add('hidden')
            question.childNodes[1].classList.remove('font-bold')
        })
    });
    return
}


const initApp = () => {
    displayAnswer()
}


document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
})