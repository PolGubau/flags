import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AdFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_30)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><rect width={14.6667} height={20} x={13.3334} fill="#F63030" /><path fill="#FFDA27" fillRule="evenodd" d="M9.33337 20H18.6667V0H9.33337V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M12.6666 8.66659H14V9.33325H12.6666V8.66659Z" clipRule="evenodd" /><path strokeWidth={0.666667} d="M12.3923 8.69435C12.3761 8.50001 12.5295 8.33333 12.7245 8.33333H15.2754C15.4704 8.33333 15.6238 8.50001 15.6076 8.69435L15.4363 10.7497C15.3931 11.268 14.9599 11.6667 14.4398 11.6667H13.5601C13.04 11.6667 12.6068 11.268 12.5636 10.7497L12.3923 8.69435Z" /><path fill="#F63030" fillRule="evenodd" d="M12.6666 9.33333H15.3333V10H14.6666H13.3333H12.6666V9.33333Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_30"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default AdFlag;