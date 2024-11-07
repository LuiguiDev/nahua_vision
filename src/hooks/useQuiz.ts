import React, { useEffect, useState } from 'react'
import { QuizDataType } from '../components/Quizzes/types';

export function useQuiz(): QuizDataType | null {
  const [data, setData] = useState<QuizDataType | null>(null);

  useEffect(() => {
    fetch('../../public/data/quiz_data_2.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  return data
}