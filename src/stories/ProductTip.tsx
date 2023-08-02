import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface ProductTipProps extends ComponentPropsWithoutRef<"blockquote"> {
  children: ReactNode;
  headline: string;
}

export const ProductTip = ({
  children,
  headline,
  ...props
}: ProductTipProps) => {
  return (
    <blockquote {...props}>
      {headline}
      {children}
    </blockquote>
  );
};
