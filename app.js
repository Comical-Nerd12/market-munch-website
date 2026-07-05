const express= require('express');
const app =express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get('/',(req,res)=>{res.render("home")});
app.get('/prices',(req,res)=>{res.render("prices")});

app.get("/startups", (req, res) => {
    res.render("startup");
});

app.get("/creators", (req, res) => {
    res.render("creator");
});

app.get("/freelancers", (req, res) => {
    res.render("freelancers");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
})