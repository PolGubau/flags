import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const RoFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#FFDA27" strokeWidth={3.0303} d="M48.0593 3.02734H14.0639C10.3253 3.02734 8.99096 3.47016 7.62993 4.19804C6.15211 4.98839 4.9923 6.1482 4.20195 7.62602C3.47406 8.98706 3.03125 10.3214 3.03125 14.0599V35.9341C3.03125 39.6726 3.47406 41.007 4.20195 42.3681C4.9923 43.8459 6.15211 45.0057 7.62993 45.796C8.99096 46.5239 10.3253 46.9667 14.0639 46.9667H48.0593C51.7978 46.9667 53.1321 46.5239 54.4932 45.796C55.971 45.0057 57.1308 43.8459 57.9212 42.3681C58.649 41.007 59.0919 39.6726 59.0919 35.9341V14.0599C59.0919 10.3214 58.649 8.98706 57.9212 7.62602C57.1308 6.1482 55.971 4.98839 54.4932 4.19804C53.1321 3.47016 51.7978 3.02734 48.0593 3.02734Z" /><path fill="#1D80AE" d="M22.4446 4.54297V45.4521H14.0643C10.7549 45.4521 9.55482 45.1075 8.34495 44.4604C7.13507 43.8134 6.18555 42.8639 5.5385 41.654C4.89145 40.4441 4.54688 39.244 4.54688 35.9346V14.0604C4.54688 10.751 4.89145 9.55092 5.5385 8.34104C6.18555 7.13116 7.13507 6.18165 8.34495 5.5346C9.55482 4.88755 10.7549 4.54297 14.0643 4.54297H22.4446Z" /><path fill="#F73030" d="M39.6758 4.54297H48.0561C51.3655 4.54297 52.5656 4.88755 53.7754 5.5346C54.9853 6.18165 55.9348 7.13116 56.5819 8.34104C57.2289 9.55092 57.5735 10.751 57.5735 14.0604V35.9346C57.5735 39.244 57.2289 40.4441 56.5819 41.654C55.9348 42.8639 54.9853 43.8134 53.7754 44.4604C52.5656 45.1075 51.3655 45.4521 48.0561 45.4521H39.6758V4.54297Z" /></svg>;
export default RoFlag;