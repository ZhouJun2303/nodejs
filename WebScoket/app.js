var constValue = require("./hall/constValue");

var ws = require("ws").Server;
const connect = new ws({
    port:constValue.config.port
});

connect.on("listening",function(){
    console.log("服务器开启监听！！！");
})

connect.on("connection",function(ws,req){
    console.log(ws);
    console.log("有刺客——————>"+ req.connection.remoteAddress);
    ws.on("message",function(packet){
        let msg = JSON.parse(packet);
        if(msg.cmd == constValue.protocol.login){
            login(msg)
        }else if(msg.cmd == constValue.protocol.hallLogin){
            hallLogin(msg)
        }
    });

    ws.on("close",function(msg){
        console.log("有玩家关闭了连接");
        console.log(msg);
    });

    ws.on("ping",function(msg){
        console.log("ping",msg);
    });

    ws.on("error",function(msg){
        console.log("error",msg);
    })

    login = function(msg){
        console.log(msg);
        ws.send("来了老弟！");
    };

    hallLogin = function(msg){
        console.log(msg);
        ws.send('进入大厅');
    };
    
});

connect.on("headers",function(msg,data){
    console.log(msg);
    console.log(data);
})


console.log(constValue.config);