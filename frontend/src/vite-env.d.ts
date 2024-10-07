/// <reference types="vite/client" />
declare module 'react-syntax-highlighter';
declare module 'react-syntax-highlighter/dist/esm/styles/prism';
declare module '@mdx-js/runtime' {
    import { ComponentType } from 'react';
  
    export interface MDXRuntimeProps {
      children: string;
      components?: Record<string, ComponentType<any>>;
    }
  
    const MDXRuntime: ComponentType<MDXRuntimeProps>;
    export default MDXRuntime;
  }
  