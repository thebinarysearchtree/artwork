import { makeElement, makeAsyncElement, createWithoutStyle, Styled } from './element.js';

const html = (textOrAttributes) => createWithoutStyle('html', textOrAttributes);
const base = (textOrAttributes) => createWithoutStyle('base', textOrAttributes);
const head = (textOrAttributes) => createWithoutStyle('head', textOrAttributes);
const link = (textOrAttributes) => createWithoutStyle('link', textOrAttributes);
const meta = (textOrAttributes) => createWithoutStyle('meta', textOrAttributes);
const style = (textOrAttributes) => createWithoutStyle('style', textOrAttributes);
const title = (textOrAttributes) => createWithoutStyle('title', textOrAttributes);
const body = (textOrAttributes) => createWithoutStyle('body', textOrAttributes);
const address = (textOrAttributes) => createWithoutStyle('address', textOrAttributes);
const article = (textOrAttributes) => createWithoutStyle('article', textOrAttributes);
const aside = (textOrAttributes) => createWithoutStyle('aside', textOrAttributes);
const footer = (textOrAttributes) => createWithoutStyle('footer', textOrAttributes);
const header = (textOrAttributes) => createWithoutStyle('header', textOrAttributes);
const h1 = (textOrAttributes) => createWithoutStyle('h1', textOrAttributes);
const h2 = (textOrAttributes) => createWithoutStyle('h2', textOrAttributes);
const h3 = (textOrAttributes) => createWithoutStyle('h3', textOrAttributes);
const h4 = (textOrAttributes) => createWithoutStyle('h4', textOrAttributes);
const h5 = (textOrAttributes) => createWithoutStyle('h5', textOrAttributes);
const h6 = (textOrAttributes) => createWithoutStyle('h6', textOrAttributes);
const main = (textOrAttributes) => createWithoutStyle('main', textOrAttributes);
const nav = (textOrAttributes) => createWithoutStyle('nav', textOrAttributes);
const section = (textOrAttributes) => createWithoutStyle('section', textOrAttributes);
const blockquote = (textOrAttributes) => createWithoutStyle('blockquote', textOrAttributes);
const dd = (textOrAttributes) => createWithoutStyle('dd', textOrAttributes);
const div = (textOrAttributes) => createWithoutStyle('div', textOrAttributes);
const dl = (textOrAttributes) => createWithoutStyle('dl', textOrAttributes);
const dt = (textOrAttributes) => createWithoutStyle('dt', textOrAttributes);
const figcaption = (textOrAttributes) => createWithoutStyle('figcaption', textOrAttributes);
const figure = (textOrAttributes) => createWithoutStyle('figure', textOrAttributes);
const hr = (textOrAttributes) => createWithoutStyle('hr', textOrAttributes);
const li = (textOrAttributes) => createWithoutStyle('li', textOrAttributes);
const ol = (textOrAttributes) => createWithoutStyle('ol', textOrAttributes);
const p = (textOrAttributes) => createWithoutStyle('p', textOrAttributes);
const pre = (textOrAttributes) => createWithoutStyle('pre', textOrAttributes);
const ul = (textOrAttributes) => createWithoutStyle('ul', textOrAttributes);
const a = (textOrAttributes) => createWithoutStyle('a', textOrAttributes);
const abbr = (textOrAttributes) => createWithoutStyle('abbr', textOrAttributes);
const b = (textOrAttributes) => createWithoutStyle('b', textOrAttributes);
const bdi = (textOrAttributes) => createWithoutStyle('bdi', textOrAttributes);
const bdo = (textOrAttributes) => createWithoutStyle('bdo', textOrAttributes);
const br = (textOrAttributes) => createWithoutStyle('br', textOrAttributes);
const cite = (textOrAttributes) => createWithoutStyle('cite', textOrAttributes);
const code = (textOrAttributes) => createWithoutStyle('code', textOrAttributes);
const data = (textOrAttributes) => createWithoutStyle('data', textOrAttributes);
const dfn = (textOrAttributes) => createWithoutStyle('dfn', textOrAttributes);
const em = (textOrAttributes) => createWithoutStyle('em', textOrAttributes);
const i = (textOrAttributes) => createWithoutStyle('i', textOrAttributes);
const kbd = (textOrAttributes) => createWithoutStyle('kbd', textOrAttributes);
const mark = (textOrAttributes) => createWithoutStyle('mark', textOrAttributes);
const q = (textOrAttributes) => createWithoutStyle('q', textOrAttributes);
const rp = (textOrAttributes) => createWithoutStyle('rp', textOrAttributes);
const rt = (textOrAttributes) => createWithoutStyle('rt', textOrAttributes);
const ruby = (textOrAttributes) => createWithoutStyle('ruby', textOrAttributes);
const s = (textOrAttributes) => createWithoutStyle('s', textOrAttributes);
const samp = (textOrAttributes) => createWithoutStyle('samp', textOrAttributes);
const small = (textOrAttributes) => createWithoutStyle('small', textOrAttributes);
const span = (textOrAttributes) => createWithoutStyle('span', textOrAttributes);
const strong = (textOrAttributes) => createWithoutStyle('strong', textOrAttributes);
const sub = (textOrAttributes) => createWithoutStyle('sub', textOrAttributes);
const sup = (textOrAttributes) => createWithoutStyle('sup', textOrAttributes);
const time = (textOrAttributes) => createWithoutStyle('time', textOrAttributes);
const u = (textOrAttributes) => createWithoutStyle('u', textOrAttributes);
const variable = (textOrAttributes) => createWithoutStyle('variable', textOrAttributes);
const wbr = (textOrAttributes) => createWithoutStyle('wbr', textOrAttributes);
const area = (textOrAttributes) => createWithoutStyle('area', textOrAttributes);
const audio = (textOrAttributes) => createWithoutStyle('audio', textOrAttributes);
const img = (textOrAttributes) => createWithoutStyle('img', textOrAttributes);
const map = (textOrAttributes) => createWithoutStyle('map', textOrAttributes);
const track = (textOrAttributes) => createWithoutStyle('track', textOrAttributes);
const video = (textOrAttributes) => createWithoutStyle('video', textOrAttributes);
const embed = (textOrAttributes) => createWithoutStyle('embed', textOrAttributes);
const iframe = (textOrAttributes) => createWithoutStyle('iframe', textOrAttributes);
const object = (textOrAttributes) => createWithoutStyle('object', textOrAttributes);
const param = (textOrAttributes) => createWithoutStyle('param', textOrAttributes);
const picture = (textOrAttributes) => createWithoutStyle('picture', textOrAttributes);
const portal = (textOrAttributes) => createWithoutStyle('portal', textOrAttributes);
const source = (textOrAttributes) => createWithoutStyle('source', textOrAttributes);
const svg = (textOrAttributes) => createWithoutStyle('svg', textOrAttributes);
const math = (textOrAttributes) => createWithoutStyle('math', textOrAttributes);
const canvas = (textOrAttributes) => createWithoutStyle('canvas', textOrAttributes);
const noscript = (textOrAttributes) => createWithoutStyle('noscript', textOrAttributes);
const script = (textOrAttributes) => createWithoutStyle('script', textOrAttributes);
const del = (textOrAttributes) => createWithoutStyle('del', textOrAttributes);
const ins = (textOrAttributes) => createWithoutStyle('ins', textOrAttributes);
const caption = (textOrAttributes) => createWithoutStyle('caption', textOrAttributes);
const col = (textOrAttributes) => createWithoutStyle('col', textOrAttributes);
const colgroup = (textOrAttributes) => createWithoutStyle('colgroup', textOrAttributes);
const table = (textOrAttributes) => createWithoutStyle('table', textOrAttributes);
const tbody = (textOrAttributes) => createWithoutStyle('tbody', textOrAttributes);
const td = (textOrAttributes) => createWithoutStyle('td', textOrAttributes);
const tfoot = (textOrAttributes) => createWithoutStyle('tfoot', textOrAttributes);
const th = (textOrAttributes) => createWithoutStyle('th', textOrAttributes);
const thead = (textOrAttributes) => createWithoutStyle('thead', textOrAttributes);
const tr = (textOrAttributes) => createWithoutStyle('tr', textOrAttributes);
const button = (textOrAttributes) => createWithoutStyle('button', textOrAttributes);
const datalist = (textOrAttributes) => createWithoutStyle('datalist', textOrAttributes);
const fieldset = (textOrAttributes) => createWithoutStyle('fieldset', textOrAttributes);
const form = (textOrAttributes) => createWithoutStyle('form', textOrAttributes);
const input = (textOrAttributes) => createWithoutStyle('input', textOrAttributes);
const label = (textOrAttributes) => createWithoutStyle('label', textOrAttributes);
const legend = (textOrAttributes) => createWithoutStyle('legend', textOrAttributes);
const meter = (textOrAttributes) => createWithoutStyle('meter', textOrAttributes);
const optgroup = (textOrAttributes) => createWithoutStyle('optgroup', textOrAttributes);
const option = (textOrAttributes) => createWithoutStyle('option', textOrAttributes);
const output = (textOrAttributes) => createWithoutStyle('output', textOrAttributes);
const progress = (textOrAttributes) => createWithoutStyle('progress', textOrAttributes);
const select = (textOrAttributes) => createWithoutStyle('select', textOrAttributes);
const textarea = (textOrAttributes) => createWithoutStyle('textarea', textOrAttributes);
const details = (textOrAttributes) => createWithoutStyle('details', textOrAttributes);
const dialog = (textOrAttributes) => createWithoutStyle('dialog', textOrAttributes);
const menu = (textOrAttributes) => createWithoutStyle('menu', textOrAttributes);
const summary = (textOrAttributes) => createWithoutStyle('summary', textOrAttributes);
const slot = (textOrAttributes) => createWithoutStyle('slot', textOrAttributes);
const template = (textOrAttributes) => createWithoutStyle('template', textOrAttributes);

export {
  makeAsyncElement,
  makeElement,
  Styled,
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
