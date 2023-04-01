import { useEffect, useRef, useState } from 'react';

const useConfirm = (message: string, onConfirm: () => void, onReject: () => void) => {
  if (!onConfirm || typeof onConfirm !== 'function') return;
  if (onReject && typeof onReject !== 'function') return;

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onReject();
    }
  };

  return confirmAction;
};

export default useConfirm;
