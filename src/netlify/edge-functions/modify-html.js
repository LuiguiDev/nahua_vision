export default async (request, context) => {
  // Define los valores por defecto de las etiquetas meta
  const defaultMeta = {
    title: 'Nahua Vision',
    description: 'Descubre la cosmovisión prehispánica con Nahua Vision.',
    image: 'https://i.ibb.co/9wsSdJz/Nahua-vision.png',
  };

  // Obtén el contenido del HTML original
  const response = await context.next();
  const html = await response.text();

  // Modifica el HTML inyectando las etiquetas meta
  const updatedHtml = html.replace(
    '</head>',
    `
    <meta property="og:title" content="${defaultMeta.title}" />
    <meta property="og:description" content="${defaultMeta.description}" />
    <meta property="og:image" content="${defaultMeta.image}" />
    </head>
    `
  );

  // Devuelve la respuesta con el HTML modificado
  return new Response(updatedHtml, response);
};
