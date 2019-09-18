export default function createRequest(result) {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), 200);
  });
}
