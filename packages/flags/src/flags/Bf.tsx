import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Bf = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_252)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 20.0001H28V10.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 10.6667H28V0H0V10.6667Z" clipRule="evenodd" /><path fill="#FFDA27" d="M11.8611 11.2733L10.9782 10.4021C10.7092 10.1366 10.7063 9.70333 10.9718 9.43428C11.0775 9.32715 11.2156 9.25785 11.3646 9.23711L12.5931 9.06622C12.6839 9.0536 12.7626 8.99712 12.8037 8.91519L13.3594 7.80631C13.5287 7.4684 13.9399 7.33173 14.2778 7.50107C14.4124 7.5685 14.5209 7.67841 14.5867 7.81378L15.1289 8.92933C15.1689 9.01175 15.247 9.06919 15.3376 9.08292L16.5639 9.26873C16.9376 9.32536 17.1947 9.67421 17.138 10.0479C17.1155 10.1967 17.0445 10.334 16.9361 10.4384L16.0427 11.2987C15.9767 11.3623 15.9462 11.4542 15.9611 11.5446L16.1633 12.7684C16.225 13.1413 15.9726 13.4935 15.5997 13.5552C15.4512 13.5797 15.2988 13.5546 15.166 13.4838L14.0717 12.8999C13.9908 12.8568 13.8939 12.8562 13.8125 12.8983L12.7112 13.4688C12.3756 13.6427 11.9626 13.5115 11.7887 13.1759C11.7195 13.0423 11.6963 12.8895 11.7226 12.7414L11.9397 11.5202C11.9557 11.43 11.9264 11.3376 11.8611 11.2733Z" /></g><defs><clipPath id="clip0_5_252"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Bf;