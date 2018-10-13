import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const user = new Schema({
    name: { type: String   },
    age: { type: Number }
})
export default mongoose.model('users', user);