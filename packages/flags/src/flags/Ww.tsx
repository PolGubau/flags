import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ww = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1895)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#18BDBD" /><path fill="white" fillRule="evenodd" d="M14.0001 17.3333C18.0502 17.3333 21.3334 14.05 21.3334 9.99996C21.3334 5.94987 18.0502 2.66663 14.0001 2.66663C9.94999 2.66663 6.66675 5.94987 6.66675 9.99996C6.66675 14.05 9.94999 17.3333 14.0001 17.3333ZM19.9635 10.6666C19.7159 12.9058 18.2362 14.7736 16.2174 15.5769C16.8675 14.2529 17.2472 12.528 17.3204 10.6666H19.9635ZM15.9857 10.6666C15.8884 12.9157 15.3012 14.9034 14.3856 15.9878C14.2581 15.9959 14.1296 16 14.0001 16C13.8706 16 13.742 15.9959 13.6146 15.9878C12.699 14.9034 12.1118 12.9157 12.0144 10.6666H15.9857ZM10.6798 10.6666C10.7529 12.528 11.1327 14.2529 11.7828 15.5769C9.76394 14.7736 8.28423 12.9058 8.0367 10.6666H10.6798ZM12.0144 9.33329H15.9857C15.8884 7.08425 15.3012 5.09653 14.3856 4.01214C14.2581 4.00406 14.1296 3.99996 14.0001 3.99996C13.8706 3.99996 13.742 4.00406 13.6146 4.01214C12.699 5.09653 12.1118 7.08425 12.0144 9.33329ZM11.7828 4.42298C11.1327 5.74701 10.7529 7.47193 10.6798 9.33329H8.0367C8.28423 7.09413 9.76394 5.22633 11.7828 4.42298ZM19.9635 9.33329H17.3204C17.2472 7.47193 16.8675 5.747 16.2174 4.42298C18.2362 5.22633 19.7159 7.09412 19.9635 9.33329Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1895"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ww;