export interface Option {
  id: string;
  text: string;
}
export interface QuizQuestionProps {
  question: string;
  question_id: string;
  options: Option[];
  answer: string;
  img: string;
}
export interface QuizDataType {
  quiz_data: QuizQuestionProps[]
}

