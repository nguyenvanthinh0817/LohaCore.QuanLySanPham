const validate = values => {
  const errors = {};
  const { name } = values;
  if (!name) {
    errors.name = 'Vui lòng nhập tiêu đề';
  } 
  return errors;
};

export default validate;
