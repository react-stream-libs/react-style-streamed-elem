export default function getCSS2DTransform(args: {
  scaleX?: number, scaleY?: number,
  skewX?: number, skewY?: number,
  translateX?: number, translateY?: number,
}) {
  let {
    scaleX, scaleY,
    skewX, skewY,
    translateX, translateY,
  } = args;
  scaleX = scaleX || 1;
  scaleY = scaleY || 1;
  skewX = skewX || 0;
  skewY = skewY || 0;
  translateX = translateX || 0;
  translateY = translateY || 0;
  // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
  return `matrix(${scaleX},${skewY},${skewX},${scaleY},${translateX},${translateY})`;
}