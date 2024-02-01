import * as React from "react"

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Metrics from '../components/metrics';
import Solutions from '../components/solutions';
import Approach from '../components/approach';
import Benefits from '../components/benefits';
import PoweredBy from '../components/powered-by';
import TalkToUs from '../components/talk-to-us';

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Metrics />
    <Solutions />
    <Approach />
    <Benefits />
    <PoweredBy />
    <TalkToUs />
  </Layout>
);

export default IndexPage;
