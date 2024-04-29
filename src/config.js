// config.js
const config = {
    tokenStorageKey: 'jwt_access_token',
    signUpUrl: 'http://localhost:5000/auth/register',
    signInUrl: 'http://localhost:5000/auth/login',
    // signInUrl: 'mock-api/auth/sign-in',
    // signUpUrl: 'mock-api/auth/sign-up',
    tokenRefreshUrl: 'mock-api/auth/refresh',
    getUserUrl: 'mock-api/auth/user',
    updateUserUrl: 'mock-api/auth/user',
    updateTokenFromHeader: true
};

export default config;