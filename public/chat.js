// make connection


let socket=io.connect('http://localhost:3000')

let handle=document.querySelector('#handle')

let message=document.querySelector('#message')
let btn=document.querySelector('#send')
let output=document.querySelector('#output')

let feedback=document.getElementById('feedback')


// send emit events

btn.addEventListener('click',function(){
    socket.emit('chat',{
        "message":message.value,
        "handle":handle.value
    })
    message.value = "";
})

message.addEventListener('keypress',function(){
    socket.emit('someone typing',handle.value)
})
// listen for events

socket.on('chat',function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})
socket.on('someone typing',function(data){
    feedback.innerHTML+='<p>'+data.handle+' is typing </p>'
})






