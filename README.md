# Sample Counter dApp (Proof-of-Humanity enabled)

DApp permitting **humans** to increment a counter (updated from a basic version).

**In order to sumbit transaction, the sender must solve a hCaptcha to proof their humanity.**

Counter data is stored on-chain.

Once counter reach `99`, next increment will be reverting to `1`.

## Live demo

https://poh-counter.bakoush.in

## Integrating PoH example

- [Initial version (no PoH)](https://github.com/bakoushin/poh-counter-example/tree/basic-counter)
- [List of changes](https://github.com/bakoushin/poh-counter-example/commit/b96d77e2cd802187a9008393ab1bc46749bb2bbe)

## See also

- [Proof-of-Humanity-React](https://npmjs.com/packages/poh-react)
- [Proof-of-Humanity hCaptcha Validator API](https://github.com/bakoushin/poh-validator-hcaptcha-api)
- [Proof-of-Humanity hCaptcha Validator React](https://npmjs.com/package/poh-validator-hcaptcha-react)
- [Proof-of-Humanity Solidity Contracts](https://github.com/bakoushin/poh-contracts)

## Author

Alex Bakoushin

## License

MIT
