import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#F73030" fillRule="evenodd" strokeWidth={3.0303} d="M48.0593 3.03125H14.0639C10.3253 3.03125 8.99096 3.47406 7.62993 4.20195C6.15211 4.9923 4.9923 6.15211 4.20195 7.62993C3.47406 8.99096 3.03125 10.3253 3.03125 14.0639V35.938C3.03125 39.6766 3.47406 41.0109 4.20195 42.372C4.9923 43.8498 6.15211 45.0096 7.62993 45.7999C8.99096 46.5278 10.3253 46.9706 14.0639 46.9706H48.0593C51.7978 46.9706 53.1321 46.5278 54.4932 45.7999C55.971 45.0096 57.1308 43.8498 57.9212 42.372C58.649 41.0109 59.0919 39.6766 59.0919 35.938V14.0639C59.0919 10.3253 58.649 8.99096 57.9212 7.62993C57.1308 6.15211 55.971 4.9923 54.4932 4.20195C53.1321 3.47406 51.7978 3.03125 48.0593 3.03125Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M4.54688 16.2344H57.5772V33.7668H4.54688V16.2344Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M25.1684 20.6172C25.9819 20.6172 26.6414 21.2767 26.6414 22.0903V27.9104C26.6414 28.7239 25.9819 29.3834 25.1684 29.3834C24.3548 29.3834 23.6953 28.7239 23.6953 27.9104V22.0903C23.6953 21.2767 24.3548 20.6172 25.1684 20.6172Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M10.4379 20.6172C11.2515 20.6172 11.911 21.2767 11.911 22.0903V27.9104C11.911 28.7239 11.2515 29.3834 10.4379 29.3834C9.62436 29.3834 8.96484 28.7239 8.96484 27.9104V22.0903C8.96484 21.2767 9.62436 20.6172 10.4379 20.6172Z" clipRule="evenodd" /><path fill="#F73030" fillRule="evenodd" d="M14.7125 19.1562H20.8993C21.6315 19.1562 22.2251 19.7498 22.2251 20.482V26.4254C22.2251 28.866 20.2466 30.8446 17.8059 30.8446C15.3653 30.8446 13.3867 28.866 13.3867 26.4254V20.482C13.3867 19.7498 13.9803 19.1562 14.7125 19.1562Z" clipRule="evenodd" /></svg>;
export default EsFlag;