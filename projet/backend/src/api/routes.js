const express = require("express");
const taskDAO = require("../dal/TaskDAO");
const taskController = require("./TaskController");
const bodyParser = require("body-parser");

const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/",router);




taskDAO.doConnect();

router.get("/", taskController.sendIndexFile);
router.get("/tasks", taskController.sendAllTask);
router.get("/tasks/:id", taskController.sendTaskById);
router.post("/tasks/addTask", taskController.postNewTask);
router.put("/tasks/updateTask/:id", taskController.updateTaskById);
router.delete("/tasks/deleteTask/:id", taskController.deleteTaskById);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports=router;
