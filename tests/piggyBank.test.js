const PiggyBank = require("../models/PiggyBank");
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

const PiggyBankComplete = {
  userID: "adasda5asd464",
  money: 20,
  type: "Withdraw",
  date: Date.now(),
  total: 30,
};
const PiggyBankComplete2 = {
  userID: "adasda5asd464",
  money: 20,
  type: "Deposit",
  date: Date.now(),
  total: 30,
};
const PiggyErrorpiggyIDEmpty = {
  userID: "",
  money: 20,
  type: "Withdraw",
  date: Date.now(),
  total: 30,
};
const PiggyErrorMoneyEmpty = {
  userID: "adasda5asd464",
  money: null,
  type: "Withdraw",
  date: Date.now(),
  total: 30,
};
const PiggyErrorTypeEmpty = {
  userID: "adasda5asd464",
  money: 20,
  type: "",
  date: Date.now(),
  total: 30,
};
const PiggyErrorDateEmpty = {
  userID: "adasda5asd464",
  money: 20,
  type: "Withdraw",
  date: null,
  total: 30,
};

const PiggyErrorTotalEmpty = {
  userID: "adasda5asd464",
  money: 20,
  type: "Withdraw",
  date: Date.now(),
  total: null,
};

const PiggyErrorTotalMinus = {
  userID: "adasda5asd464",
  money: 20,
  type: "Withdraw",
  date: Date.now(),
  total: -30,
};
const PiggyErrorMoneyMinus = {
  userID: "adasda5asd464",
  money: -20,
  type: "Withdraw",
  date: Date.now(),
  total: 30,
};

const PiggyErrorTypeInvalit = {
  userID: "adasda5asd464",
  money: -20,
  type: "error",
  date: Date.now(),
  total: 30,
};

const PiggyErrorDatePast = {
  userID: "adasda5asd464",
  money: -20,
  type: "Withdraw",
  date: new Date(0, 1, 1),
  total: 30,
};

describe("PiggyBank", () => {
  it("สามารถเพิ่มPiggyBankได้", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyBankComplete);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
  });

  it("สามารถเพิ่มPiggyBankได้  type:Withdraw", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyBankComplete);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
  });
  it("สามารถเพิ่มPiggyBankได้  type:Deposit", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyBankComplete2);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ piggyID:null ", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorpiggyIDEmpty);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ money:null ", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorMoneyEmpty);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ type:null ", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorTypeEmpty);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ date:null ", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorDateEmpty);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ total:null ", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorTotalEmpty);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ total:Minus", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorTotalMinus);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ money:Minus", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorMoneyMinus);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ type: ไม่ใช่ Withdraw หรือ Deposit", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorTypeInvalit);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });

  it("ไมสามารถเพิ่มPiggyBankได้ เพราะ date: dateOld", async () => {
    let error = null;
    try {
      const piggy = new PiggyBank(PiggyErrorDatePast);
      await piggy.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
});
