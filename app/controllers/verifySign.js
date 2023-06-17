const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/index');
const User = require('../models').User;
const Op = db.Sequelize.Op;
const config = require('../config/configRoles');

module.exports = {
  async signUp(req, res) {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      });

      const roles = await Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      });

      await user.setRoles(roles);

      res.status(200).send({
        auth: true,
        id: req.body.id,
        message: 'User registered successfully!',
        errors: null
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        auth: false,
        id: req.body.id,
        message: 'Error',
        errors: err
      });
    }
  },
  async signIn(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.body.id
        }
      });

      if (!user) {
        return res.status(404).send({
          auth: false,
          id: req.body.id,
          accessToken: null,
          message: 'Error 1',
          errors: 'User Not Found.'
        });
      }

      const passwordIsValid = compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          id: req.body.id,
          accessToken: null,
          message: 'Error 2',
          errors: 'Invalid Password!'
        });
      }

      const token =
        'Bearer ' +
        jwt.sign(
          config.secret,
          { expiresIn: 86400 } // 24h expired
        );

      res.status(200).send({
        auth: true,
        id: req.body.id,
        accessToken: token,
        message: 'Error 3',
        errors: null
      });
    } catch (err) {
      res.status(500).send({
        auth: false,
        id: req.body.id,
        accessToken: null,
        message: err,
        errors: err
      });
    }
  }
};
