import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Caf = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1916)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#18BDBD" /><path fill="white" fillRule="evenodd" d="M8.0282 5.5025C8.0105 5.39631 8.04518 5.28812 8.1213 5.212L10.569 2.76426C10.6315 2.70175 10.7163 2.66663 10.8047 2.66663H12.4607C12.5869 2.66663 12.7023 2.73796 12.7588 2.85089L13.2412 3.8157C13.2977 3.92863 13.4131 3.99996 13.5393 3.99996H15.794C15.9202 3.99996 16.0357 4.07129 16.0921 4.18422L17.9079 7.8157C17.9643 7.92863 18.0798 7.99996 18.206 7.99996H19.3333C19.608 7.99996 19.7648 8.31355 19.6 8.53329L18.018 10.6426C18.006 10.6586 17.9955 10.6756 17.9866 10.6935L17.3685 11.9296C17.3454 11.9759 17.3333 12.0269 17.3333 12.0786V13.2546C17.3333 13.3064 17.3213 13.3574 17.2981 13.4037L16.6667 14.6666L16 16L15.4255 17.149C15.369 17.262 15.2536 17.3333 15.1273 17.3333H14.206C14.0798 17.3333 13.9643 17.262 13.9079 17.149L13.3685 16.0703C13.3454 16.0241 13.3333 15.973 13.3333 15.9213V12.138C13.3333 12.0496 13.2982 11.9648 13.2357 11.9023L12.7223 11.3889C12.6857 11.3523 12.6581 11.3077 12.6418 11.2586L12.076 9.56122C12.0306 9.4251 11.9032 9.33329 11.7597 9.33329H8.94904C8.7861 9.33329 8.64703 9.21549 8.62024 9.05476L8.0282 5.5025Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M18.6667 13.6667C18.6667 13.4826 18.816 13.3334 19.0001 13.3334H19.6667C19.8508 13.3334 20.0001 13.4826 20.0001 13.6667V14.588C20.0001 14.6398 19.988 14.6908 19.9649 14.7371L19.4255 15.8158C19.3691 15.9287 19.2537 16 19.1274 16H19.0001C18.816 16 18.6667 15.8508 18.6667 15.6667V13.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1916"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Caf;