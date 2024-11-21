import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SeFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#1D80AE" strokeWidth={3.0303} d="M48.0593 3.03125H14.0639C10.3253 3.03125 8.99096 3.47406 7.62993 4.20195C6.15211 4.9923 4.9923 6.15211 4.20195 7.62993C3.47406 8.99096 3.03125 10.3253 3.03125 14.0639V35.938C3.03125 39.6766 3.47406 41.0109 4.20195 42.372C4.9923 43.8498 6.15211 45.0096 7.62993 45.7999C8.99096 46.5278 10.3253 46.9706 14.0639 46.9706H48.0593C51.7978 46.9706 53.1321 46.5278 54.4932 45.7999C55.971 45.0096 57.1308 43.8498 57.9212 42.372C58.649 41.0109 59.0919 39.6766 59.0919 35.938V14.0639C59.0919 10.3253 58.649 8.99096 57.9212 7.62993C57.1308 6.15211 55.971 4.9923 54.4932 4.20195C53.1321 3.47406 51.7978 3.03125 48.0593 3.03125Z" /><path fill="#FFDA27" d="M26.5166 4.54688V19.6976L57.5772 19.6984V30.3045L26.5166 30.3037V45.456H15.9105V30.3037L4.54688 30.3045V19.6984L15.9105 19.6976V4.54688H26.5166Z" /></svg>;
export default SeFlag;