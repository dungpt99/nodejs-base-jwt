interface res {
  error: boolean;
  status: number;
  message: string;
  data?: {};
}

const badRequest: res = {
  error: true,
  status: 400,
  message: "No data found from request.",
  data: {},
};

const unauthorized: res = {
  error: true,
  status: 401,
  message: "401 Unauthorized",
  data: {},
};

const success: res = {
  error: false,
  status: 200,
  message: "Successful",
};

export { badRequest, unauthorized, success };







