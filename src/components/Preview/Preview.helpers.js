export const getSpringConfigForLight = (
  [onProps, offProps, brightProps],
  status
) => {
  switch (status) {
    case 'off':
      return {
        to: offProps,
        immediate: true,
        reset: false,
      };

    case 'on': {
      return {
        to: onProps,
        immediate: true,
        reset: false,
      };
    }

    case 'flash': {
      return {
        from: brightProps,
        to: onProps,
        immediate: false,
        reset: false,
      };
    }

    case 'fade': {
      return {
        from: brightProps,
        to: offProps,
        immediate: false,
        reset: false,
      };
    }

    default:
      throw new Error('Unrecognized status: ' + status);
  }
};

export const findMostRecentEventInTrack = (
  events,
  currentBeat,
  processingDelayInBeats
) => {
  for (let i = events.length - 1; i >= 0; i--) {
    const event = events[i];
    if (event.beatNum < currentBeat + processingDelayInBeats) {
      return event;
    }
  }

  return null;
};
