// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
  selectedTooltipWrapper: {
    minWidth: '140px',
    padding: '2px',
    backgroundColor: Colors.white,
    borderRadius: '5px'
  },
  selectedTooltipTitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  selectedTooltipSubTitle: {
    fontSize: '11px',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  selectedBarWrapper: {
    background: Colors.bgGreen,
    position: 'absolute',
    bottom: '50px',
    padding: '10px 15px',
    left: 0,
    right: 0,
    width: '175px',
    borderRadius: '18px',
    height: '35px',
    margin: 'auto'
  },
  selectedBarText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: '14px',
    float: 'left'
  },
  removeImage: {
    color: Colors.white,
    fontSize: '15px',
    textAlign: 'center',
    lineHeight: '1.5',
    cursor: 'pointer',
    float: 'right'
  },
  mapCounter: {
    backgroundColor: Colors.white,
    padding: '3px',
    width: '15px',
    height: '15px',
    fontSize: '8px',
    fontWeight: 'bold',
    borderRadius: '100%',
    textAlign: 'center',
    lineHeight: '7px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  driverTooltipWrapper: {
    minWidth: '140px',
    padding: '2px',
    backgroundColor: Colors.white,
    borderRadius: '3px',
    textAlign: 'center'
  },
  hubTooltipWrapper: {
    minWidth: '140px',
    padding: '2px',
    backgroundColor: Colors.white,
    borderRadius: '3px',
    textAlign: 'start',
    paddingLeft: '5px',
    marginRight: '5px'
  },
  driverTooltipName: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  hubTooltipName: {
    fontWeight: '600',
    fontSize: '12px'
  },
  driverTooltipPhone: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  hubTooltipAddress: {
    fontWeight: '400',
    fontSize: '12px'
  },
  driverTooltipLastupdate: {
    fontSize: '10px'
  },
  mapControllsWrappers: {
    position: 'absolute',
    top: '85px',
    left: '60px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9
  },
  mapTypeControllsWrappers: {
    position: 'absolute',
    top: '45px',
    left: '60px',
    display: 'flex',
    zIndex: 9
  },
  mapControllsBtn1: {
    border: 'none',
    width: '25px',
    height: '25px',
    fontSize: '12px'
  },
  mapTypeControllsBtn1: {
    border: 'none',
    height: '25px',
    fontSize: '12px',
    fontWeight: 700
  },
  mapTypeControllsBtn1Selected: {
    border: 'none',
    height: '25px',
    fontSize: '12px',
    fontWeight: 700,
    background: Colors.curiousBlue
  },
  trafficButton: {
    border: 'none',
    height: '25px',
    fontSize: '12px',
    borderRadius: '2px',
    fontWeight: 700
  },
  trafficButtonSelected: {
    color: 'white',
    border: 'none',
    height: '25px',
    fontSize: '12px',
    borderRadius: '2px',
    fontWeight: 700,
    background: Colors.curiousBlue
  },
  borderBottom: {
    borderBottom: '1px solid black'
  },
  borderRight: {
    borderRight: '1px solid black'
  },
  mapControllsPlusMinusWrappers: {
    borderRadius: '2px',
    overflow: 'hidden',
    width: '25px'
  },
  mapTypeControllerButtonsWrappers: {
    borderRadius: '2px',
    overflow: 'hidden'
  },
  mapControllsMapTypeButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '2px',
    overflow: 'hidden'
  },
  mapZoomToFit: {
    width: '25px',
    height: '25px',
    fontSize: '12px',
    marginTop: '10px',
    background: Colors.white,
    borderRadius: '2px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    border: '0px'
  },
  disableBtn: {
    backgroundColor: Colors.white,
    opacity: 0.8
  }
});
