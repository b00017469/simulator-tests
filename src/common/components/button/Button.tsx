import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
   ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
> & { variant: 'outlined' | 'contained' };

export const Button = ({
   variant,
   className,
   ...restProps
}: DefaultButtonPropsType): ReturnComponentType => {
   let finalClassName: string;

   if (variant === 'contained') {
      finalClassName = `${styles.buttonContained} ${className}`;
   } else {
      finalClassName = `${variant === 'outlined' ? styles.buttonOutlined : ''} ${className}`;
   }

   return <button type="button" className={finalClassName} {...restProps} />;
};
