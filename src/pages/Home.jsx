import Header from "../components/Header"
import PreviousJobs from "../components/PreviousJobs"
import Stack from "../components/Stack"
import WebCreations from "../components/WebCreations"


const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Stack />
        <PreviousJobs />
        <WebCreations />
        </main>
    </div>
  )
}

export default Home