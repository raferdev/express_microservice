import { customerSchemaMiddleware } from "@/middlewares/customers/customers-schema-middleware";

const mockReq = () => {
  const req = {
    body: {
      name: "test",
    },
  };
  // eslint-disable-next-line
  return req as any;
};

const mockRes = () => {
  // eslint-disable-next-line
  const res = {} as any;

  res.status = jest.fn().mockImplementation((code) => {
    return {
      json: jest.fn().mockImplementation((message) => {
        return { status: code, message: message };
      }),
    };
  });
  return res;
};

describe("Middleware - Schema", () => {
  test("Need to fail when customer body have only ", async () => {
    const mockedNext = jest.fn();
    const mockedReq = mockReq();
    const mockedRes = mockRes();

    await customerSchemaMiddleware(mockedReq, mockedRes, mockedNext);

    expect(mockedRes.status).toHaveBeenCalledWith(400);
  });
});
