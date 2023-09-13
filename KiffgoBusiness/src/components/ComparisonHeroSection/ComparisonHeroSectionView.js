// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './ComparisonHeroSectionStyles';
import { Images } from '../../theme';

export default function ComparisonHeroSectionView(props) {
  const { altText } = props;
  return (
    <div>
      <section className={`${css(styles.heroSecWrapper)}`}>
        <div className={`${css(styles.heroImgWrapper)}`}>
          <img src={Images.vs_boxing_img} alt={altText} />
        </div>
      </section>
    </div>
  );
}
