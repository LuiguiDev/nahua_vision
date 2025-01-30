declare module '*.mdx' {
  import type { ComponentProps, ComponentType } from 'react';
  const component: ComponentType<ComponentProps<'div'>>;
  export default component;
}

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
}