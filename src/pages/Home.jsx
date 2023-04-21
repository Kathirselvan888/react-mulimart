import React, { useEffect, useState } from 'react';
import '../style/home.css'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductList from '../components/Ui/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/Ui/Clock';

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsaleProducts, setBestsaleProducts] = useState([]);
  const [moblieProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const fillterTrendingProducts = products.filter(item => item.category === "chair");
    setTrendingProducts(fillterTrendingProducts);

    const fillterBestSaleProducts = products.filter(item => item.category === "sofa");
    setBestsaleProducts(fillterBestSaleProducts);

    const fillterMobileProducts = products.filter(item => item.category === "mobile");
    setMobileProducts(fillterMobileProducts);

    const fillterWirelessProducts = products.filter(item => item.category === "wireless");
    setWirelessProducts(fillterWirelessProducts);

    const fillterPopularProducts = products.filter(item => item.category === "watch");
    setPopularProducts(fillterPopularProducts);
  },[]);
  return <Helmet title={"Home"}>
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="hero_subtitle">
                Trending Product in {year}
              </p>
              <h2>Make Your Interiour More Minimalstic & Morden</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, officiis. Assumenda velit cupiditate itaque aliquam temporibus porro, quis asperiores esse?</p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn"><Link to="/shop">SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="heroimg" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
    <section className="trending_products">
      <Container>
      <Row>
          <Col lg="12" className="text-center">
            <h2 className="section_title">
              Trending Products
            </h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className="best_sales">
      <Container>
      <Row>
          <Col lg="12" className="text-center">
            <h2 className="section_title">
              Best Sales
            </h2>
          </Col>
          <ProductList data={bestsaleProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer_count">
      <Container>
        <Row>
          <Col lg="6" md="12" className='count_down-col'>
            <div className="clock_top-content">
              <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock />
            <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn">
              <Link to="/shop">Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg="6" md="6" className="text-end counter_img">
            <img src={counterImg} alt="timerImg" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new_arrivels">
      <Container>
      <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section_title">
              New Arrivals
            </h2>
          </Col>
          <ProductList data={moblieProducts}/>
          <ProductList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>

    <section className="popular_cetagory">
    <Container>
      <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section_title">
              Popular in Cetagory
            </h2>
          </Col>
          <ProductList data={popularProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>;
};

export default Home;