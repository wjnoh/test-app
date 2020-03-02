function getUser(id) {
  if (id <= 0) throw new Error('Invalid ID');
  return {
    id,
    email: `user${id}@test.com`
  };
}

// toBe Matcher는 primitive type 검증에
test('1 is 1', () => {
  expect(1).toBe(1);
});

// toEqual Matcher는 객체 검증에
test('return a user object', () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: 'user1@test.com'
  });
});

// toBeFalsy, toBeTruthy
test('number 0 is falsy but string 0 is truthy', () => {
  expect(0).toBeFalsy();
  expect('0').toBeTruthy();
});

// toHaveLength, toContain, 불만족 테스트에는 not
test('array', () => {
  const colors = ['Red', 'Yellow', 'Blue'];
  expect(colors).toHaveLength(3);
  expect(colors).toContain('Yellow');
  expect(colors).not.toContain('Green');
});

// 정규식 검증은 toMatch
test('string', () => {
  expect(getUser(1).email).toBe('user1@test.com');
  expect(getUser(1).email).toMatch(/.*test.com$/);
});

// 예외 발생 여부 테스트할 때는 toThrow, 파라미터 넣으면 예외 메시지 비교(정규식도 가능)
// expect 함수에 넘기는 검증 대상을 함수로 한 번 감싸줘야 함
test('throw when id is non negative', () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow('Invalid ID');
});