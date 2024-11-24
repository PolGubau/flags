import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Jm = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_829)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#50B500" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 0L12 10L0 20V0Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M28 0L16 10L28 20V0Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M14 8.39165L-1.2825 -1.9165L-2.77368 0.294263L11.6156 9.99994L-2.77368 19.7056L-1.2825 21.9164L14 11.6082L29.2824 21.9164L30.7736 19.7056L16.3844 9.99994L30.7736 0.294263L29.2824 -1.9165L14 8.39165Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_829"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Jm;