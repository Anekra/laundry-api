const Apparel = require('../models').Apparel;

module.exports = {
  async insertApparel(req, res) {
    try {
      const apparel = await Apparel.create({
        apparel_name: req.body.apparel_name,
        apparel_type: req.body.apparel_type,
        apparel_price: req.body.apparel_price
      });

      return res.status(201).send({
        status: 'Created',
        message: 'Apparel data inserted successfully.',
        results: apparel
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error: ${error}`
      });
    }
  },

  async getAllApparels(req, res) {
    try {
      console.log(typeof Apparel);

      const apparels = await Apparel.findAll();

      return res.status(200).send({
        status: 'Ok',
        message: 'All apparels data retrieved successfully.',
        results: apparels
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error getting all apparels data: ${error}`
      });
    }
  },

  async getApparelById(req, res) {
    try {
      const apparels = await Apparel.findByPk(req.params.id);

      if (!apparelById) {
        res.status(404).send({
          status: 'Request not found',
          message: `Error apparel data not found: ${error}`
        });
      }

      return res.status(200).send({
        status: 'Ok',
        message: 'Apparel data retrieved successfully.',
        results: apparels
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error getting all apparels data: ${error}`
      });
    }
  },

  async updateApparel(req, res) {
    try {
      const apparelById = await Apparel.findByPk(req.params.id);

      if (!apparelById) {
        res.status(404).send({
          status: 'Request not found',
          message: `Error apparel data not found: ${error}`
        });
      }

      const updatedApparel = await apparelById.update({
          apparel_name: req.body.apparel_name || apparelById.apparel_name,
          apparel_type: req.body.apparel_type || apparelById.apparel_type,
          apparel_price: req.body.apparel_price || apparelById.apparel_price
        });

      res.status(200).send({
        status: 'Ok',
        message: 'Apparel data updated successfully.',
        results: updatedApparel
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error updating apparel data: ${error}`
      });
    }
  },

  async deleteApparelById(req, res) {
    try {
      const apparelById = await Apparel.findByPk(req.params.id);

      if (!apparelById) {
        res.status(404).send({
          status: 'Request not found',
          message: `Error apparel data not found: ${error}`
        });
      }

      res.status(200).send({
        status: 'Ok',
        message: 'Apparel data deleted successfully.',
        results: apparelById
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error getting apparel data: ${error}`
      });
    }
  }
};
