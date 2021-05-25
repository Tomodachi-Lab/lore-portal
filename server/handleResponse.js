const handleResponse = ({ res }, payload, callback = () => {}) => {
  if (payload.error) {
    res.status(500).send(payload.error);
    return;
  }

  callback(payload);

  res.send(payload);
  return;
};

export default handleResponse;
