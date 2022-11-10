const PMController = require("../controllers/pm.controllers");

module.exports = app => {
    app.get('/pm', PMController.findAllPMs);
    app.get('/pm/:id', PMController.findOnePM);
    app.post('/pm', PMController.createPM);
    app.put('/pm/:id', PMController.updatePM);
    app.delete('/pm/:id', PMController.deletePM);
}