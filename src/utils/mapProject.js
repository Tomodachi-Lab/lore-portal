import sanitize from 'sanitize-html';

const mapProject = ({ body, categories, ...project }) => ({
  ...project,
  // since we receive dirty HTML we use sanitize to make sure
  // nothing weird happens on the FE
  body: sanitize(body, {
    allowedTags: sanitize.defaults.allowedTags.concat(['img']),
  }),
  categories: categories.map(({ category }) => category),
});

export default mapProject;
