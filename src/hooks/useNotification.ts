import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react';

const useNotification = (title: string, options?: {}) => {
  if (!('Notification' in window)) return;

  const triggerNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return triggerNotif;
};

export default useNotification;
