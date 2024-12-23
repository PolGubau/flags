import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Es = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_483)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 14.6666H28V5.33325H0V14.6666Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M7.33325 9.33333H8.66659V10H7.33325V9.33333Z" clipRule="evenodd" /><path stroke="#F63030" strokeWidth={0.666667} d="M6.0591 9.3611C6.0429 9.16676 6.19627 9.00008 6.39128 9.00008H8.27555C8.47056 9.00008 8.62393 9.16676 8.60773 9.3611L8.43645 11.4165C8.39326 11.9348 7.95999 12.3334 7.4399 12.3334H7.22693C6.70684 12.3334 6.27357 11.9348 6.23038 11.4165L6.0591 9.3611Z" /><path fill="#F63030" fillRule="evenodd" d="M6 10H8.66667V10.6667H8L7.33333 12L6.66667 10.6667H6V10Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M11.0266 8.07593C11.4404 8.07593 11.7758 8.41137 11.7758 8.82515V11.7854C11.7758 12.1991 11.4404 12.5346 11.0266 12.5346C10.6128 12.5346 10.2773 12.1991 10.2773 11.7854V8.82515C10.2773 8.41137 10.6128 8.07593 11.0266 8.07593Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M3.53462 8.07593C3.94841 8.07593 4.28385 8.41137 4.28385 8.82515V11.7854C4.28385 12.1991 3.94841 12.5346 3.53462 12.5346C3.12084 12.5346 2.7854 12.1991 2.7854 11.7854V8.82515C2.7854 8.41137 3.12084 8.07593 3.53462 8.07593Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M5.70751 7.3335H8.85425C9.22665 7.3335 9.52855 7.63539 9.52855 8.0078V11.0307C9.52855 12.272 8.52223 13.2784 7.28088 13.2784C6.03952 13.2784 5.0332 12.272 5.0332 11.0307V8.0078C5.0332 7.63539 5.3351 7.3335 5.70751 7.3335Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_483"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Es;