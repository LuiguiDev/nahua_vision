import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MDXLayout } from './MDXLayout';

const MDXBlogPost: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Importación dinámica del post
  const PostContent = React.lazy(() => 
    import(`./Articles/${slug}.mdx`)
      .catch(() => {
        navigate('/404');
        return { default: () => null };
      })
  );

  return (
    <MDXLayout>
      <Suspense fallback={<div className="text-center py-8">Cargando...</div>}>
        <PostContent />
      </Suspense>
    </MDXLayout>
  );
};

export default MDXBlogPost;