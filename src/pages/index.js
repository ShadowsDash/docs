import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{gap: '20px', display:'flex', flexWrap: 1}}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
              Blog
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog/tags/changelog">
              Changelog
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Shadow's Dash documentation">
      <HomepageHeader/>
    </Layout>
  );
}
