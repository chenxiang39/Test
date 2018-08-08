var fs=require("fs");
var data='';

var readerStream =fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data',function(a){
    data+=a;
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err);
});
console.log("程序执行完毕");
var writerStream=fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
// WS.write(Dataset,'UTF8');
// WS.on('finish',function()
// {
//     console.log("写入完成");
// })
// WS.on('error',function(error)
// {
//     console.log(error);
// });

