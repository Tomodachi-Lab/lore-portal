import mapProject from './mapProject';

const getProjects = async (path, fs) => {
  const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
  const fileNames = await fs.readdir(projectsDirectory);

  return (
    await Promise.all(
      fileNames.map(async (fileName) => {
        const filePath = path.join(projectsDirectory, fileName);
        const fileContents = await fs.readFile(filePath, 'utf8');

        return {
          slug: fileName.replace('.json', ''),
          ...JSON.parse(fileContents),
        };
      })
    )
  )
    .map(mapProject)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export default getProjects;
