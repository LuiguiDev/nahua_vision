import React, { useEffect, useState } from 'react'

export function useQuiz() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('../../public/data/quiz_data_2.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  if (!data) return
  return data
}