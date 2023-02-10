import Header from './Header';
import Navbar from './NavBar';
import Services from './Services';
import '../styles/Home.css';
import Success from './Success';
import Flexible from './Flexible';
import Partner from './Partner';
import Footer from './Footer';

const Home = () => (
  <div className="wrap">
    <Navbar />
    <Header />
    <Services />
    <Success />
    <Flexible />
    <Partner />
    <Footer />
  </div>
);

export default Home;
