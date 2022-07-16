import Head from 'next/head'

export default function Home() {
  const title = "Danelfin Binay's Test"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pick the best stocks and optimize your portfolio with the power of our Artificial Intelligence. Get unbiased and unique insights, 
        and make smart data-driven investment decisions." />
        <link rel="icon" href="/logoDanelfin.ico" />
      </Head>

      <main style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
        <h1>Invest With the Odds in Your Favor</h1>
        <p>Artificial Intelligence to pick the best stocks and optimize your portfolios. Get unique insights and make smart data-driven investment decisions.</p>
      </main>
    </div>
  )
}