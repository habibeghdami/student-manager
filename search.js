// تابع فیلتر و جستجوی دانشجو
function searchStudents(query, studentsList) {
  if (!query) return studentsList;
  return studentsList.filter(student =>
    student.name.includes(query) || student.id.includes(query)
  );
}

module.exports = { searchStudents };
