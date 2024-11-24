import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Et = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_500)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M13.9999 14.6666C16.5772 14.6666 18.6666 12.5772 18.6666 9.99992C18.6666 7.42259 16.5772 5.33325 13.9999 5.33325C11.4226 5.33325 9.33325 7.42259 9.33325 9.99992C9.33325 12.5772 11.4226 14.6666 13.9999 14.6666Z" clipRule="evenodd" /><path stroke="#FFDA27" d="M13.6087 11.0638L12.8879 11.4563C12.8879 11.4559 12.8879 11.4556 12.8879 11.4553L13.0217 10.6212C13.066 10.3448 12.9733 10.0633 12.7721 9.86759L12.1733 9.28512C12.1722 9.28414 12.1721 9.2837 12.172 9.28349L12.172 9.28346C12.1717 9.28292 12.1714 9.28177 12.1714 9.28014C12.1713 9.27851 12.1716 9.27734 12.1718 9.27679L12.1719 9.27675C12.1719 9.27653 12.1721 9.27607 12.1731 9.27503L12.1738 9.27446L12.174 9.27439L12.174 9.27439L12.9869 9.14748C13.2677 9.10365 13.5075 8.92355 13.6291 8.66809L13.9852 7.91983L14.3539 8.66197L14.7925 8.44408L14.3539 8.66197C14.4797 8.91535 14.7226 9.09136 15.0041 9.13045L15.819 9.24361C15.8191 9.24363 15.8193 9.24365 15.8193 9.24367C15.8196 9.24384 15.8199 9.24418 15.8203 9.24475C15.8211 9.24572 15.8215 9.24667 15.8216 9.24731L15.8217 9.24733C15.8217 9.24765 15.8219 9.24844 15.8217 9.25049C15.8214 9.25239 15.8206 9.25368 15.8199 9.25433L16.1511 9.58344L15.8199 9.25434L15.2311 9.84683C15.0331 10.0459 14.9452 10.3289 14.9942 10.6046L15.142 11.4363L15.1421 11.4372L14.4147 11.057C14.1617 10.9247 13.8595 10.9272 13.6087 11.0638ZM15.1453 11.4389L15.1452 11.4389L15.1453 11.4389Z" /></g><defs><clipPath id="clip0_5_500"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Et;