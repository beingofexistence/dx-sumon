import axios from "axios"

// for (let i = 0; i < passport_titles.length; i++) {
//   axios
//   .get(passport_facebook)
//   .then((response) => {
//     let url = `https://www.passportjs.org/packages/${passport_titles.title}`;
//     const html = response.data;
//     regex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g);

//     passport_github_repository = `{url:"${regex}"},`;
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })
//   console.log(passport_titles.);

// }
// for (let i = 0; i < passports.length; i++) {
//   axios
//   .get(`https://www.passportjs.org/packages/passport-${passports.title}`)
//   .then((response) => {
//     const html = response.data
//     matcher =
//       "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//     preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//     passport_github_repository = `git clone ${preregex}`;
//     console.log(passport_github_repository);
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })
// }

// passport_titles.map((passport_titles) => {
//   axios
//     .get(
//       `https://www.passportjs.org/packages/${passport_titles.title}`
//     )
//     .then((response) => {
//       const html = response.data
//       matcher =
//         "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//       preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//       passport_github_repository = `git clone ${preregex}`
//       console.log(passport_github_repository)
//     })
//     .catch((error) => {
//       console.error("Error fetching the page:", error)
//     })
// })
// axios
//   .get(
//     `https://blockspot.io/wallet/`
//   )
//   .then((response) => {
//     const html = response.data
//   //   matcher =
//   //     "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//   //   preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//   //   passport_github_repository = `git clone ${preregex}`
//     console.log(html)
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })

// let evm_wallets = [];

// const evm_wallet = [
//   {
//     title: "MetaMask",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Trust Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Safe",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Rainbow",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Uniswap Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zerion",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "imToken",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99520548-525c-49d7-fb2f-5db65293b000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Argent",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Spot",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Omni",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Crypto.com | DeFi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "OKX Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "TokenPocket",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Robinhood Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Frontier",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Blockchain.com",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SafePal",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BitKeep",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zengo Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "1inch Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52b1da3c-9e72-40ae-5dac-6142addd9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Binance DeFi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Exodus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ledger Live",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MEW wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AlphaWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "KEYRING PRO",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "LOBSTR Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ONTO",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MathWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Obvious",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Fireblocks",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ambire Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Infinity Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bridge Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Internet Money Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "NOW Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitcoin.com Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d7938e1-9b3b-4d8b-177b-98188c4cf400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "αU wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/58a5b183-4d44-4cdd-22da-e89f49fa4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coin98 Super App",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ABC Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9854c79-14ba-4987-42e1-4a82abbf5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ottr Finance",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Arculus Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Opera Crypto Browser",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cobalt Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Chain",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Huddln",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Verso",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Jade Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HaHa",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/79285c9f-2630-451e-0680-c71b42fb7400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Modular Wallet Prod",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Kelp",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02d9143d-deed-4336-0cae-f4b8b1091f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Numio",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cling Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Broearn Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coinomi",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ripio Portal",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sabay Wallet App",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4df7014-abaf-4016-8180-fb994804b400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tokoin | My-T Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Impersonator",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b072a0c6-1bc2-4a80-6f05-50a4ebbf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Fncy Mobile Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1c8d374-dff3-419c-96af-3515d0192100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Copiosa",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae1be94-9f53-4eba-b915-f6e381d5a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Imota ",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Libera",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Certhis",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Burrito Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ancrypto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8dee1c33-b277-4a5a-5ddd-5e70fd9d1800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cypherock cySync",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CVL Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cypher Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Status",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Enjin Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Essentials",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Everspace",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BlockWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Kriptomat",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Oxalus Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Theta Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Dawn Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Rabby",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Leap Cosmos Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ISLAMIwallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8d723c78-28ad-4610-901f-ea391d7e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UPBOND Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/698e08f3-b452-4c91-9f65-299939396a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "VIVE Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Wirex Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/769739aa-ff45-4db5-c6e6-70590741ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BCERTin wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Monarch Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "FILWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f400f6c2-ca6c-487b-654d-e119af247500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Valora",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoinCircle",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MyWalliD",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BRISE Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/09a4e1d9-e4de-44fa-f248-5495ba9ab300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Snowball",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/313faea4-af8c-41f4-0ed8-98be5d048e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "GameStop Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ParaSwap Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73dc6b30-b644-46e6-020c-5926851df600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ballet Crypto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/542094e6-70d6-4b0d-4c8f-b61cc2c38500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UvToken",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a0057241-cd91-4a53-7175-016b76bfd900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "RealT Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf1f251b-08a5-4b27-ae4a-201a5f698900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SahalWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d29d6426-b6f2-481b-12d8-7b20ec82af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ApolloX",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Enno Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ae4f5167-0b61-43bd-7d76-1f8579271000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nitrogen Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Loopring Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "A4 Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a788c03-daf7-4d93-fa3a-f94e2b719900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BeeWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f86199e-5142-4314-91b8-c23a59e9dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Dohrnii Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "LocalTrade Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Xcapit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "BCVault",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Safematrix",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48ea5de9-869a-4994-2402-97afba060900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Neon Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Absolute Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Locker Token",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37401d35-3fa1-451c-802d-604940315800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sequence Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2d5c39c-a485-4efa-5736-a782204e4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Linen",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nabox",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b75e9f7-2ca8-4a33-ed2b-4e8a0c048d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Marble",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Spatium",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51867bee-2963-4071-d67a-1fdcaa451f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cryptnox Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ownbit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/19923b08-7208-4539-9c2d-c43db22bce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ID Pocket",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Assure",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64db7104-c8b7-44ea-e102-11ce87124200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Flooz",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a04f368-4f56-4c12-0bfa-93b14bb20800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ATON",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Keplr",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Brave Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Crossmint",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Gryfyn",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "pier",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Core",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35f9c46e-cc57-4aa7-315d-e6ccb2a1d600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Taho",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Torus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Frame",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Keeper",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Uniblow",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "D'CENT Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Paper",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Klever Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Edge Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f601bc29-4298-422f-dbf7-34dac2884f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "NeftiWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f812dec-be3d-446c-52f7-a79eb0dd5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "GoldBit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11974ef1-21ab-4806-a2b1-362c31499900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coingrig",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18e38e41-a387-4402-ca31-6d2d5eb91100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "XFUN Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a665f8f3-09ef-4d17-2bd0-26dca4518400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "RiceWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df94578e-19be-4f00-258f-2470343e7b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ancrypto Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4382329-e288-4d7a-0ac8-3eb0facfb900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Okse Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Aktionariat",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "iToken Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zelus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aeba2105-6c84-4642-f441-b3f5817ac400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Talk+",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d24cdd56-6f55-42da-631b-c25974c36f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Card Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/325428cf-c212-4d83-a434-7f48902d2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PayBolt",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Arianee Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ace938a9-c906-4b9e-f683-b85f1ab72800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Slavi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Plasma Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ioPay",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18891f5a-fd0f-4126-7d1a-452be6714700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Defiant",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11a96ca4-3592-42ae-c781-2b7265ec9200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "StrikeX Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Avacus",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ByteBank",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoolWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Opto Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "TK Finance",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4066f68-2247-49bf-ac8a-a677bfa81800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bee Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Pitaka",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/691c0716-5213-4b99-e837-079268313800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MDAO Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PLTwallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "helix id",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4083ef71-8389-4682-ded6-0099236d2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AirGap Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Qubic Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/535c91a5-a43c-4104-233c-439449ffcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Haven Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b41fc3f2-a874-45ae-4d4f-cdf47da89500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Holdstation Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Earth Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MetaOne",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "3S Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SimpleHold",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Payperless",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a867e30-44c9-4627-6281-33457b8e2100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Minerva Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Volt: DeFi",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51d783cb-0686-4ffa-e661-edca0c380000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Lif3 Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Shinobi-Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "KryptoGO Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3ccbd966-97e8-45a0-1ceb-6141a8978e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Autonomy: Digital Art Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/126a7683-2349-45c6-ed19-0e27a645c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bifrost Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/86be07e2-6652-4fd1-5f33-651682c95400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nufinetes",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Wallet 3",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Abra Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "iMe",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/25aa3abf-901b-4d82-bb89-c5ade54c0c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PREMA Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "OneKey",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Slingshot Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Kriptonio",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Timeless Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Venly",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Phantom",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coinbase Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitski",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MPCWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "XDEFI Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "TREASURE",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b5d45f6-117c-44a0-d7b0-71c28864a100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Streakk Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sender",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6fb46282-3d15-4c8a-41ae-0d52115e3f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SaitaPro",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65bdc812-5692-441f-abcb-a389b754a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Lilico",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Hippo Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Cosmostation",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitizen",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Blocto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HUMBL WALLET",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ac55ba2-aa98-4ed0-59b3-b3155dea4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SafeMoon",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PassPay Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ultimate",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MeWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "THORWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45165bea-fdae-454e-7caa-31681f255200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Fizz",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "PiEthereum Hardware",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/310a5036-3c8f-4bfc-0510-cba61d7d5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Reunit",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Arianee Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tholos",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Stickey Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Klip",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoinStats",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "LikerLand App",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Krystal",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "KeepKey Desktop",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Pillar",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/87737170-f79f-4359-338b-7c30856c9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HARTi Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Stasis Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nova Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "meta-WONDER-verse",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "DTTD",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "FoxWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d994a61e-c1df-49cb-cf4c-10ec51338400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "HAQQ Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "tomiPAY",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "StrikeX Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nash",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/93a15cd2-8f0d-4bf6-1545-6bdf745c2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bybit Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SubWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Okto",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Catecoin Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UKISS Hub",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tellaw Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tangem Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Callback",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SA ASSISTANT",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Xellar",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/89cf9926-00bf-4152-d98f-cac53d7cad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Talken Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "U2U Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Shido Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd5c7007-4572-41c7-a9b8-b97d071adb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "OzoneWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4eb57479-515a-463a-9fcb-c20e9cc60c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Tidus Wallet ",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Impact Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Wirex Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/66b40d9b-7314-42dd-cacf-4e324b0c2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Zelcore",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "DOSI Vault",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "WOW EARN",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "ELLIPAL",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Unstoppable Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a63cbfce-0726-4f94-9187-a761afb94400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Aurora Pass",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d93eeba-edce-431c-4293-e25784e61f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitverse",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5851c585-0f2b-41a1-a36a-221a18af5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Konio",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/028c7760-a1af-43ea-7ac7-8b811712b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Gate.io",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "UTORG",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "CoinWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AmmerWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Binance.US",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SISTEMAS",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eda865c8-746b-4536-9d57-7d7de0555400?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MUZA",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9934307c-0a39-4c60-7fd0-4cb9297f3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "FxWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46a80541-e639-483d-e230-731fcbf13000?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "RYIPAY",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb6e9045-24db-428a-7661-5b3365cc2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Ronin Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dff7f251-5116-460b-54f7-b14c5343b800?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Sequel Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MetaWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Altme",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eeac6e8-6852-4d09-8579-e229fd6b9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Unido",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Bitpie",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "MOONSTAKE",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/22374fae-244c-4224-2e3d-c14912f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "IndiGG",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e90a32f-130d-4317-7294-4884510aa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Yuse Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Coininn Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Safe App Syscoin",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "f(x)Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "pockie",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "AmazeWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38495eb4-efcf-47cb-be73-a695510f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "atato custody",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53878398-b6da-4384-47dc-bc744acd5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Pali Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Nunu",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a4a42e1d-b43d-4fa1-b8b3-daf4e6b61c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "NuFi",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "EASY",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Solace",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "Meter Wallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
//   {
//     title: "SuperWallet",
//     logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7ce7b31-5439-4a99-06f9-aa62f3ae4e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
//   },
// ]

// evm_wallet.map((wallets) => {
// return evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`;

// })

let evm_wallets = []

const evm_wallet = [
  {
    title: "MetaMask",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Trust Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Safe",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Rainbow",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Uniswap Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zerion",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "imToken",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99520548-525c-49d7-fb2f-5db65293b000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Argent",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Spot",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Omni",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Crypto.com | DeFi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OKX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "TokenPocket",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Robinhood Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Frontier",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Blockchain.com",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafePal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BitKeep",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zengo Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "1inch Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52b1da3c-9e72-40ae-5dac-6142addd9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Binance DeFi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Exodus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ledger Live",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MEW wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AlphaWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "KEYRING PRO",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "LOBSTR Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ONTO",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MathWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Obvious",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fireblocks",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ambire Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Infinity Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bridge Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Internet Money Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "NOW Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitcoin.com Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0d7938e1-9b3b-4d8b-177b-98188c4cf400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "αU wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/58a5b183-4d44-4cdd-22da-e89f49fa4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coin98 Super App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ABC Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9854c79-14ba-4987-42e1-4a82abbf5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ottr Finance",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Arculus Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Opera Crypto Browser",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cobalt Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Chain",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Huddln",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Verso",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Jade Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HaHa",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/79285c9f-2630-451e-0680-c71b42fb7400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Modular Wallet Prod",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Kelp",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/02d9143d-deed-4336-0cae-f4b8b1091f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Numio",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cling Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Broearn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coinomi",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ripio Portal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sabay Wallet App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4df7014-abaf-4016-8180-fb994804b400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tokoin | My-T Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Impersonator",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b072a0c6-1bc2-4a80-6f05-50a4ebbf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fncy Mobile Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1c8d374-dff3-419c-96af-3515d0192100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Copiosa",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae1be94-9f53-4eba-b915-f6e381d5a500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Imota ",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Libera",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Certhis",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Burrito Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ancrypto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8dee1c33-b277-4a5a-5ddd-5e70fd9d1800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cypherock cySync",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CVL Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cypher Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Status",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Enjin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Essentials",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Everspace",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BlockWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Kriptomat",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Oxalus Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Theta Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Dawn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Rabby",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Leap Cosmos Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ISLAMIwallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8d723c78-28ad-4610-901f-ea391d7e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UPBOND Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/698e08f3-b452-4c91-9f65-299939396a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "VIVE Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Wirex Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/769739aa-ff45-4db5-c6e6-70590741ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BCERTin wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Monarch Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "FILWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f400f6c2-ca6c-487b-654d-e119af247500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Valora",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinCircle",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MyWalliD",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BRISE Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/09a4e1d9-e4de-44fa-f248-5495ba9ab300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Snowball",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/313faea4-af8c-41f4-0ed8-98be5d048e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "GameStop Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ParaSwap Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/73dc6b30-b644-46e6-020c-5926851df600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ballet Crypto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/542094e6-70d6-4b0d-4c8f-b61cc2c38500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UvToken",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a0057241-cd91-4a53-7175-016b76bfd900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "RealT Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf1f251b-08a5-4b27-ae4a-201a5f698900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SahalWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d29d6426-b6f2-481b-12d8-7b20ec82af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ApolloX",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Enno Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ae4f5167-0b61-43bd-7d76-1f8579271000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nitrogen Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Loopring Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "A4 Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7a788c03-daf7-4d93-fa3a-f94e2b719900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BeeWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f86199e-5142-4314-91b8-c23a59e9dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Dohrnii Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "LocalTrade Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Xcapit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "BCVault",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Safematrix",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48ea5de9-869a-4994-2402-97afba060900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Neon Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Absolute Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Locker Token",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37401d35-3fa1-451c-802d-604940315800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sequence Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2d5c39c-a485-4efa-5736-a782204e4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Linen",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nabox",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3b75e9f7-2ca8-4a33-ed2b-4e8a0c048d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Marble",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Spatium",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51867bee-2963-4071-d67a-1fdcaa451f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cryptnox Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ownbit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/19923b08-7208-4539-9c2d-c43db22bce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ID Pocket",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Assure",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/64db7104-c8b7-44ea-e102-11ce87124200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Flooz",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a04f368-4f56-4c12-0bfa-93b14bb20800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ATON",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Keplr",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Brave Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Crossmint",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Gryfyn",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "pier",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Core",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/35f9c46e-cc57-4aa7-315d-e6ccb2a1d600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Taho",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Torus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Frame",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Keeper",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Uniblow",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "D'CENT Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Paper",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Klever Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Edge Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f601bc29-4298-422f-dbf7-34dac2884f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "NeftiWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1f812dec-be3d-446c-52f7-a79eb0dd5400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "GoldBit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11974ef1-21ab-4806-a2b1-362c31499900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coingrig",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18e38e41-a387-4402-ca31-6d2d5eb91100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "XFUN Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a665f8f3-09ef-4d17-2bd0-26dca4518400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "RiceWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/df94578e-19be-4f00-258f-2470343e7b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ancrypto Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d4382329-e288-4d7a-0ac8-3eb0facfb900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Okse Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Aktionariat",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "iToken Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zelus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/aeba2105-6c84-4642-f441-b3f5817ac400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Talk+",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d24cdd56-6f55-42da-631b-c25974c36f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Card Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/325428cf-c212-4d83-a434-7f48902d2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PayBolt",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Arianee Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ace938a9-c906-4b9e-f683-b85f1ab72800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Slavi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Plasma Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ioPay",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/18891f5a-fd0f-4126-7d1a-452be6714700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Defiant",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/11a96ca4-3592-42ae-c781-2b7265ec9200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "StrikeX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Avacus",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ByteBank",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoolWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Opto Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "TK Finance",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c4066f68-2247-49bf-ac8a-a677bfa81800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bee Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Pitaka",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/691c0716-5213-4b99-e837-079268313800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MDAO Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PLTwallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "helix id",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4083ef71-8389-4682-ded6-0099236d2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AirGap Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Qubic Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/535c91a5-a43c-4104-233c-439449ffcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Haven Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b41fc3f2-a874-45ae-4d4f-cdf47da89500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Holdstation Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Earth Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MetaOne",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "3S Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SimpleHold",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Payperless",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a867e30-44c9-4627-6281-33457b8e2100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Minerva Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Volt: DeFi",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/51d783cb-0686-4ffa-e661-edca0c380000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Lif3 Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Shinobi-Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "KryptoGO Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3ccbd966-97e8-45a0-1ceb-6141a8978e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Autonomy: Digital Art Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/126a7683-2349-45c6-ed19-0e27a645c000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bifrost Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/86be07e2-6652-4fd1-5f33-651682c95400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nufinetes",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Wallet 3",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Abra Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "iMe",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/25aa3abf-901b-4d82-bb89-c5ade54c0c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PREMA Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OneKey",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Slingshot Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Kriptonio",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Timeless Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Venly",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Phantom",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coinbase Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitski",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MPCWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "XDEFI Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "TREASURE",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6b5d45f6-117c-44a0-d7b0-71c28864a100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Streakk Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sender",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6fb46282-3d15-4c8a-41ae-0d52115e3f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SaitaPro",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65bdc812-5692-441f-abcb-a389b754a700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Lilico",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Hippo Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Cosmostation",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitizen",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Blocto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HUMBL WALLET",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ac55ba2-aa98-4ed0-59b3-b3155dea4200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SafeMoon",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PassPay Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ultimate",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MeWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "THORWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/45165bea-fdae-454e-7caa-31681f255200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Fizz",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "PiEthereum Hardware",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/310a5036-3c8f-4bfc-0510-cba61d7d5100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Reunit",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Arianee Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tholos",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Stickey Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Klip",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinStats",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "LikerLand App",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Krystal",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "KeepKey Desktop",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Pillar",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/87737170-f79f-4359-338b-7c30856c9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HARTi Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Stasis Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nova Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "meta-WONDER-verse",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "DTTD",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "FoxWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d994a61e-c1df-49cb-cf4c-10ec51338400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "HAQQ Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "tomiPAY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "StrikeX Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nash",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/93a15cd2-8f0d-4bf6-1545-6bdf745c2300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bybit Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SubWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Okto",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Catecoin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UKISS Hub",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tellaw Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tangem Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Callback",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SA ASSISTANT",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Xellar",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/89cf9926-00bf-4152-d98f-cac53d7cad00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Talken Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "U2U Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Shido Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dd5c7007-4572-41c7-a9b8-b97d071adb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "OzoneWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4eb57479-515a-463a-9fcb-c20e9cc60c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Tidus Wallet ",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Impact Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Wirex Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/66b40d9b-7314-42dd-cacf-4e324b0c2000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Zelcore",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "DOSI Vault",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "WOW EARN",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "ELLIPAL",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Unstoppable Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a63cbfce-0726-4f94-9187-a761afb94400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Aurora Pass",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6d93eeba-edce-431c-4293-e25784e61f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitverse",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/5851c585-0f2b-41a1-a36a-221a18af5200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Konio",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/028c7760-a1af-43ea-7ac7-8b811712b700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Gate.io",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "UTORG",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "CoinWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AmmerWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Binance.US",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SISTEMAS",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/eda865c8-746b-4536-9d57-7d7de0555400?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MUZA",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/9934307c-0a39-4c60-7fd0-4cb9297f3900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "FxWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/46a80541-e639-483d-e230-731fcbf13000?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "RYIPAY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bb6e9045-24db-428a-7661-5b3365cc2800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Ronin Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/dff7f251-5116-460b-54f7-b14c5343b800?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Sequel Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MetaWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Altme",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/7eeac6e8-6852-4d09-8579-e229fd6b9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Unido",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Bitpie",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "MOONSTAKE",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/22374fae-244c-4224-2e3d-c14912f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "IndiGG",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/8e90a32f-130d-4317-7294-4884510aa300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Yuse Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Coininn Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Safe App Syscoin",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "f(x)Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "pockie",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "AmazeWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/38495eb4-efcf-47cb-be73-a695510f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "atato custody",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/53878398-b6da-4384-47dc-bc744acd5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Pali Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Nunu",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a4a42e1d-b43d-4fa1-b8b3-daf4e6b61c00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "NuFi",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "EASY",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Solace",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "Meter Wallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
  {
    title: "SuperWallet",
    logo: "https://explorer-api.walletconnect.com/v3/logo/lg/a7ce7b31-5439-4a99-06f9-aa62f3ae4e00?projectId=2f05ae7f1116030fde2d36508f472bfb",
  },
]
evm_wallet.map((wallets) => {
  evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`
  console.log(evm_wallets);
})
// for (let i = 0; i < evm_wallet.length; i++) {
//   // evm_wallets = `{title:"${evm_wallet.title}",href:"docs/hack(evm-wallets)/${evm_wallet.title}",description:"Not Provided(coming soon)",logo:"${evm_wallet.logo}",items:[]},`
//   // console.log(evm_wallets)
//   evm_wallet.map((wallets) => {
//     evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`;
//     console.log(evm_wallets);
//   })
// }
// evm_wallet.map((wallets) => {
//   return (evm_wallets = `{title:"${wallets.title}",href:"docs/hack(evm-wallets)/${wallets.title}",description:"Not Provided(coming soon)",logo:"${wallets.logo}",items:[]},`)
// })

const evm = [
  {title:"MetaMask",href:"docs/hack(evm-wallets)/MetaMask",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/5195e9db-94d8-4579-6f11-ef553be95100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Trust Wallet",href:"docs/hack(evm-wallets)/Trust Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0528ee7e-16d1-4089-21e3-bbfb41933100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Safe",href:"docs/hack(evm-wallets)/Safe",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Rainbow",href:"docs/hack(evm-wallets)/Rainbow",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Uniswap Wallet",href:"docs/hack(evm-wallets)/Uniswap Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Zerion",href:"docs/hack(evm-wallets)/Zerion",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"imToken",href:"docs/hack(evm-wallets)/imToken",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/99520548-525c-49d7-fb2f-5db65293b000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Argent",href:"docs/hack(evm-wallets)/Argent",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/215158d2-614b-49c9-410f-77aa661c3900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Spot",href:"docs/hack(evm-wallets)/Spot",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1bf33a89-b049-4a1c-d1f6-4dd7419ee400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Omni",href:"docs/hack(evm-wallets)/Omni",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Crypto.com | DeFi Wallet",href:"docs/hack(evm-wallets)/Crypto.com | DeFi Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7c5ff577-a68d-49c5-02cd-3d83637b0b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"OKX Wallet",href:"docs/hack(evm-wallets)/OKX Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"TokenPocket",href:"docs/hack(evm-wallets)/TokenPocket",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f3119826-4ef5-4d31-4789-d4ae5c18e400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Robinhood Wallet",href:"docs/hack(evm-wallets)/Robinhood Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Frontier",href:"docs/hack(evm-wallets)/Frontier",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Blockchain.com",href:"docs/hack(evm-wallets)/Blockchain.com",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SafePal",href:"docs/hack(evm-wallets)/SafePal",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/252753e7-b783-4e03-7f77-d39864530900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"BitKeep",href:"docs/hack(evm-wallets)/BitKeep",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3f7075d0-4ab7-4db5-404d-3e4c05e6fe00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Zengo Wallet",href:"docs/hack(evm-wallets)/Zengo Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"1inch Wallet",href:"docs/hack(evm-wallets)/1inch Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/52b1da3c-9e72-40ae-5dac-6142addd9c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Binance DeFi Wallet",href:"docs/hack(evm-wallets)/Binance DeFi Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Exodus",href:"docs/hack(evm-wallets)/Exodus",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ledger Live",href:"docs/hack(evm-wallets)/Ledger Live",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MEW wallet",href:"docs/hack(evm-wallets)/MEW wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e2024511-2c9b-46d7-3111-52df3d241700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"AlphaWallet",href:"docs/hack(evm-wallets)/AlphaWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"KEYRING PRO",href:"docs/hack(evm-wallets)/KEYRING PRO",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"LOBSTR Wallet",href:"docs/hack(evm-wallets)/LOBSTR Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ONTO",href:"docs/hack(evm-wallets)/ONTO",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d22b2a4b-5562-49ba-506b-6d5986914600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MathWallet",href:"docs/hack(evm-wallets)/MathWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Obvious",href:"docs/hack(evm-wallets)/Obvious",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Fireblocks",href:"docs/hack(evm-wallets)/Fireblocks",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ambire Wallet",href:"docs/hack(evm-wallets)/Ambire Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c39b3a16-1a38-4588-f089-cb7aeb584700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Infinity Wallet",href:"docs/hack(evm-wallets)/Infinity Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/9f259366-0bcd-4817-0af9-f78773e41900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bridge Wallet",href:"docs/hack(evm-wallets)/Bridge Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Internet Money Wallet",href:"docs/hack(evm-wallets)/Internet Money Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"NOW Wallet",href:"docs/hack(evm-wallets)/NOW Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bitcoin.com Wallet",href:"docs/hack(evm-wallets)/Bitcoin.com Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0d7938e1-9b3b-4d8b-177b-98188c4cf400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"αU wallet",href:"docs/hack(evm-wallets)/αU wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/58a5b183-4d44-4cdd-22da-e89f49fa4c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Coin98 Super App",href:"docs/hack(evm-wallets)/Coin98 Super App",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/fc460647-ea95-447a-99f0-1bff8fa4be00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ABC Wallet",href:"docs/hack(evm-wallets)/ABC Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f9854c79-14ba-4987-42e1-4a82abbf5700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ottr Finance",href:"docs/hack(evm-wallets)/Ottr Finance",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7025146c-c341-473f-a79c-62ec48eef800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Arculus Wallet",href:"docs/hack(evm-wallets)/Arculus Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Opera Crypto Browser",href:"docs/hack(evm-wallets)/Opera Crypto Browser",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Cobalt Wallet",href:"docs/hack(evm-wallets)/Cobalt Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/29d914e5-9daa-4342-33cd-169155c5a600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Chain",href:"docs/hack(evm-wallets)/Chain",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Huddln",href:"docs/hack(evm-wallets)/Huddln",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Verso",href:"docs/hack(evm-wallets)/Verso",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Jade Wallet",href:"docs/hack(evm-wallets)/Jade Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"HaHa",href:"docs/hack(evm-wallets)/HaHa",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/79285c9f-2630-451e-0680-c71b42fb7400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Modular Wallet Prod",href:"docs/hack(evm-wallets)/Modular Wallet Prod",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/70485da2-2568-463d-722c-25082997cc00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Kelp",href:"docs/hack(evm-wallets)/Kelp",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/02d9143d-deed-4336-0cae-f4b8b1091f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Numio",href:"docs/hack(evm-wallets)/Numio",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Cling Wallet",href:"docs/hack(evm-wallets)/Cling Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Broearn Wallet",href:"docs/hack(evm-wallets)/Broearn Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b3c2c77c-a8cf-46e1-095a-77f0a3891500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Coinomi",href:"docs/hack(evm-wallets)/Coinomi",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ripio Portal",href:"docs/hack(evm-wallets)/Ripio Portal",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/fd56c695-ce58-4df5-1625-767571c80700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Sabay Wallet App",href:"docs/hack(evm-wallets)/Sabay Wallet App",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c4df7014-abaf-4016-8180-fb994804b400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Tokoin | My-T Wallet",href:"docs/hack(evm-wallets)/Tokoin | My-T Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Impersonator",href:"docs/hack(evm-wallets)/Impersonator",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b072a0c6-1bc2-4a80-6f05-50a4ebbf0700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Fncy Mobile Wallet",href:"docs/hack(evm-wallets)/Fncy Mobile Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c1c8d374-dff3-419c-96af-3515d0192100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Copiosa",href:"docs/hack(evm-wallets)/Copiosa",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/cae1be94-9f53-4eba-b915-f6e381d5a500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Imota ",href:"docs/hack(evm-wallets)/Imota ",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Libera",href:"docs/hack(evm-wallets)/Libera",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Certhis",href:"docs/hack(evm-wallets)/Certhis",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Burrito Wallet",href:"docs/hack(evm-wallets)/Burrito Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ancrypto",href:"docs/hack(evm-wallets)/Ancrypto",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8dee1c33-b277-4a5a-5ddd-5e70fd9d1800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Cypherock cySync",href:"docs/hack(evm-wallets)/Cypherock cySync",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"CVL Wallet",href:"docs/hack(evm-wallets)/CVL Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Cypher Wallet",href:"docs/hack(evm-wallets)/Cypher Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7bce0965-a4cc-4aad-6217-009d51017500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Status",href:"docs/hack(evm-wallets)/Status",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e131fa98-8c4f-4680-f5b6-6fb77189c900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Enjin Wallet",href:"docs/hack(evm-wallets)/Enjin Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Essentials",href:"docs/hack(evm-wallets)/Essentials",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Everspace",href:"docs/hack(evm-wallets)/Everspace",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"BlockWallet",href:"docs/hack(evm-wallets)/BlockWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Kriptomat",href:"docs/hack(evm-wallets)/Kriptomat",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Oxalus Wallet",href:"docs/hack(evm-wallets)/Oxalus Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Theta Wallet",href:"docs/hack(evm-wallets)/Theta Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Dawn Wallet",href:"docs/hack(evm-wallets)/Dawn Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Rabby",href:"docs/hack(evm-wallets)/Rabby",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Leap Cosmos Wallet",href:"docs/hack(evm-wallets)/Leap Cosmos Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/73e6b2b2-8c02-42e9-84f5-82a859978200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ISLAMIwallet",href:"docs/hack(evm-wallets)/ISLAMIwallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8d723c78-28ad-4610-901f-ea391d7e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"UPBOND Wallet",href:"docs/hack(evm-wallets)/UPBOND Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/698e08f3-b452-4c91-9f65-299939396a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"VIVE Wallet",href:"docs/hack(evm-wallets)/VIVE Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/5ef7e40e-1f02-4da2-54bf-992e3e83e100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Wirex Wallet",href:"docs/hack(evm-wallets)/Wirex Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/769739aa-ff45-4db5-c6e6-70590741ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"BCERTin wallet",href:"docs/hack(evm-wallets)/BCERTin wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Monarch Wallet",href:"docs/hack(evm-wallets)/Monarch Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"FILWallet",href:"docs/hack(evm-wallets)/FILWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f400f6c2-ca6c-487b-654d-e119af247500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Valora",href:"docs/hack(evm-wallets)/Valora",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"CoinCircle",href:"docs/hack(evm-wallets)/CoinCircle",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MyWalliD",href:"docs/hack(evm-wallets)/MyWalliD",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"BRISE Wallet",href:"docs/hack(evm-wallets)/BRISE Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/09a4e1d9-e4de-44fa-f248-5495ba9ab300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Snowball",href:"docs/hack(evm-wallets)/Snowball",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/313faea4-af8c-41f4-0ed8-98be5d048e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"GameStop Wallet",href:"docs/hack(evm-wallets)/GameStop Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ParaSwap Wallet",href:"docs/hack(evm-wallets)/ParaSwap Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/73dc6b30-b644-46e6-020c-5926851df600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ballet Crypto",href:"docs/hack(evm-wallets)/Ballet Crypto",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/542094e6-70d6-4b0d-4c8f-b61cc2c38500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"UvToken",href:"docs/hack(evm-wallets)/UvToken",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a0057241-cd91-4a53-7175-016b76bfd900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"RealT Wallet",href:"docs/hack(evm-wallets)/RealT Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/bf1f251b-08a5-4b27-ae4a-201a5f698900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SahalWallet",href:"docs/hack(evm-wallets)/SahalWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d29d6426-b6f2-481b-12d8-7b20ec82af00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ApolloX",href:"docs/hack(evm-wallets)/ApolloX",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Enno Wallet",href:"docs/hack(evm-wallets)/Enno Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/ae4f5167-0b61-43bd-7d76-1f8579271000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Nitrogen Wallet",href:"docs/hack(evm-wallets)/Nitrogen Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/af185895-cda5-4eaf-e31b-28b6fe4b0800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Loopring Wallet",href:"docs/hack(evm-wallets)/Loopring Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"A4 Wallet",href:"docs/hack(evm-wallets)/A4 Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7a788c03-daf7-4d93-fa3a-f94e2b719900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"BeeWallet",href:"docs/hack(evm-wallets)/BeeWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8f86199e-5142-4314-91b8-c23a59e9dc00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Dohrnii Wallet",href:"docs/hack(evm-wallets)/Dohrnii Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"LocalTrade Wallet",href:"docs/hack(evm-wallets)/LocalTrade Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Xcapit",href:"docs/hack(evm-wallets)/Xcapit",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"BCVault",href:"docs/hack(evm-wallets)/BCVault",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Safematrix",href:"docs/hack(evm-wallets)/Safematrix",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/48ea5de9-869a-4994-2402-97afba060900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Neon Wallet",href:"docs/hack(evm-wallets)/Neon Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Absolute Wallet",href:"docs/hack(evm-wallets)/Absolute Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/03797059-fc49-4adc-7b93-503290b62300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Locker Token",href:"docs/hack(evm-wallets)/Locker Token",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/37401d35-3fa1-451c-802d-604940315800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Sequence Wallet",href:"docs/hack(evm-wallets)/Sequence Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b2d5c39c-a485-4efa-5736-a782204e4a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Linen",href:"docs/hack(evm-wallets)/Linen",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Nabox",href:"docs/hack(evm-wallets)/Nabox",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3b75e9f7-2ca8-4a33-ed2b-4e8a0c048d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Marble",href:"docs/hack(evm-wallets)/Marble",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Spatium",href:"docs/hack(evm-wallets)/Spatium",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/51867bee-2963-4071-d67a-1fdcaa451f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Cryptnox Wallet",href:"docs/hack(evm-wallets)/Cryptnox Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ownbit",href:"docs/hack(evm-wallets)/Ownbit",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/19923b08-7208-4539-9c2d-c43db22bce00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ID Pocket",href:"docs/hack(evm-wallets)/ID Pocket",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Assure",href:"docs/hack(evm-wallets)/Assure",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/64db7104-c8b7-44ea-e102-11ce87124200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Flooz",href:"docs/hack(evm-wallets)/Flooz",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0a04f368-4f56-4c12-0bfa-93b14bb20800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ATON",href:"docs/hack(evm-wallets)/ATON",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Keplr",href:"docs/hack(evm-wallets)/Keplr",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Brave Wallet",href:"docs/hack(evm-wallets)/Brave Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Crossmint",href:"docs/hack(evm-wallets)/Crossmint",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Gryfyn",href:"docs/hack(evm-wallets)/Gryfyn",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"pier",href:"docs/hack(evm-wallets)/pier",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Core",href:"docs/hack(evm-wallets)/Core",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/35f9c46e-cc57-4aa7-315d-e6ccb2a1d600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Taho",href:"docs/hack(evm-wallets)/Taho",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Torus",href:"docs/hack(evm-wallets)/Torus",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Frame",href:"docs/hack(evm-wallets)/Frame",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Keeper",href:"docs/hack(evm-wallets)/Keeper",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Uniblow",href:"docs/hack(evm-wallets)/Uniblow",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"D'CENT Wallet",href:"docs/hack(evm-wallets)/D'CENT Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c68b81d1-a400-4a07-6d9d-28edda986d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Paper",href:"docs/hack(evm-wallets)/Paper",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Klever Wallet",href:"docs/hack(evm-wallets)/Klever Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Edge Wallet",href:"docs/hack(evm-wallets)/Edge Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f601bc29-4298-422f-dbf7-34dac2884f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"NeftiWallet",href:"docs/hack(evm-wallets)/NeftiWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1f812dec-be3d-446c-52f7-a79eb0dd5400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"GoldBit",href:"docs/hack(evm-wallets)/GoldBit",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/11974ef1-21ab-4806-a2b1-362c31499900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Coingrig",href:"docs/hack(evm-wallets)/Coingrig",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/18e38e41-a387-4402-ca31-6d2d5eb91100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"XFUN Wallet",href:"docs/hack(evm-wallets)/XFUN Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a665f8f3-09ef-4d17-2bd0-26dca4518400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"RiceWallet",href:"docs/hack(evm-wallets)/RiceWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/df94578e-19be-4f00-258f-2470343e7b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ancrypto Wallet",href:"docs/hack(evm-wallets)/Ancrypto Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d4382329-e288-4d7a-0ac8-3eb0facfb900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Okse Wallet",href:"docs/hack(evm-wallets)/Okse Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Aktionariat",href:"docs/hack(evm-wallets)/Aktionariat",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"iToken Wallet",href:"docs/hack(evm-wallets)/iToken Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/5cd60c34-038d-470c-c024-d58f64260200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Zelus",href:"docs/hack(evm-wallets)/Zelus",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/aeba2105-6c84-4642-f441-b3f5817ac400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Talk+",href:"docs/hack(evm-wallets)/Talk+",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d24cdd56-6f55-42da-631b-c25974c36f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Card Wallet",href:"docs/hack(evm-wallets)/Card Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/325428cf-c212-4d83-a434-7f48902d2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"PayBolt",href:"docs/hack(evm-wallets)/PayBolt",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Arianee Wallet",href:"docs/hack(evm-wallets)/Arianee Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/ace938a9-c906-4b9e-f683-b85f1ab72800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Slavi Wallet",href:"docs/hack(evm-wallets)/Slavi Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/282ce060-0beb-4236-b7b0-1b34cc6c8f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Plasma Wallet",href:"docs/hack(evm-wallets)/Plasma Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ioPay",href:"docs/hack(evm-wallets)/ioPay",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/18891f5a-fd0f-4126-7d1a-452be6714700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Defiant",href:"docs/hack(evm-wallets)/Defiant",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/11a96ca4-3592-42ae-c781-2b7265ec9200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"StrikeX Wallet",href:"docs/hack(evm-wallets)/StrikeX Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/cae46de2-b432-4002-8bc8-1f0e7380b200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Avacus",href:"docs/hack(evm-wallets)/Avacus",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ByteBank",href:"docs/hack(evm-wallets)/ByteBank",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"CoolWallet",href:"docs/hack(evm-wallets)/CoolWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f581365d-e844-4d21-8e35-44a755a32d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Opto Wallet",href:"docs/hack(evm-wallets)/Opto Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"TK Finance",href:"docs/hack(evm-wallets)/TK Finance",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c4066f68-2247-49bf-ac8a-a677bfa81800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bee Wallet",href:"docs/hack(evm-wallets)/Bee Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Pitaka",href:"docs/hack(evm-wallets)/Pitaka",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/691c0716-5213-4b99-e837-079268313800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MDAO Wallet",href:"docs/hack(evm-wallets)/MDAO Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"PLTwallet",href:"docs/hack(evm-wallets)/PLTwallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"helix id",href:"docs/hack(evm-wallets)/helix id",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4083ef71-8389-4682-ded6-0099236d2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"AirGap Wallet",href:"docs/hack(evm-wallets)/AirGap Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Qubic Wallet",href:"docs/hack(evm-wallets)/Qubic Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/535c91a5-a43c-4104-233c-439449ffcd00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Haven Wallet",href:"docs/hack(evm-wallets)/Haven Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b41fc3f2-a874-45ae-4d4f-cdf47da89500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Holdstation Wallet",href:"docs/hack(evm-wallets)/Holdstation Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e6dba126-85af-4194-84f6-dd16632c3c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Earth Wallet",href:"docs/hack(evm-wallets)/Earth Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MetaOne",href:"docs/hack(evm-wallets)/MetaOne",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b869d966-4699-44de-eadb-4eb39a580600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"3S Wallet",href:"docs/hack(evm-wallets)/3S Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SimpleHold",href:"docs/hack(evm-wallets)/SimpleHold",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a9f1ba96-b658-4d13-f71f-226b6389f000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Payperless",href:"docs/hack(evm-wallets)/Payperless",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4a867e30-44c9-4627-6281-33457b8e2100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Minerva Wallet",href:"docs/hack(evm-wallets)/Minerva Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Volt: DeFi",href:"docs/hack(evm-wallets)/Volt: DeFi",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/51d783cb-0686-4ffa-e661-edca0c380000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Lif3 Wallet",href:"docs/hack(evm-wallets)/Lif3 Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Shinobi-Wallet",href:"docs/hack(evm-wallets)/Shinobi-Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"KryptoGO Wallet",href:"docs/hack(evm-wallets)/KryptoGO Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3ccbd966-97e8-45a0-1ceb-6141a8978e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Autonomy: Digital Art Wallet",href:"docs/hack(evm-wallets)/Autonomy: Digital Art Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/126a7683-2349-45c6-ed19-0e27a645c000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bifrost Wallet",href:"docs/hack(evm-wallets)/Bifrost Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/86be07e2-6652-4fd1-5f33-651682c95400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Nufinetes",href:"docs/hack(evm-wallets)/Nufinetes",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Wallet 3",href:"docs/hack(evm-wallets)/Wallet 3",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Abra Wallet",href:"docs/hack(evm-wallets)/Abra Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"iMe",href:"docs/hack(evm-wallets)/iMe",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/25aa3abf-901b-4d82-bb89-c5ade54c0c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"PREMA Wallet",href:"docs/hack(evm-wallets)/PREMA Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6487869b-1165-4f30-aa3a-115665be8300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"OneKey",href:"docs/hack(evm-wallets)/OneKey",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/12bebb3f-8030-4892-8452-c60a6bac1500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Slingshot Wallet",href:"docs/hack(evm-wallets)/Slingshot Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/10c75467-6612-48ad-b97b-63985e922200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Kriptonio",href:"docs/hack(evm-wallets)/Kriptonio",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/363fae03-882a-4d81-a721-6e6f6e9ac500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Timeless Wallet",href:"docs/hack(evm-wallets)/Timeless Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Venly",href:"docs/hack(evm-wallets)/Venly",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Phantom",href:"docs/hack(evm-wallets)/Phantom",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c38443bb-b3c1-4697-e569-408de3fcc100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Coinbase Wallet",href:"docs/hack(evm-wallets)/Coinbase Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bitski",href:"docs/hack(evm-wallets)/Bitski",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MPCWallet",href:"docs/hack(evm-wallets)/MPCWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/636ff7d4-79ce-41d6-ede5-85c9f8a1d900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"XDEFI Wallet",href:"docs/hack(evm-wallets)/XDEFI Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"TREASURE",href:"docs/hack(evm-wallets)/TREASURE",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6b5d45f6-117c-44a0-d7b0-71c28864a100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Streakk Wallet",href:"docs/hack(evm-wallets)/Streakk Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Sender",href:"docs/hack(evm-wallets)/Sender",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6fb46282-3d15-4c8a-41ae-0d52115e3f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SaitaPro",href:"docs/hack(evm-wallets)/SaitaPro",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/65bdc812-5692-441f-abcb-a389b754a700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Lilico",href:"docs/hack(evm-wallets)/Lilico",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/70c0bc88-7bb1-4c1f-3531-9a5f799fb100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Hippo Wallet",href:"docs/hack(evm-wallets)/Hippo Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Cosmostation",href:"docs/hack(evm-wallets)/Cosmostation",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bitizen",href:"docs/hack(evm-wallets)/Bitizen",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Blocto",href:"docs/hack(evm-wallets)/Blocto",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/374258d3-c749-4f37-7815-77e61f798c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"HUMBL WALLET",href:"docs/hack(evm-wallets)/HUMBL WALLET",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1ac55ba2-aa98-4ed0-59b3-b3155dea4200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SafeMoon",href:"docs/hack(evm-wallets)/SafeMoon",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"PassPay Wallet",href:"docs/hack(evm-wallets)/PassPay Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ultimate",href:"docs/hack(evm-wallets)/Ultimate",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MeWallet",href:"docs/hack(evm-wallets)/MeWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"THORWallet",href:"docs/hack(evm-wallets)/THORWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/45165bea-fdae-454e-7caa-31681f255200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Fizz",href:"docs/hack(evm-wallets)/Fizz",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"PiEthereum Hardware",href:"docs/hack(evm-wallets)/PiEthereum Hardware",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/310a5036-3c8f-4bfc-0510-cba61d7d5100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Reunit",href:"docs/hack(evm-wallets)/Reunit",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Arianee Wallet",href:"docs/hack(evm-wallets)/Arianee Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Tholos",href:"docs/hack(evm-wallets)/Tholos",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Stickey Wallet",href:"docs/hack(evm-wallets)/Stickey Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Klip",href:"docs/hack(evm-wallets)/Klip",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"CoinStats",href:"docs/hack(evm-wallets)/CoinStats",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"LikerLand App",href:"docs/hack(evm-wallets)/LikerLand App",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Krystal",href:"docs/hack(evm-wallets)/Krystal",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"KeepKey Desktop",href:"docs/hack(evm-wallets)/KeepKey Desktop",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Pillar",href:"docs/hack(evm-wallets)/Pillar",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/87737170-f79f-4359-338b-7c30856c9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"HARTi Wallet",href:"docs/hack(evm-wallets)/HARTi Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Stasis Wallet",href:"docs/hack(evm-wallets)/Stasis Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Nova Wallet",href:"docs/hack(evm-wallets)/Nova Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"meta-WONDER-verse",href:"docs/hack(evm-wallets)/meta-WONDER-verse",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"DTTD",href:"docs/hack(evm-wallets)/DTTD",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"FoxWallet",href:"docs/hack(evm-wallets)/FoxWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d994a61e-c1df-49cb-cf4c-10ec51338400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"HAQQ Wallet",href:"docs/hack(evm-wallets)/HAQQ Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"tomiPAY",href:"docs/hack(evm-wallets)/tomiPAY",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/bf8bd7b8-b638-40f6-1caa-1d7678bb1900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"StrikeX Wallet",href:"docs/hack(evm-wallets)/StrikeX Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/eb2b6db5-1086-4739-a422-4a4bf3a44300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Nash",href:"docs/hack(evm-wallets)/Nash",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/93a15cd2-8f0d-4bf6-1545-6bdf745c2300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bybit Wallet",href:"docs/hack(evm-wallets)/Bybit Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SubWallet",href:"docs/hack(evm-wallets)/SubWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Okto",href:"docs/hack(evm-wallets)/Okto",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Catecoin Wallet",href:"docs/hack(evm-wallets)/Catecoin Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"UKISS Hub",href:"docs/hack(evm-wallets)/UKISS Hub",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/23f4c933-68e6-46f9-75b6-2d2905ca1300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Tellaw Wallet",href:"docs/hack(evm-wallets)/Tellaw Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Tangem Wallet",href:"docs/hack(evm-wallets)/Tangem Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Callback",href:"docs/hack(evm-wallets)/Callback",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SA ASSISTANT",href:"docs/hack(evm-wallets)/SA ASSISTANT",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7954b508-9ff0-4416-9aba-16209b571000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Xellar",href:"docs/hack(evm-wallets)/Xellar",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/89cf9926-00bf-4152-d98f-cac53d7cad00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Talken Wallet",href:"docs/hack(evm-wallets)/Talken Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"U2U Wallet",href:"docs/hack(evm-wallets)/U2U Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Shido Wallet",href:"docs/hack(evm-wallets)/Shido Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/dd5c7007-4572-41c7-a9b8-b97d071adb00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"OzoneWallet",href:"docs/hack(evm-wallets)/OzoneWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4eb57479-515a-463a-9fcb-c20e9cc60c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Tidus Wallet ",href:"docs/hack(evm-wallets)/Tidus Wallet ",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/797bd108-d862-4d1b-d339-883de9a75000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Impact Wallet",href:"docs/hack(evm-wallets)/Impact Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Wirex Wallet",href:"docs/hack(evm-wallets)/Wirex Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/66b40d9b-7314-42dd-cacf-4e324b0c2000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Zelcore",href:"docs/hack(evm-wallets)/Zelcore",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1b9e652e-1667-425a-f828-707bf9b05400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"DOSI Vault",href:"docs/hack(evm-wallets)/DOSI Vault",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"WOW EARN",href:"docs/hack(evm-wallets)/WOW EARN",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"ELLIPAL",href:"docs/hack(evm-wallets)/ELLIPAL",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Unstoppable Wallet",href:"docs/hack(evm-wallets)/Unstoppable Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a63cbfce-0726-4f94-9187-a761afb94400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Aurora Pass",href:"docs/hack(evm-wallets)/Aurora Pass",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6d93eeba-edce-431c-4293-e25784e61f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bitverse",href:"docs/hack(evm-wallets)/Bitverse",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/5851c585-0f2b-41a1-a36a-221a18af5200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Konio",href:"docs/hack(evm-wallets)/Konio",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/028c7760-a1af-43ea-7ac7-8b811712b700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Gate.io",href:"docs/hack(evm-wallets)/Gate.io",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"UTORG",href:"docs/hack(evm-wallets)/UTORG",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"CoinWallet",href:"docs/hack(evm-wallets)/CoinWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/1c0cd352-ce8e-4bcc-f91d-8763eab60b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"AmmerWallet",href:"docs/hack(evm-wallets)/AmmerWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Binance.US",href:"docs/hack(evm-wallets)/Binance.US",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SISTEMAS",href:"docs/hack(evm-wallets)/SISTEMAS",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/eda865c8-746b-4536-9d57-7d7de0555400?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MUZA",href:"docs/hack(evm-wallets)/MUZA",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/9934307c-0a39-4c60-7fd0-4cb9297f3900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"FxWallet",href:"docs/hack(evm-wallets)/FxWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/46a80541-e639-483d-e230-731fcbf13000?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"RYIPAY",href:"docs/hack(evm-wallets)/RYIPAY",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/bb6e9045-24db-428a-7661-5b3365cc2800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Ronin Wallet",href:"docs/hack(evm-wallets)/Ronin Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/dff7f251-5116-460b-54f7-b14c5343b800?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Sequel Wallet",href:"docs/hack(evm-wallets)/Sequel Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MetaWallet",href:"docs/hack(evm-wallets)/MetaWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Altme",href:"docs/hack(evm-wallets)/Altme",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/7eeac6e8-6852-4d09-8579-e229fd6b9a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Unido",href:"docs/hack(evm-wallets)/Unido",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Bitpie",href:"docs/hack(evm-wallets)/Bitpie",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"MOONSTAKE",href:"docs/hack(evm-wallets)/MOONSTAKE",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/22374fae-244c-4224-2e3d-c14912f98a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"IndiGG",href:"docs/hack(evm-wallets)/IndiGG",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/8e90a32f-130d-4317-7294-4884510aa300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Yuse Wallet",href:"docs/hack(evm-wallets)/Yuse Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Coininn Wallet",href:"docs/hack(evm-wallets)/Coininn Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Safe App Syscoin",href:"docs/hack(evm-wallets)/Safe App Syscoin",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"f(x)Wallet",href:"docs/hack(evm-wallets)/f(x)Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/bdd2f39b-98fa-485d-b180-bf4a42fa6100?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"pockie",href:"docs/hack(evm-wallets)/pockie",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"AmazeWallet",href:"docs/hack(evm-wallets)/AmazeWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/38495eb4-efcf-47cb-be73-a695510f9f00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"atato custody",href:"docs/hack(evm-wallets)/atato custody",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/53878398-b6da-4384-47dc-bc744acd5b00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Pali Wallet",href:"docs/hack(evm-wallets)/Pali Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Nunu",href:"docs/hack(evm-wallets)/Nunu",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a4a42e1d-b43d-4fa1-b8b3-daf4e6b61c00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"NuFi",href:"docs/hack(evm-wallets)/NuFi",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"EASY",href:"docs/hack(evm-wallets)/EASY",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Solace",href:"docs/hack(evm-wallets)/Solace",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"Meter Wallet",href:"docs/hack(evm-wallets)/Meter Wallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
{title:"SuperWallet",href:"docs/hack(evm-wallets)/SuperWallet",description:"Not Provided(coming soon)",logo:"https://explorer-api.walletconnect.com/v3/logo/lg/a7ce7b31-5439-4a99-06f9-aa62f3ae4e00?projectId=2f05ae7f1116030fde2d36508f472bfb",items:[]},
];