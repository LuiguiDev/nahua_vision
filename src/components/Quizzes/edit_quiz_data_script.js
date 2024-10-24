import fs from 'fs';
import {quiz_data} from './quiz_data.mjs'

try {
  const new_data = quiz_data.map(quiestion_elements => {
    return {
      ...quiestion_elements,
      img: ''
    }
  })

  const content = `${JSON.stringify(new_data, null, 2)}`

  fs.writeFileSync('quiz_data_2.js', content, 'utf8')
} catch (error) {
  console.log('Error al parsear el archivo', error)
}
