import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gq = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_592)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M13.6069 11.7151C13.6368 11.684 13.6535 11.6426 13.6538 11.5995L13.6651 9.62741C13.666 9.46527 13.5348 9.33333 13.3727 9.33333C13.1122 9.33333 12.9817 9.01837 13.1659 8.83417L13.7644 8.2357C13.8946 8.10553 14.1056 8.10553 14.2358 8.2357L14.8334 8.83333C15.0179 9.01785 14.8872 9.33333 14.6263 9.33333C14.4645 9.33333 14.3334 9.46447 14.3334 9.62623V11.5976C14.3334 11.6418 14.351 11.6842 14.3822 11.7155C14.4872 11.8205 14.4129 12 14.2644 12H13.7283C13.58 12 13.5042 11.8221 13.6069 11.7151Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 0L9.33333 10L0 20V0Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_592"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gq;