export class ElementArt {
  adoptedStyles: CSSStyleDeclaration;
  styles: string;
  state: any;
  connected: () => void;
  disconnected: () => void;

  render(): HTMLElement;
}