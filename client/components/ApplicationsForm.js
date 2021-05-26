import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, theme } from '../theme/theme';
import { categories } from '../utils/categories';
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

const ApplicationsForm = ({ callback }) => {
  const { value: name, bind: bindName } = useInput('');
  const { value: description, bind: bindDescription } = useInput('');
  const { value: category, bind: bindCategory } = useInput('');
  const { value: discord, bind: bindDiscord } = useInput('');
  const { value: telegram, bind: bindTelegram } = useInput('');

  const [requiredError, setRequiredError] = useState(false);
  const [contactsError, setContactsError] = useState(false);

  const [formSending, setFormSending] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [privacy, setPrivacy] = useState(false);

  const sendForm = useCallback(async () => {
    const required = !name || !description || !category;
    const contacts = !discord && !telegram;

    setRequiredError(required);
    setContactsError(contacts);

    if (requiredError || contactsError) return;

    setFormSending(true);

    await callback({
      name,
      description,
      category,
      discord,
      telegram,
    });

    setFormSent(true);
    setFormSending(false);
  }, [name, description, category, discord, telegram]);

  useEffect(() => {
    setFormSent(false);
  }, [name, description, category, discord, telegram]);

  return (
    <Form first={colors.redRadical} second={colors.orangeSunshade}>
      <fieldset>
        <input
          {...bindName}
          className={setClass(name, requiredError)}
          id="name"
          type="text"
          placeholder="Nome del progetto"
        />
        <label htmlFor="name">
          <span data-text="Nome*">Nome*</span>
        </label>
      </fieldset>

      <fieldset>
        <textarea
          {...bindDescription}
          className={setClass(description, requiredError)}
          id="description"
          type="textarea"
          placeholder="Breve descrizione"
        />
        <label htmlFor="description">
          <span data-text="Descrizione*">Descrizione*</span>
        </label>
      </fieldset>

      <fieldset>
        <select
          {...bindCategory}
          id="category"
          className={setClass(category, requiredError)}
        >
          <option hidden disabled defaultValue=""></option>

          {Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <label htmlFor="category">
          <span data-text="Categoria*">Categoria*</span>
        </label>
      </fieldset>

      <fieldset>
        <input
          {...bindDiscord}
          className={setClass(discord, contactsError)}
          id="discord"
          type="discord"
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
          placeholder="@Telegram"
        />
        <label htmlFor="telegram">
          <span data-text="Telegram">Telegram</span>
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
          gradientColors={[colors.redRadical, colors.orangeSunshade]}
          disabled={formSent || !privacy}
          type="button"
          onClick={sendForm}
        >
          Invia
        </GradientButton>

        {formSending ? (
          <LoaderContainer>
            <Loader color={colors.redRadical} />
          </LoaderContainer>
        ) : (
          ''
        )}
      </ButtonsContainer>
    </Form>
  );
};

export default ApplicationsForm;
