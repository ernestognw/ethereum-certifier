import seeders from "./seeders.json";
import Certifications from "./build/contracts/Certifications.json";
import web3js from "web3";

const web3Provider = new web3js.providers.HttpProvider("http://localhost:9545");
const web3 = new web3js(web3Provider);
const contractInstance = new web3.eth.Contract(
  Certifications.abi,
  Certifications.networks[5777].address
);

const seed = async () => {
  const addresses = await web3.eth.getAccounts();
  try {
    const seeds = [];

    for (let i = 0; i < seeders.length; i++) {
      seeds.push(
        contractInstance.methods
          .createCertificate(
            seeders[i].fullName,
            seeders[i].imageUrl,
            seeders[i].course,
            seeders[i].ownerAddress
          )
          .send({ from: addresses[0], gas: 400000, gasPrice: "8000000000" })
      );
    }

    await Promise.all(seeds);
  } catch (err) {
    throw new Error(err);
  }
};

seed();
