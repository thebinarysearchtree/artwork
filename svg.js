const createElement = (tag, properties) => {
  const element = document.createElementNS(tag, 'http://www.w3.org/2000/svg');
  if (!properties) {
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    element.setAttribute(key, value);
  }
  return element;
}

const a = (properties) => createElement('a', properties);
const animate = (properties) => createElement('animate', properties);
const animateMotion = (properties) => createElement('animateMotion', properties);
const animateTransform = (properties) => createElement('animateTransform', properties);
const circle = (properties) => createElement('circle', properties);
const clipPath = (properties) => createElement('clipPath', properties);
const defs = (properties) => createElement('defs', properties);
const desc = (properties) => createElement('desc', properties);
const ellipse = (properties) => createElement('ellipse', properties);
const feBlend = (properties) => createElement('feBlend', properties);
const feColorMatrix = (properties) => createElement('feColorMatrix', properties);
const feComponentTransfer = (properties) => createElement('feComponentTransfer', properties);
const feComposite = (properties) => createElement('feComposite', properties);
const feConvolveMatrix = (properties) => createElement('feConvolveMatrix', properties);
const feDiffuseLighting = (properties) => createElement('feDiffuseLighting', properties);
const feDisplacementMap = (properties) => createElement('feDisplacementMap', properties);
const feDistantLight = (properties) => createElement('feDistantLight', properties);
const feDropShadow = (properties) => createElement('feDropShadow', properties);
const feFlood = (properties) => createElement('feFlood', properties);
const feFuncA = (properties) => createElement('feFuncA', properties);
const feFuncB = (properties) => createElement('feFuncB', properties);
const feFuncG = (properties) => createElement('feFuncG', properties);
const feFuncR = (properties) => createElement('feFuncR', properties);
const feGaussianBlur = (properties) => createElement('feGaussianBlur', properties);
const feImage = (properties) => createElement('feImage', properties);
const feMerge = (properties) => createElement('feMerge', properties);
const feMergeNode = (properties) => createElement('feMergeNode', properties);
const feMorphology = (properties) => createElement('feMorphology', properties);
const feOffset = (properties) => createElement('feOffset', properties);
const fePointLight = (properties) => createElement('fePointLight', properties);
const feSpecularLighting = (properties) => createElement('feSpecularLighting', properties);
const feSpotLight = (properties) => createElement('feSpotLight', properties);
const feTile = (properties) => createElement('feTile', properties);
const feTurbulence = (properties) => createElement('feTurbulence', properties);
const filter = (properties) => createElement('filter', properties);
const foreignObject = (properties) => createElement('foreignObject', properties);
const g = (properties) => createElement('g', properties);
const image = (properties) => createElement('image', properties);
const line = (properties) => createElement('line', properties);
const linearGradient = (properties) => createElement('linearGradient', properties);
const marker = (properties) => createElement('marker', properties);
const mask = (properties) => createElement('mask', properties);
const metadata = (properties) => createElement('metadata', properties);
const mpath = (properties) => createElement('mpath', properties);
const path = (properties) => createElement('path', properties);
const pattern = (properties) => createElement('pattern', properties);
const polygon = (properties) => createElement('polygon', properties);
const polyline = (properties) => createElement('polyline', properties);
const radialGradient = (properties) => createElement('radialGradient', properties);
const rect = (properties) => createElement('rect', properties);
const script = (properties) => createElement('script', properties);
const set = (properties) => createElement('set', properties);
const stop = (properties) => createElement('stop', properties);
const style = (properties) => createElement('style', properties);
const svg = (properties) => createElement('svg', properties);
const switchElement = (properties) => createElement('switch', properties);
const symbol = (properties) => createElement('symbol', properties);
const text = (properties) => createElement('text', properties);
const textPath = (properties) => createElement('textPath', properties);
const title = (properties) => createElement('title', properties);
const tspan = (properties) => createElement('tspan', properties);
const use = (properties) => createElement('use', properties);
const view = (properties) => createElement('view', properties);

export {
  a,
  animate,
  animateMotion,
  animateTransform,
  circle,
  clipPath,
  defs,
  desc,
  discard,
  ellipse,
  feBlend,
  feColorMatrix,
  feComponentTransfer,
  feComposite,
  feConvolveMatrix,
  feDiffuseLighting,
  feDisplacementMap,
  feDistantLight,
  feDropShadow,
  feFlood,
  feFuncA,
  feFuncB,
  feFuncG,
  feFuncR,
  feGaussianBlur,
  feImage,
  feMerge,
  feMergeNode,
  feMorphology,
  feOffset,
  fePointLight,
  feSpecularLighting,
  feSpotLight,
  feTile,
  feTurbulence,
  filter,
  foreignObject,
  g,
  image,
  line,
  linearGradient,
  marker,
  mask,
  metadata,
  mpath,
  path,
  pattern,
  polygon,
  polyline,
  radialGradient,
  rect,
  script,
  set,
  stop,
  style,
  svg,
  switchElement,
  symbol,
  text,
  textPath,
  title,
  tspan,
  use,
  view
}
