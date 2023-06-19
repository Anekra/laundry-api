const User = require('../models').User;
const config = require('../config/configRoles');
const db = require('../models/index');
const Op = db.Sequelize.Op;
const roles = config.roles;

module.exports = {
  async checkDuplicateUserEmail(req, res, next) {
    try {
      const userWithEmail = await User.findOne({
        where: {
          email: {
            [Op.eq]: req.body.email
          }
        },
        attributes: ['id', 'name', 'email', 'password']
      });

      if (userWithEmail) {
        return res.status(400).send({
          auth: false,
          email: req.body.email,
          message: 'Error 1',
          errors: 'Email is already taken!'
        });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(500).send({
        auth: false,
        message: 'Error 2',
        errors: 'Server error'
      });
    }
  },
  async checkRolesExisted(req, res, next) {
    const invalidRoles = req.body.roles.filter(
      (role) => !roles.includes(role.toLowerCase())
    );

    if (invalidRoles.length > 0) {
      return res.status(400).send({
        auth: false,
        email: req.body.email,
        message: 'Error 3',
        errors: `Does NOT exist Role(s): ${invalidRoles.join(', ')}`
      });
    }

    next();
  }
};
