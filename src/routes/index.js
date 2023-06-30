//const express = require('express')
//const jwt = require('jsonwebtoken')
//const Admin = require('../models/admin')
//const User = require('../api/user/schema')
//const Complaints = require('../models/complaints')
//const bcrypt = require('bcryptjs')
//const mongoose = require('mongoose')
//const ObjectId = mongoose.Types.ObjectId;

//const router = express.Router()

//// All POST requests
//router.post('/auth/login', async (req, res) => {
//    const user = await Admin.findOne({ email: req.body.email })

//    if(user){
//        // Password check
//        const isMatch = await bcrypt.compare(req.body.password, user.password)
//        if(isMatch){
//            const token = jwt.sign({user},  `${process.env.SECRET}`)
//            res.json({status: 'ok', token: token})
//        }else{
//            res.json({message: 'Email or password incorrect.'})
//        }
//    }else{
//        res.json({message: 'User not found.'})
//    }
//})


//router.post('/agents', async (req, res) => {
//    if (!req.body) {
//        res.send('Bad request').status(500)
//    }
//    try {
//        const exists = await Admin.findOne({ email: req.body.email })
//        if (exists) {
//            res.status(405).json({ message: 'User already exists' })
//        } else {
//            const hashed = await bcrypt.hash(req.body.password, 10)
//            req.body.password = hashed
//            const newAdmin = await Admin.create(req.body)
//            res.setHeader('Content-Type', 'application/json')
//            res.status(201).json({ user: newAdmin })
//        }

//    } catch (error) {
//        res.status(500).json({ message: error })
//    }
//})


//// All GET requests
//router.get('/agents', async (req, res) => {
//    const {cat} = req.query
//    try {
//        const agents = await Admin.find({role: 'Agent', affiliate: cat})
//        res.status(200).json(agents)
//    } catch (error) {
//        res.status(500).json({status: 'An error occured, try again.'})
//    }
//})

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

//router.patch('/agents', async (req, res) => {
//    const {id} = req.query
//    try {
//        if(req.body.password) req.body.password = await bcrypt.hash(req.body.password, 10)
//        await Admin.where({ _id: ObjectId(id) }).updateOne(req.body)
//        res.status(200).json({status: 'User account updated successfully'})
//    } catch (error) {
//        res.status(500).json({status: 'Could not update account, try again'})
//    }
//})


//// All DELETE requests
//router.delete('/agents', async (req, res) => {
//    const {id} = req.query
//    try {
//        await Admin.deleteOne({_id : ObjectId(id)})
//        res.status(200).json({status: 'User has been removed.'})
//    } catch (error) {
//        res.status(500).json({status : 'Failed to removed user, try again.'})
//    }
//})


//module.exports = router

const UserRoutes = require('./user-routes')

const router = require('express').Router()

UserRoutes(router)

module.exports = router