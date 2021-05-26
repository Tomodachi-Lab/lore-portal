import { useEffect, useState } from 'react';

const key = 'tomodachi-lab';
export const API_BASE_URL = '/api';

const saveData = (key, data) => {
  if (!process.browser) return;

  sessionStorage.setItem(
    `${key}:expiration`,
    JSON.stringify({
      expiresAt: new Date(new Date().getTime() + 5 * 1 * 10e3),
    })
  );

  sessionStorage.setItem(key, JSON.stringify(data));
};

const checkSavedData = (key) => {
  if (!process.browser) return;

  const saved = sessionStorage.getItem(`${key}:expiration`);
  if (saved) {
    const { expiresAt } = JSON.parse(saved);

    if (Date.parse(new Date()) > Date.parse(expiresAt)) {
      sessionStorage.clear();
    }
  }

  const savedItems = sessionStorage.getItem(key);

  if (savedItems) {
    const items = JSON.parse(savedItems);

    return items;
  }
};

const useApi = (endpoint) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  const savedKey = `${key}:${endpoint}`;

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const savedData = checkSavedData(savedKey);
    if (savedData) {
      setResponse(savedData);
      setLoading(false);
      return;
    }

    fetch(url)
      .then(async (res) => {
        const json = await res.json();
        saveData(savedKey, json);

        setResponse(json);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url]);
  return [response, loading, hasError];
};

export default useApi;
