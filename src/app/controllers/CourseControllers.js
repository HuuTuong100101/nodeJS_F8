const Course = require('../models/Course');

class CourseControllers {
    show(req, res, next) {
        Course.findOne({slug:req.params.slug}).lean()
            .then(course => res.render('course/courseDetail', { course }))
            .catch(next)
    }
}

module.exports = new CourseControllers();