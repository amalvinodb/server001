var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let product=[
    {
      name:'one',
      catagory:'number',
      discription:'this is something',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
    },{
      name:'one',
      catagory:'number',
      discription:'this is something',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
    },{
      name:'one',
      catagory:'number',
      discription:'this is something',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
    },{
      name:'one',
      catagory:'number',
      discription:'this is something',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
    }
  ]

  res.render('index', { product,admin:false });
});
router.get('/login',(req,res,next)=>{
  res.render('log/login',{admin:false})
})
router.post('/login',(req,res)=>{
  if(req.body.email === "amal@gmail.com" && req.body.pw === "1234"){
    let product=[
      {
        name:'one',
        catagory:'number',
        discription:'this is something',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
      },{
        name:'one',
        catagory:'number',
        discription:'this is something',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
      },{
        name:'one',
        catagory:'number',
        discription:'this is something',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
      },{
        name:'one',
        catagory:'number',
        discription:'this is something',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVJ22ilfQm5jDaa3icKmhVpWyzJklSVFbDw&usqp=CAU'
      }
    ]
    res.render('admin/list-products',{admin:true,product})
  }else{
    res.render('log/login',{admin:false,msg:"invlaid data"})
  }
})
module.exports = router;
