export const fetchQuestions = async () => {
    try {
      const response = await fetch("https://crossover-backend.onrender.com/");
      if (!response.ok) {
        throw new Error("Failed to fetch Questions.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };