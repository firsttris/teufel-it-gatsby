import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Github } from './../components/Github';
import { Layout } from './../layouts/Layout';

interface Props {
  location: Location;
  data: any;
  pageContext: {
    data: any;
    locale: string;
  };
}

export default (props: Props) => (
  <Layout location={props.location} locale={props.pageContext.locale}>
    <Helmet>
      <title>Teufel IT, Software ist mein Handwerk</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Teufel IT, Apps, Mobile App, Mobile Anwendungsentwicklung, iOS App, Native, 
        Softwareentwickler, Softwareentwicklung, Anwendungsentwicklung, Typescript, JavaScript, 
        Java, NodeJs, Integration, Migration, Webservices, Docker, DevOps, Linux"
      />
      <link rel="canonical" href={`http://teufel-it.de/${props.pageContext.locale}/projects`} />
    </Helmet>
    <Github
      locale={props.pageContext.locale}
      repos={props.data.repos.nodes}
      code={props.data.code.childImageSharp.fluid}
      background={props.data.lines.childImageSharp.fixed.src}
    />
  </Layout>
);

export const query = graphql`
  query {
    code: file(relativePath: { eq: "code.jpg" }) {
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
    repos: allRepo {
      nodes {
        description
        forks_count
        html_url
        language
        name
        stargazers_count
      }
    }
  }
`;
