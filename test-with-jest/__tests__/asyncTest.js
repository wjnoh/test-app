function fetchUser(id, cb) {
  setTimeout(() => {
    console.log('fetch, wait 0.1 sec.');
    const user = {
      id: id,
      name: 'User' + id,
      email: id + '@test.com'
    };
    cb(user);
  }, 100);
}

// 명시적으로 마지막에 done을 호출해 done이 호출되는지 확인한다.
test('fetch a user', done => {
  fetchUser(2, user => {
    expect(user).toEqual({
      id: 2,
      name: 'User2',
      email: '2@test.com'
    });
    done();
  });
});

function fetchPromiseUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('promise, wait 0.1 sec.');
      const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com'
      };
      resolve(user);
    }, 100);
  });
}

// 테스트 함수가 promise를 리턴하면 리턴된 promise가 resolve될 때까지 기다려준다.
test('promise fetch a user', () => {
  return fetchPromiseUser(2).then(user => {
    expect(user).toEqual({
      id: 2,
      name: 'User2',
      email: '2@test.com'
    });
  });
});

// async
test('async fetch a user', async () => {
  const user = await fetchPromiseUser(2);
  expect(user).toEqual({
    id: 2,
    name: 'User2',
    email: '2@test.com'
  });
});