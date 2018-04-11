
let TaskController = require("../controllers/TaskController.js");

module.exports = (app)=>{

  app.get("/",TaskController.all);
  app.post("/tasks",TaskController.new_task);
  app.delete("/tasks/:id",TaskController.remove_task);
  app.get("/tasks/:id",TaskController.task);
  app.put("/tasks/:id",TaskController.mod_task);

}
