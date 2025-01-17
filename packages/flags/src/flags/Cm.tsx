import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Cm = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_321)"><rect width={28} height={20} fill="white" rx={2} /><rect width={14.6667} height={20} x={13.3333} fill="#FFDA27" /><path fill="#50B500" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M9.33325 20H18.6666V0H9.33325V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M18.6667 20H28.0001V0H18.6667V20Z" clipRule="evenodd" /><path fill="#FFDA27" d="M13.8401 12.3951L12.7876 12.9484C12.4571 13.1222 12.0483 12.9951 11.8745 12.6646C11.8053 12.533 11.7815 12.3823 11.8066 12.2357L12.0076 11.0637C12.0267 10.9521 11.9898 10.8383 11.9087 10.7593L11.0572 9.92931C10.7898 9.66867 10.7843 9.24063 11.045 8.97325C11.1488 8.86677 11.2848 8.79748 11.4319 8.7761L12.6087 8.6051C12.7207 8.58883 12.8175 8.51849 12.8676 8.41702L13.3938 7.35066C13.5591 7.01582 13.9645 6.87835 14.2993 7.0436C14.4327 7.1094 14.5406 7.21733 14.6064 7.35066L15.1327 8.41702C15.1828 8.51849 15.2796 8.58883 15.3916 8.6051L16.5684 8.7761C16.9379 8.82979 17.1939 9.17287 17.1402 9.54239C17.1188 9.68953 17.0495 9.82552 16.943 9.92931L16.0915 10.7593C16.0105 10.8383 15.9735 10.9521 15.9926 11.0637L16.1937 12.2357C16.2568 12.6037 16.0096 12.9532 15.6416 13.0164C15.495 13.0415 15.3443 13.0176 15.2127 12.9484L14.1601 12.3951C14.06 12.3424 13.9403 12.3424 13.8401 12.3951Z" /></g><defs><clipPath id="clip0_5_321"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Cm;