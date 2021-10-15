const responseOkCreated = (res, data) => {
  return res.status(201).json({
    success: true,
    message: "added",
    data,
  });
};

const responseServerError = (res, error) => {
  return res.status(500).json({
    success: false,
    message: "internal server errorssss",
    error
  });
};
const responseOk = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  });
};

module.exports = {
  responseOkCreated,
  responseServerError,
  responseOk
};
