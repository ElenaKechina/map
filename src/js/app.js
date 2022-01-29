const map = new Map([
  [1, 'error1'],
  [2, 'error2'],
  [3, 'error3'],
]);

class ErrorRepository {
  static translate(code) {
    if (!map.has(code)) {
      return 'Unknown error';
    }

    return map.get(code);
  }
}

export default ErrorRepository;
