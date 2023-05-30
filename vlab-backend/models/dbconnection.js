const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
 
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/virtual-lab`)

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
}

connectDB()