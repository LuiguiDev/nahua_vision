import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, PostMeta } from '../../utils/mdxUtils';
import { MDXLayout } from './MDXLayout';

const MDXBlog: React.FC = () => {
  const posts = getAllPosts();

  return (
    <MDXLayout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post: PostMeta) => (
            <article key={post.slug} className="border-b pb-8">
              <h2 className="text-2xl font-bold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <div className="text-gray-600 mb-4">{post.date}</div>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </MDXLayout>
  );
};

export default MDXBlog;