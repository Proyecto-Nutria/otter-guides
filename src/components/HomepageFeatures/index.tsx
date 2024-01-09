import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  keyword: string;
  imgPath: string;
  title: JSX.Element;
  description: JSX.Element;
  targetPath: string;
};

const FeatureList: FeatureItem[] = [
  {
    keyword: "interviewer",
    title: <Translate
        id={`homepage.interviewer.title`}
        description={`The homepage card title related to the interviewer section`}>
        Interviewer Guides
      </Translate>,
    imgPath: "img/interviewer.jpg",
    description: <Translate
        id={`homepage.interviewer.description`}
        description={`The homepage card description related to the interviewer section`}>
        Guides to know the basics about being an interviewer
      </Translate>,
    targetPath: "interview/interviewer/about",
  },
  {
    keyword: "interviewee",
    title: <Translate
        id={`homepage.interviewee.title`}
        description={`The homepage card title related to the interviewee section`}>
        Interviewee Guides
      </Translate>,
    imgPath: "img/interviewee.jpg",
    description: <Translate
        id={`homepage.interviewee.description`}
        description={`The homepage card description related to the interviewee section`}>
        Guides to learn how to crack your interview
      </Translate>,
    targetPath: "interview/interviewee/about",
  },
];

function Feature({keyword, title, imgPath, targetPath, description}: FeatureItem) {
  const imgUrl = useBaseUrl(imgPath);
  const targetUrl = useBaseUrl(targetPath);
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      {imgUrl && (
        <div className={clsx("text--center", styles.featureImage)}>
          <a href={targetUrl}>
            <img src={imgUrl} alt={keyword} />
          </a>
        </div>
      )}
        <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(styles.featuresRow, "row")}>
          {FeatureList.map((props) => (
            <Feature key={props.keyword} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
