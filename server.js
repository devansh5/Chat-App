let express=require('express');
let socket=require('socket.io');
let app=express();
let server=app.listen(3000,()=>{
    console.log("server listening")
})

//static files

app.use(express.static('public'))


// socket setup

let io=socket(server);


io.on('connection',function(socket){
    console.log("socket is on connection",socket.id);


    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })

    socket.on('someone typing',function(data){
    })
   
})

 






































