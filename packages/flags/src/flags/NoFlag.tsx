import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const NoFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#F73030" strokeWidth={3.0303} d="M48.0593 3.02734H14.0639C10.3253 3.02734 8.99096 3.47016 7.62993 4.19804C6.15211 4.98839 4.9923 6.1482 4.20195 7.62602C3.47406 8.98706 3.03125 10.3214 3.03125 14.0599V35.9341C3.03125 39.6726 3.47406 41.007 4.20195 42.3681C4.9923 43.8459 6.15211 45.0057 7.62993 45.796C8.99096 46.5239 10.3253 46.9667 14.0639 46.9667H48.0593C51.7978 46.9667 53.1321 46.5239 54.4932 45.796C55.971 45.0057 57.1308 43.8459 57.9212 42.3681C58.649 41.007 59.0919 39.6726 59.0919 35.9341V14.0599C59.0919 10.3214 58.649 8.98706 57.9212 7.62602C57.1308 6.1482 55.971 4.98839 54.4932 4.19804C53.1321 3.47016 51.7978 3.02734 48.0593 3.02734Z" /><path fill="#1D80AE" strokeWidth={2.27273} d="M58.7135 21.9672V20.8308H57.5772H25.3802V4.54297V3.40661H24.2438H18.1832H17.0469V4.54297V20.8308H4.54688H3.41051V21.9672V28.0278V29.1642H4.54688H17.0469V45.4521V46.5884H18.1832H24.2438H25.3802V45.4521V29.1642H57.5772H58.7135V28.0278V21.9672Z" /></svg>;
export default NoFlag;