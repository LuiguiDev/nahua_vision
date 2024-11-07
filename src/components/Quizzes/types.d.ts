export interface Option {
  id: string;
  text: string;
}
export interface QuizQuestionProps {
  question: string;
  options: Option[];
  correctAnswer: string;
  img: string;
}
export interface QuizDataType {
  quiz_data: QuizQuestionProps[]
}

