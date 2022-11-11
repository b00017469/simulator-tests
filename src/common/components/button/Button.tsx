import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
   ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
> & { variant: 'buttonOutlined' | 'buttonContained' };

export const Button = ({
   variant,
   className,
   ...restProps
}: DefaultButtonPropsType): ReturnComponentType => {
   let finalClassName: string;

   if (variant === 'buttonContained') {
      finalClassName = `${styles.buttonContained} ${className}`;
   } else {
      finalClassName = `${variant === 'buttonOutlined' ? styles.buttonOutlined : ''} ${className}`;
   }

   return <button type="button" className={finalClassName} {...restProps} />;
};
