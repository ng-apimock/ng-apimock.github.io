import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Local development</>,
    imageUrl: 'https://img.icons8.com/cotton/512/000000/user-male--v1.png',
    description: (
      <>
        Using the <code>dev-interface</code> you can easily use all of @ng-apimock's features through a simple User-Interface.
      </>
    )
  },
  {
    title: <>Automated testing</>,
      imageUrl: 'https://img.icons8.com/cotton/512/000000/robot-2.png',

    description: (
      <>
        Using the <code>available plugins</code> you can use all of @ng-apimock's features within your automated tests, with support for parallel execution.
      </>
    )
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Description will go into a meta tag in <head />">


      <header className={clsx('hero hero--primary', styles.heroBanner)}>

        <div className="container">
          <h1 className="hero__title">{siteConfig.title} is a{' '}
<span className="keywords">NodeJS plugin</span>{' '}
    that provides the ability to use {' '}
<span className="keywords">scenario </span> based{' '}
<span className="keywords">api mocking</span>
                                                                                                                             </h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Get Started
            </Link>

          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

