import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ir = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_780)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#50B500" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M1.66671 5.33325C1.48261 5.33325 1.33337 5.48249 1.33337 5.66659V6.33325C1.33337 6.51735 1.48261 6.66659 1.66671 6.66659H2.33337C2.51747 6.66659 2.66671 6.51735 2.66671 6.33325V5.66659C2.66671 5.48249 2.51747 5.33325 2.33337 5.33325H1.66671ZM4.33337 5.33325C4.14928 5.33325 4.00004 5.48249 4.00004 5.66659V6.33325C4.00004 6.51735 4.14928 6.66659 4.33337 6.66659H5.00004C5.18414 6.66659 5.33337 6.51735 5.33337 6.33325V5.66659C5.33337 5.48249 5.18414 5.33325 5.00004 5.33325H4.33337ZM6.66671 5.66659C6.66671 5.48249 6.81595 5.33325 7.00004 5.33325H7.66671C7.8508 5.33325 8.00004 5.48249 8.00004 5.66659V6.33325C8.00004 6.51735 7.8508 6.66659 7.66671 6.66659H7.00004C6.81595 6.66659 6.66671 6.51735 6.66671 6.33325V5.66659ZM9.66671 5.33325C9.48261 5.33325 9.33337 5.48249 9.33337 5.66659V6.33325C9.33337 6.51735 9.48261 6.66659 9.66671 6.66659H10.3334C10.5175 6.66659 10.6667 6.51735 10.6667 6.33325V5.66659C10.6667 5.48249 10.5175 5.33325 10.3334 5.33325H9.66671ZM12 5.66659C12 5.48249 12.1493 5.33325 12.3334 5.33325H13C13.1841 5.33325 13.3334 5.48249 13.3334 5.66659V6.33325C13.3334 6.51735 13.1841 6.66659 13 6.66659H12.3334C12.1493 6.66659 12 6.51735 12 6.33325V5.66659ZM15 5.33325C14.8159 5.33325 14.6667 5.48249 14.6667 5.66659V6.33325C14.6667 6.51735 14.8159 6.66659 15 6.66659H15.6667C15.8508 6.66659 16 6.51735 16 6.33325V5.66659C16 5.48249 15.8508 5.33325 15.6667 5.33325H15ZM17.3334 5.66659C17.3334 5.48249 17.4826 5.33325 17.6667 5.33325H18.3334C18.5175 5.33325 18.6667 5.48249 18.6667 5.66659V6.33325C18.6667 6.51735 18.5175 6.66659 18.3334 6.66659H17.6667C17.4826 6.66659 17.3334 6.51735 17.3334 6.33325V5.66659ZM20.3334 5.33325C20.1493 5.33325 20 5.48249 20 5.66659V6.33325C20 6.51735 20.1493 6.66659 20.3334 6.66659H21C21.1841 6.66659 21.3334 6.51735 21.3334 6.33325V5.66659C21.3334 5.48249 21.1841 5.33325 21 5.33325H20.3334ZM22.6667 5.66659C22.6667 5.48249 22.8159 5.33325 23 5.33325H23.6667C23.8508 5.33325 24 5.48249 24 5.66659V6.33325C24 6.51735 23.8508 6.66659 23.6667 6.66659H23C22.8159 6.66659 22.6667 6.51735 22.6667 6.33325V5.66659ZM25.6667 5.33325C25.4826 5.33325 25.3334 5.48249 25.3334 5.66659V6.33325C25.3334 6.51735 25.4826 6.66659 25.6667 6.66659H26.3334C26.5175 6.66659 26.6667 6.51735 26.6667 6.33325V5.66659C26.6667 5.48249 26.5175 5.33325 26.3334 5.33325H25.6667ZM1.33337 13.6666C1.33337 13.4825 1.48261 13.3333 1.66671 13.3333H2.33337C2.51747 13.3333 2.66671 13.4825 2.66671 13.6666V14.3333C2.66671 14.5173 2.51747 14.6666 2.33337 14.6666H1.66671C1.48261 14.6666 1.33337 14.5173 1.33337 14.3333V13.6666ZM4.33337 13.3333C4.14928 13.3333 4.00004 13.4825 4.00004 13.6666V14.3333C4.00004 14.5173 4.14928 14.6666 4.33337 14.6666H5.00004C5.18414 14.6666 5.33337 14.5173 5.33337 14.3333V13.6666C5.33337 13.4825 5.18414 13.3333 5.00004 13.3333H4.33337ZM6.66671 13.6666C6.66671 13.4825 6.81595 13.3333 7.00004 13.3333H7.66671C7.8508 13.3333 8.00004 13.4825 8.00004 13.6666V14.3333C8.00004 14.5173 7.8508 14.6666 7.66671 14.6666H7.00004C6.81595 14.6666 6.66671 14.5173 6.66671 14.3333V13.6666ZM9.66671 13.3333C9.48261 13.3333 9.33337 13.4825 9.33337 13.6666V14.3333C9.33337 14.5173 9.48261 14.6666 9.66671 14.6666H10.3334C10.5175 14.6666 10.6667 14.5173 10.6667 14.3333V13.6666C10.6667 13.4825 10.5175 13.3333 10.3334 13.3333H9.66671ZM12 13.6666C12 13.4825 12.1493 13.3333 12.3334 13.3333H13C13.1841 13.3333 13.3334 13.4825 13.3334 13.6666V14.3333C13.3334 14.5173 13.1841 14.6666 13 14.6666H12.3334C12.1493 14.6666 12 14.5173 12 14.3333V13.6666ZM15 13.3333C14.8159 13.3333 14.6667 13.4825 14.6667 13.6666V14.3333C14.6667 14.5173 14.8159 14.6666 15 14.6666H15.6667C15.8508 14.6666 16 14.5173 16 14.3333V13.6666C16 13.4825 15.8508 13.3333 15.6667 13.3333H15ZM17.3334 13.6666C17.3334 13.4825 17.4826 13.3333 17.6667 13.3333H18.3334C18.5175 13.3333 18.6667 13.4825 18.6667 13.6666V14.3333C18.6667 14.5173 18.5175 14.6666 18.3334 14.6666H17.6667C17.4826 14.6666 17.3334 14.5173 17.3334 14.3333V13.6666ZM20.3334 13.3333C20.1493 13.3333 20 13.4825 20 13.6666V14.3333C20 14.5173 20.1493 14.6666 20.3334 14.6666H21C21.1841 14.6666 21.3334 14.5173 21.3334 14.3333V13.6666C21.3334 13.4825 21.1841 13.3333 21 13.3333H20.3334ZM22.6667 13.6666C22.6667 13.4825 22.8159 13.3333 23 13.3333H23.6667C23.8508 13.3333 24 13.4825 24 13.6666V14.3333C24 14.5173 23.8508 14.6666 23.6667 14.6666H23C22.8159 14.6666 22.6667 14.5173 22.6667 14.3333V13.6666ZM25.6667 13.3333C25.4826 13.3333 25.3334 13.4825 25.3334 13.6666V14.3333C25.3334 14.5173 25.4826 14.6666 25.6667 14.6666H26.3334C26.5175 14.6666 26.6667 14.5173 26.6667 14.3333V13.6666C26.6667 13.4825 26.5175 13.3333 26.3334 13.3333H25.6667Z" clipRule="evenodd" /><mask id="path-5-inside-1_5_780" fill="white"><path fillRule="evenodd" d="M12.6535 8.52124C12.252 8.88703 12 9.41414 12 10.0001C12 11.1047 12.8954 12.0001 14 12.0001C15.1046 12.0001 16 11.1047 16 10.0001C16 9.4252 15.7574 8.90695 15.3691 8.54212" clipRule="evenodd" /></mask><path fill="#F63030" d="M12.2045 8.02842C11.6702 8.51522 11.3333 9.2188 11.3333 10.0001H12.6667C12.6667 9.60948 12.8338 9.25885 13.1025 9.01406L12.2045 8.02842ZM11.3333 10.0001C11.3333 11.4729 12.5272 12.6668 14 12.6668V11.3334C13.2636 11.3334 12.6667 10.7365 12.6667 10.0001H11.3333ZM14 12.6668C15.4728 12.6668 16.6667 11.4729 16.6667 10.0001H15.3333C15.3333 10.7365 14.7364 11.3334 14 11.3334V12.6668ZM16.6667 10.0001C16.6667 9.23361 16.3424 8.54179 15.8255 8.05622L14.9126 9.02802C15.1724 9.27211 15.3333 9.61679 15.3333 10.0001H16.6667Z" mask="url(#path-5-inside-1_5_780)" /><rect width={1.33333} height={2.66667} x={13.3334} y={9.33325} fill="#F63030" rx={0.666667} /></g><defs><clipPath id="clip0_5_780"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ir;