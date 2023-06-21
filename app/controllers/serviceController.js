const Service = require('../models').Service;

module.exports = {
  async insertApparel(req, res) {
    try {
      const service = await Service.create({
        service_name: req.body.service_name,
        service_description: req.body.service_description,
        service_price: req.body.service_price
      });

      return res.status(201).send({
        status: 'Created',
        message: 'Laundry service data inserted successfully.',
        results: service
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error: ${error}`
      });
    }
  },

  async getAllServices(req, res) {
    try {
      const services = await Service.findAll();

      return res.status(200).send({
        status: 'Ok',
        message: 'All laundry services data retrieved successfully.',
        results: services
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error getting all laundry services data: ${error}`
      });
    }
  },

  async getServiceById(req, res) {
    try {
      const service = await Service.findByPk(req.params.id);

      if (!serviceById) {
        res.status(404).send({
          status: 'Request not found',
          message: `Error laundry service data not found: ${error}`
        });
      }

      return res.status(200).send({
        status: 'Ok',
        message: 'Laundry laundry service data retrieved successfully.',
        results: service
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error getting all laundry service data: ${error}`
      });
    }
  },

  async updateService(req, res) {
    try {
      const serviceById = await Service.findByPk(req.params.id);

      if (!serviceById) {
        res.status(404).send({
          status: 'Request not found',
          message: `Error laundry service data not found: ${error}`
        });
      }

      const updatedService = await serviceById.update({
          service_name: req.body.service_name || serviceById.service_name,
          service_description: req.body.service_description || serviceById.service_description,
          service_price: req.body.service_price || serviceById.service_price
        });

      res.status(200).send({
        status: 'Ok',
        message: 'Laundry service data updated successfully.',
        results: updatedService
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error updating laundry service data: ${error}`
      });
    }
  },

  async deleteServiceById(req, res) {
    try {
      const serviceById = await Service.findByPk(req.params.id);

      if (!serviceById) {
        res.status(404).send({
          status: 'Request not found',
          message: `Error laundry service data not found: ${error}`
        });
      }

      res.status(200).send({
        status: 'Ok',
        message: 'Laundry service data deleted successfully.',
        results: serviceById
      });
    } catch (error) {
      res.status(400).send({
        status: 'Bad request',
        message: `Error getting laundry service data: ${error}`
      });
    }
  }
};
