import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const HtFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_679)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 9.33333H28V0H0V9.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V9.33325H0V19.9999Z" clipRule="evenodd" /><rect width={9.33333} height={8} x={9.33325} y={6.66675} fill="white" rx={0.666667} /><mask id="mask0_5_679" width={10} height={9} x={9} y={6} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><rect width={9.33333} height={8} x={9.33325} y={6.66675} fill="white" rx={0.666667} /></mask><g mask="url(#mask0_5_679)"><path fill="white" strokeWidth={0.666667} d="M9.66659 14.3333V13.5393L11.5859 12.5797C11.9099 12.4177 12.2672 12.3333 12.6294 12.3333H15.3704C15.7326 12.3333 16.0899 12.4177 16.4139 12.5797L18.3333 13.5393V14.3333H9.66659Z" /><path fill="#FFDA27" fillRule="evenodd" d="M14 12C15.1046 12 16 11.1046 16 10C16 8.89543 15.1046 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12Z" clipRule="evenodd" /><path fill="#FF9600" strokeWidth={0.666667} d="M10.9998 11.3871C10.9998 11.1076 11.3231 10.9522 11.5414 11.1268L13.3751 12.5938C13.7404 12.886 14.2593 12.886 14.6245 12.5938L16.4583 11.1268C16.6765 10.9522 16.9998 11.1076 16.9998 11.3871V12.6667C16.9998 12.8508 16.8506 13 16.6665 13H11.3332C11.1491 13 10.9998 12.8508 10.9998 12.6667V11.3871Z" /><path fill="#50B500" fillRule="evenodd" d="M12.569 8.56903C12.359 8.35905 12.5078 8 12.8047 8H15.1953C15.4922 8 15.641 8.35905 15.431 8.56904L14.2357 9.7643C14.1055 9.89447 13.8945 9.89447 13.7643 9.7643L12.569 8.56903Z" clipRule="evenodd" /></g></g><defs><clipPath id="clip0_5_679"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default HtFlag;