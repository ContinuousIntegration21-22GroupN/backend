import http from "http";

export const sendHttpError = (
  res: http.ServerResponse,
  options: { status: number; message?: string }
) => {
  const { status, message } = options;
  res.statusCode = status;
  switch (status) {
    case 404:
      res.statusMessage = "Not found";
      break;
  }

  if (message) {
    res.write(`{"error": "${message}"}`);
  }
  res.end();
};

export const sendHttpResponse = (
  res: http.ServerResponse,
  options: { status?: number; data?: object }
) => {
  const { status, data } = options;
  res.statusCode = status || 200;
  switch (status) {
    case 200:
      res.statusMessage = "Success";
      break;
  }

  if (data) {
    res.write(JSON.stringify(data));
  }
  res.end();
};
