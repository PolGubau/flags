import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const DoFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_420)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 8H12V0H0V8Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M16 20H28V12H16V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20H12V12H0V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M16 8H28V0H16V8Z" clipRule="evenodd" /><mask id="path-6-inside-1_5_420" fill="white"><path fillRule="evenodd" d="M12.5858 8.58579C11.8048 9.36684 11.8048 10.6332 12.5858 11.4142C13.3669 12.1953 14.6332 12.1953 15.4143 11.4142C16.1953 10.6332 16.1953 9.36683 15.4143 8.58579" clipRule="evenodd" /></mask><path fill="#50B500" d="M13.0572 9.05719C13.3176 8.79684 13.3176 8.37473 13.0572 8.11438C12.7969 7.85403 12.3748 7.85403 12.1144 8.11438L13.0572 9.05719ZM15.8857 8.11438C15.6253 7.85403 15.2032 7.85403 14.9429 8.11438C14.6825 8.37473 14.6825 8.79684 14.9429 9.05719L15.8857 8.11438ZM12.1144 8.11438C11.073 9.15578 11.073 10.8442 12.1144 11.8856L13.0572 10.9428C12.5365 10.4221 12.5365 9.57789 13.0572 9.05719L12.1144 8.11438ZM12.1144 11.8856C13.1558 12.927 14.8443 12.927 15.8857 11.8856L14.9429 10.9428C14.4222 11.4635 13.5779 11.4635 13.0572 10.9428L12.1144 11.8856ZM15.8857 11.8856C16.9271 10.8442 16.9271 9.15578 15.8857 8.11438L14.9429 9.05719C15.4636 9.57789 15.4636 10.4221 14.9429 10.9428L15.8857 11.8856Z" mask="url(#path-6-inside-1_5_420)" /><path fill="#0EA6FB" fillRule="evenodd" d="M13.9998 10.9833C14.543 10.9833 14.9833 10.543 14.9833 9.99984C14.9833 9.45668 14.543 9.01636 13.9998 9.01636C13.4567 9.01636 13.0164 9.45668 13.0164 9.99984C13.0164 10.543 13.4567 10.9833 13.9998 10.9833Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_420"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default DoFlag;