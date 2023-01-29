# EMI Calculator

A React EMI(Equated Monthly Installment) Calculator

<img src="https://media.giphy.com/media/grhPNUIutzociIAnM0/giphy.gif" />


## How It's Made:



## Tech used: 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Optimizations
I would like to add a federal and state level tax withheld function to give the users more options.

## Lessons Learned:

I learned that creating a successful project, isn't determined by it's complexity.

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



