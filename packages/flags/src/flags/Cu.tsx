import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Cu = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_370)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 4H28V0H0V4Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 12H28V8H0V12Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="white" d="M4.38379 11.5664L3.65983 11.9606C3.41767 12.0924 3.1151 12.0018 2.98401 11.7582C2.93163 11.6609 2.91273 11.5489 2.93024 11.4396L3.06397 10.6055C3.0826 10.4893 3.04356 10.3713 2.95944 10.2895L2.36063 9.70701C2.16105 9.51287 2.15569 9.19275 2.34867 8.992C2.42483 8.91277 2.52464 8.86075 2.63291 8.84385L3.4458 8.71694C3.56246 8.69873 3.66266 8.62382 3.71363 8.51671L4.07187 7.76393C4.19066 7.51433 4.48811 7.40887 4.73626 7.52838C4.83615 7.57649 4.91727 7.65671 4.96677 7.75637L5.33767 8.503C5.39044 8.60923 5.4919 8.68244 5.60885 8.69868L6.42377 8.81184C6.69879 8.85003 6.89098 9.10525 6.85304 9.38189C6.83807 9.49108 6.78805 9.59234 6.71058 9.67028L6.1217 10.2628C6.03897 10.346 6.00193 10.4647 6.02252 10.5806L6.1703 11.4123C6.21875 11.6849 6.03829 11.9455 5.76723 11.9942C5.65892 12.0136 5.54726 11.9965 5.44962 11.9455L4.71911 11.5636C4.61378 11.5085 4.48817 11.5096 4.38379 11.5664Z" /></g><defs><clipPath id="clip0_5_370"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Cu;