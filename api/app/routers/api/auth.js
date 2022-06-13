const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/usersCreateSchema');

const controllerHandler = require('../../helpers/controllerHandler');
const authController = require('../../controllers/api/auth');

const router = express.Router();
router
  .route('/register')

/**
     * POST /api/auth/register
     * @summary Create New User
     * @tags Auth
     * @param {User} request.body.required - user info
     * @returns {object} 200 - Utilisateur crée
     */
  .post(validate('body', createSchema), controllerHandler(authController.register));

module.exports = router;
