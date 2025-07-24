import express from "express"


const app=express()

app.get('/',(req,res)=>{
     res.send('Hello from Express + TypeScript + ESM!');
})

const PORT = parseInt(process.env.PORT || '8000', 10);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});