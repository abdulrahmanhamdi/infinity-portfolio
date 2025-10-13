// src/data/courses.js

export const coursesData = [
  {
    slug: 'algorithm-analysis',
    title: "Algorithm Analysis & Design",
    category: "Computer Science and AI",
    short_description: "Learn the basics of algorithm design, analysis and complexity. Includes recursive thinking, sorting, greedy, and dynamic programming.",
    long_description: `This course offers a comprehensive introduction to the core principles and strategies used in algorithm design and analysis. Starting from fundamental data structures, it covers recursion, iteration, and efficiency analysis.
    
The course advances to classic algorithmic strategies including Brute Force, Decrease-and-Conquer, Divide-and-Conquer (e.g., Quicksort, Karatsuba), and Transform-and-Conquer techniques. Modern approaches such as Dynamic Programming and Greedy Techniques are also covered.`,
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/algorithm-analysis",
    materials: {
      midtermsFinals: [
        { name: "Midterm 1", type: "pdf", link: "/assets/PDF/AAD/Vize 1.pdf" },
        { name: "Midterm 1 Answer", type: "pdf", link: "/assets/PDF/AAD/AAD Ara Sınav 1 çözümü.pdf" },
        { name: "Midterm 2", type: "pdf", link: "/assets/PDF/AAD/Vize 2.pdf" },
        { name: "Midterm 2 Answer", type: "pdf", link: "/assets/PDF/AAD/AAD Ara Sınav 2 çözümü.pdf" },
        { name: "Midterm 3", type: "pdf", link: "/assets/PDF/AAD/Vize 3.pdf" },
        { name: "Midterm 3 Answer", type: "pdf", link: "/assets/PDF/AAD/AAD Ara Sınav 3 çözümü.pdf" },
        { name: "Midterm 4", type: "pdf", link: "/assets/PDF/AAD/Vize 4.pdf" },
        { name: "Midterm 4 Answer", type: "pdf", link: "/assets/PDF/AAD/AAD Ara Sınav 4 çözümü.pdf" },
        { name: "Final", type: "text", link: "", text: "Soon.." },
      ],
      quizzes: [
        { name: "Quiz 1", type: "pdf", link: "/assets/PDF/AAD/Quiz 3.pdf" },
        { name: "Quiz 2", type: "pdf", link: "/assets/PDF/AAD/Quiz 5.pdf" },
      ],
      lectureVideos: [
        { name: "Basic Data Structures-I", type: "video", link: "https://cumhuriyetedutr-my.sharepoint.com/:v:/g/personal/2021123119_cumhuriyet_edu_tr/EckuOiwQdcdImaqnajyrvs8B0x3F8O6SCXg_77A3X4a0nQ?e=wPL0Tz" },
        { name: "Concepts of time complexity", type: "video", link: "https://youtu.be/MOYidSBtQDc" },
        { name: "Asymptotic Analysis", type: "video", link: "https://youtu.be/UZ3dtYwJ_98" },
        { name: "Recursive Algorithms", type: "video", link: "https://cumhuriyetedutr-my.sharepoint.com/:v:/g/personal/2021123119_cumhuriyet_edu_tr/EXXw5sguXA9BnPdqXSQ8h9wBwsxB0b9Pk3pda8KlhOlKuw?e=wEbplO" },
        { name: "Brute Force Questions", type: "video", link: "https://youtu.be/TKoA32hcEgs" },
        { name: "Decrease and Conquer Insertion Sort", type: "video", link: "https://youtu.be/KaEBBYjUxEk" },
        { name: "Divide and Conquer Merge Sort", type: "video", link: "https://youtu.be/6aOhRRa6ajA" },
        { name: "Divide and Conquer Quick Sort", type: "video", link: "https://youtu.be/NwtqftAPTHM" },
        { name: "Transform and Conquer Heap Sort", type: "video", link: "https://youtu.be/T0POdBpCW1c" },
      ],
      lectureNotes: [
        { name: "Basic Data Structures", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders01.pdf" },
        { name: "Introduction to Algorithms", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders03.pdf" },
        { name: "Asymptotic Analysis", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders04.pdf" },
        { name: "Brute Force", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders06.pdf" },
        { name: "Decrease and Conquer", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders07(Decrease and Conqure).pdf" },
        { name: "Divide and Conquer", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders08.pdf" },
        { name: "Transform and Conquer", type: "pdf", link: "/assets/PDF/AAD/Algoritma Analizi Ders09.pdf" },
      ],
    }
  },
  {
    slug: 'probability-statistics',
    title: "Probability & Statistics",
    category: "Computer Science and AI",
    short_description: "Covers probability theory, distributions, expected values, variance, and data analysis techniques used in statistics.",
    long_description: `This course provides a structured foundation in probability and statistics, enabling students to analyze data, measure uncertainty, and make informed decisions.
    
The journey begins with core statistical concepts, then introduces fundamental probability principles like combinations, permutations, and Bayes' Theorem. The course progresses to discrete and continuous random variables and their distributions (Bernoulli, Binomial, Poisson, Normal), and finally explores key concepts like hypothesis testing and estimation.`,
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/probability-statistics",
    materials: {
      midtermsFinals: [
        { name: "2022 Midterm Exam Solutions", type: "video", link: "https://youtu.be/WdNp7QhZ43I" },
        { name: "2023 Midterm Exam Solutions", type: "video", link: "https://youtu.be/dnudSFMsZ84" },
        { name: "2022 Final Exam Solutions", type: "video", link: "https://youtu.be/qxEIIk4_sqM" },
        { name: "2023 Final Exam Solutions", type: "video", link: "https://youtu.be/jIjUw9Imalg" },
        { name: "2023 Make-up Exam Solutions", type: "video", link: "https://youtu.be/IlRxZ66i14k" },
      ],
      quizzes: [
        { name: "2022 Midterm Solutions PDF", type: "pdf", link: "/assets/PDF/Probability/stat_vize_22 çözüm.pdf" },
        { name: "2023 Midterm Solutions PDF", type: "pdf", link: "/assets/PDF/Probability/stat_vize_23 çözüm.pdf" },
        { name: "2022 Final Solutions PDF", type: "pdf", link: "/assets/PDF/Probability/Final22 çözüm.pdf" },
        { name: "2023 Final Solutions PDF", type: "pdf", link: "/assets/PDF/Probability/stat_final_23_A çözüm.pdf" },
        { name: "2023 Make-up Exam PDF", type: "pdf", link: "/assets/PDF/Probability/stat_büt_23_A çözüm.pdf" },
      ],
      lectureVideos: [
        { name: "Introduction to Statistics", type: "video", link: "https://cumhuriyetedutr-my.sharepoint.com/:v:/g/personal/2021123119_cumhuriyet_edu_tr/EfL6WxSAXjtLg9Zgcdau3ycBxn0XLR8RAyst2LDmGlVAMw?referrer=Teams.TEAMS-ELECTRON&referrerScenario=MeetingChicletGetLink.view" },
        { name: "Probability Basics", type: "video", link: "https://cumhuriyetedutr-my.sharepoint.com/:v:/g/personal/2021123119_cumhuriyet_edu_tr/EcZdE5QYK6lMiPEpbsB5h-wBWifoK9bhODh1QNkHna576Q?referrer=Teams.TEAMS-ELECTRON&referrerScenario=MeetingChicletGetLink.view" },
        { name: "Conditional Probability", type: "video", link: "https://cumhuriyetedutr-my.sharepoint.com/:v:/g/personal/2021123119_cumhuriyet_edu_tr/EdQibW-nKFVGnM6dMLvwxpoB-szodPJIaQ5CjwFA0sqRmA?referrer=Teams.TEAMS-ELECTRON&referrerScenario=MeetingChicletGetLink.view" },
      ],
      lectureNotes: [
        { name: "Complete Course Notes", type: "pdf", link: "/assets/PDF/Statistics and Probability Notları.pdf" },
      ],
    }
  },
  {
    slug: 'differential-equations',
    title: "Differential Equations",
    category: "Mathematics",
    short_description: "Learn how to solve ordinary differential equations and their applications.",
    long_description: `This course offers a comprehensive introduction to Differential Equations, a fundamental branch of mathematics that models dynamic systems and change over time.
    
Students begin by learning how to classify and solve first-order differential equations, including separable, exact, and linear types. The course progresses to higher-order linear equations, systems of differential equations, and solutions using various methods, complemented by Laplace Transforms.`,
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/differential-equations",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [
        { name: "Complete Course Videos", type: "video", link: "https://www.youtube.com/watch?v=XmePlNMXtGU&list=PL5hH7n-uQFAkDVK38yCJJdHE-o6EJfmCs" }
      ],
      lectureNotes: [
        { name: "Course Notes Part 1", type: "pdf", link: "/assets/PDF/Dif/Dif Denklemler 1.kısım.pdf" },
        { name: "Course Notes Part 2", type: "pdf", link: "/assets/PDF/Dif/Dif Denklemler 2.kısım.pdf" },
      ],
    }
  },
  {
    slug: 'linear-algebra',
    title: "Linear Algebra",
    category: "Computer Science and AI",
    short_description: "Study matrices, vector spaces, linear transformations, and eigenvalues.",
    long_description: `Linear Algebra studies systems of linear equations, vector spaces, and matrix operations, providing essential tools for high-dimensional data and transformations.
    
Students will master basic vector/matrix operations, Gaussian elimination, determinants, and inverses. The course expands into vector spaces, subspaces, basis, dimension, and orthogonality. Advanced topics such as eigenvalues, eigenvectors, and diagonalization are also introduced.`,
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/linear-algebra",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [
        { name: "Complete Course Videos", type: "video", link: "https://www.youtube.com/watch?v=m3O6rXPqb9w&list=PL5hH7n-uQFAmV4xBpPe72SwR4fHcsHXad" }
      ],
      lectureNotes: [
        { name: "Complete Course Notes", type: "text", link: "", text: "Soon" }
      ],
    }
  },
  {
    slug: 'math-1',
    title: "Math 1",
    category: "Engineering",
    short_description: "Introduction to calculus including functions, limits, and derivatives.",
    long_description: `Mathematics I is a foundational course that introduces the essential principles of calculus. It is designed to develop students’ understanding of mathematical concepts used to describe change, motion, and rates.
    
The course begins with the study of real-valued functions, domain and range analysis, and graphical representations. Students will explore the concepts of limits and continuity, and a significant portion is dedicated to the derivative, its computation, and applications.`,
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/math-1",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [
        { name: "Complete Course Videos", type: "video", link: "https://www.youtube.com/watch?v=DfwmSeoFvGo&list=PL5hH7n-uQFAnxZJ_E_dkh8QxGyrQDNM38" }
      ],
      lectureNotes: [
        { name: "Complete Course Notes", type: "pdf", link: "/assets/PDF/math/Genel Matematik 1 Notları.pdf" }
      ],
    }
  },
  {
    slug: 'math-2',
    title: "Math 2",
    category: "Engineering",
    short_description: "Continuation of calculus, covering integrals, applications, and series.",
    long_description: `Mathematics II continues the study of calculus by focusing on integral calculus and its powerful applications.
    
Students begin by exploring indefinite and definite integrals and the Fundamental Theorem of Calculus. The course then introduces various techniques of integration. Applications of integrals—such as computing area between curves and volume of solids—are emphasized. Later topics include sequences and infinite series.`,
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/math-2",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [
        { name: "Complete Course Videos", type: "video", link: "https://www.youtube.com/watch?v=d5lqwccgwJk&list=PL5hH7n-uQFAmw2Z3ruH-teNgGoLV1ECYC" }
      ],
      lectureNotes: [
        { name: "Complete Course Notes", type: "pdf", link: "/assets/PDF/math/Notlar math2.pdf" }
      ],
    }
  },
  {
    slug: 'physics-2',
    title: "Physics 2",
    category: "Engineering",
    short_description: "Topics include electromagnetism, waves, optics, and basic modern physics concepts.",
    long_description: "No detailed description available for this course yet.",
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/physics-2",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [],
      lectureNotes: [],
    }
  },
  {
    slug: 'programming-java',
    title: "Programming Java",
    category: "Computer Science",
    short_description: "Learn Java programming fundamentals including OOP concepts, loops, arrays, and GUI basics.",
    long_description: "No detailed description available for this course yet.",
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/programming-java",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [],
      lectureNotes: [],
    }
  },
  {
    slug: 'signal-system',
    title: "Signal and System",
    category: "Computer Engineering",
    short_description: "Study the basics of signal processing, linear systems, Fourier transforms, and time-domain analysis.",
    long_description: "No detailed description available for this course yet.",
    instructor: "Eng. Abdulrahman Hamdi",
    link: "/course/signal-system",
    materials: {
      midtermsFinals: [],
      quizzes: [],
      lectureVideos: [],
      lectureNotes: [],
    }
  },
];