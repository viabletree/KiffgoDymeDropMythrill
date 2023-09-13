import _ from "lodash";

const getManipulatedSaveCardInfo = (data) => {
  let itemData = {};

  // check data available or not
  if (_.isEmpty(data.card)) {
    return itemData;
  }

  itemData = {
    cardHolderName: data.card.name || "",
    cardLastFourDigits: "************" + data.card.last4 || "",
    cardPostalCode: data.card.postcode || '',
    token: data.card.token || ""
  };
  return itemData;
};

export { getManipulatedSaveCardInfo };
