import { verify } from 'jsonwebtoken';
import { secret } from '../config/configRoles.js';
import { User } from '../models';

export async function verifyToken(req, res, next) {
  const tokenHeader = req.headers['x-access-token'];

  if (tokenHeader.split(' ')[0] !== 'Bearer') {
    return res.status(500).send({
      auth: false,
      message: 'Error',
      errors: 'Incorrect token format'
    });
  }

  const token = tokenHeader.split(' ')[1];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'Error',
      errors: 'No token provided'
    });
  }

  try {
    const decoded = verify(token, secret);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(500).send({
      auth: false,
      message: 'Error',
      errors: err
    });
  }
}
export async function isAdmin(req, res, next) {
  try {
    const user = await User.findByPk(req.userId);
    const roles = await user.getRoles();
    for (let i = 0; i < roles.length; i++) {
      console.log(roles[i].name);
      if (roles[i].name.toLowerCase() === 'admin') {
        next();
        return;
      }
    }
    res.status(403).send({
      auth: false,
      error: 'Error',
      message: 'Require Admin Role'
    });
  } catch (err) {
    res.status(500).send({
      auth: false,
      message: 'Error',
      errors: err
    });
  }
}
