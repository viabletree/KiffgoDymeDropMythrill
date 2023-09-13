const getFineData = data => {
  const fineData = {};
  let vehicleSpecificity = '';
  let vehicle = data.vehicle[0];
  if (vehicle) {
    if (vehicle.tail_lift) {
      vehicleSpecificity = 'Taillift,';
    }
    if (vehicle.low_loader) {
      vehicleSpecificity += 'Lowloader,';
    }
    if (vehicle.side_curtain) {
      vehicleSpecificity += 'Side curtain';
    }
    if (vehicle.xlwb) {
      vehicleSpecificity += 'Xlwb,';
    }
    if (vehicle.lwb) {
      vehicleSpecificity += 'Lwb';
    }
    if (vehicleSpecificity === '') {
      vehicleSpecificity = '--';
    }
    fineData.vehicleType = data.vehicle[0].wheelbase || '--';
    fineData.year = data.vehicle[0].year || '--';
  } else {
    fineData.vehicleType = '--';
  }

  fineData.id = data.id;
  fineData.fullName = data.firstName + ' ' + data.lastName;
  if (fineData.fullName === '') {
    fineData.fullName = '--';
  }
  fineData.phone = data.phone || '--';
  if (data.driver_profile.length > 0) {
    fineData.postcode = data.driver_profile[0].homeArea || '--';
    fineData.availability = data.driver_profile[0].available
      ? 'Online'
      : 'Offline';
  } else {
    fineData.postcode = '--';

    fineData.availability = '--';
  }
  fineData.vehicleSpecificity = vehicleSpecificity;
  return fineData;
};

export { getFineData };
