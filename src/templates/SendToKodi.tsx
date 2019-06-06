import { graphql } from 'gatsby';
import * as React from 'react';
import { SendToKodi } from './../components/SendToKodi';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <SendToKodi
      locale={props.pageContext.locale}
      reviews={props.pageContext.data}
      sendToKodiScreen1={props.data.sendToKodi1.childImageSharp.fixed}
      sendToKodiScreen2={props.data.sendToKodi2.childImageSharp.fixed}
      sendToKodiScreen3={props.data.sendToKodi3.childImageSharp.fixed}
      sendToKodiScreen4={props.data.sendToKodi4.childImageSharp.fixed}
      logo={props.data.logo.childImageSharp.fixed}
      background={props.data.lines.childImageSharp.fixed.src}
    />
  </Layout>
);

export const query = graphql`
  query {
    sendToKodi1: file(relativePath: { eq: "SendToKodi/1.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sendToKodi2: file(relativePath: { eq: "SendToKodi/2.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sendToKodi3: file(relativePath: { eq: "SendToKodi/3.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sendToKodi4: file(relativePath: { eq: "SendToKodi/4.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logo: file(relativePath: { eq: "SendToKodi/logo.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
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
