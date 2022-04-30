const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const networkId = import.meta.env.VITE_NETWORK_ID;
const networkName = import.meta.env.VITE_NETWORK_NAME;
const validatorApiUrl = import.meta.env.VITE_VALIDATOR_API_URL;
const hcaptchaSitekey = import.meta.env.VITE_HCAPTCHA_SITEKEY;

export {
  networkId,
  networkName,
  contractAddress,
  validatorApiUrl,
  hcaptchaSitekey
};
