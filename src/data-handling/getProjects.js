import sanitize from 'sanitize-html';

const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

const importAll = (r) => r.keys().map(r);

const getProjects = () =>
  importAll(require.context('../data/projects/', false, /\.json$/)).map(
    ({ date, categories, title, body, image, ...params }) => ({
      date: new Date(date),
      categories,
      title,
      // since we receive dirty HTML we use sanitize to make sure
      // nothing weird happens on the FE
      body: sanitize(body, {
        allowedTags: sanitize.defaults.allowedTags.concat(['img']),
      }),
      image,
      slug: toKebabCase(title),
      params,
    })
  );

export default getProjects;
