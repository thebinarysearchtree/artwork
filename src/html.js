const createElement = (tag, properties) => {
  const element = document.createElement(tag);
  if (typeof properties === 'string') {
    element.innerText = properties;
  }
  if (!properties) {
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    element[key] = value;
  }
  return element;
}

const html = (properties) => createElement('html', properties);
const base = (properties) => createElement('base', properties);
const head = (properties) => createElement('head', properties);
const link = (properties) => createElement('link', properties);
const meta = (properties) => createElement('meta', properties);
const style = (properties) => createElement('style', properties);
const title = (properties) => createElement('title', properties);
const body = (properties) => createElement('body', properties);
const address = (properties) => createElement('address', properties);
const article = (properties) => createElement('article', properties);
const aside = (properties) => createElement('aside', properties);
const footer = (properties) => createElement('footer', properties);
const header = (properties) => createElement('header', properties);
const h1 = (properties) => createElement('h1', properties);
const h2 = (properties) => createElement('h2', properties);
const h3 = (properties) => createElement('h3', properties);
const h4 = (properties) => createElement('h4', properties);
const h5 = (properties) => createElement('h5', properties);
const h6 = (properties) => createElement('h6', properties);
const main = (properties) => createElement('main', properties);
const nav = (properties) => createElement('nav', properties);
const section = (properties) => createElement('section', properties);
const blockquote = (properties) => createElement('blockquote', properties);
const dd = (properties) => createElement('dd', properties);
const div = (properties) => createElement('div', properties);
const dl = (properties) => createElement('dl', properties);
const dt = (properties) => createElement('dt', properties);
const figcaption = (properties) => createElement('figcaption', properties);
const figure = (properties) => createElement('figure', properties);
const hr = (properties) => createElement('hr', properties);
const li = (properties) => createElement('li', properties);
const ol = (properties) => createElement('ol', properties);
const p = (properties) => createElement('p', properties);
const pre = (properties) => createElement('pre', properties);
const ul = (properties) => createElement('ul', properties);
const a = (properties) => createElement('a', properties);
const abbr = (properties) => createElement('abbr', properties);
const b = (properties) => createElement('b', properties);
const bdi = (properties) => createElement('bdi', properties);
const bdo = (properties) => createElement('bdo', properties);
const br = (properties) => createElement('br', properties);
const cite = (properties) => createElement('cite', properties);
const code = (properties) => createElement('code', properties);
const data = (properties) => createElement('data', properties);
const dfn = (properties) => createElement('dfn', properties);
const em = (properties) => createElement('em', properties);
const i = (properties) => createElement('i', properties);
const kbd = (properties) => createElement('kbd', properties);
const mark = (properties) => createElement('mark', properties);
const q = (properties) => createElement('q', properties);
const rp = (properties) => createElement('rp', properties);
const rt = (properties) => createElement('rt', properties);
const ruby = (properties) => createElement('ruby', properties);
const s = (properties) => createElement('s', properties);
const samp = (properties) => createElement('samp', properties);
const small = (properties) => createElement('small', properties);
const span = (properties) => createElement('span', properties);
const strong = (properties) => createElement('strong', properties);
const sub = (properties) => createElement('sub', properties);
const sup = (properties) => createElement('sup', properties);
const time = (properties) => createElement('time', properties);
const u = (properties) => createElement('u', properties);
const variable = (properties) => createElement('var', properties);
const wbr = (properties) => createElement('wbr', properties);
const area = (properties) => createElement('area', properties);
const audio = (properties) => createElement('audio', properties);
const img = (properties) => createElement('img', properties);
const map = (properties) => createElement('map', properties);
const track = (properties) => createElement('track', properties);
const video = (properties) => createElement('video', properties);
const embed = (properties) => createElement('embed', properties);
const iframe = (properties) => createElement('iframe', properties);
const object = (properties) => createElement('object', properties);
const param = (properties) => createElement('param', properties);
const picture = (properties) => createElement('picture', properties);
const portal = (properties) => createElement('portal', properties);
const source = (properties) => createElement('source', properties);
const svg = (properties) => createElement('svg', properties);
const math = (properties) => createElement('math', properties);
const canvas = (properties) => createElement('canvas', properties);
const noscript = (properties) => createElement('noscript', properties);
const script = (properties) => createElement('script', properties);
const del = (properties) => createElement('del', properties);
const ins = (properties) => createElement('ins', properties);
const caption = (properties) => createElement('caption', properties);
const col = (properties) => createElement('col', properties);
const colgroup = (properties) => createElement('colgroup', properties);
const table = (properties) => createElement('table', properties);
const tbody = (properties) => createElement('tbody', properties);
const td = (properties) => createElement('td', properties);
const tfoot = (properties) => createElement('tfoot', properties);
const th = (properties) => createElement('th', properties);
const thead = (properties) => createElement('thead', properties);
const tr = (properties) => createElement('tr', properties);
const button = (properties) => createElement('button', properties);
const datalist = (properties) => createElement('datalist', properties);
const fieldset = (properties) => createElement('fieldset', properties);
const form = (properties) => createElement('form', properties);
const input = (properties) => createElement('input', properties);
const label = (properties) => createElement('label', properties);
const legend = (properties) => createElement('legend', properties);
const meter = (properties) => createElement('meter', properties);
const optgroup = (properties) => createElement('optgroup', properties);
const option = (properties) => createElement('option', properties);
const output = (properties) => createElement('output', properties);
const progress = (properties) => createElement('progress', properties);
const select = (properties) => createElement('select', properties);
const textarea = (properties) => createElement('textarea', properties);
const details = (properties) => createElement('details', properties);
const dialog = (properties) => createElement('dialog', properties);
const menu = (properties) => createElement('menu', properties);
const summary = (properties) => createElement('summary', properties);
const slot = (properties) => createElement('slot', properties);
const template = (properties) => createElement('template', properties);

export {
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
