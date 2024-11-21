import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EeFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#4C4C4C" strokeWidth={3.0303} d="M48.0593 3.02734H14.0639C10.3253 3.02734 8.99096 3.47016 7.62993 4.19804C6.15211 4.98839 4.9923 6.1482 4.20195 7.62602C3.47406 8.98706 3.03125 10.3214 3.03125 14.0599V35.9341C3.03125 39.6726 3.47406 41.007 4.20195 42.3681C4.9923 43.8459 6.15211 45.0057 7.62993 45.796C8.99096 46.5239 10.3253 46.9667 14.0639 46.9667H48.0593C51.7978 46.9667 53.1321 46.5239 54.4932 45.796C55.971 45.0057 57.1308 43.8459 57.9212 42.3681C58.649 41.007 59.0919 39.6726 59.0919 35.9341V14.0599C59.0919 10.3214 58.649 8.98706 57.9212 7.62602C57.1308 6.1482 55.971 4.98839 54.4932 4.19804C53.1321 3.47016 51.7978 3.02734 48.0593 3.02734Z" /><path fill="white" d="M57.5772 31.8125V35.9314C57.5772 39.2408 57.2326 40.4409 56.5856 41.6508C55.9385 42.8607 54.989 43.8102 53.7791 44.4572C52.5692 45.1043 51.3692 45.4489 48.0597 45.4489H14.0643C10.7549 45.4489 9.55482 45.1043 8.34495 44.4572C7.13507 43.8102 6.18555 42.8607 5.5385 41.6508C4.89145 40.4409 4.54688 39.2408 4.54688 35.9314V31.8125H57.5772Z" /><path fill="#1D80AE" d="M14.0643 4.54297H48.0597C51.3692 4.54297 52.5692 4.88755 53.7791 5.5346C54.989 6.18165 55.9385 7.13116 56.5856 8.34104C57.2326 9.55092 57.5772 10.751 57.5772 14.0604V18.1793H4.54688V14.0604C4.54688 10.751 4.89145 9.55092 5.5385 8.34104C6.18555 7.13116 7.13507 6.18165 8.34495 5.5346C9.55482 4.88755 10.7549 4.54297 14.0643 4.54297Z" /><path fill="white" d="M48.0607 45.4531H14.0653C10.7558 45.4531 9.55577 45.1085 8.34589 44.4615C7.13602 43.8144 6.1865 42.8649 5.53945 41.6551C4.8924 40.4452 4.54782 39.2451 4.54782 35.9357V31.8168H57.5781V35.9357C57.5781 39.2451 57.2335 40.4452 56.5865 41.6551C55.9394 42.8649 54.9899 43.8144 53.7801 44.4615C52.5702 45.1085 51.3701 45.4531 48.0607 45.4531Z" /></svg>;
export default EeFlag;