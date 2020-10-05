module.exports = function (db) {
  return {
    // Get all students
    getStudents: function (req, res) {
      db.User.findAll({ where: { role: 'student' } }).then(function (dbStudents) {
        res.json(dbStudents);
      });
    },
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      console.log(req.body);
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    }
  };
};
