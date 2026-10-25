// منطق اعتبارسنجی و ثبت دانشجو
function validateAndAddStudent(student, list) {
  if (!student.id || student.id.length < 5) {
    throw new Error('شماره دانشجویی نامعتبر است');
  }
  const exists = list.some(s => s.id === student.id);
  if (exists) {
    throw new Error('دانشجو با این شماره قبلاً ثبت شده است');
  }
  list.push(student);
  return list;
}

module.exports = { validateAndAddStudent };
