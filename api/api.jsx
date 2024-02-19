const SERVER_URL = 'https://crossover-backend.onrender.com/';
export const fetchQuestions = async () => {
    try {
      const response = await fetch(SERVER_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch Questions.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };