import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MDXLayout } from './MDXLayout';
import { PostLayout } from './PostLayout';
import { getPostBySlug, getPostMetadata } from '../../utils/mdxUtils';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const metadata = React.useMemo(() => {
    if (!slug) return null;
    return getPostMetadata(slug);
  }, [slug]);

  if (!metadata) {
    navigate('/404');
    return null;
  }

  // Importación dinámica del post usando import.meta.glob
  const modules = import.meta.glob('./content/aztec-calendar.mdx', {eager: true});

  const Post = React.lazy(async () => {
    if (!slug) throw new Error('Slug not found');
    return getPostBySlug(slug);
  });
  
  return (
    <MDXLayout>
      <PostLayout metadata={metadata}>
        <Suspense fallback={<div className="text-center py-8">Cargando...</div>}>
          <Post />
        </Suspense>
      </PostLayout>
    </MDXLayout>
  );
};

export default BlogPost;