import sanitize from 'sanitize-html';

const mapProject = ({ body, ...project }) => ({
  ...project,
  // since we receive dirty HTML we use sanitize to make sure
  // nothing weird happens on the FE
  body: sanitize(body, {
    allowedTags: sanitize.defaults.allowedTags.concat(['img']),
  }),
});

export default mapProject;
