import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from './../components/Parallax';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Helmet>
      <title>Teufel IT, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Integration, IT-Beratung, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse, Server, Virtualisierung, Telefonanlagen"
      />
      <link rel="canonical" href="http://teufel-it.de/it-strategieberatung" />
    </Helmet>
    <Parallax
      firstImage={props.data.meeting.childImageSharp.fluid}
      middleImage={props.data.server.childImageSharp.fluid}
      lastImage={props.data.meeting.childImageSharp.fluid}
      background={props.data.lines.childImageSharp.fixed.src}
      json={props.pageContext.data}
      locale={props.pageContext.locale}
    />
  </Layout>
);

export const query = graphql`
  query {
    meeting: file(relativePath: { eq: "meeting2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    server: file(relativePath: { eq: "server2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lines: file(relativePath: { eq: "backgrounds/lines.png" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
