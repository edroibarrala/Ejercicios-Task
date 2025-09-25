const {Router} = require('express');
const controller = require('../controllers/tasks.controler');

const router = Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);
router.put("/:id", controller.updateTask);

module.exports = router;
