import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsArgentona = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_561)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M0 8.86663H28V6.66663H0V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V11.1333H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 17.8001H28V15.6001H0V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4.39995H28V2.19995H0V4.39995Z" clipRule="evenodd" /><rect width={10} height={20} fill="white" /><path fill="#50B500" d="M4 4C5.28058 5.28058 6 7.01742 6 8.82843V10L5.52294 11.4312C5.18349 12.4495 5.18349 13.5505 5.52294 14.5688L5.79189 15.3757C5.89427 15.6828 5.66565 16 5.34189 16C5.13771 16 4.95645 15.8694 4.89189 15.6757L4.1834 13.5502C4.06267 13.188 4.02458 12.8034 4.07193 12.4245C4.35641 10.1487 4.38481 7.84812 4.1566 5.56596L4 4Z" /></g><defs><clipPath id="clip0_27_561"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsArgentona;