import { useCallback, useRef, useState } from "react";

type Options = {
  shouldPreventDefault?: boolean;
  delay?: number;
};

type EventType = React.MouseEvent<Element> | React.TouchEvent<Element>;
type Callback = (e: EventType) => void;

// Native preventDefault handler for touchend (DOM event, not React event)
const preventDefault = (event: Event) => {
  const e = event as TouchEvent;
  if (e.touches.length < 2 && e.preventDefault) {
    e.preventDefault();
  }
};

export const useLongPress = (
  onLongPress: Callback,
  onClick: () => void,
  { shouldPreventDefault = true, delay = 300 }: Options = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const target = useRef<EventTarget | null>(null);

  const start = useCallback(
    (event: EventType) => {
      if (shouldPreventDefault && event.cancelable) {
        event.preventDefault();
      }
      if (shouldPreventDefault && event.target) {
        (event.target as Element).addEventListener("touchend", preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }

      timeout.current = setTimeout(() => {
        onLongPress(event); // event is passed here
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (shouldTriggerClick = true) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      if (shouldTriggerClick && !longPressTriggered) {
        onClick(); // event is not needed here
      }

      setLongPressTriggered(false);

      if (shouldPreventDefault && target.current) {
        (target.current as Element).removeEventListener(
          "touchend",
          preventDefault
        );
      }
    },
    [onClick, longPressTriggered, shouldPreventDefault]
  );

  return {
    onMouseDown: (e: React.MouseEvent) => start(e),
    onTouchStart: (e: React.TouchEvent) => start(e),
    onMouseUp: () => clear(),
    onMouseLeave: () => clear(false),
    onTouchEnd: () => clear(),
  };
};
