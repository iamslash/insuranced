module.exports = function(app, Book)
{
    app.get('/', function (req, res, next) {
      res.send('list of users');
    });

    app.get('/new', function (req, res, next) {
      res.render('index', {title: 'Add User Form'});
    });

    app.get('/:id', function (req, res, next) {
      res.send('a user. id: ' + req.params.id);
    });

    app.post('/', function (req, res, next) {
      res.send('new user. name: ' + req.body.name);
    });

    app.get('/:id/edit', function (req, res, next) {
      res.render('index', {title: 'Edit User Form'});
    });

    app.put('/:id', function (req, res, next) {
      res.send('update a user. id: ' + req.params.id + ' , name: ' + req.body.name);
    });

    app.delete('/:id', function (req, res, next) {
      res.send('delete a user. id: ' + req.params.id);
    });
}
