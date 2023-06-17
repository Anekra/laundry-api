const controllers = require('../controllers');

module.exports = function (app) {
  // User Auth
  app.post(
    '/api/auth/signup',
    [
      controllers.verifySignUp.checkDuplicateUserEmail,
      controllers.verifySignUp.checkRolesExisted
    ],
    controllers.verifySign.signUp
  );

  app.post('/api/auth/signin', controllers.verifySign.signIn);

  // Apparel
  // app.get(
  //   '/api/apparel',
  //   [controllers.verifyJwtToken.verifyToken],
  //   controllers.status.listStatusUser
  // );
};
