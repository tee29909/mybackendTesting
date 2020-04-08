const Money = require("../models/Money");
const dbHandler = require("./db-handler");

beforeAll(async () => {
  await dbHandler.connect();
});
afterEach(async () => {
  await dbHandler.clearDatabase();
});
afterAll(async () => {
  await dbHandler.closeDatabase();
});

const moneyComplete = {
  userID: "thee",
  money: 0,
};
const moneyErrormoneyIDEmpty = {
  userID: "",
  money: 0,
};
const moneyErrorMoneyMinus = {
  userID: "aaaa",
  money: -9,
};
const moneyErrorMoneyNull = {
  userID: "aaaa",
  money: null,
};

describe("Money", () => {
  it("สามารถเพิ่มMoneyได้", async () => {
    let error = null;
    try {
      const money = new Money(moneyComplete);
      await money.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
  });

  it("ไมสามารถเพิ่มMoneyได้ เพราะ moneyID:null ", async () => {
    let error = null;
    try {
      const money = new Money(moneyErrormoneyIDEmpty);
      await money.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
  it("ไมสามารถเพิ่มMoneyได้ เพราะ money:ติดลบ ", async () => {
    let error = null;
    try {
      const money = new Money(moneyErrorMoneyMinus);
      await money.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
  it("ไมสามารถเพิ่มMoneyได้ เพราะ money:Null", async () => {
    let error = null;
    try {
      const money = new Money(moneyErrorMoneyNull);
      await money.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
  it("ไมสามารถเพิ่มMoneyได้ เพราะ moneyID:ต้องไม่ซ้ำกัน", async () => {
    let error = null;
    try {
      const money1 = new Money(moneyComplete);
      await money1.save();
      const money2 = new Money(moneyComplete);
      await money2.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
});
