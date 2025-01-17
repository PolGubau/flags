import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsAragon = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_106)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M0 8.86663H28V6.66663H0V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V11.1333H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 17.8001H28V15.6001H0V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4.39995H28V2.19995H0V4.39995Z" clipRule="evenodd" /><path stroke="white" strokeWidth={1.38138} d="M5.48659 7.73964H11.6571V12.6498C11.6571 14.3537 10.2758 15.735 8.57184 15.735C6.8679 15.735 5.48659 14.3537 5.48659 12.6498V7.73964Z" /><rect width={7.54261} height={1.36013} x={4.80518} y={4.81433} fill="#FF9600" /><rect width={1.39301} height={7.69723} x={7.87988} y={8.03198} fill="white" /><rect width={1.39639} height={6.33575} x={11.7397} y={10.2711} fill="white" transform="rotate(90 11.7397 10.2711)" /></g><defs><clipPath id="clip0_8_106"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsAragon;