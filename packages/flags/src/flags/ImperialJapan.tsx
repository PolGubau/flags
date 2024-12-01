import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const ImperialJapan = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1100)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M14 14.964C16.7423 14.964 18.9653 12.7409 18.9653 9.99866C18.9653 7.25638 16.7423 5.03333 14 5.03333C11.2577 5.03333 9.03467 7.25638 9.03467 9.99866C9.03467 12.7409 11.2577 14.964 14 14.964Z" clipRule="evenodd" /><path fill="#F63030" d="M-0.338623 0H3.88359L10.9639 6.16666L10.3079 6.86999L-0.338623 0Z" /><path fill="#F63030" d="M7.13135 0H9.56724L12.6235 5.19999L11.7466 5.58666L7.13135 0Z" /><path fill="#F63030" d="M12.8152 0H15.0887L14.4846 5.03333L13.5362 5.03215L12.8152 0Z" /><path fill="#F63030" d="M18.3365 0H20.7724L16.2903 5.59999L15.4102 5.21999L18.3365 0Z" /><path fill="#F63030" d="M24.0205 0H28.2427L17.7196 6.86666L17.0603 6.16666L24.0205 0Z" /><path fill="#F63030" d="M12.8152 20.0001H15.0887L14.4846 14.9667L13.5395 14.964L12.8152 20.0001Z" /><path fill="#F63030" d="M7.13135 20H9.56399L12.6202 14.8L11.7433 14.4166L7.13135 20Z" /><path fill="#F63030" d="M-0.338623 20H3.88359L10.9639 13.8333L10.2754 13.1533L-0.338623 20Z" /><path fill="#F63030" d="M18.3368 20H20.7726L16.2581 14.4L15.3877 14.7867L18.3368 20Z" /><path fill="#F63030" d="M24.0203 20H28.2425L17.7195 13.1333L17.0667 13.84L24.0203 20Z" /><path fill="#F63030" d="M28.8919 3.16663V5.66662L18.6287 8.56329L18.2747 7.64995L28.8919 3.16663Z" /><path fill="#F63030" d="M28.8923 8.83325V11.1666L18.824 10.4899L18.8326 9.50659L28.8923 8.83325Z" /><path fill="#F63030" d="M28.8922 14.3333V16.8333L18.2717 12.3333L18.642 11.4299L28.8922 14.3333Z" /><path fill="#F63030" d="M-0.338623 3.16663V5.66662L9.40496 8.56995L9.77521 7.66662L-0.338623 3.16663Z" /><path fill="#F63030" d="M-0.338623 8.83325V11.1666L9.21009 10.4899L9.20856 9.50992L-0.338623 8.83325Z" /><path fill="#F63030" d="M-0.338623 14.3333V16.8333L9.76222 12.3333L9.39196 11.4299L-0.338623 14.3333Z" /></g><defs><clipPath id="clip0_27_1100"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default ImperialJapan;