export class BaseElement extends HTMLElement {
  connected?: () => void;
  disconnected?: () => void;
  root: HTMLElement;
  props?: { [key: string]: any };

  load(root: HTMLElement, connected?: Function, props?: { [key: string]: any }): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
}

export class FormInput extends BaseElement {
  type: string;
  value: string;
}

export function htmlFor(label: HTMLLabelElement, input: HTMLInputElement, inputId: string): void;

export function pushState(url: string, state?: any): void;

export class Router {
  constructor(root: HTMLElement);
  start(): void;
  setNotFound(element: HTMLElement): void;
  add(match: string | RegExp, handler: (params?: { [key: string]: string }) => HTMLElement): void;
  remove(): void;
}

export function routerLink(properties: Camel<HTMLAnchorElement> & { state?: any }): HTMLAnchorElement;

interface CamelAudioEventHandlers<T> {
  onEncrypted?: (element: T, e: MediaEncryptedEvent) => any;
  onWaitingForKey?: (element: T, e: Event) => any;
}

interface CamelVideoEventHandlers<T> {
  onEnterPictureInPicture?: (element: T, e: Event) => any;
  onLeavePictureInPicture?: (element: T, e: Event) => any;
}

interface CamelDocumentAndElementEventHandlers<T> {
  onCopy?: (element: T, e: ClipboardEvent) => any;
  onCut?: (element: T, e: ClipboardEvent) => any;
  onPaste?: (element: T, e: ClipboardEvent) => any;
}

interface CamelWindowEventHandlers<T> {
  onAfterPrint?: (element: T, e: Event) => any;
  onBeforePrint?: (element: T, e: Event) => any;
  onBeforeUnload?: (element: T, e: BeforeUnloadEvent) => any;
  onGamepadConnected?: (element: T, e: GamepadEvent) => any;
  onGamepadDisconnected?: (element: T, e: GamepadEvent) => any;
  onHashChange?: (element: T, e: HashChangeEvent) => any;
  onLanguageChange?: (element: T, e: Event) => any;
  onMessage?: (element: T, e: MessageEvent) => any;
  onMessageError?: (element: T, e: MessageEvent) => any;
  onOffline?: (element: T, e: Event) => any;
  onOnline?: (element: T, e: Event) => any;
  onPageHide?: (element: T, e: PageTransitionEvent) => any;
  onPageShow?: (element: T, e: PageTransitionEvent) => any;
  onPopState?: (element: T, e: PopStateEvent) => any;
  onRejectionHandled?: (element: T, e: PromiseRejectionEvent) => any;
  onStorage?: (element: T, e: StorageEvent) => any;
  onUnhandledRejection?: (element: T, e: PromiseRejectionEvent) => any;
  onUnload?: (element: T, e: Event) => any;
}

interface CamelGlobalEventHandlers<T> {
  /**
   * Fires when the user aborts the download.
   * @param e The event.
   */
  onAbort?: (element: T, e: UIEvent) => any;
  onAnimationCancel?: (element: T, e: AnimationEvent) => any;
  onAnimationEnd?: (element: T, e: AnimationEvent) => any;
  onAnimationIteration?: (element: T, e: AnimationEvent) => any;
  onAnimationStart?: (element: T, e: AnimationEvent) => any;
  onAuxClick?: (element: T, e: MouseEvent) => any;
  /**
   * Fires when the object loses the input focus.
   * @param e The focus event.
   */
  onBlur?: (element: T, e: FocusEvent) => any;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param e The event.
   */
  onCanPlay?: (element: T, e: Event) => any;
  onCanPlayThrough?: (element: T, e: Event) => any;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param e The event.
   */
  onChange?: (element: T, e: Event) => any;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param e The mouse event.
   */
  onClick?: (element: T, e: MouseEvent) => any;
  onClose?: (element: T, e: Event) => any;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param e The mouse event.
   */
  onContextMenu?: (element: T, e: MouseEvent) => any;
  onCueChange?: (element: T, e: Event) => any;
  /**
   * Fires when the user double-clicks the object.
   * @param e The mouse event.
   */
  onDblClick?: (element: T, e: MouseEvent) => any;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param e The event.
   */
  onDrag?: (element: T, e: DragEvent) => any;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param e The event.
   */
  onDragEnd?: (element: T, e: DragEvent) => any;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param e The drag event.
   */
  onDragEnter?: (element: T, e: DragEvent) => any;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param e The drag event.
   */
  onDragLeave?: (element: T, e: DragEvent) => any;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param e The event.
   */
  onDragOver?: (element: T, e: DragEvent) => any;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param e The event.
   */
  onDragStart?: (element: T, e: DragEvent) => any;
  onDrop?: (element: T, e: DragEvent) => any;
  /**
   * Occurs when the duration attribute is updated.
   * @param e The event.
   */
  onDurationChange?: (element: T, e: Event) => any;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param e The event.
   */
  onEmptied?: (element: T, e: Event) => any;
  /**
   * Occurs when the end of playback is reached.
   * @param e The event
   */
  onEnded?: (element: T, e: Event) => any;
  /**
   * Fires when an error occurs during object loading.
   * @param e The event.
   */
  onError?: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param e The event.
   */
  onFocus?: (element: T, e: FocusEvent) => any;
  onFormData?: (element: T, e: FormDataEvent) => any;
  onGotPointerCapture?: (element: T, e: PointerEvent) => any;
  onInput?: (element: T, e: Event) => any;
  onInvalid?: (element: T, e: Event) => any;
  /**
   * Fires when the user presses a key.
   * @param e The keyboard event
   */
  onKeyDown?: (element: T, e: KeyboardEvent) => any;
  /**
   * Fires when the user releases a key.
   * @param e The keyboard event
   */
  onKeyUp?: (element: T, e: KeyboardEvent) => any;
  /**
   * Fires immediately after the browser loads the object.
   * @param e The event.
   */
  onLoad?: (element: T, e: Event) => any;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param e The event.
   */
  onLoadedData?: (element: T, e: Event) => any;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param e The event.
   */
  onLoadedMetadata?: (element: T, e: Event) => any;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param e The event.
   */
  onLoadStart?: (element: T, e: Event) => any;
  onLostPointerCapture?: (element: T, e: PointerEvent) => any;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param e The mouse event.
   */
  onMouseDown?: (element: T, e: MouseEvent) => any;
  onMouseEnter?: (element: T, e: MouseEvent) => any;
  onMouseLeave?: (element: T, e: MouseEvent) => any;
  /**
   * Fires when the user moves the mouse over the object.
   * @param e The mouse event.
   */
  onMouseMove?: (element: T, e: MouseEvent) => any;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param e The mouse event.
   */
  onMouseOut?: (element: T, e: MouseEvent) => any;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param e The mouse event.
   */
  onMouseOver?: (element: T, e: MouseEvent) => any;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param e The mouse event.
   */
  onMouseUp?: (element: T, e: MouseEvent) => any;
  /**
   * Occurs when playback is paused.
   * @param e The event.
   */
  onPause?: (element: T, e: Event) => any;
  /**
   * Occurs when the play method is requested.
   * @param e The event.
   */
  onPlay?: (element: T, e: Event) => any;
  /**
   * Occurs when the audio or video has started playing.
   * @param e The event.
   */
  onPlaying?: (element: T, e: Event) => any;
  onPointerCancel?: (element: T, e: PointerEvent) => any;
  onPointerDown?: (element: T, e: PointerEvent) => any;
  onPointerEnter?: (element: T, e: PointerEvent) => any;
  onPointerLeave?: (element: T, e: PointerEvent) => any;
  onPointerMove?: (element: T, e: PointerEvent) => any;
  onPointerOut?: (element: T, e: PointerEvent) => any;
  onPointerOver?: (element: T, e: PointerEvent) => any;
  onPointerUp?: (element: T, e: PointerEvent) => any;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param e The event.
   */
  onProgress?: (element: T, e: ProgressEvent) => any;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param e The event.
   */
  onRateChange?: (element: T, e: Event) => any;
  /**
   * Fires when the user resets a form.
   * @param e The event.
   */
  onReset?: (element: T, e: Event) => any;
  onResize?: (element: T, e: UIEvent) => any;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param e The event.
   */
  onScroll?: (element: T, e: Event) => any;
  onSecurityPolicyViolation?: (element: T, e: SecurityPolicyViolationEvent) => any;
  /**
   * Occurs when the seek operation ends.
   * @param e The event.
   */
  onSeeked?: (element: T, e: Event) => any;
  /**
   * Occurs when the current playback position is moved.
   * @param e The event.
   */
  onSeeking?: (element: T, e: Event) => any;
  /**
   * Fires when the current selection changes.
   * @param e The event.
   */
  onSelect?: (element: T, e: Event) => any;
  onSelectionChange?: (element: T, e: Event) => any;
  onSelectStart?: (element: T, e: Event) => any;
  onSlotChange?: (element: T, e: Event) => any;
  /**
   * Occurs when the download has stopped.
   * @param e The event.
   */
  onStalled?: (element: T, e: Event) => any;
  onSubmit?: (element: T, e: SubmitEvent) => any;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param e The event.
   */
  onSuspend?: (element: T, e: Event) => any;
  /**
   * Occurs to indicate the current playback position.
   * @param e The event.
   */
  onTimeUpdate?: (element: T, e: Event) => any;
  onToggle?: (element: T, e: Event) => any;
  onTouchCancel?: (element: T, e: TouchEvent) => any;
  onTouchEnd?: (element: T, e: TouchEvent) => any;
  onTouchMove?: (element: T, e: TouchEvent) => any;
  onTouchStart?: (element: T, e: TouchEvent) => any;
  onTransitionCancel?: (element: T, e: TransitionEvent) => any;
  onTransitionEnd?: (element: T, e: TransitionEvent) => any;
  onTransitionRun?: (element: T, e: TransitionEvent) => any;
  onTransitionStart?: (element: T, e: TransitionEvent) => any;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param e The event.
   */
  onVolumeChange?: (element: T, e: Event) => any;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param e The event.
   */
  onWaiting?: (element: T, e: Event) => any;
  onWheel?: (element: T, e: WheelEvent) => any;
}

interface Shortcuts {
  children?: HTMLElement[];
}

type Camel<T> = Partial<T> & Shortcuts & CamelDocumentAndElementEventHandlers<T> & CamelGlobalEventHandlers<T>;
type SvgCamel<T> = Partial<T> & Shortcuts & CamelDocumentAndElementEventHandlers<T> & CamelGlobalEventHandlers<T>;

interface Tag<K> {
  tag: K
}

interface Register {
  name: string;
  root: HTMLElement;
  connected?: Function;
  styles?: string | string[] | CSSStyleSheet | CSSStyleSheet[];
}

interface RegisterWithProps<P> {
  name: string;
  root: HTMLElement;
  connected?: Function;
  styles?: string | string[] | CSSStyleSheet | CSSStyleSheet[];
  props: P;
}

interface RegisterWithExtends<E extends BaseElement> {
  name: string;
  root: HTMLElement;
  connected?: Function;
  styles?: string | string[] | CSSStyleSheet | CSSStyleSheet[];
  extends: new (...args: any[]) => E;
}

interface RegisterWithExtendsAndProps<P, E extends BaseElement> {
  name: string;
  root: HTMLElement;
  connected?: Function;
  styles?: string | string[] | CSSStyleSheet | CSSStyleSheet[];
  props: P;
  extends: new (...args: any[]) => E;
}

type HtmlFactory = {
  [K in keyof HTMLElementTagNameMap]: (properties?: Camel<HTMLElementTagNameMap[K]> | string) => HTMLElementTagNameMap[K];
};

interface HTMLFunctions {
  create(): HTMLElementTagNameMap;
  styled(): { [key: string]: HTMLDivElement };
  styled<K extends keyof HTMLElementTagNameMap>(tag: K): { [key: string]: HTMLElementTagNameMap[K] };
  register<T extends BaseElement>(options: Register): T;
  register<T extends BaseElement, P>(options: RegisterWithProps<P>): T & P;
  register<E extends BaseElement>(options: RegisterWithExtends<E>): E;
  register<P, E extends BaseElement>(options: RegisterWithExtendsAndProps<P, E>): P & E;
}

interface SVGFunctions {
  create(): SVGElementTagNameMap;
  styled<K extends keyof SVGElementTagNameMap>(tag: K): { [key: string]: SVGElementTagNameMap[K] };
}

interface SVGElementTagNameMap {
  "a": SVGAElement;
  "animate": SVGAnimateElement;
  "animateMotion": SVGAnimateMotionElement;
  "animateTransform": SVGAnimateTransformElement;
  "circle": SVGCircleElement;
  "clipPath": SVGClipPathElement;
  "defs": SVGDefsElement;
  "desc": SVGDescElement;
  "ellipse": SVGEllipseElement;
  "feBlend": SVGFEBlendElement;
  "feColorMatrix": SVGFEColorMatrixElement;
  "feComponentTransfer": SVGFEComponentTransferElement;
  "feComposite": SVGFECompositeElement;
  "feConvolveMatrix": SVGFEConvolveMatrixElement;
  "feDiffuseLighting": SVGFEDiffuseLightingElement;
  "feDisplacementMap": SVGFEDisplacementMapElement;
  "feDistantLight": SVGFEDistantLightElement;
  "feDropShadow": SVGFEDropShadowElement;
  "feFlood": SVGFEFloodElement;
  "feFuncA": SVGFEFuncAElement;
  "feFuncB": SVGFEFuncBElement;
  "feFuncG": SVGFEFuncGElement;
  "feFuncR": SVGFEFuncRElement;
  "feGaussianBlur": SVGFEGaussianBlurElement;
  "feImage": SVGFEImageElement;
  "feMerge": SVGFEMergeElement;
  "feMergeNode": SVGFEMergeNodeElement;
  "feMorphology": SVGFEMorphologyElement;
  "feOffset": SVGFEOffsetElement;
  "fePointLight": SVGFEPointLightElement;
  "feSpecularLighting": SVGFESpecularLightingElement;
  "feSpotLight": SVGFESpotLightElement;
  "feTile": SVGFETileElement;
  "feTurbulence": SVGFETurbulenceElement;
  "filter": SVGFilterElement;
  "foreignObject": SVGForeignObjectElement;
  "g": SVGGElement;
  "image": SVGImageElement;
  "line": SVGLineElement;
  "linearGradient": SVGLinearGradientElement;
  "marker": SVGMarkerElement;
  "mask": SVGMaskElement;
  "metadata": SVGMetadataElement;
  "mpath": SVGMPathElement;
  "path": SVGPathElement;
  "pattern": SVGPatternElement;
  "polygon": SVGPolygonElement;
  "polyline": SVGPolylineElement;
  "radialGradient": SVGRadialGradientElement;
  "rect": SVGRectElement;
  "script": SVGScriptElement;
  "set": SVGSetElement;
  "stop": SVGStopElement;
  "style": SVGStyleElement;
  "svg": SVGSVGElement;
  "switch": SVGSwitchElement;
  "symbol": SVGSymbolElement;
  "text": SVGTextElement;
  "textPath": SVGTextPathElement;
  "title": SVGTitleElement;
  "tspan": SVGTSpanElement;
  "use": SVGUseElement;
  "view": SVGViewElement;
};

type SvgFactory = {
  [K in keyof SVGElementTagNameMap]: (properties?: Camel<SVGElementTagNameMap[K]>) => SVGElementTagNameMap[K];
};

export const html: HTMLFunctions & HtmlFactory;
export const svg: SVGFunctions & SvgFactory;
