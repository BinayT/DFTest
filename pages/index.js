import Head from 'next/head'

export default function Home() {
  const title = "Danelfin Binay's Test"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="This is the test for Danelfin Frontend Developer" />
        <link rel="icon" href="/logoDanelfin.ico" />
      </Head>

      <main>
        <h1>Yo mama</h1>
      </main>
    </div>
  )
}