import styles from './index.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => {
    import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')
    import('farilari')
  },
  {
    ssr: false
  }
)

const Home = () => {
  // console.log('launch', launch())

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DynamicComponentWithNoSSR />
      <fari-lari></fari-lari>
      <main className={styles.main}>
        <h1 className='title'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
