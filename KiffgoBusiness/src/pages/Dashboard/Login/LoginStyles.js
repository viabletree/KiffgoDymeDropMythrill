// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../theme';

export default StyleSheet.create({
    logInContainer: {
        marginBottom: 200,
        '@media (max-width: 600px)': {
            marginBottom: 100,
        }
    }
});
