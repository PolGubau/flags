import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const DeFreiburg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1019)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M15.8259 20H12.1738V11.7648H0V8.23535H12.1738V0H15.8259V8.23535H28V11.7648H15.8259V20Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_27_1019"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default DeFreiburg;