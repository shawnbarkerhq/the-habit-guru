import { NOTIFY_USER } from './types';

export const notifyUser = (messageError, messageSuccess) => {
  return {
    type: NOTIFY_USER,
    messageError,
    messageSuccess
  };
};
