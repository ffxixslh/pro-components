/**
 * 延时函数
 * @param time 延时时间（毫秒）
 * @returns
 */
function waitTime(time: number = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export default waitTime;
