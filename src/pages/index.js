import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from '@docusaurus/Translate';
import styles from "./styles.module.css";

const sections = [
  {
    keyword: "interviewer",
    title: "Interviewer Guides",
    imageUrl: "img/interviewer.jpg",
    description: "Guides to know the basics about being an interviewer",
    to: "interview/interviewer/about",
  },
  {
    keyword: "interviewee",
    title: "Interviewee Guides",
    imageUrl: "img/interviewee.jpg",
    description: "Guides to learn how to crack your interview",
    to: "interview/interviewee/about",
  },
];

function Section({ keyword, imageUrl, title, description, to, className }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = useBaseUrl(to);
  return (
    <div className={clsx("col col--4", styles.section)}>
      {imgUrl && (
        <div className={clsx("text--center")}>
          <a href={toUrl}>
            <img className={clsx(className)} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3><Translate
        id={`homepage.${keyword}.title`}
        description={`The homepage card title related to ${keyword}`}>
        {title}
      </Translate></h3>
      <p><Translate
        id={`homepage.${keyword}.description`}
        description={`The homepage card descriptin related to ${keyword}`}>
        {description}
      </Translate></p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description={`${siteConfig.title}`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className={clsx("sectionsRow_src-pages- row", styles.container)}>
          <div className={clsx("col col--8")}>
            <h1
              className={clsx(styles.boldInGreen, styles.title, "hero__title")}
            >
              <b>otter</b> guides
            </h1>
            <div className={styles.buttons}>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=proyecto-nutria&amp;repo=otter-guides&amp;type=star&amp;count=true&amp;size=large"
                  frameBorder={0}
                  scrolling={0}
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
      <main>
        {sections && sections.length > 0 && (
          <section className={styles.sections}>
            <div className="container">
              <div className={clsx(styles.sectionsRow, "row")}>
                {sections.map((props, idx) => (
                  <Section key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
