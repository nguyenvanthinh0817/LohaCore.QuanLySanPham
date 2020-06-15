const validate = values => {
  const errors = {};
  const { email, password } = values;
  if (!email) {
    errors.email = 'Vui lòng nhập email';
  } else if (email.trim() && email.length < 5) {
    errors.email = 'Email phải từ 5 ký tự';
  }

  if (!password) {
    errors.password = 'Vui lòng nhập mật khẩu';
  } 
  return errors;
};

export default validate;
