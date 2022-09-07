import { DependencyList, useEffect, useRef } from "react";

export const useEffectSkipFirstRender = (
  amountOfRender: number,
  callback: () => void,
  deps: DependencyList
): void => {
  const isFirstMounted = useRef(0);
  useEffect(() => {
    if (isFirstMounted.current < amountOfRender) {
      isFirstMounted.current++;
      return;
    }
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
