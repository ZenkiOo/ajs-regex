import Validator from "../Validator";

test.each(["1Alex", "-Alex", "_Alex"])("Error first symbol", (userName) => {
  const validator = new Validator(userName),
    err = "Имя не может начинаться с цифр, подчёркиваний или тире.";
  expect(() => validator.validateUsername()).toThrowError(new Error(err));
});

test.each(["Alex1", "Alex-", "Alex_"])("Error last symbol", (userName) => {
  const validator = new Validator(userName),
    err = "Имя не может заканчиваться цифрами, подчёркиваниями или тире.";
  expect(() => validator.validateUsername()).toThrowError(new Error(err));
});

test("Error 3 digits", () => {
  const validator = new Validator("Ale1111x"),
    err = "Имя не должно содержать подряд более трёх цифр.";
  expect(() => validator.validateUsername()).toThrowError(new Error(err));
});

test("Test user name", () => {
  const validator = new Validator("Alex");
  expect(validator.validateUsername()).toBe("Alex");
});
