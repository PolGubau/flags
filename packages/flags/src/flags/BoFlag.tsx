import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const BoFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2091_2128)"><rect width={55.996} height={43.9981} x={3.0625} y={3.44531} fill="#FFDA27" /><path fill="#F63030" d="M14.5839 5.03125H48.5793C51.8887 5.03125 53.0888 5.37583 54.2986 6.02288C55.5085 6.66993 56.458 7.61945 57.1051 8.82932C57.7521 10.0392 58.0967 11.2393 58.0967 14.5487V17.1525H5.06641V14.5487C5.06641 11.2393 5.41099 10.0392 6.05804 8.82932C6.70508 7.61945 7.6546 6.66993 8.86448 6.02288C10.0744 5.37583 11.2744 5.03125 14.5839 5.03125Z" /><path fill="#8FD130" d="M58.0967 33.8164V36.4202C58.0967 39.7296 57.7521 40.9297 57.1051 42.1395C56.458 43.3494 55.5085 44.2989 54.2986 44.946C53.0888 45.593 51.8887 45.9376 48.5793 45.9376H14.5839C11.2744 45.9376 10.0744 45.593 8.86448 44.946C7.6546 44.2989 6.70508 43.3494 6.05804 42.1395C5.41099 40.9297 5.06641 39.7296 5.06641 36.4202V33.8164H58.0967Z" /><circle cx={31.0625} cy={25.5078} r={4.65234} fill="#0EA6FB" strokeWidth={3} /></g><rect width={56} height={44} x={3.0625} y={3.50781} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2091_2128"><rect width={56} height={44} x={3.0625} y={3.50781} fill="white" rx={9} /></clipPath></defs></svg>;
export default BoFlag;