import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const POSTS_PATH = path.join(process.cwd(), 'src/content');

export const getAllPosts = (): PostMeta[] => {
  const files = fs.readdirSync(POSTS_PATH);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      
      return {
        ...data,
        slug: file.replace('.mdx', ''),
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
};