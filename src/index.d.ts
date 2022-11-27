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

interface CamelAudioEventHandlers {
  onEncrypted?: (e: MediaEncryptedEvent) => any;
  onWaitingForKey?: (e: Event) => any;
}

interface CamelVideoEventHandlers {
  onEnterPictureInPicture?: (e: Event) => any;
  onLeavePictureInPicture?: (e: Event) => any;
}

interface CamelDocumentAndElementEventHandlers {
  onCopy?: (e: ClipboardEvent) => any;
  onCut?: (e: ClipboardEvent) => any;
  onPaste?: (e: ClipboardEvent) => any;
}

interface CamelWindowEventHandlers {
  onAfterPrint?: (e: Event) => any;
  onBeforePrint?: (e: Event) => any;
  onBeforeUnload?: (e: BeforeUnloadEvent) => any;
  onGamepadConnected?: (e: GamepadEvent) => any;
  onGamepadDisconnected?: (e: GamepadEvent) => any;
  onHashChange?: (e: HashChangeEvent) => any;
  onLanguageChange?: (e: Event) => any;
  onMessage?: (e: MessageEvent) => any;
  onMessageError?: (e: MessageEvent) => any;
  onOffline?: (e: Event) => any;
  onOnline?: (e: Event) => any;
  onPageHide?: (e: PageTransitionEvent) => any;
  onPageShow?: (e: PageTransitionEvent) => any;
  onPopState?: (e: PopStateEvent) => any;
  onRejectionHandled?: (e: PromiseRejectionEvent) => any;
  onStorage?: (e: StorageEvent) => any;
  onUnhandledRejection?: (e: PromiseRejectionEvent) => any;
  onUnload?: (e: Event) => any;
}

interface CamelGlobalEventHandlers {
  /**
   * Fires when the user aborts the download.
   * @param e The event.
   */
  onAbort?: (e: UIEvent) => any;
  onAnimationCancel?: (e: AnimationEvent) => any;
  onAnimationEnd?: (e: AnimationEvent) => any;
  onAnimationIteration?: (e: AnimationEvent) => any;
  onAnimationStart?: (e: AnimationEvent) => any;
  onAuxClick?: (e: MouseEvent) => any;
  /**
   * Fires when the object loses the input focus.
   * @param e The focus event.
   */
  onBlur?: (e: FocusEvent) => any;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param e The event.
   */
  onCanPlay?: (e: Event) => any;
  onCanPlayThrough?: (e: Event) => any;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param e The event.
   */
  onChange?: (e: Event) => any;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param e The mouse event.
   */
  onClick?: (e: MouseEvent) => any;
  onClose?: (e: Event) => any;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param e The mouse event.
   */
  onContextMenu?: (e: MouseEvent) => any;
  onCueChange?: (e: Event) => any;
  /**
   * Fires when the user double-clicks the object.
   * @param e The mouse event.
   */
  onDblClick?: (e: MouseEvent) => any;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param e The event.
   */
  onDrag?: (e: DragEvent) => any;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param e The event.
   */
  onDragEnd?: (e: DragEvent) => any;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param e The drag event.
   */
  onDragEnter?: (e: DragEvent) => any;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param e The drag event.
   */
  onDragLeave?: (e: DragEvent) => any;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param e The event.
   */
  onDragOver?: (e: DragEvent) => any;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param e The event.
   */
  onDragStart?: (e: DragEvent) => any;
  onDrop?: (e: DragEvent) => any;
  /**
   * Occurs when the duration attribute is updated.
   * @param e The event.
   */
  onDurationChange?: (e: Event) => any;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param e The event.
   */
  onEmptied?: (e: Event) => any;
  /**
   * Occurs when the end of playback is reached.
   * @param e The event
   */
  onEnded?: (e: Event) => any;
  /**
   * Fires when an error occurs during object loading.
   * @param e The event.
   */
  onError?: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param e The event.
   */
  onFocus?: (e: FocusEvent) => any;
  onFormData?: (e: FormDataEvent) => any;
  onGotPointerCapture?: (e: PointerEvent) => any;
  onInput?: (e: Event) => any;
  onInvalid?: (e: Event) => any;
  /**
   * Fires when the user presses a key.
   * @param e The keyboard event
   */
  onKeyDown?: (e: KeyboardEvent) => any;
  /**
   * Fires when the user releases a key.
   * @param e The keyboard event
   */
  onKeyUp?: (e: KeyboardEvent) => any;
  /**
   * Fires immediately after the browser loads the object.
   * @param e The event.
   */
  onLoad?: (e: Event) => any;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param e The event.
   */
  onLoadedData?: (e: Event) => any;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param e The event.
   */
  onLoadedMetadata?: (e: Event) => any;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param e The event.
   */
  onLoadStart?: (e: Event) => any;
  onLostPointerCapture?: (e: PointerEvent) => any;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param e The mouse event.
   */
  onMouseDown?: (e: MouseEvent) => any;
  onMouseEnter?: (e: MouseEvent) => any;
  onMouseLeave?: (e: MouseEvent) => any;
  /**
   * Fires when the user moves the mouse over the object.
   * @param e The mouse event.
   */
  onMouseMove?: (e: MouseEvent) => any;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param e The mouse event.
   */
  onMouseOut?: (e: MouseEvent) => any;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param e The mouse event.
   */
  onMouseOver?: (e: MouseEvent) => any;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param e The mouse event.
   */
  onMouseUp?: (e: MouseEvent) => any;
  /**
   * Occurs when playback is paused.
   * @param e The event.
   */
  onPause?: (e: Event) => any;
  /**
   * Occurs when the play method is requested.
   * @param e The event.
   */
  onPlay?: (e: Event) => any;
  /**
   * Occurs when the audio or video has started playing.
   * @param e The event.
   */
  onPlaying?: (e: Event) => any;
  onPointerCancel?: (e: PointerEvent) => any;
  onPointerDown?: (e: PointerEvent) => any;
  onPointerEnter?: (e: PointerEvent) => any;
  onPointerLeave?: (e: PointerEvent) => any;
  onPointerMove?: (e: PointerEvent) => any;
  onPointerOut?: (e: PointerEvent) => any;
  onPointerOver?: (e: PointerEvent) => any;
  onPointerUp?: (e: PointerEvent) => any;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param e The event.
   */
  onProgress?: (e: ProgressEvent) => any;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param e The event.
   */
  onRateChange?: (e: Event) => any;
  /**
   * Fires when the user resets a form.
   * @param e The event.
   */
  onReset?: (e: Event) => any;
  onResize?: (e: UIEvent) => any;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param e The event.
   */
  onScroll?: (e: Event) => any;
  onSecurityPolicyViolation?: (e: SecurityPolicyViolationEvent) => any;
  /**
   * Occurs when the seek operation ends.
   * @param e The event.
   */
  onSeeked?: (e: Event) => any;
  /**
   * Occurs when the current playback position is moved.
   * @param e The event.
   */
  onSeeking?: (e: Event) => any;
  /**
   * Fires when the current selection changes.
   * @param e The event.
   */
  onSelect?: (e: Event) => any;
  onSelectionChange?: (e: Event) => any;
  onSelectStart?: (e: Event) => any;
  onSlotChange?: (e: Event) => any;
  /**
   * Occurs when the download has stopped.
   * @param e The event.
   */
  onStalled?: (e: Event) => any;
  onSubmit?: (e: SubmitEvent) => any;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param e The event.
   */
  onSuspend?: (e: Event) => any;
  /**
   * Occurs to indicate the current playback position.
   * @param e The event.
   */
  onTimeUpdate?: (e: Event) => any;
  onToggle?: (e: Event) => any;
  onTouchCancel?: (e: TouchEvent) => any;
  onTouchEnd?: (e: TouchEvent) => any;
  onTouchMove?: (e: TouchEvent) => any;
  onTouchStart?: (e: TouchEvent) => any;
  onTransitionCancel?: (e: TransitionEvent) => any;
  onTransitionEnd?: (e: TransitionEvent) => any;
  onTransitionRun?: (e: TransitionEvent) => any;
  onTransitionStart?: (e: TransitionEvent) => any;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param e The event.
   */
  onVolumeChange?: (e: Event) => any;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param e The event.
   */
  onWaiting?: (e: Event) => any;
  onWheel?: (e: WheelEvent) => any;
}

interface Shortcuts {
  children?: HTMLElement[];
}

type ExistingEventHandlers = GlobalEventHandlers & DocumentAndElementEventHandlers;

type Camel<T> = Partial<T> & Shortcuts & CamelDocumentAndElementEventHandlers & CamelGlobalEventHandlers;
type SvgCamel<T> = Partial<T> & Shortcuts & CamelDocumentAndElementEventHandlers & CamelGlobalEventHandlers;

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
  extends: E;
}

interface RegisterWithExtendsAndProps<P, E extends BaseElement> {
  name: string;
  root: HTMLElement;
  connected?: Function;
  styles?: string | string[] | CSSStyleSheet | CSSStyleSheet[];
  props: P;
  extends: E;
}

interface HTMLFunctions {
  create(): HTMLElementTagNameMap;
  create<K extends keyof HTMLElementTagNameMap>(tag: K, innerText?: string): HTMLElementTagNameMap[K];
  create<K extends keyof HTMLElementTagNameMap>(properties: Tag<K> & Camel<HTMLElementTagNameMap[K]>): HTMLElementTagNameMap[K];
  createMany<K extends keyof HTMLElementTagNameMap>(tag: K): { [key: string]: HTMLElementTagNameMap[K] };
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
