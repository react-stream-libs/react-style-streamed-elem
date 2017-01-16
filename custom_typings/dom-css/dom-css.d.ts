declare module 'dom-css' {
  import { CSSProperties } from 'react';
  const domCssFunc: (element: HTMLElement, style: CSSProperties) => void;
  export = domCssFunc;
}