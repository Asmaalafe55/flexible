const blogCoreFeatures = [
  {
    answer: 'Comments',
  },
  {
    answer: 'Likes',
  },
  {
    answer: 'Sharing',
  },
]

const storeNextQuestion = {
  question: 'What are the core features of your store?',
  type: 'checkbox',
  answers: [
    {
      answer: 'Sales/Promo code',
    },
    {
      answer: 'Wish list/Favorite',
    },
    {
      answer: 'Delivery',
      tooltip: 'which includes shipping, tracking, returns etc.',
    },
    {
      answer: 'Payment currency',
    },
  ],
}

const landingPageNextQuestion = {
  question: 'What are the core features of your landing page?',
  type: 'checkbox',
  answers: [
    {
      answer: 'Contact form',
    },
    {
      answer: 'Newsletter subscription',
    },
    {
      answer: 'Career page',
    },
  ],
}

export default [
  //   {
  //     question: 'What is the name of your website?',
  //     type: 'text-domain',
  //   },
  {
    question: 'What kind of website is it?',
    type: 'radio',
    answers: [
      {
        answer: 'Personal',
        tooltip:
          'A personal website is a website that is used to share information about yourself or your hobbies.',
        next: {
          question: 'What kind of personal website is it?',
          type: 'radio',
          answers: [
            {
              answer: 'Blog',
              next: {
                question: 'What blog features do you want?',
                type: 'checkbox',
                answers: blogCoreFeatures,
              },
            },
            {
              answer: 'Fashion Blog',
              next: {
                question: 'What fashion blog features do you want?',
                type: 'checkbox',
                answers: blogCoreFeatures,
              },
            },
            {
              answer: 'Photography',
              next: {
                question: 'What fashion blog features do you want?',
                type: 'checkbox',
                answers: [
                  ...blogCoreFeatures,
                  {
                    answer: 'Downloadable Images',
                  },
                ],
              },
            },
          ],
        },
      },
      {
        answer: 'Store',
        tooltip:
          'A store website is a website that is used to sell products or services.',
        next: {
          question: 'What kind of store website is it?',
          type: 'radio',
          answers: [
            {
              answer: 'Fashion & Clothing',
              type: 'checkbox',
              next: storeNextQuestion,
            },
            {
              answer: 'Home & Decor',
              type: 'checkbox',
              next: storeNextQuestion,
            },
            {
              answer: 'Electronics',
              type: 'checkbox',
              next: storeNextQuestion,
            },
            {
              answer: 'General online store',
              type: 'checkbox',
              next: storeNextQuestion,
            },
          ],
        },
      },
      {
        answer: 'Life Style',
        tooltip:
          'Includes websites about food, travel, events, fitness, beauty, etc.',
        answers: [
          {
            answer: 'Events',
            tooltip: 'Includes websites about events, conferences, etc.',
            next: {
              question: 'What kind of events website is it?',
              type: 'radio',
              answers: [
                {
                  answer: 'Venue',
                },
                {
                  answer: 'Meetups',
                },
                {
                  answer: 'Other',
                },
              ],
            },
          },
          {
            answer: 'Charity',
          },
          {
            answer: 'Tourism',
            tooltip:
              'Includes websites about travel, hotels, mentors and guides etc.',
            answers: [
              {
                answer: 'Blog ',
                next: {
                  question: 'What blog features do you want?',
                  type: 'checkbox',
                  answers: blogCoreFeatures,
                },
              },
              {
                answer: 'Booking',
              },
              {
                answer: 'Guides',
              },
            ],
          },
        ],
      },
      {
        answer: 'Landing page / Business',
        tooltip:
          'A landing page is a standalone web page, created for a specific marketing campaign. It’s where a visitor “lands” after they click on a link in an email, or ads.',
        answers: [
          {
            answer: 'Business',
            tooltip:
              'A business website is a website that is used to promote a business or a brand.',
            next: landingPageNextQuestion,
          },
          {
            answer: 'Product / Service marketing',
            next: landingPageNextQuestion,
          },
          {
            answer: 'Other',
            next: landingPageNextQuestion,
          },
        ],
      },
    ],
  },
  {
    question: 'What core features do you want?',
    type: 'checkbox',
    answers: [
      {
        answer: 'Chatbot',
      },
      {
        answer: 'Ads',
      },
      {
        answer: 'Contact form',
      },
      {
        answer: 'Location',
      },
      {
        answer: 'FAQ',
      },
      {
        answer: 'Instagram feed',
      },
      {
        answer: 'Survey',
      },
    ],
  },
]
