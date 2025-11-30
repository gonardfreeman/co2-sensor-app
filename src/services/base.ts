import { BASE_UUID } from "../constants";

class BaseUuidService {
  private baseUuid = BASE_UUID;
  private shortUuid: number;
  constructor(shortUiid: number) {
    this.shortUuid = shortUiid;
  }

  toUuid() {
    const uuid = [...this.baseUuid];
    uuid[12] = this.shortUuid & 0xff;
    uuid[13] = (this.shortUuid >> 8) & 0xff;

    const hex = uuid.map((b) => b.toString(16).padStart(2, "0"));

    // Format EF68xxxx-9B35-4933-9B10-52FFA9740042 in lowercase
    return [
      hex[15] + hex[14] + hex[13] + hex[12],
      hex[11] + hex[10],
      hex[9] + hex[8],
      hex[7] + hex[6],
      hex[5] + hex[4] + hex[3] + hex[2] + hex[1] + hex[0],
    ]
      .join("-")
      .toLowerCase();
  }
}

export default BaseUuidService;
