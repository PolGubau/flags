import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Pw = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1343)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><path fill="#FFDA27" fillRule="evenodd" d="M12.6667 16C15.9805 16 18.6667 13.3137 18.6667 10C18.6667 6.68629 15.9805 4 12.6667 4C9.35304 4 6.66675 6.68629 6.66675 10C6.66675 13.3137 9.35304 16 12.6667 16Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1343"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Pw;