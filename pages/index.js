import Head from "next/head";
import LoanCalculator from "../components/calculator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loan Calculator in Next JS</title>
        <meta name="description" content="Loan Calculator in Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoanCalculator />
      </main>
    </div>
  );
}
