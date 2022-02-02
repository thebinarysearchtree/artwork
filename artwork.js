import { makeState, makeDivs, makeArt, makeAsyncArt, createElement } from './element.js';

const html = (textOrAttributes) => createElement('html', textOrAttributes);
const base = (textOrAttributes) => createElement('base', textOrAttributes);
const head = (textOrAttributes) => createElement('head', textOrAttributes);
const link = (textOrAttributes) => createElement('link', textOrAttributes);
const meta = (textOrAttributes) => createElement('meta', textOrAttributes);
const style = (textOrAttributes) => createElement('style', textOrAttributes);
const title = (textOrAttributes) => createElement('title', textOrAttributes);
const body = (textOrAttributes) => createElement('body', textOrAttributes);
const address = (textOrAttributes) => createElement('address', textOrAttributes);
const article = (textOrAttributes) => createElement('article', textOrAttributes);
const aside = (textOrAttributes) => createElement('aside', textOrAttributes);
const footer = (textOrAttributes) => createElement('footer', textOrAttributes);
const header = (textOrAttributes) => createElement('header', textOrAttributes);
const h1 = (textOrAttributes) => createElement('h1', textOrAttributes);
const h2 = (textOrAttributes) => createElement('h2', textOrAttributes);
const h3 = (textOrAttributes) => createElement('h3', textOrAttributes);
const h4 = (textOrAttributes) => createElement('h4', textOrAttributes);
const h5 = (textOrAttributes) => createElement('h5', textOrAttributes);
const h6 = (textOrAttributes) => createElement('h6', textOrAttributes);
const main = (textOrAttributes) => createElement('main', textOrAttributes);
const nav = (textOrAttributes) => createElement('nav', textOrAttributes);
const section = (textOrAttributes) => createElement('section', textOrAttributes);
const blockquote = (textOrAttributes) => createElement('blockquote', textOrAttributes);
const dd = (textOrAttributes) => createElement('dd', textOrAttributes);
const div = (textOrAttributes) => createElement('div', textOrAttributes);
const dl = (textOrAttributes) => createElement('dl', textOrAttributes);
const dt = (textOrAttributes) => createElement('dt', textOrAttributes);
const figcaption = (textOrAttributes) => createElement('figcaption', textOrAttributes);
const figure = (textOrAttributes) => createElement('figure', textOrAttributes);
const hr = (textOrAttributes) => createElement('hr', textOrAttributes);
const li = (textOrAttributes) => createElement('li', textOrAttributes);
const ol = (textOrAttributes) => createElement('ol', textOrAttributes);
const p = (textOrAttributes) => createElement('p', textOrAttributes);
const pre = (textOrAttributes) => createElement('pre', textOrAttributes);
const ul = (textOrAttributes) => createElement('ul', textOrAttributes);
const a = (textOrAttributes) => createElement('a', textOrAttributes);
const abbr = (textOrAttributes) => createElement('abbr', textOrAttributes);
const b = (textOrAttributes) => createElement('b', textOrAttributes);
const bdi = (textOrAttributes) => createElement('bdi', textOrAttributes);
const bdo = (textOrAttributes) => createElement('bdo', textOrAttributes);
const br = (textOrAttributes) => createElement('br', textOrAttributes);
const cite = (textOrAttributes) => createElement('cite', textOrAttributes);
const code = (textOrAttributes) => createElement('code', textOrAttributes);
const data = (textOrAttributes) => createElement('data', textOrAttributes);
const dfn = (textOrAttributes) => createElement('dfn', textOrAttributes);
const em = (textOrAttributes) => createElement('em', textOrAttributes);
const i = (textOrAttributes) => createElement('i', textOrAttributes);
const kbd = (textOrAttributes) => createElement('kbd', textOrAttributes);
const mark = (textOrAttributes) => createElement('mark', textOrAttributes);
const q = (textOrAttributes) => createElement('q', textOrAttributes);
const rp = (textOrAttributes) => createElement('rp', textOrAttributes);
const rt = (textOrAttributes) => createElement('rt', textOrAttributes);
const ruby = (textOrAttributes) => createElement('ruby', textOrAttributes);
const s = (textOrAttributes) => createElement('s', textOrAttributes);
const samp = (textOrAttributes) => createElement('samp', textOrAttributes);
const small = (textOrAttributes) => createElement('small', textOrAttributes);
const span = (textOrAttributes) => createElement('span', textOrAttributes);
const strong = (textOrAttributes) => createElement('strong', textOrAttributes);
const sub = (textOrAttributes) => createElement('sub', textOrAttributes);
const sup = (textOrAttributes) => createElement('sup', textOrAttributes);
const time = (textOrAttributes) => createElement('time', textOrAttributes);
const u = (textOrAttributes) => createElement('u', textOrAttributes);
const variable = (textOrAttributes) => createElement('variable', textOrAttributes);
const wbr = (textOrAttributes) => createElement('wbr', textOrAttributes);
const area = (textOrAttributes) => createElement('area', textOrAttributes);
const audio = (textOrAttributes) => createElement('audio', textOrAttributes);
const img = (textOrAttributes) => createElement('img', textOrAttributes);
const map = (textOrAttributes) => createElement('map', textOrAttributes);
const track = (textOrAttributes) => createElement('track', textOrAttributes);
const video = (textOrAttributes) => createElement('video', textOrAttributes);
const embed = (textOrAttributes) => createElement('embed', textOrAttributes);
const iframe = (textOrAttributes) => createElement('iframe', textOrAttributes);
const object = (textOrAttributes) => createElement('object', textOrAttributes);
const param = (textOrAttributes) => createElement('param', textOrAttributes);
const picture = (textOrAttributes) => createElement('picture', textOrAttributes);
const portal = (textOrAttributes) => createElement('portal', textOrAttributes);
const source = (textOrAttributes) => createElement('source', textOrAttributes);
const svg = (textOrAttributes) => createElement('svg', textOrAttributes);
const math = (textOrAttributes) => createElement('math', textOrAttributes);
const canvas = (textOrAttributes) => createElement('canvas', textOrAttributes);
const noscript = (textOrAttributes) => createElement('noscript', textOrAttributes);
const script = (textOrAttributes) => createElement('script', textOrAttributes);
const del = (textOrAttributes) => createElement('del', textOrAttributes);
const ins = (textOrAttributes) => createElement('ins', textOrAttributes);
const caption = (textOrAttributes) => createElement('caption', textOrAttributes);
const col = (textOrAttributes) => createElement('col', textOrAttributes);
const colgroup = (textOrAttributes) => createElement('colgroup', textOrAttributes);
const table = (textOrAttributes) => createElement('table', textOrAttributes);
const tbody = (textOrAttributes) => createElement('tbody', textOrAttributes);
const td = (textOrAttributes) => createElement('td', textOrAttributes);
const tfoot = (textOrAttributes) => createElement('tfoot', textOrAttributes);
const th = (textOrAttributes) => createElement('th', textOrAttributes);
const thead = (textOrAttributes) => createElement('thead', textOrAttributes);
const tr = (textOrAttributes) => createElement('tr', textOrAttributes);
const button = (textOrAttributes) => createElement('button', textOrAttributes);
const datalist = (textOrAttributes) => createElement('datalist', textOrAttributes);
const fieldset = (textOrAttributes) => createElement('fieldset', textOrAttributes);
const form = (textOrAttributes) => createElement('form', textOrAttributes);
const input = (textOrAttributes) => createElement('input', textOrAttributes);
const label = (textOrAttributes) => createElement('label', textOrAttributes);
const legend = (textOrAttributes) => createElement('legend', textOrAttributes);
const meter = (textOrAttributes) => createElement('meter', textOrAttributes);
const optgroup = (textOrAttributes) => createElement('optgroup', textOrAttributes);
const option = (textOrAttributes) => createElement('option', textOrAttributes);
const output = (textOrAttributes) => createElement('output', textOrAttributes);
const progress = (textOrAttributes) => createElement('progress', textOrAttributes);
const select = (textOrAttributes) => createElement('select', textOrAttributes);
const textarea = (textOrAttributes) => createElement('textarea', textOrAttributes);
const details = (textOrAttributes) => createElement('details', textOrAttributes);
const dialog = (textOrAttributes) => createElement('dialog', textOrAttributes);
const menu = (textOrAttributes) => createElement('menu', textOrAttributes);
const summary = (textOrAttributes) => createElement('summary', textOrAttributes);
const slot = (textOrAttributes) => createElement('slot', textOrAttributes);
const template = (textOrAttributes) => createElement('template', textOrAttributes);

export {
  makeAsyncArt,
  makeArt,
  makeState,
  makeDivs,
  html,
  base,
  head,
  link,
  meta,
  style,
  title,
  body,
  address,
  article,
  aside,
  footer,
  header,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  main,
  nav,
  section,
  blockquote,
  dd,
  div,
  dl,
  dt,
  figcaption,
  figure,
  hr,
  li,
  ol,
  p,
  pre,
  ul,
  a,
  abbr,
  b,
  bdi,
  bdo,
  br,
  cite,
  code,
  data,
  dfn,
  em,
  i,
  kbd,
  mark,
  q,
  rp,
  rt,
  ruby,
  s,
  samp,
  small,
  span,
  strong,
  sub,
  sup,
  time,
  u,
  variable,
  wbr,
  area,
  audio,
  img,
  map,
  track,
  video,
  embed,
  iframe,
  object,
  param,
  picture,
  portal,
  source,
  svg,
  math,
  canvas,
  noscript,
  script,
  del,
  ins,
  caption,
  col,
  colgroup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  tr,
  button,
  datalist,
  fieldset,
  form,
  input,
  label,
  legend,
  meter,
  optgroup,
  option,
  output,
  progress,
  select,
  textarea,
  details,
  dialog,
  menu,
  summary,
  slot,
  template
};
