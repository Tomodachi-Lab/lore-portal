const toKebabCase = (string) =>
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

const addGetRoute = function (router, name, callback) {
  return router.get(name, async (_, res) => {
    const response = await callback();

    if (response.error) {
      res.status(500);
      res.json(response.error);

      return;
    }

    res.json(response);
  });
};

const addPutRoute = function (router, name, callback) {
  return router.put(name, async (req, res) => {
    const response = await callback(req.body);

    if (response.error) {
      res.status(500);
      res.json(response.error);

      return;
    }

    res.json(response);
  });
};

module.exports = {
  toKebabCase,
  addGetRoute,
  addPutRoute,
};
