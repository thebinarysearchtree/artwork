export class BaseElement extends HTMLElement {
  connected?: () => void;
  disconnected?: () => void;
  set styles(styles: CSSStyleSheet | string | CSSStyleSheet[] | string[]);
  get styles(): CSSStyleSheet[] | string[];
}

export class ElementArt extends BaseElement {
  render(...state: any[]): HTMLElement;
}

export class AsyncElementArt extends BaseElement {
  render(...state: any[]): Promise<HTMLElement>;
}

export class FormInput extends ElementArt {
  type: string;
  value: string;
}

export interface MakeElementOptions {
  property: string;
  camelToDash?: boolean;
}

export function htmlFor(label: HTMLLabelElement, input: HTMLInputElement, inputId: string): void;
export function makeElements<K extends keyof HTMLElementTagNameMap>(tag: K, options?: MakeElementOptions): { [key: string]: HTMLElementTagNameMap[K] };
export function append(parent: HTMLElement | ((properties?: any) => HTMLElement), children: HTMLElement[]): HTMLElement;

export function makeArt<T extends ElementArt, K extends (...state: any[]) => T>(name: string, elementClass: { new() : T }): K;
export function makeAsyncArt<T extends AsyncElementArt, K extends (...state: any[]) => Promise<T>>(name: string, elementClass: { new() : T }): K;

export function pushState(url: string, state?: any): void;

export class Router {
  constructor(root: HTMLElement);
  start(): void;
  setNotFound(element: HTMLElement): void;
  add(match: string | RegExp, handler: (params?: { [key: string]: string }) => HTMLElement): void;
  remove(): void;
}

export function routerLink(properties: Camel<HTMLAnchorElement> & { state?: any }): HTMLAnchorElement;

interface ExistingAudioEventHandlers {
  onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
  onwaitingforkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
}

interface CamelAudioEventHandlers {
  onEncrypted?: (e: MediaEncryptedEvent) => any;
  onWaitingForKey?: (e: Event) => any;
}

interface ExistingVideoEventHandlers {
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
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

export const divs: { 
  [key: string]: HTMLDivElement;
}

export const setters: {
  [key: string]: (values: { [key: string]: any }, elements: { [key: string]: HTMLElement }) => void;
}

export const events: {
  onAbort(target: AbortSignal | HTMLMediaElement | IDBTransaction, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onEnded(target: AudioScheduledSourceNode | HTMLMediaElement | MediaStreamTrack | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onMessageError(target: BroadcastChannel | MessagePort | Window | Worker, listener: (e: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMessage(target: BroadcastChannel | EventSource | MessagePort | RTCDataChannel | ServiceWorkerContainer | WebSocket | Window | Worker, listener: (e: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAnimationCancel(target: Document | HTMLElement | Window | Element, listener: (e: AnimationEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAnimationEnd(target: Document | HTMLElement | Window | Element, listener: (e: AnimationEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAnimationIteration(target: Document | HTMLElement | Window | Element, listener: (e: AnimationEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAnimationStart(target: Document | HTMLElement | Window | Element, listener: (e: AnimationEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onCopy(target: Document | Element | Window, listener: (e: ClipboardEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onCut(target: Document | Element | Window, listener: (e: ClipboardEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDOMContentLoaded(target: Document | Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onDragEnd(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDragEnter(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDragLeave(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDragOver(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDragStart(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDrag(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDrop(target: Document | Window | Element, listener: (e: DragEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onFullScreenChange(target: Document | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onFullScreenError(target: Document | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onGotPointerCapture(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onKeyDown(target: Document | Element | Window, listener: (e: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onKeyPress(target: Document | Element | Window, listener: (e: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onKeyUp(target: Document | Element | Window, listener: (e: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onLostPointerCapture(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPaste(target: Document | Element | Window, listener: (e: ClipboardEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerCancel(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerDown(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerEnter(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerLeave(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerLockChange(target: Document | HTMLElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerLockError(target: Document | HTMLElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerMove(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerOut(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerOver(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPointerUp(target: Document | HTMLElement | Window | Element, listener: (e: PointerEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onReadyStateChange(target: Document, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onScroll(target: Document | Element | VisualViewport | Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSelectionChange(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSelectStart(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onTouchCancel(target: Document | Element | Window, listener: (e: TouchEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTouchEnd(target: Document | Element | Window, listener: (e: TouchEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTouchMove(target: Document | Element | Window, listener: (e: TouchEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTouchStart(target: Document | Element | Window, listener: (e: TouchEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTransitionCancel(target: Document | HTMLElement | Window | Element, listener: (e: TransitionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTransitionEnd(target: Document | HTMLElement | Window | Element, listener: (e: TransitionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTransitionRun(target: Document | HTMLElement | Window | Element, listener: (e: TransitionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTransitionStart(target: Document | HTMLElement | Window | Element, listener: (e: TransitionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onVisibilityChange(target: Document, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onWheel(target: Document | Element | Window, listener: (e: WheelEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAuxClick(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onBlur(target: Element | Window | Document, listener: (e: FocusEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onClick(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onCompositionEnd(target: Element | Document | Window, listener: (e: CompositionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onCompositionStart(target: Element | Document | Window, listener: (e: CompositionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onCompositionUpdate(target: Element | Document | Window, listener: (e: CompositionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onContextMenu(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDblClick(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: Element | Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onFocusIn(target: Element | Document | Window, listener: (e: FocusEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onFocusOut(target: Element | Document | Window, listener: (e: FocusEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onFocus(target: Element | Window | Document, listener: (e: FocusEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseDown(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseEnter(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseLeave(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseMove(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseOut(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseOver(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMouseUp(target: Element | Document | Window, listener: (e: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onSelect(target: Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: EventSource, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onOpen(target: EventSource | WebSocket, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onAbort(target: FileReader | XMLHttpRequest, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: FileReader | XMLHttpRequest, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onLoadEnd(target: FileReader, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onLoadStart(target: FileReader | XMLHttpRequest, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onLoad(target: FileReader | XMLHttpRequest, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onProgress(target: FileReader | XMLHttpRequest | Document | Window | Element, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onWebGLContextCreationError(target: HTMLCanvasElement, listener: (e: WebGLContextEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onWebGLContextLost(target: HTMLCanvasElement, listener: (e: WebGLContextEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onWebGLContextRestored(target: HTMLCanvasElement, listener: (e: WebGLContextEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onToggle(target: HTMLDetailsElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onBeforeInput(target: HTMLElement | Document | Window | Element, listener: (e: InputEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onChange(target: HTMLElement | TextTrackList | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onInput(target: HTMLElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onFormData(target: HTMLFormElement | Document | Window | Element, listener: (e: FormDataEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onReset(target: HTMLFormElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSubmit(target: HTMLFormElement | Document | Window | Element, listener: (e: SubmitEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onInvalid(target: HTMLInputElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSearch(target: HTMLInputElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onCanPlayThrough(target: HTMLMediaElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onCanPlay(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onDurationChange(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onEmptied(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: HTMLMediaElement | IDBTransaction | IDBRequest | RTCDataChannel | RTCDtlsTransport | WebSocket, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onLoadedData(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onLoadedMetadata(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onLoadStart(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onPause(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onPlaying(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onPlay(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onProgress(target: HTMLMediaElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onRateChange(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSeeked(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSeeking(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onStalled(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSuspend(target: HTMLMediaElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onTimeUpdate(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onVolumeChange(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onWaiting(target: HTMLMediaElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSlotChange(target: HTMLSlotElement | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onCueChange(target: HTMLTrackElement | TextTrack | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onEnterPictureInPicture(target: HTMLVideoElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onLeavePictureInPicture(target: HTMLVideoElement, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onClose(target: IDBDatabase | RTCDataChannel | Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onVersionChange(target: IDBDatabase, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onBlocked(target: IDBOpenDBRequest, listener: (e: IDBVersionChangeEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onUpdatedNeeded(target: IDBOpenDBRequest, listener: (e: IDBVersionChangeEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onSuccess(target: IDBRequest, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onComplete(target: IDBTransaction, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onDeviceChange(target: MediaDevices, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: MediaRecorder, listener: (e: MediaRecorderErrorEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAddTrack(target: MediaStream, listener: (e: MediaStreamTrackEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onRemoveTrack(target: MediaStream, listener: (e: MediaStreamTrackEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMute(target: MediaStreamTrack, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onUnMute(target: MediaStreamTrack, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onComplete(target: OfflineAudioContext, listener: (e: OfflineAudioCompletionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onResourceTimingBufferFull(target: Performance, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onResize(target: PictureInPictureWindow, listener: (e: PictureInPictureWindow) => any, options?: boolean | AddEventListenerOptions): void;
  onBufferedAmountLow(target: RTCDataChannel, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onClosing(target: RTCDataChannel, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onOpen(target: RTCDataChannel, listener: (e: RTCDataChannelEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onToneChange(target: RTCDTMFSender, listener: (e: RTCDTMFToneChangeEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onGatheringStateChange(target: RTCIceTransport, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSelectedCandidatePairChange(target: RTCIceTransport, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onStateChange(target: RTCIceTransport, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onConnectionStateChange(target: RTCPeerConnection, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onDataChannel(target: RTCPeerConnection, listener: (e: RTCDataChannelEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onIceCandidateError(target: RTCPeerConnection, listener: (e: RTCPeerConnectionIceErrorEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onIceCandidate(target: RTCPeerConnection, listener: (e: RTCPeerConnectionIceEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onIceConnectionStateChange(target: RTCPeerConnection, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onIceGatheringStateChange(target: RTCPeerConnection, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onNegotiationNeeded(target: RTCPeerConnection, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSignalingStateChange(target: RTCPeerConnection, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onTrack(target: RTCPeerConnection, listener: (e: RTCTrackEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onVoicesChanged(target: SpeechSynthesis, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onBoundary(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onEnd(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisErrorEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onMark(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPause(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onResume(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onStart(target: SpeechSynthesisUtterance, listener: (e: SpeechSynthesisEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAddTrack(target: TextTrackList, listener: (e: TrackEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onRemoveTrack(target: TextTrackList, listener: (e: TrackEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onResize(target: VisualViewport, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onClose(target: WebSocket, listener: (e: CloseEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAfterPrint(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onAppInstalled(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onBeforePrint(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onBeforeUnload(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onDeviceMotion(target: Window, listener: (e: DeviceMotionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onDeviceOrientation(target: Window, listener: (e: DeviceOrientationEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onHashChange(target: Window, listener: (e: HashChangeEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onLanguageChange(target: Window | WindowOrWorkerGlobalScope, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onLoad(target: Window | Document | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onOffline(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onOnline(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onPageHide(target: Window, listener: (e: PageTransitionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPageShow(target: Window, listener: (e: PageTransitionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onPopState(target: Window, listener: (e: PopStateEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onRejectionHandled(target: Window, listener: (e: PromiseRejectionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onResize(target: Window | Document | Element, listener: (e: UIEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onStorage(target: Window, listener: (e: StorageEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onUnhanldedRejection(target: Window, listener: (e: PromiseRejectionEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onUnload(target: Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onLoadEnded(target: XMLHttpRequest, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onTimeout(target: XMLHttpRequest, listener: (e: ProgressEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onAbort(target: Document | Window | Element, listener: (e: UIEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onCanplayThrough(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onError(target: Document, listener: (e: ErrorEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onInput(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSecurityPolicyViolation(target: Document | Window | Element, listener: (e: SecurityPolicyViolationEvent) => any, options?: boolean | AddEventListenerOptions): void;
  onSelect(target: Document | Window, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onSuspEnd(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onWebkitAnimationEnd(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onWebkitAnimationIteration(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onWebkitAnimationStart(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
  onWebkitTransitionEnd(target: Document | Window | Element, listener: (e: Event) => any, options?: boolean | AddEventListenerOptions): void;
}

export const elements: {
  [key: string]: any;
  html: HTMLHtmlElement;
  base: HTMLBaseElement;
  head: HTMLHeadElement;
  link: HTMLLinkElement;
  meta: HTMLMetaElement;
  style: HTMLStyleElement;
  title: HTMLTitleElement;
  body: HTMLBodyElement;
  address: HTMLElement;
  article: HTMLElement;
  aside: HTMLElement;
  footer: HTMLElement;
  header: HTMLElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  main: HTMLElement;
  nav: HTMLElement;
  section: HTMLElement;
  blockquote: HTMLQuoteElement;
  dd: HTMLElement;
  div: HTMLDivElement;
  dl: HTMLElement;
  dt: HTMLElement;
  figcaption: HTMLElement;
  figure: HTMLElement;
  hr: HTMLHRElement;
  li: HTMLLIElement;
  ol: HTMLOListElement;
  p: HTMLParagraphElement;
  pre: HTMLPreElement;
  ul: HTMLUListElement;
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  b: HTMLElement;
  bdi: HTMLElement;
  bdo: HTMLElement;
  br: HTMLBRElement;
  cite: HTMLElement;
  code: HTMLElement;
  data: HTMLDataElement;
  dfn: HTMLElement;
  em: HTMLElement;
  i: HTMLElement;
  kbd: HTMLElement;
  mark: HTMLElement;
  q: HTMLQuoteElement;
  rp: HTMLElement;
  rt: HTMLElement;
  ruby: HTMLElement;
  s: HTMLElement;
  samp: HTMLElement;
  small: HTMLElement;
  span: HTMLSpanElement;
  strong: HTMLElement;
  sub: HTMLElement;
  sup: HTMLElement;
  time: HTMLTimeElement;
  u: HTMLElement;
  var: HTMLElement;
  wbr: HTMLElement;
  area: HTMLAreaElement;
  audio: HTMLAudioElement;
  img: HTMLImageElement;
  map: HTMLMapElement;
  track: HTMLTrackElement;
  video: HTMLVideoElement;
  embed: HTMLEmbedElement;
  iframe: HTMLIFrameElement;
  object: HTMLObjectElement;
  param: HTMLParamElement;
  picture: HTMLPictureElement;
  source: HTMLSourceElement;
  canvas: HTMLCanvasElement;
  noscript: HTMLElement;
  script: HTMLScriptElement;
  del: HTMLModElement;
  ins: HTMLModElement;
  caption: HTMLTableCaptionElement;
  col: HTMLTableColElement;
  colgroup: HTMLTableColElement;
  table: HTMLTableElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableCellElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableCellElement;
  thead: HTMLTableSectionElement;
  tr: HTMLTableRowElement;
  button: HTMLButtonElement;
  datalist: HTMLDataListElement;
  fieldset: HTMLFieldSetElement;
  form: HTMLFormElement;
  input: HTMLInputElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  meter: HTMLMeterElement;
  optgroup: HTMLOptGroupElement;
  option: HTMLOptionElement;
  output: HTMLOutputElement;
  progress: HTMLProgressElement;
  select: HTMLSelectElement;
  textarea: HTMLTextAreaElement;
  details: HTMLDetailsElement;
  menu: HTMLMenuElement;
  summary: HTMLElement;
  slot: HTMLSlotElement;
  template: HTMLTemplateElement;
}

interface HtmlShortcuts {
  class?: string;
  text?: string;
  children?: HTMLElement[];
}

interface SvgShortcuts {
  class?: string;
  children?: HTMLElement[];
}

type ExistingEventHandlers = GlobalEventHandlers & DocumentAndElementEventHandlers;

type Camel<T> = Omit<Partial<T> & HtmlShortcuts & CamelDocumentAndElementEventHandlers & CamelGlobalEventHandlers, keyof ExistingEventHandlers> | string | number | HTMLElement[];
type SvgCamel<T> = Omit<Partial<T> & SvgShortcuts & CamelDocumentAndElementEventHandlers & CamelGlobalEventHandlers, keyof ExistingEventHandlers> | HTMLElement[];

export const html: {
  [key: string]: any;
  html: (properties?: Camel<HTMLHtmlElement>) => HTMLHtmlElement;
  base: (properties?: Camel<HTMLBaseElement>) => HTMLBaseElement;
  head: (properties?: Camel<HTMLHeadElement>) => HTMLHeadElement;
  link: (properties?: Camel<HTMLLinkElement>) => HTMLLinkElement;
  meta: (properties?: Camel<HTMLMetaElement>) => HTMLMetaElement;
  style: (properties?: Camel<HTMLStyleElement>) => HTMLStyleElement;
  title: (properties?: Camel<HTMLTitleElement>) => HTMLTitleElement;
  body: (properties?: Omit<Camel<HTMLBodyElement> & CamelWindowEventHandlers, keyof WindowEventHandlers>) => HTMLBodyElement;
  address: (properties?: Camel<HTMLElement>) => HTMLElement;
  article: (properties?: Camel<HTMLElement>) => HTMLElement;
  aside: (properties?: Camel<HTMLElement>) => HTMLElement;
  footer: (properties?: Camel<HTMLElement>) => HTMLElement;
  header: (properties?: Camel<HTMLElement>) => HTMLElement;
  h1: (properties?: Camel<HTMLHeadingElement>) => HTMLHeadingElement;
  h2: (properties?: Camel<HTMLHeadingElement>) => HTMLHeadingElement;
  h3: (properties?: Camel<HTMLHeadingElement>) => HTMLHeadingElement;
  h4: (properties?: Camel<HTMLHeadingElement>) => HTMLHeadingElement;
  h5: (properties?: Camel<HTMLHeadingElement>) => HTMLHeadingElement;
  h6: (properties?: Camel<HTMLHeadingElement>) => HTMLHeadingElement;
  main: (properties?: Camel<HTMLElement>) => HTMLElement;
  nav: (properties?: Camel<HTMLElement>) => HTMLElement;
  section: (properties?: Camel<HTMLElement>) => HTMLElement;
  blockquote: (properties?: Camel<HTMLQuoteElement>) => HTMLQuoteElement;
  dd: (properties?: Camel<HTMLElement>) => HTMLElement;
  div: (properties?: Camel<HTMLDivElement>) => HTMLDivElement;
  dl: (properties?: Camel<HTMLElement>) => HTMLElement;
  dt: (properties?: Camel<HTMLElement>) => HTMLElement;
  figcaption: (properties?: Camel<HTMLElement>) => HTMLElement;
  figure: (properties?: Camel<HTMLElement>) => HTMLElement;
  hr: (properties?: Camel<HTMLHRElement>) => HTMLHRElement;
  li: (properties?: Camel<HTMLLIElement>) => HTMLLIElement;
  ol: (properties?: Camel<HTMLOListElement>) => HTMLOListElement;
  p: (properties?: Camel<HTMLParagraphElement>) => HTMLParagraphElement;
  pre: (properties?: Camel<HTMLPreElement>) => HTMLPreElement;
  ul: (properties?: Camel<HTMLUListElement>) => HTMLUListElement;
  a: (properties?: Camel<HTMLAnchorElement>) => HTMLAnchorElement;
  abbr: (properties?: Camel<HTMLElement>) => HTMLElement;
  b: (properties?: Camel<HTMLElement>) => HTMLElement;
  bdi: (properties?: Camel<HTMLElement>) => HTMLElement;
  bdo: (properties?: Camel<HTMLElement>) => HTMLElement;
  br: (properties?: Camel<HTMLBRElement>) => HTMLBRElement;
  cite: (properties?: Camel<HTMLElement>) => HTMLElement;
  code: (properties?: Camel<HTMLElement>) => HTMLElement;
  data: (properties?: Camel<HTMLDataElement>) => HTMLDataElement;
  dfn: (properties?: Camel<HTMLElement>) => HTMLElement;
  em: (properties?: Camel<HTMLElement>) => HTMLElement;
  i: (properties?: Camel<HTMLElement>) => HTMLElement;
  kbd: (properties?: Camel<HTMLElement>) => HTMLElement;
  mark: (properties?: Camel<HTMLElement>) => HTMLElement;
  q: (properties?: Camel<HTMLQuoteElement>) => HTMLQuoteElement;
  rp: (properties?: Camel<HTMLElement>) => HTMLElement;
  rt: (properties?: Camel<HTMLElement>) => HTMLElement;
  ruby: (properties?: Camel<HTMLElement>) => HTMLElement;
  s: (properties?: Camel<HTMLElement>) => HTMLElement;
  samp: (properties?: Camel<HTMLElement>) => HTMLElement;
  small: (properties?: Camel<HTMLElement>) => HTMLElement;
  span: (properties?: Camel<HTMLSpanElement>) => HTMLSpanElement;
  strong: (properties?: Camel<HTMLElement>) => HTMLElement;
  sub: (properties?: Camel<HTMLElement>) => HTMLElement;
  sup: (properties?: Camel<HTMLElement>) => HTMLElement;
  time: (properties?: Camel<HTMLTimeElement>) => HTMLTimeElement;
  u: (properties?: Camel<HTMLElement>) => HTMLElement;
  var: (properties?: Camel<HTMLElement>) => HTMLElement;
  wbr: (properties?: Camel<HTMLElement>) => HTMLElement;
  area: (properties?: Camel<HTMLAreaElement>) => HTMLAreaElement;
  audio: (properties?: Omit<Camel<HTMLAudioElement> & CamelAudioEventHandlers, keyof ExistingAudioEventHandlers>) => HTMLAudioElement;
  img: (properties?: Camel<HTMLImageElement>) => HTMLImageElement;
  map: (properties?: Camel<HTMLMapElement>) => HTMLMapElement;
  track: (properties?: Camel<HTMLTrackElement>) => HTMLTrackElement;
  video: (properties?: Omit<Camel<HTMLVideoElement> & CamelVideoEventHandlers, keyof ExistingVideoEventHandlers>) => HTMLVideoElement;
  embed: (properties?: Camel<HTMLEmbedElement>) => HTMLEmbedElement;
  iframe: (properties?: Camel<HTMLIFrameElement>) => HTMLIFrameElement;
  object: (properties?: Camel<HTMLObjectElement>) => HTMLObjectElement;
  param: (properties?: Camel<HTMLParamElement>) => HTMLParamElement;
  picture: (properties?: Camel<HTMLPictureElement>) => HTMLPictureElement;
  source: (properties?: Camel<HTMLSourceElement>) => HTMLSourceElement;
  canvas: (properties?: Camel<HTMLCanvasElement>) => HTMLCanvasElement;
  noscript: (properties?: Camel<HTMLElement>) => HTMLElement;
  script: (properties?: Camel<HTMLScriptElement>) => HTMLScriptElement;
  del: (properties?: Camel<HTMLModElement>) => HTMLModElement;
  ins: (properties?: Camel<HTMLModElement>) => HTMLModElement;
  caption: (properties?: Camel<HTMLTableCaptionElement>) => HTMLTableCaptionElement;
  col: (properties?: Camel<HTMLTableColElement>) => HTMLTableColElement;
  colgroup: (properties?: Camel<HTMLTableColElement>) => HTMLTableColElement;
  table: (properties?: Camel<HTMLTableElement>) => HTMLTableElement;
  tbody: (properties?: Camel<HTMLTableSectionElement>) => HTMLTableSectionElement;
  td: (properties?: Camel<HTMLTableCellElement>) => HTMLTableCellElement;
  tfoot: (properties?: Camel<HTMLTableSectionElement>) => HTMLTableSectionElement;
  th: (properties?: Camel<HTMLTableCellElement>) => HTMLTableCellElement;
  thead: (properties?: Camel<HTMLTableSectionElement>) => HTMLTableSectionElement;
  tr: (properties?: Camel<HTMLTableRowElement>) => HTMLTableRowElement;
  button: (properties?: Camel<HTMLButtonElement>) => HTMLButtonElement;
  datalist: (properties?: Camel<HTMLDataListElement>) => HTMLDataListElement;
  fieldset: (properties?: Camel<HTMLFieldSetElement>) => HTMLFieldSetElement;
  form: (properties?: Camel<HTMLFormElement>) => HTMLFormElement;
  input: (properties?: Camel<HTMLInputElement>) => HTMLInputElement;
  label: (properties?: Camel<HTMLLabelElement>) => HTMLLabelElement;
  legend: (properties?: Camel<HTMLLegendElement>) => HTMLLegendElement;
  meter: (properties?: Camel<HTMLMeterElement>) => HTMLMeterElement;
  optgroup: (properties?: Camel<HTMLOptGroupElement>) => HTMLOptGroupElement;
  option: (properties?: Camel<HTMLOptionElement>) => HTMLOptionElement;
  output: (properties?: Camel<HTMLOutputElement>) => HTMLOutputElement;
  progress: (properties?: Camel<HTMLProgressElement>) => HTMLProgressElement;
  select: (properties?: Camel<HTMLSelectElement>) => HTMLSelectElement;
  textarea: (properties?: Camel<HTMLTextAreaElement>) => HTMLTextAreaElement;
  details: (properties?: Camel<HTMLDetailsElement>) => HTMLDetailsElement;
  menu: (properties?: Camel<HTMLMenuElement>) => HTMLMenuElement;
  summary: (properties?: Camel<HTMLElement>) => HTMLElement;
  slot: (properties?: Camel<HTMLSlotElement>) => HTMLSlotElement;
  template: (properties?: Camel<HTMLTemplateElement>) => HTMLTemplateElement;
}

export const svg: {
  [key: string]: any;
  a: (properties?: SvgCamel<SVGAElement>) => SVGAElement;
  animate: (properties?: SvgCamel<SVGAnimateElement>) => SVGAnimateElement;
  animateMotion: (properties?: SvgCamel<SVGAnimateMotionElement>) => SVGAnimateMotionElement;
  animateTransform: (properties?: SvgCamel<SVGAnimateTransformElement>) => SVGAnimateTransformElement;
  circle: (properties?: SvgCamel<SVGCircleElement>) => SVGCircleElement;
  clipPath: (properties?: SvgCamel<SVGClipPathElement>) => SVGClipPathElement;
  defs: (properties?: SvgCamel<SVGDefsElement>) => SVGDefsElement;
  desc: (properties?: SvgCamel<SVGDescElement>) => SVGDescElement;
  ellipse: (properties?: SvgCamel<SVGEllipseElement>) => SVGEllipseElement;
  feBlend: (properties?: SvgCamel<SVGFEBlendElement>) => SVGFEBlendElement;
  feColorMatrix: (properties?: SvgCamel<SVGFEColorMatrixElement>) => SVGFEColorMatrixElement;
  feComponentTransfer: (properties?: SvgCamel<SVGFEComponentTransferElement>) => SVGFEComponentTransferElement;
  feComposite: (properties?: SvgCamel<SVGFECompositeElement>) => SVGFECompositeElement;
  feConvolveMatrix: (properties?: SvgCamel<SVGFEConvolveMatrixElement>) => SVGFEConvolveMatrixElement;
  feDiffuseLighting: (properties?: SvgCamel<SVGFEDiffuseLightingElement>) => SVGFEDiffuseLightingElement;
  feDisplacementMap: (properties?: SvgCamel<SVGFEDisplacementMapElement>) => SVGFEDisplacementMapElement;
  feDistantLight: (properties?: SvgCamel<SVGFEDistantLightElement>) => SVGFEDistantLightElement;
  feDropShadow: (properties?: SvgCamel<SVGFEDropShadowElement>) => SVGFEDropShadowElement;
  feFlood: (properties?: SvgCamel<SVGFEFloodElement>) => SVGFEFloodElement;
  feFuncA: (properties?: SvgCamel<SVGFEFuncAElement>) => SVGFEFuncAElement;
  feFuncB: (properties?: SvgCamel<SVGFEFuncBElement>) => SVGFEFuncBElement;
  feFuncG: (properties?: SvgCamel<SVGFEFuncGElement>) => SVGFEFuncGElement;
  feFuncR: (properties?: SvgCamel<SVGFEFuncRElement>) => SVGFEFuncRElement;
  feGaussianBlur: (properties?: SvgCamel<SVGFEGaussianBlurElement>) => SVGFEGaussianBlurElement;
  feImage: (properties?: SvgCamel<SVGFEImageElement>) => SVGFEImageElement;
  feMerge: (properties?: SvgCamel<SVGFEMergeElement>) => SVGFEMergeElement;
  feMergeNode: (properties?: SvgCamel<SVGFEMergeNodeElement>) => SVGFEMergeNodeElement;
  feMorphology: (properties?: SvgCamel<SVGFEMorphologyElement>) => SVGFEMorphologyElement;
  feOffset: (properties?: SvgCamel<SVGFEOffsetElement>) => SVGFEOffsetElement;
  fePointLight: (properties?: SvgCamel<SVGFEPointLightElement>) => SVGFEPointLightElement;
  feSpecularLighting: (properties?: SvgCamel<SVGFESpecularLightingElement>) => SVGFESpecularLightingElement;
  feSpotLight: (properties?: SvgCamel<SVGFESpotLightElement>) => SVGFESpotLightElement;
  feTile: (properties?: SvgCamel<SVGFETileElement>) => SVGFETileElement;
  feTurbulence: (properties?: SvgCamel<SVGFETurbulenceElement>) => SVGFETurbulenceElement;
  filter: (properties?: SvgCamel<SVGFilterElement>) => SVGFilterElement;
  foreignObject: (properties?: SvgCamel<SVGForeignObjectElement>) => SVGForeignObjectElement;
  g: (properties?: SvgCamel<SVGGElement>) => SVGGElement;
  image: (properties?: SvgCamel<SVGImageElement>) => SVGImageElement;
  line: (properties?: SvgCamel<SVGLineElement>) => SVGLineElement;
  linearGradient: (properties?: SvgCamel<SVGLinearGradientElement>) => SVGLinearGradientElement;
  marker: (properties?: SvgCamel<SVGMarkerElement>) => SVGMarkerElement;
  mask: (properties?: SvgCamel<SVGMaskElement>) => SVGMaskElement;
  metadata: (properties?: SvgCamel<SVGMetadataElement>) => SVGMetadataElement;
  mpath: (properties?: SvgCamel<SVGMPathElement>) => SVGMPathElement;
  path: (properties?: SvgCamel<SVGPathElement>) => SVGPathElement;
  pattern: (properties?: SvgCamel<SVGPatternElement>) => SVGPatternElement;
  polygon: (properties?: SvgCamel<SVGPolygonElement>) => SVGPolygonElement;
  polyline: (properties?: SvgCamel<SVGPolylineElement>) => SVGPolylineElement;
  radialGradient: (properties?: SvgCamel<SVGRadialGradientElement>) => SVGRadialGradientElement;
  rect: (properties?: SvgCamel<SVGRectElement>) => SVGRectElement;
  script: (properties?: SvgCamel<SVGScriptElement>) => SVGScriptElement;
  set: (properties?: SvgCamel<SVGSetElement>) => SVGSetElement;
  stop: (properties?: SvgCamel<SVGStopElement>) => SVGStopElement;
  style: (properties?: SvgCamel<SVGStyleElement>) => SVGStyleElement;
  svg: (properties?: SvgCamel<SVGSVGElement>) => SVGSVGElement;
  switch: (properties?: SvgCamel<SVGSwitchElement>) => SVGSwitchElement;
  symbol: (properties?: SvgCamel<SVGSymbolElement>) => SVGSymbolElement;
  text: (properties?: SvgCamel<SVGTextElement>) => SVGTextElement;
  textPath: (properties?: SvgCamel<SVGTextPathElement>) => SVGTextPathElement;
  title: (properties?: SvgCamel<SVGTitleElement>) => SVGTitleElement;
  tspan: (properties?: SvgCamel<SVGTSpanElement>) => SVGTSpanElement;
  use: (properties?: SvgCamel<SVGUseElement>) => SVGUseElement;
  view: (properties?: SvgCamel<SVGViewElement>) => SVGViewElement;
}
