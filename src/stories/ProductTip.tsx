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
    <>
      <style>
        {`.tw-text-black,a{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}a{text-underline-offset:2px;text-decoration-thickness:2px;text-decoration-color:#0006}a:hover{text-decoration-color:#000000e6}.tw-relative{position:relative}.tw-m-0{margin:0}.tw-my-8{margin-top:2rem;margin-bottom:2rem}.tw-mt-4{margin-top:1rem}.tw-block{display:block}.tw-flex{display:flex}.tw-hidden{display:none}.tw-h-14{height:3.5rem}.tw-w-14{width:3.5rem}.tw-w-full{width:100%}.tw-flex-shrink-0{flex-shrink:0}.tw-items-center{align-items:center}.tw-justify-center{justify-content:center}.tw-gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.tw-rounded-full{border-radius:9999px}.tw-rounded-lg{border-radius:.5rem}.tw-border{border-width:1px}.tw-border-solid{border-style:solid}.tw-border-\\[\\#E5E5E5\\]{--tw-border-opacity:1;border-color:rgb(229 229 229 / var(--tw-border-opacity))}.tw-bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.tw-p-4{padding:1rem}.tw-align-middle{vertical-align:middle}.tw-font-body{font-family:MiloADAC,sans-serif}.tw-text-headline{font-size:18px;line-height:24px;font-weight:700}.tw-text-quote{font-size:24px;line-height:40px;font-weight:400}.tw-text-sm{font-size:.875rem;line-height:1.25rem}.tw-italic{font-style:italic}@media (min-width:768px){.md\\:tw-mt-2{margin-top:.5rem}.md\\:tw-mt-6{margin-top:1.5rem}.md\\:tw-block{display:block}.md\\:tw-hidden{display:none}.md\\:tw-h-\\[110px\\]{height:110px}.md\\:tw-w-\\[110px\\]{width:110px}.md\\:tw-gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.md\\:tw-p-6{padding:1.5rem}}@media (min-width:1024px){.lg\\:tw-col-span-8{grid-column:span 8/span 8}.lg\\:tw-col-start-3{grid-column-start:3}.lg\\:tw-grid{display:grid}.lg\\:tw-grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}`}
      </style>
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
    </>
  );
};
