import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  // console.log(results)
  return (
    <div >
      <Head>
        <title>Hulu</title>
      </Head>


      {/* Header COmponent  */}
      <Header />

      {/* NavBar  */}
      <Nav />

      {/* Results  */}
      <Results results={results}/>


    </div>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;

  const response = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res=>res.json()))

  return{
    props:{
      results:response.results
    }
  }


}