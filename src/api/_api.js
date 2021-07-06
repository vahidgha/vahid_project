import axios from "axios";
const REACT_APP_API_URL = "http://127.0.0.1:8000/";

export const APIClient = axios.create({ baseURL: REACT_APP_API_URL });


export const getQuestionsAPI = (level) => {
    return APIClient.get(`api/questions/${level}`);
}

export const submitAnswerAPI = (data) => {
    return APIClient.post(`api/quiz-answer`,data);
}

// questions = [
//     {
//     id:1,
//     answer : 'f'
//     }
// ]