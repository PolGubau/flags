import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const MvFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1127)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><rect width={20} height={12} x={4} y={4} fill="#50B500" rx={0.666667} /><path fill="white" d="M17.1686 6.79478C16.9283 6.73358 16.7166 6.70298 16.5334 6.70298C14.7125 6.70298 13.2365 8.17906 13.2365 9.99991C13.2365 11.8207 14.7125 13.2968 16.5334 13.2968C16.7165 13.2968 16.9283 13.2662 17.1685 13.205C17.3156 13.1676 17.4652 13.2564 17.5026 13.4035C17.5308 13.514 17.4877 13.6304 17.3945 13.696C16.7314 14.1625 15.8949 14.3958 14.8849 14.3958C12.4571 14.3958 10.489 12.4277 10.489 9.99991C10.489 7.57212 12.4571 5.604 14.8849 5.604C15.8949 5.604 16.7315 5.83728 17.3945 6.30384C17.5186 6.39116 17.5484 6.56255 17.4611 6.68664C17.3955 6.77989 17.2791 6.82292 17.1686 6.79478Z" /></g><defs><clipPath id="clip0_5_1127"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default MvFlag;