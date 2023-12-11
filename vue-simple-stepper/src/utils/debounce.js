let timer = null;

export const debounce = (func) => {
  if (!timer) {
    func();
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, 300);
    return;
  }

  timer = setTimeout(() => {
    func();
    clearTimeout(timer);
    timer = null;
  }, 300);
};
