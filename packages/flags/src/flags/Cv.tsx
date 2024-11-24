import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Cv = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_356)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#F63030" stroke="white" d="M-1.30396 13.6603V14.1603H-0.803955H29.3108H29.8108V13.6603V11.6729V11.1729H29.3108H-0.803955H-1.30396V11.6729V13.6603Z" /><path fillRule="evenodd" stroke="#FFDA27" strokeDasharray="0.67 2" strokeLinecap="round" strokeWidth={1.33333} d="M10.6666 16.6667C12.8758 16.6667 14.6666 14.8759 14.6666 12.6667C14.6666 10.4576 12.8758 8.66675 10.6666 8.66675C8.45749 8.66675 6.66663 10.4576 6.66663 12.6667C6.66663 14.8759 8.45749 16.6667 10.6666 16.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_356"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Cv;