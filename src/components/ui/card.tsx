import type { HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';

export type CardProps = HTMLAttributes<HTMLDivElement>;
export const Card = ({ className, ...props }: CardProps): ReactElement => (
  <div className={clsx('rounded-2xl bg-white shadow-sm', className)} {...props} />
);

export const CardHeader = ({ className, ...props }: CardProps): ReactElement => (
  <div className={clsx('px-4 py-4', className)} {...props} />
);

export const CardContent = ({ className, ...props }: CardProps): ReactElement => (
  <div className={clsx('px-4 py-4', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): ReactElement => (
  <h3 className={clsx('text-lg font-semibold text-sand-900', className)} {...props} />
);

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): ReactElement => (
  <p className={clsx('text-sand-900', className)} {...props} />
);
