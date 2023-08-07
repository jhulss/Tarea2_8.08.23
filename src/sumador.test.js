import restar from "./sumador.js";


describe("Restar", () => {
  it("deberia sumar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
});
