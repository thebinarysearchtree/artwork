const eventNames = new Set([
  'onEncrypted',
  'onWaitingForKey',
  'onEnterPictureInPicture',
  'onLeavePictureInPicture',
  'onFullScreenChange',
  'onFullScreenError',
  'onPointerLockChange',
  'onPointerLockError',
  'onReadyStateChange',
  'onVisibilityChange',
  'onCopy',
  'onCut',
  'onPaste',
  'onAfterPrint',
  'onBeforePrint',
  'onBeforeUnload',
  'onGamepadConnected',
  'onGamepadDisconnected',
  'onHashChange',
  'onLanguageChange',
  'onMessage',
  'onMessageError',
  'onOffline',
  'onOnline',
  'onPageHide',
  'onPageShow',
  'onPopState',
  'onRejectionHandled',
  'onStorage',
  'onUnhandledRejection',
  'onUnload',
  'onAbort',
  'onAnimationCancel',
  'onAnimationEnd',
  'onAnimationIteration',
  'onAnimationStart',
  'onAuxClick',
  'onBlur',
  'onCanPlay',
  'onCanPlayThrough',
  'onChange',
  'onClick',
  'onClose',
  'onContextMenu',
  'onCueChange',
  'onDblClick',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onDurationChange',
  'onEmptied',
  'onEnded',
  'onError',
  'onFocus',
  'onFormData',
  'onGotPointerCapture',
  'onInput',
  'onInvalid',
  'onKeyDown',
  'onKeyUp',
  'onLoad',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onLostPointerCapture',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onPause',
  'onPlay',
  'onPlaying',
  'onPointerCancel',
  'onPointerDown',
  'onPointerEnter',
  'onPointerLeave',
  'onPointerMove',
  'onPointerOut',
  'onPointerOver',
  'onPointerUp',
  'onProgress',
  'onRateChange',
  'onReset',
  'onResize',
  'onScroll',
  'onSecurityPolicyViolation',
  'onSeeked',
  'onSeeking',
  'onSelect',
  'onSelectionChange',
  'onSelectStart',
  'onSlotChange',
  'onStalled',
  'onSubmit',
  'onSuspend',
  'onTimeUpdate',
  'onToggle',
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
  'onTransitionCancel',
  'onTransitionEnd',
  'onTransitionRun',
  'onTransitionStart',
  'onVolumeChange',
  'onWaiting',
  'onWheel'
]);

const isEvent = (name) => eventNames.has(name);

export default isEvent;
