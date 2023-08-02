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
        className="tw-m-0 tw-rounded-lg tw-border tw-border-solid tw-border-[#E5E5E5] tw-p-4 md:tw-p-6 lg:tw-col-span-8 lg:tw-col-start-3"
      >
        <figure className="tw-relative tw-m-0 tw-flex tw-items-center tw-justify-center tw-gap-x-4 md:tw-gap-x-6">
          <img
            src="/avatar.png"
            className="tw-block tw-h-14 tw-w-14 tw-flex-shrink-0 tw-rounded-full tw-bg-gray-100 tw-align-middle md:tw-h-[110px] md:tw-w-[110px]"
          />
          <figcaption className="tw-w-full">
            <p className="tw-m-0 tw-font-body tw-text-sm tw-text-black">
              Der ADAC Produkt-Tipp von Dr. E
            </p>
            <p className="tw-hidden tw-font-body tw-text-headline tw-text-black  md:tw-mt-2 md:tw-block">
              {headline}
            </p>
          </figcaption>
        </figure>
        <p className="tw-m-0 tw-mt-4 tw-font-body tw-text-headline tw-text-black md:tw-hidden">
          {headline}
        </p>
        <p className="tw-m-0 tw-mt-4 tw-font-body tw-text-quote tw-italic  tw-text-black md:tw-mt-6">
          "{children}"
        </p>
      </blockquote>
    </div>
  );
};
