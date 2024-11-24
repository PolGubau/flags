import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Br = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_225)"><rect width={28} height={20} fill="#50B500" /><path fill="#FFDA27" fillRule="evenodd" d="M3.21996 9.39679L13.5604 1.86031C13.8223 1.66938 14.1776 1.66938 14.4395 1.86031L24.78 9.39679C25.1131 9.63956 25.1863 10.1064 24.9435 10.4395C24.8974 10.5028 24.8416 10.5584 24.7782 10.6044L14.4377 18.0935C14.1765 18.2827 13.8234 18.2827 13.5622 18.0935L3.22177 10.6044C2.88794 10.3626 2.81332 9.89597 3.0551 9.56214C3.10104 9.49872 3.15667 9.44292 3.21996 9.39679Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M14.0002 14.4808C16.4733 14.4808 18.4781 12.476 18.4781 10.0029C18.4781 7.52976 16.4733 5.5249 14.0002 5.5249C11.5271 5.5249 9.52222 7.52976 9.52222 10.0029C9.52222 12.476 11.5271 14.4808 14.0002 14.4808Z" /><path fill="white" fillRule="evenodd" d="M9.53149 9.70829C9.56891 9.1327 9.71508 8.58677 9.94966 8.09082L18.4729 10.2159C18.4459 10.7928 18.3098 11.3412 18.0846 11.8408L9.53149 9.70829Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_225"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Br;