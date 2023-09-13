const getFineData = data => {
  const fineData = [];
  data.forEach(element => {
    fineData.push({
      description: element.description,
      main_text: element.structured_formatting.main_text,
      place_id: element.place_id
    });
  });
  return fineData;
};
export { getFineData };
