app.use((err, req, res, next) => {
  try {
    let code = 500;
    let msg = "Internal Server Error";

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
      code = 400;
      msg = err.errors[0].message;
    } else if (err.name === "Unauthorized") {
      code = 401;
      msg = "Invalid email/password";
    } else if (err.name === "Empty Field Email") {
      code = 401;
      msg = "Email is required";
    } else if (err.name === "Empty Field Passsword") {
      code = 401;
      msg = "Password is required";
    } else if (err.name === "JsonWebTokenError") {
      code = 401;
      msg = "Invalid token";
    } else if (err.name === "Not Found") {
      code = 404;
      msg = "Data not found";
    } else if (err.name === "Forbidden") {
      code = 403;
      msg = "You are not authorized";
    }

    res.status(code).json({
      message: msg,
    });
  } catch (err) {
    next(err);
  }
});
