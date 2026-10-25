// محاسبه معدل و وضعیت تحصیلی دانشجو
function calculateGPA(grades) {
  if (!grades || grades.length === 0) return 0;
  const total = grades.reduce((sum, item) => sum + item.score * item.units, 0);
  const totalUnits = grades.reduce((sum, item) => sum + item.units, 0);
  return totalUnits > 0 ? (total / totalUnits).toFixed(2) : 0;
}

function getAcademicStatus(gpa) {
  if (gpa >= 17) return 'ممتاز (A)';
  if (gpa >= 12) return 'عادی (Pass)';
  return 'مشروط (Probation)';
}

module.exports = { calculateGPA, getAcademicStatus };
