const process = {
  isStarted: false,
  requestCount: 0,
};

const requestMatch = count => {
  return new Promise(res => {
    setTimeout(() => {
      res(count > 6);
    }, 500);
  });
};

export const startMatchPolling = async () => {
  process.isStarted = true;
  if (process.isStarted) {
    process.requestCount += 1;
    const metches = await requestMatch(process.requestCount);
    console.log('metches->', metches);
    setTimeout(startMatchPolling, 1000);
  }
};

export const stopMatchPolling = () => {
  process.isStarted = false;
};
