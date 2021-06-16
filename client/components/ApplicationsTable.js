import React from 'react';
import { categories } from '../utils/categories';
import Table from './Table';

const ApplicationsTable = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Titolo</th>
          <th>Descrizione</th>
          <th>Categoria</th>
          <th>Contatti</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ name, description, category, discord, telegram }) => (
          <tr key={name}>
            <td data-label="Titolo">{name}</td>
            <td data-label="Descrizione">{description}</td>
            <td data-label="Categoria">{categories[category]}</td>
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

export default ApplicationsTable;
