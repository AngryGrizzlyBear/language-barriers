const postData = async (word, translation, id) => {
  const data = { word, translation, id };
  const json = JSON.stringify(data);

  const response = await fetch("http://localhost:5999", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: json
  });

  const content = await response.json();

  console.log(content);
};

export default postData;
