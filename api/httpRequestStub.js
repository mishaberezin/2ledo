export default function createRequest(result, timeout = 300) {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), timeout);
  });
}
