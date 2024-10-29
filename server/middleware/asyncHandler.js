const asyncHandler = (fn) => {
  return async (res, req, next) => {
    try {
      await fn(res, req, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncHandler;
