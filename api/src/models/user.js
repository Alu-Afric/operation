import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const user = new Schema({
    name: { type: String   },
    email: { type: String },
    password : {type : String}
});
export default mongoose.model('users', user);