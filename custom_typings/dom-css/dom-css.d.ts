declare module 'dom-css' {
  import { CSSProperties } from 'react';
  // const style =
  const domCssFunc: (HTMLElement, style: CSSProperties) => void;
  export = domCssFunc;
}