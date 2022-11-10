const ProductManager = require("../models/pm.model")

//READ ALL
module.exports.findAllPMs = (req, res) => {
    ProductManager.find()
        .then((allPMs) => {
            res.json(allPMs)
        })
        .catch(err => res.json({ message: 'Something went wrong with finding all PMs', error: err}));
}

//FIND ONE 
module.exports.findOnePM = (req, res) => {
    ProductManager.findOne({_id: req.params.id})
    .then(onePM => res.json(onePM))
    .catch(err => res.json({ message: 'Something went wrong with finding one by id', error: err}))
}

//CREATE
module.exports.createPM = (req, res) => {
    console.log(req.body)
    ProductManager.create(req.body)
    .then(newPM => res.json(newPM))
    .catch(err => res.json({message: 'Something went wrong with creation', error: err}))
}

//UPDATE
module.exports.updatePM = (req, res) => {
    ProductManager.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedPM => res.json(updatedPM))
    .catch(err => res.json({message: 'Something went wrong with updating PM', error: err}))
}

//DELETE
module.exports.deletePM = (req, res) => {
    ProductManager.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'Something went wrong with deletion', error: err}))
}