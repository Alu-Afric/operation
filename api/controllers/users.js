var User = require('Models/users');
module.exports = {
    signUp : async (req, res, next) => {
    	//emails & passwords
      let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
          });
      user.save();
      res.status(201).json('done');
      console.log('New User Created ! = '+user);
    },
    signIn : async (req, res, next) => {
    	//generate token
      console.log('UserController.signIn() is Called!');
    },
    secret : async (req, res, next) => {
      console.log('UserController.secret() is Called!');
    }
}