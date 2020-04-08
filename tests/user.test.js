const User = require("../models/User");
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

const userComplete = {
  firstname: "thee",
  lastname: "nugu",
  username: "admin001",
  password: "admin001",
};
const userErrorFirstnameEmpty = {
  firstname: "",
  lastname: "nugu",
  username: "admin001",
  password: "admin001",
};
const userErrorLastnameEmpty = {
  firstname: "thee",
  lastname: "",
  username: "admin001",
  password: "admin001",
};
const userErrorUsernameEmpty = {
  firstname: "thee",
  lastname: "nugu",
  username: "",
  password: "admin001",
};
const userErrorPasswordEmpty = {
  firstname: "thee",
  lastname: "nugu",
  username: "admin001",
  password: "",
};

const userErrorFirstname2Alpkabets = {
  firstname: "re",
  lastname: "nugu",
  username: "admin001",
  password: "admin001",
};

const userErrorLastname2Alpkabets = {
  firstname: "thee",
  lastname: "nu",
  username: "admin001",
  password: "admin001",
};
const userErrorUsername2Alpkabets = {
  firstname: "thee",
  lastname: "nugu",
  username: "ad",
  password: "admin001",
};
const userErrorPassword2Alpkabets = {
  firstname: "thee",
  lastname: "nugu",
  username: "admin001",
  password: "ad",
};

describe("User", () => {
  
  it("สามารถเพิ่มUserได้", async () => {
    let error = null;
    try {
      const user = new User(userComplete);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeNull();
  })

  it("ไมสามารถเพิ่มUserได้ เพราะ firstname:null ", async () => {
    let error = null;
    try {
      const user = new User(userErrorFirstnameEmpty);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
  it("ไมสามารถเพิ่มUserได้ เพราะ lastname:null ", async () => {
    let error = null;
    try {
      const user = new User(userErrorLastnameEmpty);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
  it("ไมสามารถเพิ่มUserได้ เพราะ username:null ", async () => {
    let error = null;
    try {
      const user = new User(userErrorUsernameEmpty);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
  it("ไมสามารถเพิ่มUserได้ เพราะ password:null ", async () => {
    let error = null;
    try {
      const user = new User(userErrorPasswordEmpty);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })

  it("ไมสามารถเพิ่มUserได้ เพราะ Firstname:  2ตัว", async () => {
    let error = null;
    try {
      const user = new User(userErrorFirstname2Alpkabets);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
  it("ไมสามารถเพิ่มUserได้ เพราะ Lastname:  2ตัว", async () => {
    let error = null;
    try {
      const user = new User(userErrorLastname2Alpkabets);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
  it("ไมสามารถเพิ่มUserได้ เพราะ Username:  2ตัว", async () => {
    let error = null;
    try {
      const user = new User(userErrorUsername2Alpkabets);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
  it("ไมสามารถเพิ่มUserได้ เพราะ Password:  2ตัว", async () => {
    let error = null;
    try {
      const user = new User(userErrorPassword2Alpkabets);
      await user.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })

  it("ไมสามารถเพิ่มUserได้ เพราะ username:ต้องไม่ซ้ำกัน", async () => {
    let error = null;
    try {
      const user1 = new User(userComplete);
      await user1.save();
      const user2 = new User(userComplete);
      await user2.save();
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  })
});
