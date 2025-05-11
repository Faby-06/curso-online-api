const getAllCourses = (req, res) => {
    res.send('All courses');
  };
  
  const createCourse = (req, res) => {
    res.send('Course created');
  };
  
  module.exports = { getAllCourses, createCourse };
  