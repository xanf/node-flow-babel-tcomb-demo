export default (fn) => (req, res, next) => {
  try {
    fn(req, res, next);
  } catch (e) {
    next(e);
  }
};

