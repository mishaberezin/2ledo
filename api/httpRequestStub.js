export default function createRequest(result, timeout = 200) {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), timeout);
  });
}
