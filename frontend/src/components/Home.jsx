import LatestProducts from './common/LatestProducts'
import FeaturedProducts from './common/FeaturedProducts'
import Hero from './common/Hero'
import Layout from './common/Layout'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <LatestProducts />
        <FeaturedProducts />
      </Layout>
    </div>
  )
}

export default Home
