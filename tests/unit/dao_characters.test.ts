import { expect } from "chai";

import {
  getAllCharacters,
  getOneCharacterById,
} from "../../dao/dao_characters";

describe("testing dao for characters", () => {
  it("should return all characters", () => {
    const result = getAllCharacters();
    expect(result).to.be.an("array");
    expect(result).to.have.length(16);
  });

  it("should return one character with id 1", () => {
    const result = getOneCharacterById("1");

    expect(result).to.be.an("object");
    expect(result).to.have.property("id", "1");
  });

  it("should return undefined when id does not exist", () => {
    const result = getOneCharacterById("100");

    expect(result).to.be.undefined;
  });
});
