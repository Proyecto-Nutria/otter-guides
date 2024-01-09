import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className={clsx("sectionsRow_src-pages- row", styles.container)}>
          <div className={clsx("col col--8")}>
        <Heading as="h1" className={clsx(styles.boldInGreen, styles.title, "hero__title")}>
          <b>otter</b> guides
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=proyecto-nutria&amp;repo=otter-guides&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                />
              </span>
              <div style={{ height: "18px" }} />
              <Link
                className={clsx(styles.getStartedButton)}
                to={useBaseUrl("introduction")}
              >
                <Translate
                  id="homepage.start"
                  description="The homepage button to start reading">
                  Get Started
                </Translate>
                &nbsp;&nbsp;→
              </Link>
            </div>
          </div>
          <div className={clsx("text--center", "col col--3")}>
            <img src={'img/otter-smart.png'} alt={'Otter Smart'} />
          </div>
        </div>
      </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
