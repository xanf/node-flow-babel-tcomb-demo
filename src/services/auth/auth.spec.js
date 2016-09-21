/* eslint-disable import/no-extraneous-dependencies */
import proxyquire from 'proxyquire';

const proxyquireStrict = proxyquire.noCallThru();
const auth = proxyquireStrict('./auth', {
  bcryptjs: {
    compareSync: (a, b) => (a === b),
  },
  '../../models/User': {
    findOne: () => Promise.resolve({ password: 'demo', toJSON() {} }),
  },
});

const { login } = auth;

describe('Auth service', () => {
  it('should contain login function', () => {
    expect(typeof login).toBe('function');
  });

  it('should return Promise', () => {
    expect(typeof (login({ username: 'foo', password: 'bar' }).then)).toBe('function');
  });

  it('should reject on invalid login', () =>
    login({ username: 'demo', password: 'wrongpassword' })
      .then(
        () => { throw new Error('Logged in successfully '); },
        () => {}
      )
  );

  it('should not fail on valid login', () =>
    login({ username: 'demo', password: 'demo' })
  );
});
