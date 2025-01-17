import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ec = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_443)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 14.6666H28V9.33325H14H0V14.6666Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 9.33333H28V0H0V9.33333Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M14 12.1895C15.4728 12.1895 16.6667 10.9956 16.6667 9.52287C16.6667 8.05011 15.4728 6.8562 14 6.8562C12.5273 6.8562 11.3334 8.05011 11.3334 9.52287C11.3334 10.9956 12.5273 12.1895 14 12.1895Z" clipRule="evenodd" /><path stroke="#9B5F38" strokeLinecap="round" strokeLinejoin="round" d="M17.3333 6.86839L15.3555 6.16759C14.4991 5.86413 13.5648 5.86129 12.7066 6.15952L10.6666 6.86839" opacity={0.66} /><circle cx={14} cy={9.52283} r={1.53088} fill="#0EA6FB" /></g><defs><clipPath id="clip0_5_443"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ec;