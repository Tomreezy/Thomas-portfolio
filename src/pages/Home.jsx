import Header from "../components/Header"
import PreviousJobs from "../components/PreviousJobs"
import Stack from "../components/Stack"


const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Stack />
        <PreviousJobs />
        </main>
    </div>
  )
}

export default Home