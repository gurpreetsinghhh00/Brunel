export const validate = (email : string) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );

    if (!isEmailValid) return "Enter a valid email address";
    return null;
  };

  export const config = [
    {
        question : "Do you offer freelancers?",
        answer : "",
        id : 1
    },
    {
        question : "What’s the guarantee that I will be satisfied with the hired talent?",
        answer : "",
        id : 2,
    },
    {
        question : "Can I hire multiple talents at once?",
        answer : "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
        id : 3,
    },
    {
        question : "Why should I not go to an agency directly?",
        answer : "",
        id : 4,
    },
    {
        question : "Who can help me pick a right skillset and duration for me?",
        answer : "",
        id : 5,
    }
]
