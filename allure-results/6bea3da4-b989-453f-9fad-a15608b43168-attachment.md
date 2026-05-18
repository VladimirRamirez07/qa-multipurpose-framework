# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login.spec.ts >> @web @smoke Login Feature >> should navigate to login page from home
- Location: tests\web\login.spec.ts:31:7

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 45000ms exceeded.
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [active] [ref=f51e1]:
        - generic [ref=f51e6]:
          - generic [ref=f51e7]:
            - generic "Ducal" [ref=f51e8]:
              - link "Parte de nuestra historia, pre" [ref=f51e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CL4vPRpAKasHCKffAo9kP5JCz2AG-0871hgG2oevHyRX_47WPtQEQASD9tJ6VAWC9AcgBAagDAaoEgQJP0M0Yrt04GC1XUXTcxo0fkqRlw3UMRWWFC-ihC1wMPa4ScslN-X01CFW1HNkEcSRMEVGXq8yB3HDSCEuAccpdKLYoBm2IfSx_iaFLHeMjSLSMA-Ua73cSjxYcFB95XpMAfiuhU9soEAT-u4x4u_feOqeJbF1MpTHTp5sH-TPGK16PcYLzHXoZcSuf5b6FJb3f6nZ-juxleEag9c669Pyib0FzzCKQKHa-gB1_VNVp3iPZITc6ZMj7LlJz4xq9q63IbT0JKRktnCmO0x4ZpYuIoUw7oMH2n8-vnKfwlI_71Q6BYdpUFjij0yUF9g413Q-5H1X9N2N_ylSmxXImUT0W18AE7Ni29t8F4AQDiAXq48TQWJAGAYAHoriZpAWoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDEIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIC16f_6wZQDgAoBmAsByAsBgAwBogwIKgYKBJbisQKqDQJDUuoNEwiHhOr_-sGUAxV34CgFHWTIDBvwDQKIDgmwE5_NpSLIE9O_--kD2BMK2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAG6BcFshgJEgLiThgBIgEA0BkB&ae=1&num=1&cid=CAQS0gEABaugfZrrvrFBegvzBVWHqpaMpvsfpfG-py7wq5GQGAAKvjLvng50LeC1wCGPyAjjMzTNTqPwZwHGcYrIpEmEeWsNjow6c3oH-XBaJBCwuk6s20tDNNe7zdJLz4FJ49G0MFg-lBqGtYmxucVMitkZ72HSG0FPx0t7wg0mPHAheNgPBYNB40RsEoPKxLDsJuXKHYHeXjBZq5UhN1oOZOcUeVJ_CywOlAueqTcq2WB_lvwsE0J2Ik74d7DFg4lcMoePk3_-EBDUQX8mjTxVE7xWCvoYAQ&sig=AOD64_0NJk88x_EQWraWnofK0BPAzOa_PQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-B6JBqolvgq1a8mE21I7Oryu5jz3wGfK1s9S07wgfWhsUMT8FSCAiI2muKUHYJOGwAxEv-h2TR-kvZCy-clcB8X6arjezNr4Ccz8NfHRxHK4Syidh2D2wWrdmBAG7q4Ks9vPkpv1JQQBEFN2lSHRVZUeoFdh38tK2zbfBGx2iHSM5Vp9DlSsFYbDmTQEBW4N1hdQzorU4bp0oDFBvCEY88Uof94HnXt_C_ZgI9BHKxddOUU9KLa-HTYi8qO5L6vTO753F60oyMXp40MKwamMLWYlk3JnQ&cry=1&dbm_d=AKAmf-BqlsiTlSDRaxJ2FaEKekvxMqpievjMAtTzAAZ8maAR6kaZyP1LQ7rshxTeGeVEQ8ny7rgolpVKQlhPSJc3iP1aRgiUJZerz6-ofbgNgLYixHXRZQYA3fZxENsr06CUED1fJG-6lCtyZAuuUpdizcpLEeng7E3QXBX-uVdUCvx4du_n-mXUUDx7kEj1q0NR0c7LizxZ4g5sNHgoBNqLUBhf-bbGQoLmb-sZy8SD9vs06pYSco8Aorsl_lN9dsM87rP9p1YDq_PfiTmsubqlt2u8j5mgEWGEcwkSaWx9utwC9EQd_sl5O0io-hPrlHhELexKzA4FIPH-Erbs7VPE-PZYkYIZFiXyndA3OjNjynd029FjGaXptB_AAXWrVvrNR8QIPF40&rf=1&nb=0&adurl=https://ducalfrijoles.com/?gclid=EAIaIQobChMIwf3p__rBlAMVd-AoBR1kyAwbEAEYASAAEgJqDvD_BwE
            - link "Los que nunca faltan en casa Ducal" [ref=f51e12] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CL4vPRpAKasHCKffAo9kP5JCz2AG-0871hgG2oevHyRX_47WPtQEQASD9tJ6VAWC9AcgBAagDAaoEgQJP0M0Yrt04GC1XUXTcxo0fkqRlw3UMRWWFC-ihC1wMPa4ScslN-X01CFW1HNkEcSRMEVGXq8yB3HDSCEuAccpdKLYoBm2IfSx_iaFLHeMjSLSMA-Ua73cSjxYcFB95XpMAfiuhU9soEAT-u4x4u_feOqeJbF1MpTHTp5sH-TPGK16PcYLzHXoZcSuf5b6FJb3f6nZ-juxleEag9c669Pyib0FzzCKQKHa-gB1_VNVp3iPZITc6ZMj7LlJz4xq9q63IbT0JKRktnCmO0x4ZpYuIoUw7oMH2n8-vnKfwlI_71Q6BYdpUFjij0yUF9g413Q-5H1X9N2N_ylSmxXImUT0W18AE7Ni29t8F4AQDiAXq48TQWJAGAYAHoriZpAWoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDEIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIC16f_6wZQDgAoBmAsByAsBgAwBogwIKgYKBJbisQKqDQJDUuoNEwiHhOr_-sGUAxV34CgFHWTIDBvwDQKIDgmwE5_NpSLIE9O_--kD2BMK2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAG6BcFshgJEgLiThgBIgEA0BkB&ae=1&num=1&cid=CAQS0gEABaugfZrrvrFBegvzBVWHqpaMpvsfpfG-py7wq5GQGAAKvjLvng50LeC1wCGPyAjjMzTNTqPwZwHGcYrIpEmEeWsNjow6c3oH-XBaJBCwuk6s20tDNNe7zdJLz4FJ49G0MFg-lBqGtYmxucVMitkZ72HSG0FPx0t7wg0mPHAheNgPBYNB40RsEoPKxLDsJuXKHYHeXjBZq5UhN1oOZOcUeVJ_CywOlAueqTcq2WB_lvwsE0J2Ik74d7DFg4lcMoePk3_-EBDUQX8mjTxVE7xWCvoYAQ&sig=AOD64_0NJk88x_EQWraWnofK0BPAzOa_PQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-B6JBqolvgq1a8mE21I7Oryu5jz3wGfK1s9S07wgfWhsUMT8FSCAiI2muKUHYJOGwAxEv-h2TR-kvZCy-clcB8X6arjezNr4Ccz8NfHRxHK4Syidh2D2wWrdmBAG7q4Ks9vPkpv1JQQBEFN2lSHRVZUeoFdh38tK2zbfBGx2iHSM5Vp9DlSsFYbDmTQEBW4N1hdQzorU4bp0oDFBvCEY88Uof94HnXt_C_ZgI9BHKxddOUU9KLa-HTYi8qO5L6vTO753F60oyMXp40MKwamMLWYlk3JnQ&cry=1&dbm_d=AKAmf-BqlsiTlSDRaxJ2FaEKekvxMqpievjMAtTzAAZ8maAR6kaZyP1LQ7rshxTeGeVEQ8ny7rgolpVKQlhPSJc3iP1aRgiUJZerz6-ofbgNgLYixHXRZQYA3fZxENsr06CUED1fJG-6lCtyZAuuUpdizcpLEeng7E3QXBX-uVdUCvx4du_n-mXUUDx7kEj1q0NR0c7LizxZ4g5sNHgoBNqLUBhf-bbGQoLmb-sZy8SD9vs06pYSco8Aorsl_lN9dsM87rP9p1YDq_PfiTmsubqlt2u8j5mgEWGEcwkSaWx9utwC9EQd_sl5O0io-hPrlHhELexKzA4FIPH-Erbs7VPE-PZYkYIZFiXyndA3OjNjynd029FjGaXptB_AAXWrVvrNR8QIPF40&rf=1&nb=7&adurl=https://ducalfrijoles.com/?gclid=EAIaIQobChMIwf3p__rBlAMVd-AoBR1kyAwbEAEYASAAEgJqDvD_BwE
          - link "Ver Más" [ref=f51e15] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CL4vPRpAKasHCKffAo9kP5JCz2AG-0871hgG2oevHyRX_47WPtQEQASD9tJ6VAWC9AcgBAagDAaoEgQJP0M0Yrt04GC1XUXTcxo0fkqRlw3UMRWWFC-ihC1wMPa4ScslN-X01CFW1HNkEcSRMEVGXq8yB3HDSCEuAccpdKLYoBm2IfSx_iaFLHeMjSLSMA-Ua73cSjxYcFB95XpMAfiuhU9soEAT-u4x4u_feOqeJbF1MpTHTp5sH-TPGK16PcYLzHXoZcSuf5b6FJb3f6nZ-juxleEag9c669Pyib0FzzCKQKHa-gB1_VNVp3iPZITc6ZMj7LlJz4xq9q63IbT0JKRktnCmO0x4ZpYuIoUw7oMH2n8-vnKfwlI_71Q6BYdpUFjij0yUF9g413Q-5H1X9N2N_ylSmxXImUT0W18AE7Ni29t8F4AQDiAXq48TQWJAGAYAHoriZpAWoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDEIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIC16f_6wZQDgAoBmAsByAsBgAwBogwIKgYKBJbisQKqDQJDUuoNEwiHhOr_-sGUAxV34CgFHWTIDBvwDQKIDgmwE5_NpSLIE9O_--kD2BMK2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAG6BcFshgJEgLiThgBIgEA0BkB&ae=1&num=1&cid=CAQS0gEABaugfZrrvrFBegvzBVWHqpaMpvsfpfG-py7wq5GQGAAKvjLvng50LeC1wCGPyAjjMzTNTqPwZwHGcYrIpEmEeWsNjow6c3oH-XBaJBCwuk6s20tDNNe7zdJLz4FJ49G0MFg-lBqGtYmxucVMitkZ72HSG0FPx0t7wg0mPHAheNgPBYNB40RsEoPKxLDsJuXKHYHeXjBZq5UhN1oOZOcUeVJ_CywOlAueqTcq2WB_lvwsE0J2Ik74d7DFg4lcMoePk3_-EBDUQX8mjTxVE7xWCvoYAQ&sig=AOD64_0NJk88x_EQWraWnofK0BPAzOa_PQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-B6JBqolvgq1a8mE21I7Oryu5jz3wGfK1s9S07wgfWhsUMT8FSCAiI2muKUHYJOGwAxEv-h2TR-kvZCy-clcB8X6arjezNr4Ccz8NfHRxHK4Syidh2D2wWrdmBAG7q4Ks9vPkpv1JQQBEFN2lSHRVZUeoFdh38tK2zbfBGx2iHSM5Vp9DlSsFYbDmTQEBW4N1hdQzorU4bp0oDFBvCEY88Uof94HnXt_C_ZgI9BHKxddOUU9KLa-HTYi8qO5L6vTO753F60oyMXp40MKwamMLWYlk3JnQ&cry=1&dbm_d=AKAmf-BqlsiTlSDRaxJ2FaEKekvxMqpievjMAtTzAAZ8maAR6kaZyP1LQ7rshxTeGeVEQ8ny7rgolpVKQlhPSJc3iP1aRgiUJZerz6-ofbgNgLYixHXRZQYA3fZxENsr06CUED1fJG-6lCtyZAuuUpdizcpLEeng7E3QXBX-uVdUCvx4du_n-mXUUDx7kEj1q0NR0c7LizxZ4g5sNHgoBNqLUBhf-bbGQoLmb-sZy8SD9vs06pYSco8Aorsl_lN9dsM87rP9p1YDq_PfiTmsubqlt2u8j5mgEWGEcwkSaWx9utwC9EQd_sl5O0io-hPrlHhELexKzA4FIPH-Erbs7VPE-PZYkYIZFiXyndA3OjNjynd029FjGaXptB_AAXWrVvrNR8QIPF40&rf=1&nb=8&adurl=https://ducalfrijoles.com/?gclid=EAIaIQobChMIwf3p__rBlAMVd-AoBR1kyAwbEAEYASAAEgJqDvD_BwE
            - generic [ref=f51e18]:
              - generic [ref=f51e19]: Ver Más
              - img [ref=f51e20]
        - img [ref=f51e25] [cursor=pointer]
        - button [ref=f51e27] [cursor=pointer]:
          - img [ref=f51e28]
```

# Test source

```ts
  1  | ﻿import { Page } from '@playwright/test'
  2  | import { IPage } from '../interfaces'
  3  | 
  4  | export abstract class BasePage implements IPage {
  5  |   protected readonly page: Page
  6  |   protected readonly baseUrl: string
  7  | 
  8  |   constructor(page: Page, baseUrl: string) {
  9  |     this.page = page
  10 |     this.baseUrl = baseUrl
  11 |   }
  12 | 
  13 |   async navigate(url?: string): Promise<void> {
  14 |     await this.page.goto(url ?? this.baseUrl)
  15 |     await this.waitForLoad()
  16 |   }
  17 | 
  18 |   async waitForLoad(): Promise<void> {
> 19 |     await this.page.waitForLoadState('networkidle')
     |                     ^ Error: page.waitForLoadState: Test timeout of 45000ms exceeded.
  20 |   }
  21 | 
  22 |   async getTitle(): Promise<string> {
  23 |     return this.page.title()
  24 |   }
  25 | 
  26 |   getUrl(): string {
  27 |     return this.page.url()
  28 |   }
  29 | 
  30 |   protected async waitForSelector(selector: string, timeout = 10000): Promise<void> {
  31 |     await this.page.waitForSelector(selector, { timeout })
  32 |   }
  33 | 
  34 |   protected async clickAndWait(selector: string): Promise<void> {
  35 |     await this.page.click(selector)
  36 |     await this.page.waitForLoadState('networkidle')
  37 |   }
  38 | 
  39 |   protected async fillField(selector: string, value: string): Promise<void> {
  40 |     await this.page.fill(selector, value)
  41 |   }
  42 | 
  43 |   protected async getText(selector: string): Promise<string> {
  44 |     return this.page.locator(selector).innerText()
  45 |   }
  46 | 
  47 |   protected async isVisible(selector: string): Promise<boolean> {
  48 |     return this.page.locator(selector).isVisible()
  49 |   }
  50 | }
  51 | 
```