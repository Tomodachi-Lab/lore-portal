const { GoogleSpreadsheet } = require('google-spreadsheet');

const SHEETS = {
  CANDIDATES: 0,
  PROJECT_APPLICATIONS: 1,
  PROJECT_APPLICATIONS_PUBLISHED: 2,
};

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);

const getSheet = async (index) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  await doc.loadInfo(); // loads document properties and worksheets. required.
  const sheet = doc.sheetsByIndex[index];

  return sheet;
};

const readSheet = async (index) => {
  try {
    const sheet = await getSheet(index);
    const rows = await sheet.getRows();

    return rows.map((row) => serializeRow(sheet, row));
  } catch (error) {
    return { error: error.toString() };
  }
};

const serializeRow = (sheet, row) => {
  return sheet.headerValues.reduce((aggregated, header) => {
    aggregated[header] = row[header];
    return aggregated;
  }, {});
};

export const getCandidates = async () =>
  (await readSheet(SHEETS.CANDIDATES)).map(
    ({ telegram, discord, ...item }) => ({
      ...item,
      telegram,
      discord,
      key: telegram || discord,
    })
  );

export const addCandidate = async (body) => {
  try {
    const sheet = await getSheet(SHEETS.CANDIDATES);

    const { sector, role, project, discord, telegram, description } = body;

    if (!sector || !role || !project) {
      throw new Error(
        `Required value missing [category: ${category}, role: ${role}, project: ${project}]`
      );
    }

    if (!discord && !telegram) {
      throw new Error(
        `At least one contact information is required [discord: ${discord}, telegram: ${telegram}]`
      );
    }

    await sheet.addRow({
      sector,
      role,
      project,
      discord,
      telegram,
      description,
    });

    return body;
  } catch (error) {
    return { error: error.toString() };
  }
};

export const addProjectApplication = async (body) => {
  try {
    const sheet = await getSheet(SHEETS.PROJECT_APPLICATIONS);

    const { name, description, category, discord, telegram } = body;

    if (!name || !description || !category) {
      throw new Error(
        `Required value missing [name: ${name} description: ${description} category: ${category}]`
      );
    }

    if (!discord && !telegram) {
      throw new Error(
        `At least one contact information is required [discord: ${discord}, telegram: ${telegram}]`
      );
    }

    await sheet.addRow({
      name,
      description,
      category,
      discord,
      telegram,
    });

    return body;
  } catch (error) {
    return { error: error.toString() };
  }
};

export const getProjectApplicationsPublished = async () =>
  readSheet(SHEETS.PROJECT_APPLICATIONS_PUBLISHED);
