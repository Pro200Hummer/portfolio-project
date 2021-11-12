import toDo from './portfolio-images/incubator_todo-list.png';
import toast from './portfolio-images/custom-toast-notification.png';
import employees from './portfolio-images/employees.png';
import questionAnswer from './portfolio-images/question-answer-test.png';

interface PortfolioImages {
    toDo: string
    toast: string
    employees: string
    questionAnswer: string
}

const portfolioImages: PortfolioImages = {
    toDo: toDo,
    toast: toast,
    employees: employees,
    questionAnswer: questionAnswer
}
export default portfolioImages;