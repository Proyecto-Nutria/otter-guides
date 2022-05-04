module.exports = {
  docs: ['introduction'],
  interview: [
    'interview/about',
    {
      type: 'category',
      label: 'Interviewee',
      items: [
        'interview/interviewee/about',
        'interview/interviewee/introductions',
        'interview/interviewee/behavioral',
        'interview/interviewee/coding',
        'interview/interviewee/ask-anything',
      ],
    },
    {
      type: 'category',
      label: 'Interviewer',
      items: ['interview/interviewer/about', 'interview/interviewer/coding-interview'],
    },
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
