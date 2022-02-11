export class ElementArt {
  adoptedStyles?: CSSStyleDeclaration;
  styles?: string;
  state?: any;
  connected: () => void;
  disconnected: () => void;

  render(): HTMLElement;
}

export class AsyncElementArt {
  adoptedStyles?: CSSStyleDeclaration;
  styles?: string;
  state?: any;
  connected: () => void;
  disconnected: () => void;

  render(): Promise<HTMLElement>;
}

export class FormInput extends ElementArt {
  type: string;
  value: string;
}

export function makeArt<T, K>(elementClass: { new() : T }, name?: string): (state?: K) => T;
export function makeAsyncArt<T, K>(elementClass: { new() : T }, name?: string): (state?: K) => Promise<T>;

export class Router {
  constructor(root: HTMLElement);

  add(match: string | RegExp, handler: (params?: { [key: string]: string }) => HTMLElement): void;

  remove(): void;
}

export function pushState(url: string, state?: any): void;
export function start(): void;
export function routerLink(properties: Partial<HTMLAnchorElement> & { state?: any }): HTMLAnchorElement;
export function setNotFound(element: HTMLElement): void;

export const divs: { 
  [key: string]: HTMLDivElement;
}

export const html: {
  [key: string]: any;
  html: (properties?: Partial<HTMLHtmlElement>) => HTMLHtmlElement;
  base: (properties?: Partial<HTMLBaseElement>) => HTMLBaseElement;
  head: (properties?: Partial<HTMLHeadElement>) => HTMLHeadElement;
  link: (properties?: Partial<HTMLLinkElement>) => HTMLLinkElement;
  meta: (properties?: Partial<HTMLMetaElement>) => HTMLMetaElement;
  style: (properties?: Partial<HTMLStyleElement>) => HTMLStyleElement;
  title: (properties?: Partial<HTMLTitleElement>) => HTMLTitleElement;
  body: (properties?: Partial<HTMLBodyElement>) => HTMLBodyElement;
  address: (properties?: Partial<HTMLElement>) => HTMLElement;
  article: (properties?: Partial<HTMLElement>) => HTMLElement;
  aside: (properties?: Partial<HTMLElement>) => HTMLElement;
  footer: (properties?: Partial<HTMLElement>) => HTMLElement;
  header: (properties?: Partial<HTMLElement>) => HTMLElement;
  h1: (properties?: Partial<HTMLHeadingElement>) => HTMLHeadingElement;
  h2: (properties?: Partial<HTMLHeadingElement>) => HTMLHeadingElement;
  h3: (properties?: Partial<HTMLHeadingElement>) => HTMLHeadingElement;
  h4: (properties?: Partial<HTMLHeadingElement>) => HTMLHeadingElement;
  h5: (properties?: Partial<HTMLHeadingElement>) => HTMLHeadingElement;
  h6: (properties?: Partial<HTMLHeadingElement>) => HTMLHeadingElement;
  main: (properties?: Partial<HTMLElement>) => HTMLElement;
  nav: (properties?: Partial<HTMLElement>) => HTMLElement;
  section: (properties?: Partial<HTMLElement>) => HTMLElement;
  blockquote: (properties?: Partial<HTMLQuoteElement>) => HTMLQuoteElement;
  dd: (properties?: Partial<HTMLElement>) => HTMLElement;
  div: (properties?: Partial<HTMLDivElement>) => HTMLDivElement;
  dl: (properties?: Partial<HTMLElement>) => HTMLElement;
  dt: (properties?: Partial<HTMLElement>) => HTMLElement;
  figcaption: (properties?: Partial<HTMLElement>) => HTMLElement;
  figure: (properties?: Partial<HTMLElement>) => HTMLElement;
  hr: (properties?: Partial<HTMLHRElement>) => HTMLHRElement;
  li: (properties?: Partial<HTMLLIElement>) => HTMLLIElement;
  ol: (properties?: Partial<HTMLOListElement>) => HTMLOListElement;
  p: (properties?: Partial<HTMLParagraphElement>) => HTMLParagraphElement;
  pre: (properties?: Partial<HTMLPreElement>) => HTMLPreElement;
  ul: (properties?: Partial<HTMLUListElement>) => HTMLUListElement;
  a: (properties?: Partial<HTMLAnchorElement>) => HTMLAnchorElement;
  abbr: (properties?: Partial<HTMLElement>) => HTMLElement;
  b: (properties?: Partial<HTMLElement>) => HTMLElement;
  bdi: (properties?: Partial<HTMLElement>) => HTMLElement;
  bdo: (properties?: Partial<HTMLElement>) => HTMLElement;
  br: (properties?: Partial<HTMLBRElement>) => HTMLBRElement;
  cite: (properties?: Partial<HTMLElement>) => HTMLElement;
  code: (properties?: Partial<HTMLElement>) => HTMLElement;
  data: (properties?: Partial<HTMLDataElement>) => HTMLDataElement;
  dfn: (properties?: Partial<HTMLElement>) => HTMLElement;
  em: (properties?: Partial<HTMLElement>) => HTMLElement;
  i: (properties?: Partial<HTMLElement>) => HTMLElement;
  kbd: (properties?: Partial<HTMLElement>) => HTMLElement;
  mark: (properties?: Partial<HTMLElement>) => HTMLElement;
  q: (properties?: Partial<HTMLQuoteElement>) => HTMLQuoteElement;
  rp: (properties?: Partial<HTMLElement>) => HTMLElement;
  rt: (properties?: Partial<HTMLElement>) => HTMLElement;
  ruby: (properties?: Partial<HTMLElement>) => HTMLElement;
  s: (properties?: Partial<HTMLElement>) => HTMLElement;
  samp: (properties?: Partial<HTMLElement>) => HTMLElement;
  small: (properties?: Partial<HTMLElement>) => HTMLElement;
  span: (properties?: Partial<HTMLSpanElement>) => HTMLSpanElement;
  strong: (properties?: Partial<HTMLElement>) => HTMLElement;
  sub: (properties?: Partial<HTMLElement>) => HTMLElement;
  sup: (properties?: Partial<HTMLElement>) => HTMLElement;
  time: (properties?: Partial<HTMLTimeElement>) => HTMLTimeElement;
  u: (properties?: Partial<HTMLElement>) => HTMLElement;
  var: (properties?: Partial<HTMLElement>) => HTMLElement;
  wbr: (properties?: Partial<HTMLElement>) => HTMLElement;
  area: (properties?: Partial<HTMLAreaElement>) => HTMLAreaElement;
  audio: (properties?: Partial<HTMLAudioElement>) => HTMLAudioElement;
  img: (properties?: Partial<HTMLImageElement>) => HTMLImageElement;
  map: (properties?: Partial<HTMLMapElement>) => HTMLMapElement;
  track: (properties?: Partial<HTMLTrackElement>) => HTMLTrackElement;
  video: (properties?: Partial<HTMLVideoElement>) => HTMLVideoElement;
  embed: (properties?: Partial<HTMLEmbedElement>) => HTMLEmbedElement;
  iframe: (properties?: Partial<HTMLIFrameElement>) => HTMLIFrameElement;
  object: (properties?: Partial<HTMLObjectElement>) => HTMLObjectElement;
  param: (properties?: Partial<HTMLParamElement>) => HTMLParamElement;
  picture: (properties?: Partial<HTMLPictureElement>) => HTMLPictureElement;
  source: (properties?: Partial<HTMLSourceElement>) => HTMLSourceElement;
  canvas: (properties?: Partial<HTMLCanvasElement>) => HTMLCanvasElement;
  noscript: (properties?: Partial<HTMLElement>) => HTMLElement;
  script: (properties?: Partial<HTMLScriptElement>) => HTMLScriptElement;
  del: (properties?: Partial<HTMLModElement>) => HTMLModElement;
  ins: (properties?: Partial<HTMLModElement>) => HTMLModElement;
  caption: (properties?: Partial<HTMLTableCaptionElement>) => HTMLTableCaptionElement;
  col: (properties?: Partial<HTMLTableColElement>) => HTMLTableColElement;
  colgroup: (properties?: Partial<HTMLTableColElement>) => HTMLTableColElement;
  table: (properties?: Partial<HTMLTableElement>) => HTMLTableElement;
  tbody: (properties?: Partial<HTMLTableSectionElement>) => HTMLTableSectionElement;
  td: (properties?: Partial<HTMLTableCellElement>) => HTMLTableCellElement;
  tfoot: (properties?: Partial<HTMLTableSectionElement>) => HTMLTableSectionElement;
  th: (properties?: Partial<HTMLTableCellElement>) => HTMLTableCellElement;
  thead: (properties?: Partial<HTMLTableSectionElement>) => HTMLTableSectionElement;
  tr: (properties?: Partial<HTMLTableRowElement>) => HTMLTableRowElement;
  button: (properties?: Partial<HTMLButtonElement>) => HTMLButtonElement;
  datalist: (properties?: Partial<HTMLDataListElement>) => HTMLDataListElement;
  fieldset: (properties?: Partial<HTMLFieldSetElement>) => HTMLFieldSetElement;
  form: (properties?: Partial<HTMLFormElement>) => HTMLFormElement;
  input: (properties?: Partial<HTMLInputElement>) => HTMLInputElement;
  label: (properties?: Partial<HTMLLabelElement>) => HTMLLabelElement;
  legend: (properties?: Partial<HTMLLegendElement>) => HTMLLegendElement;
  meter: (properties?: Partial<HTMLMeterElement>) => HTMLMeterElement;
  optgroup: (properties?: Partial<HTMLOptGroupElement>) => HTMLOptGroupElement;
  option: (properties?: Partial<HTMLOptionElement>) => HTMLOptionElement;
  output: (properties?: Partial<HTMLOutputElement>) => HTMLOutputElement;
  progress: (properties?: Partial<HTMLProgressElement>) => HTMLProgressElement;
  select: (properties?: Partial<HTMLSelectElement>) => HTMLSelectElement;
  textarea: (properties?: Partial<HTMLTextAreaElement>) => HTMLTextAreaElement;
  details: (properties?: Partial<HTMLDetailsElement>) => HTMLDetailsElement;
  menu: (properties?: Partial<HTMLMenuElement>) => HTMLMenuElement;
  summary: (properties?: Partial<HTMLElement>) => HTMLElement;
  slot: (properties?: Partial<HTMLSlotElement>) => HTMLSlotElement;
  template: (properties?: Partial<HTMLTemplateElement>) => HTMLTemplateElement;
}

export const svg: {
  [key: string]: any;
  a: (properties?: Partial<SVGAElement>) => SVGAElement;
  animate: (properties?: Partial<SVGAnimateElement>) => SVGAnimateElement;
  animateMotion: (properties?: Partial<SVGAnimateMotionElement>) => SVGAnimateMotionElement;
  animateTransform: (properties?: Partial<SVGAnimateTransformElement>) => SVGAnimateTransformElement;
  circle: (properties?: Partial<SVGCircleElement>) => SVGCircleElement;
  clipPath: (properties?: Partial<SVGClipPathElement>) => SVGClipPathElement;
  defs: (properties?: Partial<SVGDefsElement>) => SVGDefsElement;
  desc: (properties?: Partial<SVGDescElement>) => SVGDescElement;
  ellipse: (properties?: Partial<SVGEllipseElement>) => SVGEllipseElement;
  feBlend: (properties?: Partial<SVGFEBlendElement>) => SVGFEBlendElement;
  feColorMatrix: (properties?: Partial<SVGFEColorMatrixElement>) => SVGFEColorMatrixElement;
  feComponentTransfer: (properties?: Partial<SVGFEComponentTransferElement>) => SVGFEComponentTransferElement;
  feComposite: (properties?: Partial<SVGFECompositeElement>) => SVGFECompositeElement;
  feConvolveMatrix: (properties?: Partial<SVGFEConvolveMatrixElement>) => SVGFEConvolveMatrixElement;
  feDiffuseLighting: (properties?: Partial<SVGFEDiffuseLightingElement>) => SVGFEDiffuseLightingElement;
  feDisplacementMap: (properties?: Partial<SVGFEDisplacementMapElement>) => SVGFEDisplacementMapElement;
  feDistantLight: (properties?: Partial<SVGFEDistantLightElement>) => SVGFEDistantLightElement;
  feDropShadow: (properties?: Partial<SVGFEDropShadowElement>) => SVGFEDropShadowElement;
  feFlood: (properties?: Partial<SVGFEFloodElement>) => SVGFEFloodElement;
  feFuncA: (properties?: Partial<SVGFEFuncAElement>) => SVGFEFuncAElement;
  feFuncB: (properties?: Partial<SVGFEFuncBElement>) => SVGFEFuncBElement;
  feFuncG: (properties?: Partial<SVGFEFuncGElement>) => SVGFEFuncGElement;
  feFuncR: (properties?: Partial<SVGFEFuncRElement>) => SVGFEFuncRElement;
  feGaussianBlur: (properties?: Partial<SVGFEGaussianBlurElement>) => SVGFEGaussianBlurElement;
  feImage: (properties?: Partial<SVGFEImageElement>) => SVGFEImageElement;
  feMerge: (properties?: Partial<SVGFEMergeElement>) => SVGFEMergeElement;
  feMergeNode: (properties?: Partial<SVGFEMergeNodeElement>) => SVGFEMergeNodeElement;
  feMorphology: (properties?: Partial<SVGFEMorphologyElement>) => SVGFEMorphologyElement;
  feOffset: (properties?: Partial<SVGFEOffsetElement>) => SVGFEOffsetElement;
  fePointLight: (properties?: Partial<SVGFEPointLightElement>) => SVGFEPointLightElement;
  feSpecularLighting: (properties?: Partial<SVGFESpecularLightingElement>) => SVGFESpecularLightingElement;
  feSpotLight: (properties?: Partial<SVGFESpotLightElement>) => SVGFESpotLightElement;
  feTile: (properties?: Partial<SVGFETileElement>) => SVGFETileElement;
  feTurbulence: (properties?: Partial<SVGFETurbulenceElement>) => SVGFETurbulenceElement;
  filter: (properties?: Partial<SVGFilterElement>) => SVGFilterElement;
  foreignObject: (properties?: Partial<SVGForeignObjectElement>) => SVGForeignObjectElement;
  g: (properties?: Partial<SVGGElement>) => SVGGElement;
  image: (properties?: Partial<SVGImageElement>) => SVGImageElement;
  line: (properties?: Partial<SVGLineElement>) => SVGLineElement;
  linearGradient: (properties?: Partial<SVGLinearGradientElement>) => SVGLinearGradientElement;
  marker: (properties?: Partial<SVGMarkerElement>) => SVGMarkerElement;
  mask: (properties?: Partial<SVGMaskElement>) => SVGMaskElement;
  metadata: (properties?: Partial<SVGMetadataElement>) => SVGMetadataElement;
  mpath: (properties?: Partial<SVGMPathElement>) => SVGMPathElement;
  path: (properties?: Partial<SVGPathElement>) => SVGPathElement;
  pattern: (properties?: Partial<SVGPatternElement>) => SVGPatternElement;
  polygon: (properties?: Partial<SVGPolygonElement>) => SVGPolygonElement;
  polyline: (properties?: Partial<SVGPolylineElement>) => SVGPolylineElement;
  radialGradient: (properties?: Partial<SVGRadialGradientElement>) => SVGRadialGradientElement;
  rect: (properties?: Partial<SVGRectElement>) => SVGRectElement;
  script: (properties?: Partial<SVGScriptElement>) => SVGScriptElement;
  set: (properties?: Partial<SVGSetElement>) => SVGSetElement;
  stop: (properties?: Partial<SVGStopElement>) => SVGStopElement;
  style: (properties?: Partial<SVGStyleElement>) => SVGStyleElement;
  svg: (properties?: Partial<SVGSVGElement>) => SVGSVGElement;
  switch: (properties?: Partial<SVGSwitchElement>) => SVGSwitchElement;
  symbol: (properties?: Partial<SVGSymbolElement>) => SVGSymbolElement;
  text: (properties?: Partial<SVGTextElement>) => SVGTextElement;
  textPath: (properties?: Partial<SVGTextPathElement>) => SVGTextPathElement;
  title: (properties?: Partial<SVGTitleElement>) => SVGTitleElement;
  tspan: (properties?: Partial<SVGTSpanElement>) => SVGTSpanElement;
  use: (properties?: Partial<SVGUseElement>) => SVGUseElement;
  view: (properties?: Partial<SVGViewElement>) => SVGViewElement;
}
