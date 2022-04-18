const express = require('express');
const exphbs = require('express-handlebars');
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const config = require('./Config/config.json');
const deviceRoute = require('./routes/device.route');
const accountRoute = require('./routes/account.route');
const db = require('./Config/db');
const app = express();
const delay = require('delay');
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.urlencoded({
  extended: true
}));

app.use('/public', express.static('public')); //set static file


app.engine('hbs', exphbs.engine({
  layoutsDir: 'views/_layouts',
  defaultLayout: 'main.hbs',
  partialsDir: 'views/_partials',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, config.mysql, 'single'));

io.on("connection", function (socket) {

  //console.log("Co nguoi ket noi:" + socket.id);
  // io.sockets.emit("data-server", io.engine.clientsCount);
  socket.on("disconnect", function () {
    //console.log(socket.id + " ngat ket noi!!!!! " + "Số connection còn lại: " + io.engine.clientsCount);
  });
 // console.log("Connection: " + io.engine.clientsCount);

});

app.get('/', (req, res) => {
  res.render('account/index', {
    layout: false
  });
});
app.get('/iframe', (req, res) => {
  res.render('iframe');
});
app.get('/trangchu', (req, res) => {
  res.render('default');
});

app.use('/account', accountRoute);
//app.post('/', db.GetAccount);


app.use('/devices', deviceRoute);

//app.enable('view cache');
server.listen(process.env.PORT || 3000);


async function test() {
  while (true) {
    io.emit("data-server", io.engine.clientsCount);
    await delay(700)
  }
};
test();