import Certifications from "./drizzle/build/contracts/Certifications.json";

const options = {
  contracts: [Certifications],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://localhost:9545"
    }
  }
};

export default options;
