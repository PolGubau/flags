import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const HrFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_691)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#18BDBD" fillRule="evenodd" d="M10.6667 5.33341L11.3334 4.66675L12.0001 5.33341V6.66675H10.6667V5.33341ZM13.3334 5.33341L14.0001 4.66675L14.6667 5.33341V6.66675H13.3334V5.33341ZM16.6667 4.66675L16.0001 5.33341V6.66675H17.3334V5.33341L16.6667 4.66675Z" clipRule="evenodd" opacity={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M12.6667 4.66675L12 5.33341V6.66675H13.3333V5.33341L12.6667 4.66675ZM15.3333 4.66675L14.6667 5.33341V6.66675H16V5.33341L15.3333 4.66675Z" clipRule="evenodd" opacity={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M12.0001 6.66675H11.3334L10.6667 8.00008H12.0001V9.33341H10.6667V10.6667H12.0001V12.0001H10.6667V13.3334H12.0001V14.6667H13.3334V13.3334H14.6667V14.6667H16.0001V13.3334H17.3334V12.0001H16.0001V10.6667H17.3334V9.33341H16.0001V8.00008H17.3334L16.6667 6.66675H16.0001V8.00008H14.6667V6.66675H13.3334V8.00008H12.0001V6.66675ZM13.3334 9.33341V8.00008H14.6667V9.33341H13.3334ZM13.3334 10.6667V9.33341H12.0001V10.6667H13.3334ZM14.6667 10.6667H13.3334V12.0001H12.0001V13.3334H13.3334V12.0001H14.6667V13.3334H16.0001V12.0001H14.6667V10.6667ZM14.6667 10.6667H16.0001V9.33341H14.6667V10.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_691"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default HrFlag;