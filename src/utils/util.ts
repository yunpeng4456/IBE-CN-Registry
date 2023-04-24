// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}


export const debounce = (func: any, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0;
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  const cancel = () => {
    if (timer) clearTimeout(timer);
  };
  const debounced = (...args: any[]) => {
    cancel();
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
  debounced.cancel = cancel;
  return debounced;
};
