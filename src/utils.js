import moment from 'moment';

export function isSameDay(currentMessage = {}, diffMessage = {}) {
  if (!diffMessage.createdAt) {
    return false;
  }
  const currentCreatedAt = moment(currentMessage.createdAt);
  const diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day');
}

export function isSameUser(currentMessage = {}, diffMessage = {}) {
  return !!(diffMessage.user && currentMessage.user && diffMessage.user._id === currentMessage.user._id);
}

export function isExpo() {
  return !!global && (!!global.__exponent || !!global.__expo);
}

export function warnDeprecated(fn) {
  return (...args) => {
    const DEPRECATION_MESSAGE =
    'isSameUser and isSameDay should be imported from the utils module instead of using the props functions';
    // eslint-disable-next-line
    console.warn(DEPRECATION_MESSAGE);
    return fn(...args);
  };
}
