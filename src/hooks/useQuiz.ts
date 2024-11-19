import React, { useEffect, useState } from 'react'
import { QuizDataType, QuizQuestionProps } from '../components/quizzes/types';

interface UseQuizResult {
  data: QuizQuestionProps[] | null;
  loading: boolean;
  error: string | null;
}

export function useQuiz(): UseQuizResult {
  const [data, setData] = useState<QuizQuestionProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.npoint.io/5691e3f0e9c55f55fbd5')
      .then((response) => {
        if(!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json()
      })
      .then((jsonData) => {
        setData(jsonData)
        setLoading(false)
      })
      .catch((error) => {
        if(error) {
          setError(error.message)
          setLoading(false)
        }
        }
      );
  }, []);

  return {data, loading, error}
}