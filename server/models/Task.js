let mongoose = require('mongoose');

mongoose.model('Task', new mongoose.Schema({

  first_name:{
              type: String, 
              required:[true,"first name"],
              trim:true,
              minlength:2, 
              maxlength:255
             },
  last_name:{
             type: String, 
             required:[true,"last name"],
             minlength:2, 
             maxlength:255
            },
  phone_number:{
                type: String, 
                validate: {
                  validator: function(number){
                    return /\d{3}-\d{3}-\d{4}/.test(number); 
                  },
                  message: "{VALUE} is not a valid phone number"  
                },
                required:[true,"customer phone number required"]
               },
  password:{
            type:String,
            required:true,
            validate: {

              validator: function(value){
                return /[a-zA-Z]{4-20}/.test(value);
              },
              message: "password failed validation"
              }
            }
          
},{timestamps: true}));
