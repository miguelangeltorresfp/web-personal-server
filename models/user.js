const user = {
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  active: Boolean,
};
