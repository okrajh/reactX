export const my_dictionary = {
  intro: {
    image: `https://picsum.photos/id/${Math.floor(
      Math.random() * 1000
    )}/200/300`,
    name: "John Doe",
    title: "Software Engineer",
    introduction:
      "Hello, I am John Doe, a passionate software engineer with a keen interest in AI and machine learning. I love to explore new technologies and build innovative solutions to real-world problems. In my free time, I enjoy hiking and playing the guitar.",
  },
  edu: {
    record1: {
      universityName: "Example University",
      collegeName: "College of Engineering",
      fromDate: "2018-09-01",
      toDate: "2022-06-30",
      percentage: 85.5,
    },

    record2: {
      universityName: "Another University",
      collegeName: "School of Business",
      fromDate: "2017-08-01",
      toDate: "2021-05-31",
      percentage: 92.3,
    },
    record3: {
      universityName: "XYZ University",
      collegeName: "Faculty of Science",
      fromDate: "2019-01-15",
      toDate: "2023-07-20",
      percentage: 78.9,
    },
    // You can add more college education records as needed
  },
  exp: [
    {
      companyName: "Example Company",
      dateFrom: "2022-01-01",
      dateTo: "2023-07-31",
      profile: "Software Engineer",
      achievement: "Developed a new feature for the product",
      description:
        "Worked on front-end development using React and back-end development with Node.js. Collaborated with the team to deliver high-quality software.",
    },
    {
      companyName: "ABC Corporation",
      dateFrom: "2020-05-15",
      dateTo: "2021-12-31",
      profile: "Data Analyst",
      achievement: "Generated data-driven insights for business decisions",
      description:
        "Analyzed large datasets using Python and SQL. Presented reports and visualizations to stakeholders to support data-driven decision-making.",
    },
  ],
  hobby: [
    "Reading books",
    "Playing musical instruments",
    "Painting or drawing",
    "Hiking or trekking",
    "Photography",
    "Cooking or baking",
  ],

  skills: [
    {
      skillType: "Programming",
      skillsList: ["JavaScript", "Python", "Java", "C++", "Ruby"],
    },
    {
      skillType: "Web Development",
      skillsList: ["HTML", "CSS", "React", "Node.js", "Angular", "TypeScript"],
    },
    {
      skillType: "Database",
      skillsList: ["SQL", "MongoDB"],
    },
    {
      skillType: "Version Control",
      skillsList: ["Git", "SVN"],
    },
  ],
  lang: ["English", "Mandarin Chinese", "Spanish", "Hindi", "Arabic"],

  extracurricularActivities: [
    "Debate Club",
    "Chess Club",
    "Sports (e.g., Soccer, Basketball, Tennis)",
    "Drama/Theater",
    "Music (e.g., Singing, Playing an Instrument)",
    "Art Club",
    "Community Service",
    "Coding Club",
    "Science Club",
  ],
};
