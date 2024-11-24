import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Bz = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_182)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 17.3334H28V2.66675H0V17.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 2.66667H28V0H0V2.66667Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V17.3333H0V19.9999Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M14 16C17.3137 16 20 13.3137 20 10C20 6.68629 17.3137 4 14 4C10.6863 4 8 6.68629 8 10C8 13.3137 10.6863 16 14 16Z" clipRule="evenodd" /><path fillRule="evenodd" stroke="#50B500" strokeDasharray="0.67 2" strokeLinecap="round" strokeWidth={1.33333} d="M14 14C16.2091 14 18 12.2091 18 10C18 7.79086 16.2091 6 14 6C11.7909 6 10 7.79086 10 10C10 12.2091 11.7909 14 14 14Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_182"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Bz;