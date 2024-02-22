const mongoose=require('mongoose');
const uri='mongodb+srv://waqar:waqar392936@cluster0.ijvtej0.mongodb.net/fooddb?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB= async()=>{
   await mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    const fetched_datad= mongoose.connection.db.collection('food-items');
    fetched_datad.find({}).toArray((err,data)=>{
        if(err)
        {
            console.log("something went wrong");
        }
        else
        {
            console.log(data);
        }

    })
  })}

module.exports=mongoDB;