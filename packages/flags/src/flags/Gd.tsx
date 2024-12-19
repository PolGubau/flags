import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gd = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_633)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><rect width={22.6667} height={14.6667} x={2.66675} y={2.66675} fill="#50B500" /><mask id="mask0_5_633" width={24} height={16} x={2} y={2} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><rect width={22.6667} height={14.6667} x={2.66675} y={2.66675} fill="white" /></mask><g mask="url(#mask0_5_633)"><path fill="#FFDA27" fillRule="evenodd" d="M4.39322 10.1319C4.77072 10.736 5.3127 11.1348 5.8175 11.2372C6.09541 11.2935 5.58658 10.019 5.80832 9.88042C5.99751 9.7622 6.90777 10.8221 6.98747 10.601C7.17087 10.0922 7.06268 9.37173 6.65468 8.71879C6.06935 7.78206 6.0465 8.40031 4.46411 7.72925C4.62956 8.68893 3.80789 9.19518 4.39322 10.1319Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M14.0001 10.0001L25.3334 2.66675H2.66675L14.0001 10.0001ZM14.0001 10.0001L2.66675 17.3334H25.3334L14.0001 10.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M14.0001 13.3334C15.841 13.3334 17.3334 11.841 17.3334 10.0001C17.3334 8.15913 15.841 6.66675 14.0001 6.66675C12.1591 6.66675 10.6667 8.15913 10.6667 10.0001C10.6667 11.841 12.1591 13.3334 14.0001 13.3334Z" clipRule="evenodd" /><path fill="#FFDA27" d="M15.1193 10.5107L15.2376 11.2217C15.2737 11.4384 15.1272 11.6433 14.9106 11.6794C14.8243 11.6938 14.7357 11.6793 14.6584 11.6382L14.022 11.2996C13.975 11.2746 13.9187 11.2743 13.8714 11.2989L13.2317 11.6311C13.0368 11.7324 12.7967 11.6565 12.6954 11.4615C12.6551 11.3839 12.6415 11.2951 12.6567 11.209L12.782 10.4991C12.7913 10.4467 12.7742 10.393 12.7362 10.3557L12.2225 9.84995C12.066 9.69584 12.064 9.44401 12.2181 9.28746C12.2795 9.22513 12.3597 9.18476 12.4463 9.17261L13.1602 9.07247C13.2129 9.06507 13.2586 9.03219 13.2824 8.98455L13.6047 8.33971C13.7028 8.1432 13.9417 8.0635 14.1383 8.16169C14.2165 8.20079 14.2797 8.2646 14.318 8.34323L14.6338 8.99122C14.6572 9.0391 14.7026 9.07242 14.7552 9.08034L15.4681 9.18752C15.6853 9.22018 15.8349 9.42276 15.8023 9.63999C15.7893 9.72649 15.7481 9.8063 15.6852 9.86704L15.1665 10.3677C15.1282 10.4046 15.1105 10.4581 15.1193 10.5107Z" /></g></g><defs><clipPath id="clip0_5_633"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gd;