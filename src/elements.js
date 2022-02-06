const elements = {
  get html() {
    return document.createElement('html');
  },
  get base() {
    return document.createElement('base');
  },
  get head() {
    return document.createElement('head');
  },
  get link() {
    return document.createElement('link');
  },
  get meta() {
    return document.createElement('meta');
  },
  get style() {
    return document.createElement('style');
  },
  get title() {
    return document.createElement('title');
  },
  get body() {
    return document.createElement('body');
  },
  get address() {
    return document.createElement('address');
  },
  get article() {
    return document.createElement('article');
  },
  get aside() {
    return document.createElement('aside');
  },
  get footer() {
    return document.createElement('footer');
  },
  get header() {
    return document.createElement('header');
  },
  get h1() {
    return document.createElement('h1');
  },
  get h2() {
    return document.createElement('h2');
  },
  get h3() {
    return document.createElement('h3');
  },
  get h4() {
    return document.createElement('h4');
  },
  get h5() {
    return document.createElement('h5');
  },
  get h6() {
    return document.createElement('h6');
  },
  get main() {
    return document.createElement('main');
  },
  get nav() {
    return document.createElement('nav');
  },
  get section() {
    return document.createElement('section');
  },
  get blockquote() {
    return document.createElement('blockquote');
  },
  get dd() {
    return document.createElement('dd');
  },
  get div() {
    return document.createElement('div');
  },
  get dl() {
    return document.createElement('dl');
  },
  get dt() {
    return document.createElement('dt');
  },
  get figcaption() {
    return document.createElement('figcaption');
  },
  get figure() {
    return document.createElement('figure');
  },
  get hr() {
    return document.createElement('hr');
  },
  get li() {
    return document.createElement('li');
  },
  get ol() {
    return document.createElement('ol');
  },
  get p() {
    return document.createElement('p');
  },
  get pre() {
    return document.createElement('pre');
  },
  get ul() {
    return document.createElement('ul');
  },
  get a() {
    return document.createElement('a');
  },
  get abbr() {
    return document.createElement('abbr');
  },
  get b() {
    return document.createElement('b');
  },
  get bdi() {
    return document.createElement('bdi');
  },
  get bdo() {
    return document.createElement('bdo');
  },
  get br() {
    return document.createElement('br');
  },
  get cite() {
    return document.createElement('cite');
  },
  get code() {
    return document.createElement('code');
  },
  get data() {
    return document.createElement('data');
  },
  get dfn() {
    return document.createElement('dfn');
  },
  get em() {
    return document.createElement('em');
  },
  get i() {
    return document.createElement('i');
  },
  get kbd() {
    return document.createElement('kbd');
  },
  get mark() {
    return document.createElement('mark');
  },
  get q() {
    return document.createElement('q');
  },
  get rp() {
    return document.createElement('rp');
  },
  get rt() {
    return document.createElement('rt');
  },
  get ruby() {
    return document.createElement('ruby');
  },
  get s() {
    return document.createElement('s');
  },
  get samp() {
    return document.createElement('samp');
  },
  get small() {
    return document.createElement('small');
  },
  get span() {
    return document.createElement('span');
  },
  get strong() {
    return document.createElement('strong');
  },
  get sub() {
    return document.createElement('sub');
  },
  get sup() {
    return document.createElement('sup');
  },
  get time() {
    return document.createElement('time');
  },
  get u() {
    return document.createElement('u');
  },
  get var() {
    return document.createElement('var');
  },
  get wbr() {
    return document.createElement('wbr');
  },
  get area() {
    return document.createElement('area');
  },
  get audio() {
    return document.createElement('audio');
  },
  get img() {
    return document.createElement('img');
  },
  get map() {
    return document.createElement('map');
  },
  get track() {
    return document.createElement('track');
  },
  get video() {
    return document.createElement('video');
  },
  get embed() {
    return document.createElement('embed');
  },
  get iframe() {
    return document.createElement('iframe');
  },
  get object() {
    return document.createElement('object');
  },
  get param() {
    return document.createElement('param');
  },
  get picture() {
    return document.createElement('picture');
  },
  get portal() {
    return document.createElement('portal');
  },
  get source() {
    return document.createElement('source');
  },
  get svg() {
    return document.createElement('svg');
  },
  get math() {
    return document.createElement('math');
  },
  get canvas() {
    return document.createElement('canvas');
  },
  get noscript() {
    return document.createElement('noscript');
  },
  get script() {
    return document.createElement('script');
  },
  get del() {
    return document.createElement('del');
  },
  get ins() {
    return document.createElement('ins');
  },
  get caption() {
    return document.createElement('caption');
  },
  get col() {
    return document.createElement('col');
  },
  get colgroup() {
    return document.createElement('colgroup');
  },
  get table() {
    return document.createElement('table');
  },
  get tbody() {
    return document.createElement('tbody');
  },
  get td() {
    return document.createElement('td');
  },
  get tfoot() {
    return document.createElement('tfoot');
  },
  get th() {
    return document.createElement('th');
  },
  get thead() {
    return document.createElement('thead');
  },
  get tr() {
    return document.createElement('tr');
  },
  get button() {
    return document.createElement('button');
  },
  get datalist() {
    return document.createElement('datalist');
  },
  get fieldset() {
    return document.createElement('fieldset');
  },
  get form() {
    return document.createElement('form');
  },
  get input() {
    return document.createElement('input');
  },
  get label() {
    return document.createElement('label');
  },
  get legend() {
    return document.createElement('legend');
  },
  get meter() {
    return document.createElement('meter');
  },
  get optgroup() {
    return document.createElement('optgroup');
  },
  get option() {
    return document.createElement('option');
  },
  get output() {
    return document.createElement('output');
  },
  get progress() {
    return document.createElement('progress');
  },
  get select() {
    return document.createElement('select');
  },
  get textarea() {
    return document.createElement('textarea');
  },
  get details() {
    return document.createElement('details');
  },
  get dialog() {
    return document.createElement('dialog');
  },
  get menu() {
    return document.createElement('menu');
  },
  get summary() {
    return document.createElement('summary');
  },
  get slot() {
    return document.createElement('slot');
  },
  get template() {
    return document.createElement('template');
  }
}

export default elements;
