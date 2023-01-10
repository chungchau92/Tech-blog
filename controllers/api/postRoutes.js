const router = require("express").Router();

const { Post } = require("../../models");

const withAuth = require('../../utils/auth');
const { route } = require("./userRoutes");

router.post("")