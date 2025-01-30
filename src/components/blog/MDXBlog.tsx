import React from 'react';
import { Link } from 'react-router-dom';
import { MDXLayout } from './MDXLayout';
import { getAllPosts } from '../../utils/mdxUtils';

const Blog: React.FC = () => {
  const posts = getAllPosts();  

  return (
    <MDXLayout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Nahua Vision Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <h2 className="text-2xl font-bold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <div className="text-gray-600 mb-4">
                {new Date(post.date).toLocaleDateString('es')}
              </div>
              <p>{post.excerpt}</p>
              {post.tags && (
                <div className="flex gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </MDXLayout>
  );
};

export default Blog;