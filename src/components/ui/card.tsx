import type { HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';

export type CardProps = HTMLAttributes<HTMLDivElement>;
export const Card = ({ className, ...props }: CardProps): ReactElement => (
  <div
    className={clsx(
      'rounded-2xl bg-sand-50 border border-sand-200 shadow-[0_0_30px_rgba(26,20,18,0.08)]',
      className,
    )}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }: CardProps): ReactElement => (
  <div className={clsx('px-4 py-4', className)} {...props} />
);

export const CardContent = ({ className, ...props }: CardProps): ReactElement => (
  <div className={clsx('px-4 py-4', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>): ReactElement => (
  <h3 className={clsx('text-lg font-semibold text-ink-500', className)} {...props} />
);

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): ReactElement => (
  <p className={clsx('text-ink-400', className)} {...props} />
);
