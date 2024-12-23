import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mk = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1158)"><rect width={28} height={20} fill="white" /><path fill="#FFDA27" fillRule="evenodd" d="M14.0001 13.3334C15.841 13.3334 17.3334 11.841 17.3334 10.0001C17.3334 8.15913 15.841 6.66675 14.0001 6.66675C12.1591 6.66675 10.6667 8.15913 10.6667 10.0001C10.6667 11.841 12.1591 13.3334 14.0001 13.3334Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M10.2081 7.27914C10.4094 6.99907 10.641 6.74221 10.898 6.51335L1.96168 -3.53076L-0.714844 -0.558184L10.2081 7.27914ZM10.898 13.4864C10.641 13.2575 10.4094 13.0007 10.2081 12.7206L-0.714844 20.5579L1.96168 23.5305L10.898 13.4864ZM13.0846 14.5768L12 19.9999H16L14.9154 14.5768C14.6194 14.6357 14.3133 14.6665 14 14.6665C13.6867 14.6665 13.3806 14.6357 13.0846 14.5768ZM17.7919 12.7206C17.5906 13.0007 17.3591 13.2575 17.102 13.4864L26.0384 23.5305L28.7149 20.5579L17.7919 12.7206ZM9.37968 10.6599C9.34915 10.4443 9.33336 10.2239 9.33336 9.99988C9.33336 9.77582 9.34915 9.55546 9.37967 9.33983L2.43187e-05 7.99988V11.9999L9.37968 10.6599ZM13.0846 5.42296L12 -0.000121117H16L14.9154 5.42296C14.6194 5.36409 14.3133 5.33321 14 5.33321C13.6867 5.33321 13.3806 5.36409 13.0846 5.42296ZM18.6204 9.33983C18.6509 9.55546 18.6667 9.77582 18.6667 9.99988C18.6667 10.2239 18.6509 10.4443 18.6204 10.6599L28 11.9999V7.99988L18.6204 9.33983ZM17.7919 7.27914C17.5906 6.99907 17.3591 6.74221 17.102 6.51335L26.0384 -3.53076L28.7149 -0.558184L17.7919 7.27914Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1158"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mk;