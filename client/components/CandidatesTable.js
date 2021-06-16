import React from 'react';
import { sectors } from '../utils/roles';
import Table from './Table';

const CandidatesTable = ({ items, projects }) => {
  console.log(projects);
  return (
    <Table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Ruolo</th>
          <th>Progetto</th>
          <th>Contatti</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ key, sector, role, project, discord, telegram }) => (
          <tr key={key}>
            <td data-label="Categoria">{sectors[sector]}</td>
            <td data-label="Ruolo">{role}</td>
            <td data-label="Progetto">
              {project === 'TRUE'
                ? 'Tutti'
                : projects.find(({ slug }) => slug === project).title}
            </td>
            <td data-label="Contatti">
              <div>
                {discord && <div>{discord}</div>}
                {telegram && <div>{telegram}</div>}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CandidatesTable;
