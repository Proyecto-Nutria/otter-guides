import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: ['introduction'],
  interviewee_prep_guide: [
    'interview/interviewee/about',
    'interview/interviewee/introductions',
    'interview/interviewee/technical-exercise',
    'interview/interviewee/ask-anything',
    'interview/interviewee/behavioral',
    'interview/interviewee/technical-qa',
  ],
  interviewee_swe_exercises: [
    'interview/interviewee/SWE/algorithmic-exercise',
    'interview/interviewee/SWE/oop-exercise',
    'interview/interviewee/SWE/system-design-exercise',
    'interview/interviewee/SWE/frontend-exercise'
  ],
  interviewer_prep_guide: [
    'interview/interviewer/about', 'interview/interviewer/coding-interview'
  ],
};

export default sidebars;
