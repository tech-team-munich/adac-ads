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
    <div className="tw-my-8 lg:tw-grid lg:tw-grid-cols-12">
      <blockquote
        {...props}
        className="tw-rounded-lg tw-border tw-border-[#E5E5E5] tw-p-4 md:tw-p-6 lg:tw-col-span-8 lg:tw-col-start-3"
      >
        <figure className="tw-relative tw-flex tw-justify-center tw-items-center tw-gap-x-4 md:tw-gap-x-6">
          <img
            src="/avatar.png"
            className="tw-w-14 tw-h-14 md:tw-w-[110px] md:tw-h-[110px] tw-rounded-full tw-bg-gray-100 tw-flex-shrink-0"
          />
          <figcaption className="tw-w-full">
            <p className="tw-text-sm tw-text-black tw-font-body">
              Der ADAC Produkt-Tipp von Dr. E
            </p>
            <p className="tw-hidden md:tw-block md:tw-mt-2 tw-text-headline  tw-text-black tw-font-body">
              {headline}
            </p>
          </figcaption>
        </figure>
        <p className="md:tw-hidden tw-mt-4 tw-text-headline tw-text-black tw-font-body">
          {headline}
        </p>
        <p className="tw-mt-4 md:tw-mt-6 tw-text-quote tw-italic  tw-text-black tw-font-body">
          "{children}"
        </p>
      </blockquote>
    </div>
  );
};
