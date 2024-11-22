import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const UaFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#1D80AE" strokeWidth={3.0303} d="M48.0593 3.03125H14.0639C10.3253 3.03125 8.99096 3.47406 7.62993 4.20195C6.15211 4.9923 4.9923 6.15211 4.20195 7.62993C3.47406 8.99096 3.03125 10.3253 3.03125 14.0639V35.938C3.03125 39.6766 3.47406 41.0109 4.20195 42.372C4.9923 43.8498 6.15211 45.0096 7.62993 45.7999C8.99096 46.5278 10.3253 46.9706 14.0639 46.9706H48.0593C51.7978 46.9706 53.1321 46.5278 54.4932 45.7999C55.971 45.0096 57.1308 43.8498 57.9212 42.372C58.649 41.0109 59.0919 39.6766 59.0919 35.938V14.0639C59.0919 10.3253 58.649 8.99096 57.9212 7.62993C57.1308 6.15211 55.971 4.9923 54.4932 4.20195C53.1321 3.47406 51.7978 3.03125 48.0593 3.03125Z" /><path fill="#FFDA27" d="M57.5772 25V35.9371C57.5772 39.2465 57.2326 40.4466 56.5856 41.6565C55.9385 42.8664 54.989 43.8159 53.7791 44.4629C52.5692 45.11 51.3692 45.4545 48.0597 45.4545H14.0643C10.7549 45.4545 9.55482 45.11 8.34495 44.4629C7.13507 43.8159 6.18555 42.8664 5.5385 41.6565C4.89145 40.4466 4.54688 39.2465 4.54688 35.9371V25H57.5772Z" /></svg>;
export default UaFlag;