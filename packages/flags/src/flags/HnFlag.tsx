import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const HnFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_719)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M14.0001 10.6667L13.0573 10.9429L13.3334 10.0001L13.0573 9.05727L14.0001 9.33341L14.9429 9.05727L14.6667 10.0001L14.9429 10.9429L14.0001 10.6667Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M19.3333 9.33325L18.3905 9.60939L18.6667 8.66659L18.3905 7.72378L19.3333 7.99992L20.2761 7.72378L20 8.66659L20.2761 9.60939L19.3333 9.33325Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M19.3333 12L18.3905 12.2761L18.6667 11.3333L18.3905 10.3905L19.3333 10.6667L20.2761 10.3905L20 11.3333L20.2761 12.2761L19.3333 12Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M8.66659 12L7.72378 12.2761L7.99992 11.3333L7.72378 10.3905L8.66659 10.6667L9.60939 10.3905L9.33325 11.3333L9.60939 12.2761L8.66659 12Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M8.66659 9.33325L7.72378 9.60939L7.99992 8.66659L7.72378 7.72378L8.66659 7.99992L9.60939 7.72378L9.33325 8.66659L9.60939 9.60939L8.66659 9.33325Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_719"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default HnFlag;