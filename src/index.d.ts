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