const useHttp = () => {
  const sendRequest = async (requestConfig, handleData) => {
    try {
      const response = await fetch(
        "http://localhost:8080/" + requestConfig.path,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers,
          body: requestConfig.method && JSON.stringify(requestConfig.body),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      handleData(data);

    } catch (error) {
      console.log(error);
    }
  };

  return {
    sendRequest,
  };
};

export default useHttp;
