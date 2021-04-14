import faker from "faker";

interface Mail {
  id: number;
  name: string;
  email: string;
  from: {
    name: string;
    email: string;
  };
}
export const makeMails = (n: number) => {
  const mails: Mail[] = [];
  for (let i = 0; i < n; i++) {
    mails.push({
      id: i,
      email: faker.internet.exampleEmail(),
      from: {
        email: faker.internet.exampleEmail(),
        name: faker.name.firstName(),
      },
      name: faker.name.firstName(),
    });
  }
  return mails;
};
