module.exports = {
  docs: [
    "introduction",
  ],
  interview: [
    "interview/about",
    {
      type: 'category',
      label: 'Interviewee',
      items: [
        'interview/interviewee/about',
        'interview/interviewee/behavioral',
        'interview/interviewee/coding',
        'interview/interviewee/ask-anything',
      ],
    },
    {
      type: 'category',
      label: 'Interviewer',
      items: ['interview/interviewer/about'],
    },
  ],
};
