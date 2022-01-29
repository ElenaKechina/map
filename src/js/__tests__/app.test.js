import ErrorRepository from '../app';

describe('Class ErrorRepository:', () => {
  test('should return "Unknown error"', () => {
    expect(ErrorRepository.translate(0)).toEqual('Unknown error');
    expect(ErrorRepository.translate(5)).toEqual('Unknown error');
    expect(ErrorRepository.translate('1')).toEqual('Unknown error');
  });

  test('should return description error', () => {
    expect(ErrorRepository.translate(1)).toEqual('error1');
  });
});
