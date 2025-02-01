import { PostMetadata } from "../types/blog";

// Importar todos los archivos MDX
const postFiles = import.meta.glob('../components/blog/content/*.mdx', {
  eager: true
});

export const getAllPosts = (): PostMetadata[] => {
  const posts = Object.entries(postFiles).map(([filepath, module]) => {
    // El módulo MDX incluye las exportaciones de frontmatter como propiedades
    const metadata = (module as any).metadata || {};
    const slug = filepath.replace('../components/blog/content/', '').replace('.mdx', '');
    
    return {
      ...metadata,
      slug
    } as PostMetadata;
  });
  // Ordenar por fecha descendente
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostMetadata = (slug: string): PostMetadata | null => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
};

export const getPostBySlug = async (slug: string) => {
  const modules = import.meta.glob('../components/blog/content/*.mdx');
  const matchingPath = Object.keys(modules).find(path => path.includes(slug));

  if (!matchingPath || !modules[matchingPath]) {
    throw new Error(`Post not found: ${slug}`);
  }

  // Cargar el módulo dinámicamente
  const module = await modules[matchingPath]() as { default: React.ComponentType<any> };

  return { default: module.default }
};