function index(req, res) {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM device', (err, list) => {
      if(err) {
        res.json(err);
      }
      //for(const row of list){
       // console.log(row.firmware);
      //};
      res.render('devices/index', { list });
    });
  });
}

function create(req, res) {

  res.render('devices/add');
}

function store(req, res) {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO device SET ?', [data], (err, rows) => {
      res.redirect('/devices');
    });
  });
  
}

function destroy(req, res) {
  const id = req.body.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM device WHERE id = ?', [id], (err, rows) => {
      res.redirect('/devices');
    });
  })
}

function edit(req, res) {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM device WHERE id = ?', [id], (err, data) => {
      if(err) {
        res.json(err);
      }
      res.render('devices/edit', { data });
    });
  });
}

function update(req, res) {
  const id = req.params.id;
  //const data = req.body;
  if(req.body.firmware  == ""){
    const data = delete req.body.firmware;
    req.getConnection((err, conn) => {
      conn.query('UPDATE device SET ? WHERE id = ?', [data, id], (err, rows) => {
        res.redirect('/devices');
      });
    });
  }else{
    const data = req.body;
    req.getConnection((err, conn) => {
      conn.query('UPDATE device SET ? WHERE id = ?', [data, id], (err, rows) => {
        res.redirect('/devices');
      });
    });
  };

}


module.exports = {
  index: index,
  create: create,
  store: store,
  destroy: destroy,
  edit: edit,
  update: update,
}