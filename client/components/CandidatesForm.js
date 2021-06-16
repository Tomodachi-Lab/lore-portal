import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';
import { roles, sectors } from '../utils/roles';
import { useInput } from '../utils/useInput';
import { GradientButton } from './Button';
import Form from './Form';
import Loader from './Loader';

const mail = 'test@mail.com';

const Error = styled.section`
  color: red;
  margin-bottom: 1em;
`;

const ButtonsContainer = styled.section`
  position: relative;
`;

const LoaderContainer = styled.div`
  position: absolute;
  right: -3em;
  top: 0;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxContainer = styled.section`
  display: flex;
  color: ${colors.greyConcrete};

  > * + * {
    margin-left: 0.5em;
  }
`;

const setClass = (value, shouldShowError) => {
  if (!value && shouldShowError) return 'error';
  if (value) return 'filled';
};

const CandidatesForm = ({ callback, projects }) => {
  const { value: sector, setValue: setSector, bind: bindSector } = useInput('');
  const { value: role, setValue: setRole, bind: bindRole } = useInput('');

  const { value: project, bind: bindProject } = useInput(true);
  const { value: discord, bind: bindDiscord } = useInput('');
  const { value: telegram, bind: bindTelegram } = useInput('');

  const { value: description, bind: bindDescription } = useInput('');

  const [requiredError, setRequiredError] = useState(false);
  const [contactsError, setContactsError] = useState(false);

  const [formSending, setFormSending] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [privacy, setPrivacy] = useState(false);

  const sendForm = useCallback(async () => {
    const required = !sector || !project || !role;
    const contacts = !discord && !telegram;

    setRequiredError(required);
    setContactsError(contacts);

    if (required || contacts) return;

    setFormSending(true);

    await callback({
      sector,
      role,
      project,
      discord,
      telegram,
      description,
    });

    setFormSent(true);
    setFormSending(false);
  }, [sector, role, project, discord, telegram, description]);

  useEffect(() => {
    setFormSent(false);
  }, [sector, role, project, discord, telegram, description]);

  return (
    <Form gradientColors={[colors.lavender, colors.twitch]}>
      <fieldset>
        <select
          {...bindSector}
          onChange={(event) => {
            const sector = event.target.value;
            setSector(sector);
            setRole(roles[sector][0]);
          }}
          id="sector"
          className={setClass(sector, requiredError)}
        >
          <option hidden disabled defaultValue={true}></option>

          {Object.entries(sectors).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <label htmlFor="sector">
          <span data-text="Settore*">Settore*</span>
        </label>
      </fieldset>

      <fieldset>
        <select
          {...bindRole}
          id="role"
          className={setClass(role, requiredError)}
          disabled={!sector || sector === 'other'}
        >
          {(sector ? roles[sector] : []).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="role">
          <span data-text="Ruolo*">Ruolo*</span>
        </label>
      </fieldset>

      <fieldset>
        <select
          {...bindProject}
          id="project"
          className={setClass(project, requiredError)}
        >
          <option defaultValue="" value="">
            Tutti
          </option>

          {projects.map(({ slug, title }) => (
            <option key={slug} value={slug}>
              {title}
            </option>
          ))}
        </select>
        <label htmlFor="project">
          <span data-text="Progetto*">Progetto*</span>
        </label>
      </fieldset>

      <fieldset>
        <input
          {...bindDiscord}
          className={setClass(discord, contactsError)}
          id="discord"
          type="discord"
          maxLength="20"
          placeholder="Discord#0000"
        />
        <label htmlFor="discord">
          <span data-text="Discord">Discord</span>
        </label>
      </fieldset>

      <fieldset>
        <input
          {...bindTelegram}
          className={setClass(telegram, contactsError)}
          id="telegram"
          type="telegram"
          maxLength="20"
          placeholder="@Telegram"
        />
        <label htmlFor="telegram">
          <span data-text="Telegram">Telegram</span>
        </label>
      </fieldset>

      <fieldset>
        <textarea
          {...bindDescription}
          id="description"
          type="textarea"
          maxLength="300"
          placeholder="Breve descrizione"
        />
        <label htmlFor="description">
          <span data-text="Descrizione">Descrizione</span>
        </label>
      </fieldset>

      <CheckboxContainer>
        <input
          id="privacy"
          type="checkbox"
          checked={privacy}
          onChange={() => setPrivacy(!privacy)}
        />

        <label htmlFor="privacy">
          <p>I dati inseriti verranno resi pubblici sul sito</p>
          <p>Per cancellarti dall'elenco potrai contattare {mail}</p>
          <p>Accosenti alla memorizzazione dei dati nel nostro archivo</p>
        </label>
      </CheckboxContainer>

      <Error>
        <div>{requiredError ? 'Compila tutti i campi obbligatori' : ''}</div>
        <div>{contactsError ? 'Inserisci almeno un contatto' : ''}</div>
      </Error>

      <ButtonsContainer>
        <GradientButton
          gradientColors={[colors.lavender, colors.twitch]}
          disabled={formSent || !privacy}
          type="button"
          onClick={sendForm}
        >
          Invia
        </GradientButton>

        {formSending ? (
          <LoaderContainer>
            <Loader color={colors.lavender} />
          </LoaderContainer>
        ) : (
          ''
        )}
      </ButtonsContainer>
    </Form>
  );
};

export default CandidatesForm;
