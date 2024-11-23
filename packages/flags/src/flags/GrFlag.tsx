import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const GrFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_606)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M5.33333 0H0V5.33333H5.33333V0ZM13.3333 0H8V5.33333H13.3333L13.3333 8H8V13.3333H13.3333H28V10.6667H13.3333V8H28V5.33333H13.3333L13.3333 2.66667H28V0H13.3333ZM28 16H0V18.6667H28V16ZM5.33333 8H0V13.3333H5.33333V8Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_606"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default GrFlag;