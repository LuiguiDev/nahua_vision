import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold my-3" {...props} />,
  p: (props: any) => <p className="my-2" {...props} />,
  // Añade más componentes personalizados aquí
};

export const MDXLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <article className="prose lg:prose-xl mx-auto px-4">
        {children}
      </article>
    </MDXProvider>
  );
};
