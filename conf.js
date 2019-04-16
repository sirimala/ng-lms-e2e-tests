exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['app/app-spec.js', 'auth-e2e/auth-spec.js']
};
