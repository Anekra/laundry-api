const controllers = require('../controllers');

module.exports = (app) => {
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
  app.post(
    '/api/apparel',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.apparelController.insertApparel
  );
  app.get(
    '/api/apparel',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.apparelController.getAllApparels
  );
  app.get(
    '/api/apparel/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.apparelController.getApparelById
  );
  app.put(
    '/api/apparel/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.apparelController.updateApparel
  );
  app.delete(
    '/api/apparel/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.apparelController.deleteApparelById
  );

  // Laundry Service
  app.post(
    '/api/service',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.serviceController.insertApparel
  );
  app.get(
    '/api/service',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.serviceController.getAllServices
  );
  app.get(
    '/api/service/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.serviceController.getServiceById
  );
  app.put(
    '/api/service/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.serviceController.updateService
  );
  app.delete(
    '/api/service/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.serviceController.deleteServiceById
  );
  
};
