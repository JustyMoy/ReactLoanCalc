Loan Calculator in Next JS

Command to Install npm install

Command to run npm run dev

Formula

  let p = parseFloat(principal);
  let r = parseFloat(interest);
  let n = parseFloat(time);

  let actualRate = parseFloat(r / 12 / 100);

  let calcemi =
    p *
    actualRate *
    (Math.pow(1 + actualRate, n) / (Math.pow(1 + actualRate, n) - 1));


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



