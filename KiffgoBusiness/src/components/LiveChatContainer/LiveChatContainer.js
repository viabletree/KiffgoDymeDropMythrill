import { Component } from 'react'; // React is only need when using jsx; this component renders null
import { Colors } from '../../theme';

class LiveChatContainer extends Component {
  componentDidMount() {
    if (
      document &&
      typeof document.createElement === 'function' &&
      window &&
      this.props.location
    ) {
      (function(d, w, c) {
        w.ChatraSetup = {
          colors: {
            buttonText: '#f0f0f0', // chat button text color
            buttonBg: Colors.bgGreen // chat button background color
          },

          disabledOnMobile: false
        };
        w.ChatraID = 'tkzwtA7nTPScdysS4';
        var s = d.createElement('script');
        w[c] =
          w[c] ||
          function() {
            (w[c].q = w[c].q || []).push(arguments);
          };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
      })(document, window, 'Chatra');
    }
  }

  render() {
    return null;
  }
}

export default LiveChatContainer;
