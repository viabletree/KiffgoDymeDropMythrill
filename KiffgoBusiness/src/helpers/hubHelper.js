import _ from 'lodash';
import { HUB_FIELDS_NAME } from '../constants';

const getManipulatedHubList = itsData => {
  const data = _.isArray(itsData)
    ? _.cloneDeep(itsData)
    : [_.cloneDeep(itsData)];
  const fineData = [];
  console.log({ hub: itsData[0] });
  data.forEach((innerElement, index) => {
    // task layer
    const hubDetail = {
      [HUB_FIELDS_NAME.ID]: innerElement.id || -1,
      [HUB_FIELDS_NAME.LOCATION]: innerElement.hub_location || {
        latitude: -1,
        longitude: -1
      },
      [HUB_FIELDS_NAME.ADDRESS]: innerElement.hub_address || '',
      [HUB_FIELDS_NAME.BUILDING]: innerElement.hub_building || '',
      [HUB_FIELDS_NAME.NAME]: innerElement.hub_name || '',
      [HUB_FIELDS_NAME.CITY_TOWN]: innerElement.city_town || '',
      [HUB_FIELDS_NAME.COUNTRY]: innerElement.country || '',
      [HUB_FIELDS_NAME.POST_CODE]: innerElement.postcode || '',
      [HUB_FIELDS_NAME.STREET_NAME]: innerElement.street_name || '',
      [HUB_FIELDS_NAME.STREET_NUMBER]: innerElement.street_number || '',
      [HUB_FIELDS_NAME.SERVICE_TIME]: innerElement.service_time || 0
    };
    fineData.push(hubDetail);
  });

  return fineData;
};
export { getManipulatedHubList };
