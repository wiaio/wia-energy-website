import * as React from "react"

import Layout from "../components/layout";
import Seo from "../components/seo";
import LogoClouds from "../components/logoClouds";
import Services from "../components/services";
import Works from "../components/works";
import About from "../components/about";
import Hero from "../components/hero";
import Metrics from '../components/metrics';

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Metrics />
    <Works />
    <Services />
    <LogoClouds />
    <About />
  </Layout>
);

export default IndexPage;
