const projectDesc = {
    calories_API: {
        title: "Calories API",
        description: "REST API to monitor calories data with a role management system",
        githubLink: "https://github.com/subhendudash02/calories_be",
        link: null,
        extendedDesc: 
`This REST API is designed to help users monitor their calorie consumption. It provides a user-friendly platform for users to set daily goals and track their progress over time. The API also offers different user roles with varying levels of access control.
Here's a breakdown of the user roles:

- <b>Admins</b>: Have complete control over the system. They can view and edit all user data, including data of managers and regular users.
- <b>Managers</b>: Can view and edit data of all users except for other admins. This role is ideal for managing teams or groups of users.
- <b>Regular Users</b>: Can only view and edit their own data. This ensures privacy and security of individual user information.

The API uses JWT tokens for authentication, ensuring a secure and reliable way for users to access the system.  The API also leverages the Nutritionix API to provide a comprehensive database of food and nutrition information. This integration allows users to easily track their calorie intake by searching for foods and logging their consumption.`  
    },
    gesture_rec: {
        title: "Gesture Recognition",
        description: "Gesture Recognition webapp using next.js and mediapipe",
        githubLink: "https://github.com/subhendudash02/gesture_recognition",
        link: "https://gcra.vercel.app/",
        extendedDesc: "This webapp uses the mediapipe library to detect hand gestures and perform actions based on the detected gestures. The app can recognize various hand gestures such as thumbs up, thumbs down, and peace sign. It also provides a live feed of the webcam to demonstrate the real-time detection of gestures."
    },
    hangman: {
        title: "Hangman",
        description: "Hangman game in animal theme",
        githubLink: "https://github.com/subhendudash02/hangman",
        link: "http://subhendudash02.github.io/hangman"
    },
    pyagenda: {
        title: "pyplanner",
        description: "pyplanner keeps track of all your activities and notifies you when they are due",
        githubLink: "https://github.com/subhendudash02/pyplanner",
        link: null,
        extendedDesc: 
`pyplanner is a CLI based app which schedules all the tasks with the help of cron (Unix-based Job Scheduler). The app notifies 5 minutes before the task is due.

To install and use in your local machine (Linux based OS):

\`\`\`
pip install pyplanner
\`\`\`
`
    },
    numericalMethods: {
        title: "Numerical Methods",
        description: "This website demonstrates different iterative numerical methods to solve a single equation as well as system of equations upto 100 iterations instantly",
        githubLink: "https://github.com/subhendudash02/numerical-methods",
        link: "https://numerical-methods.netlify.app/",
        extendedDesc: 
`Finding the solutions of the mahematical equations in an iterative method is a cumbersome task. It takes a lot of time to compute the value repeatedly in hand and there is a high chance of getting wrong answers too. 

So, this website demonstrates different iterative numerical methods to solve a single equation as well as system of equations upto 100 iterations instantly.

The methods include:
- <b>Gauss-Seidel Method</b>: In numerical linear algebra, the Gauss–Seidel method, also known as the Liebmann method or the method of successive displacement, is an iterative method used to solve a system of linear equations.
- <b>General-Iterative Method</b>: The General Iteration Method" also known as "The Fixed Point Iteration Method" , uses the definition of the function itself to find the root in a recursive way.
- <b>Newton-Raphson Method</b>: In numerical analysis, Newton's method, also known as the Newton–Raphson method, named after Isaac Newton and Joseph Raphson, is a root-finding algorithm which produces successively better approximations to the roots of a real-valued function.`
    },
    profileFetcher: {
        title: "GitHub Profile Fetcher",
        description: "Fetches GitHub profile of a user",
        githubLink: "https://github.com/subhendudash02/github-profile-fetcher",
        link: "https://subhendudash02.github.io/github-profile-fetcher/"
    }
};

export default projectDesc;