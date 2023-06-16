import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Sequelize } from '../models/index';
import { User } from '../models';
import { Role } from '../models';
import { secret } from '../config/configRoles';
const Op = Sequelize.Op;

export async function signUp(req, res) {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashSync(req.body.password, 8),
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
}
export async function signIn(req, res) {
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

    const passwordIsValid = compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        auth: false,
        id: req.body.id,
        accessToken: null,
        message: 'Error 2',
        errors: 'Invalid Password!'
      });
    }

    const token = 'Bearer ' +
      sign(
        secret, { expiresIn: 86400 } // 24h expired
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
