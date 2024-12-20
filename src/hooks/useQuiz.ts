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
    fetch('https://api.npoint.io/cd769a514db1404cb6ce')
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