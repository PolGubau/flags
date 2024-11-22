import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const JpFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="white" fillRule="evenodd" strokeWidth={3.0303} d="M48.0593 3.03516H14.0639C10.3253 3.03516 8.99096 3.47797 7.62993 4.20586C6.15211 4.99621 4.9923 6.15601 4.20195 7.63384C3.47406 8.99487 3.03125 10.3292 3.03125 14.0678V35.9419C3.03125 39.6805 3.47406 41.0148 4.20195 42.3759C4.9923 43.8537 6.15211 45.0135 7.62993 45.8039C8.99096 46.5317 10.3253 46.9746 14.0639 46.9746H48.0593C51.7978 46.9746 53.1321 46.5317 54.4932 45.8039C55.971 45.0135 57.1308 43.8537 57.9212 42.3759C58.649 41.0148 59.0919 39.6805 59.0919 35.9419V14.0678C59.0919 10.3292 58.649 8.99487 57.9212 7.63384C57.1308 6.15601 55.971 4.99621 54.4932 4.20586C53.1321 3.47797 51.7978 3.03516 48.0593 3.03516Z" clipRule="evenodd" /><path fill="#F73030" d="M31.0631 35.6106C36.9207 35.6106 41.6692 30.8621 41.6692 25.0045C41.6692 19.1469 36.9207 14.3984 31.0631 14.3984C25.2055 14.3984 20.457 19.1469 20.457 25.0045C20.457 30.8621 25.2055 35.6106 31.0631 35.6106Z" /></svg>;
export default JpFlag;