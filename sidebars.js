module.exports = {
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
    'interview/interviewee/SWE/algorithmic-exercise'
  ],
  interviewer_prep_guide: [
    'interview/interviewer/about', 'interview/interviewer/coding-interview'
  ],
  yaos: [
    'yaos/about',
    {
      type: 'category',
      label: 'Interviewee',
      items: ['yaos/interviewee/login', 'yaos/interviewee/upload-profile', 'yaos/interviewee/mock-interview'],
    },
    {
      type: 'category',
      label: 'Interviewer',
      items: ['yaos/interviewer/login', 'yaos/interviewer/upload-profile', 'yaos/interviewer/mock-interview'],
    },
  ],
};
