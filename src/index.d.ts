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
  onEncrypted?: (e: MediaEncryptedEvent, element: T) => any;
  onWaitingForKey?: (e: Event, element: T) => any;
}

interface CamelVideoEventHandlers<T> {
  onEnterPictureInPicture?: (e: Event, element: T) => any;
  onLeavePictureInPicture?: (e: Event, element: T) => any;
}

interface CamelDocumentAndElementEventHandlers<T> {
  onCopy?: (e: ClipboardEvent, element: T) => any;
  onCut?: (e: ClipboardEvent, element: T) => any;
  onPaste?: (e: ClipboardEvent, element: T) => any;
}

interface CamelWindowEventHandlers<T> {
  onAfterPrint?: (e: Event, element: T) => any;
  onBeforePrint?: (e: Event, element: T) => any;
  onBeforeUnload?: (e: BeforeUnloadEvent, element: T) => any;
  onGamepadConnected?: (e: GamepadEvent, element: T) => any;
  onGamepadDisconnected?: (e: GamepadEvent, element: T) => any;
  onHashChange?: (e: HashChangeEvent, element: T) => any;
  onLanguageChange?: (e: Event, element: T) => any;
  onMessage?: (e: MessageEvent, element: T) => any;
  onMessageError?: (e: MessageEvent, element: T) => any;
  onOffline?: (e: Event, element: T) => any;
  onOnline?: (e: Event, element: T) => any;
  onPageHide?: (e: PageTransitionEvent, element: T) => any;
  onPageShow?: (e: PageTransitionEvent, element: T) => any;
  onPopState?: (e: PopStateEvent, element: T) => any;
  onRejectionHandled?: (e: PromiseRejectionEvent, element: T) => any;
  onStorage?: (e: StorageEvent, element: T) => any;
  onUnhandledRejection?: (e: PromiseRejectionEvent, element: T) => any;
  onUnload?: (e: Event, element: T) => any;
}

interface CamelGlobalEventHandlers<T> {
  /**
   * Fires when the user aborts the download.
   * @param e The event.
   */
  onAbort?: (e: UIEvent, element: T) => any;
  onAnimationCancel?: (e: AnimationEvent, element: T) => any;
  onAnimationEnd?: (e: AnimationEvent, element: T) => any;
  onAnimationIteration?: (e: AnimationEvent, element: T) => any;
  onAnimationStart?: (e: AnimationEvent, element: T) => any;
  onAuxClick?: (e: MouseEvent, element: T) => any;
  /**
   * Fires when the object loses the input focus.
   * @param e The focus event.
   */
  onBlur?: (e: FocusEvent, element: T) => any;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param e The event.
   */
  onCanPlay?: (e: Event, element: T) => any;
  onCanPlayThrough?: (e: Event, element: T) => any;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param e The event.
   */
  onChange?: (e: Event, element: T) => any;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param e The mouse event.
   */
  onClick?: (e: MouseEvent, element: T) => any;
  onClose?: (e: Event, element: T) => any;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param e The mouse event.
   */
  onContextMenu?: (e: MouseEvent, element: T) => any;
  onCueChange?: (e: Event, element: T) => any;
  /**
   * Fires when the user double-clicks the object.
   * @param e The mouse event.
   */
  onDblClick?: (e: MouseEvent, element: T) => any;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param e The event.
   */
  onDrag?: (e: DragEvent, element: T) => any;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param e The event.
   */
  onDragEnd?: (e: DragEvent, element: T) => any;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param e The drag event.
   */
  onDragEnter?: (e: DragEvent, element: T) => any;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param e The drag event.
   */
  onDragLeave?: (e: DragEvent, element: T) => any;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param e The event.
   */
  onDragOver?: (e: DragEvent, element: T) => any;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param e The event.
   */
  onDragStart?: (e: DragEvent, element: T) => any;
  onDrop?: (e: DragEvent, element: T) => any;
  /**
   * Occurs when the duration attribute is updated.
   * @param e The event.
   */
  onDurationChange?: (e: Event, element: T) => any;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param e The event.
   */
  onEmptied?: (e: Event, element: T) => any;
  /**
   * Occurs when the end of playback is reached.
   * @param e The event
   */
  onEnded?: (e: Event, element: T) => any;
  /**
   * Fires when an error occurs during object loading.
   * @param e The event.
   */
  onError?: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param e The event.
   */
  onFocus?: (e: FocusEvent, element: T) => any;
  onFormData?: (e: FormDataEvent, element: T) => any;
  onGotPointerCapture?: (e: PointerEvent, element: T) => any;
  onInput?: (e: Event, element: T) => any;
  onInvalid?: (e: Event, element: T) => any;
  /**
   * Fires when the user presses a key.
   * @param e The keyboard event
   */
  onKeyDown?: (e: KeyboardEvent, element: T) => any;
  /**
   * Fires when the user releases a key.
   * @param e The keyboard event
   */
  onKeyUp?: (e: KeyboardEvent, element: T) => any;
  /**
   * Fires immediately after the browser loads the object.
   * @param e The event.
   */
  onLoad?: (e: Event, element: T) => any;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param e The event.
   */
  onLoadedData?: (e: Event, element: T) => any;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param e The event.
   */
  onLoadedMetadata?: (e: Event, element: T) => any;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param e The event.
   */
  onLoadStart?: (e: Event, element: T) => any;
  onLostPointerCapture?: (e: PointerEvent, element: T) => any;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param e The mouse event.
   */
  onMouseDown?: (e: MouseEvent, element: T) => any;
  onMouseEnter?: (e: MouseEvent, element: T) => any;
  onMouseLeave?: (e: MouseEvent, element: T) => any;
  /**
   * Fires when the user moves the mouse over the object.
   * @param e The mouse event.
   */
  onMouseMove?: (e: MouseEvent, element: T) => any;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param e The mouse event.
   */
  onMouseOut?: (e: MouseEvent, element: T) => any;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param e The mouse event.
   */
  onMouseOver?: (e: MouseEvent, element: T) => any;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param e The mouse event.
   */
  onMouseUp?: (e: MouseEvent, element: T) => any;
  /**
   * Occurs when playback is paused.
   * @param e The event.
   */
  onPause?: (e: Event, element: T) => any;
  /**
   * Occurs when the play method is requested.
   * @param e The event.
   */
  onPlay?: (e: Event, element: T) => any;
  /**
   * Occurs when the audio or video has started playing.
   * @param e The event.
   */
  onPlaying?: (e: Event, element: T) => any;
  onPointerCancel?: (e: PointerEvent, element: T) => any;
  onPointerDown?: (e: PointerEvent, element: T) => any;
  onPointerEnter?: (e: PointerEvent, element: T) => any;
  onPointerLeave?: (e: PointerEvent, element: T) => any;
  onPointerMove?: (e: PointerEvent, element: T) => any;
  onPointerOut?: (e: PointerEvent, element: T) => any;
  onPointerOver?: (e: PointerEvent, element: T) => any;
  onPointerUp?: (e: PointerEvent, element: T) => any;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param e The event.
   */
  onProgress?: (e: ProgressEvent, element: T) => any;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param e The event.
   */
  onRateChange?: (e: Event, element: T) => any;
  /**
   * Fires when the user resets a form.
   * @param e The event.
   */
  onReset?: (e: Event, element: T) => any;
  onResize?: (e: UIEvent, element: T) => any;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param e The event.
   */
  onScroll?: (e: Event, element: T) => any;
  onSecurityPolicyViolation?: (e: SecurityPolicyViolationEvent, element: T) => any;
  /**
   * Occurs when the seek operation ends.
   * @param e The event.
   */
  onSeeked?: (e: Event, element: T) => any;
  /**
   * Occurs when the current playback position is moved.
   * @param e The event.
   */
  onSeeking?: (e: Event, element: T) => any;
  /**
   * Fires when the current selection changes.
   * @param e The event.
   */
  onSelect?: (e: Event, element: T) => any;
  onSelectionChange?: (e: Event, element: T) => any;
  onSelectStart?: (e: Event, element: T) => any;
  onSlotChange?: (e: Event, element: T) => any;
  /**
   * Occurs when the download has stopped.
   * @param e The event.
   */
  onStalled?: (e: Event, element: T) => any;
  onSubmit?: (e: SubmitEvent, element: T) => any;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param e The event.
   */
  onSuspend?: (e: Event, element: T) => any;
  /**
   * Occurs to indicate the current playback position.
   * @param e The event.
   */
  onTimeUpdate?: (e: Event, element: T) => any;
  onToggle?: (e: Event, element: T) => any;
  onTouchCancel?: (e: TouchEvent, element: T) => any;
  onTouchEnd?: (e: TouchEvent, element: T) => any;
  onTouchMove?: (e: TouchEvent, element: T) => any;
  onTouchStart?: (e: TouchEvent, element: T) => any;
  onTransitionCancel?: (e: TransitionEvent, element: T) => any;
  onTransitionEnd?: (e: TransitionEvent, element: T) => any;
  onTransitionRun?: (e: TransitionEvent, element: T) => any;
  onTransitionStart?: (e: TransitionEvent, element: T) => any;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param e The event.
   */
  onVolumeChange?: (e: Event, element: T) => any;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param e The event.
   */
  onWaiting?: (e: Event, element: T) => any;
  onWheel?: (e: WheelEvent, element: T) => any;
}

interface Shortcuts {
  children?: HTMLElement[];
}

type ExistingEventHandlers = GlobalEventHandlers & DocumentAndElementEventHandlers;

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

interface HTMLFunctions {
  create(): HTMLElementTagNameMap;
  create<K extends keyof HTMLElementTagNameMap>(tag: K, innerText?: string): HTMLElementTagNameMap[K];
  create<K extends keyof HTMLElementTagNameMap>(properties: Tag<K> & Camel<HTMLElementTagNameMap[K]>): HTMLElementTagNameMap[K];
  createMany(): { [key: string]: HTMLDivElement };
  createMany<K extends keyof HTMLElementTagNameMap>(tag: K): { [key: string]: HTMLElementTagNameMap[K] };
  createStyled(): { [key: string]: HTMLDivElement };
  createStyled<K extends keyof HTMLElementTagNameMap>(tag: K): { [key: string]: HTMLElementTagNameMap[K] };
  register<T extends BaseElement>(options: Register): T;
  register<T extends BaseElement, P>(options: RegisterWithProps<P>): T & P;
  register<E extends BaseElement>(options: RegisterWithExtends<E>): E;
  register<P, E extends BaseElement>(options: RegisterWithExtendsAndProps<P, E>): P & E;
}

interface SVGFunctions {
  create(): SVGElementTagNameMap;
  create<K extends keyof SVGElementTagNameMap>(tag: K, innerText?: string): SVGElementTagNameMap[K];
  create<K extends keyof SVGElementTagNameMap>(properties: Tag<K> & Camel<SVGElementTagNameMap[K]>): SVGElementTagNameMap[K];
  createMany<K extends keyof SVGElementTagNameMap>(tag: K): { [key: string]: SVGElementTagNameMap[K] };
  createStyled<K extends keyof SVGElementTagNameMap>(tag: K): { [key: string]: SVGElementTagNameMap[K] };
}

export const html: HTMLFunctions;
export const svg: SVGFunctions;

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
}
