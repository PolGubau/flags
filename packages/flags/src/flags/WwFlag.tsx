import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const WwFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1895)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#18BDBD" /><path fill="white" fillRule="evenodd" d="M14 17.3333C18.05 17.3333 21.3333 14.05 21.3333 9.99996C21.3333 5.94987 18.05 2.66663 14 2.66663C9.94987 2.66663 6.66663 5.94987 6.66663 9.99996C6.66663 14.05 9.94987 17.3333 14 17.3333ZM19.9633 10.6666C19.7158 12.9058 18.2361 14.7736 16.2173 15.5769C16.8673 14.2529 17.2471 12.528 17.3203 10.6666H19.9633ZM15.9856 10.6666C15.8883 12.9157 15.301 14.9034 14.3855 15.9878C14.258 15.9959 14.1295 16 14 16C13.8705 16 13.7419 15.9959 13.6145 15.9878C12.6989 14.9034 12.1117 12.9157 12.0143 10.6666H15.9856ZM10.6797 10.6666C10.7528 12.528 11.1326 14.2529 11.7826 15.5769C9.76382 14.7736 8.28411 12.9058 8.03658 10.6666H10.6797ZM12.0143 9.33329H15.9856C15.8883 7.08425 15.301 5.09653 14.3855 4.01214C14.258 4.00406 14.1295 3.99996 14 3.99996C13.8705 3.99996 13.7419 4.00406 13.6145 4.01214C12.6989 5.09653 12.1117 7.08425 12.0143 9.33329ZM11.7826 4.42298C11.1326 5.74701 10.7528 7.47193 10.6797 9.33329H8.03658C8.28411 7.09413 9.76382 5.22633 11.7826 4.42298ZM19.9633 9.33329H17.3203C17.2471 7.47193 16.8673 5.747 16.2173 4.42298C18.2361 5.22633 19.7158 7.09412 19.9633 9.33329Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1895"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default WwFlag;