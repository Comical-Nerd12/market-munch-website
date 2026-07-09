const express= require('express');
const app =express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get('/',(req,res)=>{res.render("home")});
app.get('/plans',(req,res)=>{res.render("prices")});


app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/services/seo-optimization",(req,res)=>{
    res.render("services/seo-optimization");
});

app.get("/services/socialmediamarketing",(req,res)=>{
    res.render("services/socialmediamarketing");
});

app.get("/services/performance-marketing",(req,res)=>{
    res.render("services/performance-marketing");
});

app.get("/services/content-creation",(req,res)=>{
    res.render("services/content-creation");
});

app.get("/services/analytics",(req,res)=>{
    res.render("services/analytics");
});

app.get("/services/web-development",(req,res)=>{
    res.render("services/web-development");
});

app.get("/services/google-ads-management",(req,res)=>{
    res.render("services/google-ads");
});

app.get("/services/meta-ads",(req,res)=>{
    res.render("services/meta-ads");
});

app.get("/services/email-marketing",(req,res)=>{
    res.render("services/email-marketing");
});

app.get("/services/whatsapp-marketing",(req,res)=>{
    res.render("services/whatsapp-marketing");
});
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
})