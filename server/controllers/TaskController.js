let Task = require("mongoose").model("Task");


class TaskController{

  all(req,res){

    Task.find({},(err,arr)=>{

      if(err){
				
        res.json({});
			
      }else{
	console.log(arr[0]);			
        res.json({tasks:arr});
			
      }

    })

  }
  new_task(req,res){

    let task = new Task(req.body);
    
    task.save((err)=>{

      if(err){

        res.json({});
      } else {

        res.json({"success":"success"});
      }

    })

  }
  remove_task(req,res){

    Task.findOne({_id:req.params.id},(err,task)=>{

      if(err){console.log("error");} 

      Task.remove({_id:req.params.id},(err)=>{

        if(err){
          console.log(err);
        }
        res.json({task_removed:task});

      })

    })

  }
  task(req,res){

    Task.findOne({_id:req.params.id},(err,task)=>{
      
      if(err){
				
        res.json({});
			
      }else{
			
        res.json({"found":task});
			
      }

    })

  }
  mod_task(req,res){

    Task.findOne({_id:req.params.id},(err,task)=>{

      task.first_name = req.body.first_name;
      task.last_name = req.body.last_name;
      task.phone_number = req.body.phone_number;
      task.password = req.body.password;
      task.save((err)=>{
        if(err){
				
          res.json({});
			
        }else{
			
          res.json({"modified":task});
			
        }
      });  
    });
  }

}

module.exports = new TaskController();
