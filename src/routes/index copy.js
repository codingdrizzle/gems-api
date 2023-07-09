//const express = require('express')
//const jwt = require('jsonwebtoken')
//const Admin = require('../models/admin')
//const User = require('../api/user/schema')
//const Complaints = require('../models/complaints')
//const bcrypt = require('bcryptjs')
//const mongoose = require('mongoose')
//const ObjectId = mongoose.Types.ObjectId;

//const router = express.Router()

//router.get('/count-users', async (req, res) => {
//    try {
//        const count = await User.count()
//        res.status(200).json(count)
//    } catch (error) {
//        res.status(500).json({status: 'An error occured, try again.'})
//    }
//})

//router.get('/get-complaints', async (req, res) => {
//    const { cat } = req.query
//    try {
//        const complaints = await Complaints.find({ category: cat }).populate('user').exec();
//        res.status(200).json(complaints)
//    } catch (error) {
//        res.status(500).json({ status: 'An error occured, try again.' })
//    }
//})

//// All PATCH requests
//router.patch('/edit-complaints', async (req, res) => {
//    try {
//        const { id } = req.query
//        const complaints = await Complaints.where({_id: ObjectId(id)}).updateOne(req.body);
//        res.status(200).json(complaints)
//    } catch (error) {
//        res.status(500).json({ status: 'An error occured, try again.' })
//    }
//})



//module.exports = router

const UserRoutes = require('./user.route')

const router = require('express').Router()

UserRoutes(router)

module.exports = router