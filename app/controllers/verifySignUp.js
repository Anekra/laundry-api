import { User } from '../models';
import { roles as _roles } from '../config/configRoles';
import { Sequelize } from '../models/index';
const Op = Sequelize.Op;
const roles = _roles;

export async function checkDuplicateUserEmail(req, res, next) {
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
        message: 'Error',
        errors: 'Email is already taken!'
      });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      auth: false,
      message: 'Error',
      errors: 'Server error'
    });
  }
}
export async function checkRolesExisted(req, res, next) {
  const invalidRoles = req.body.roles.filter(
    (role) => !roles.includes(role.toUpperCase())
  );

  if (invalidRoles.length > 0) {
    return res.status(400).send({
      auth: false,
      email: req.body.email,
      message: 'Error',
      errors: `Does NOT exist Role(s): ${invalidRoles.join(', ')}`
    });
  }

  next();
}
