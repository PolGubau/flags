import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMatadepera = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_727)"><rect width={28} height={20} fill="#F63030" /><path fill="white" fillRule="evenodd" d="M16 20H12V12H0V8H12V0H16V8H28V12H16V20Z" clipRule="evenodd" /><rect width={11} height={1} y={6} fill="white" /><rect width={11} height={1} x={17} y={6} fill="white" /><rect width={7} height={1} x={17} y={7} fill="white" transform="rotate(-90 17 7)" /><rect width={7} height={1} x={17} y={20} fill="white" transform="rotate(-90 17 20)" /><rect width={7} height={1} x={10} y={7} fill="white" transform="rotate(-90 10 7)" /><rect width={7} height={1} x={10} y={20} fill="white" transform="rotate(-90 10 20)" /><rect width={11} height={1} y={13} fill="white" /><rect width={11} height={1} x={17} y={13} fill="white" /></g><defs><clipPath id="clip0_27_727"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMatadepera;