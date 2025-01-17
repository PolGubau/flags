import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsNacionalismGal = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1175)"><rect width={28} height={20} fill="white" /><path fill="#0EA6FB" fillRule="evenodd" d="M36.0745 29L-10.9814 -4.75091L-8.03132 -8.86401L39.0247 24.8869L36.0745 29Z" clipRule="evenodd" /><path fill="#F63030" d="M13.5496 13.807L11.9728 14.6434C11.4454 14.9232 10.791 14.7224 10.5113 14.195C10.3995 13.9842 10.3605 13.7424 10.4005 13.5073L10.7057 11.712C10.7482 11.4619 10.6658 11.2068 10.4849 11.0289L9.19726 9.76256C8.76809 9.34049 8.76234 8.65043 9.18441 8.22126C9.35098 8.05188 9.56834 7.94156 9.80339 7.9071L11.5682 7.64838C11.8214 7.61125 12.04 7.45161 12.1525 7.22169L12.943 5.6057C13.2051 5.06989 13.8519 4.84799 14.3878 5.1101C14.6035 5.21561 14.7778 5.39 14.8834 5.6057L15.6738 7.22169C15.7863 7.45161 16.0049 7.61125 16.2582 7.64838L18.0229 7.9071C18.6185 7.99442 19.0305 8.54801 18.9432 9.14358C18.9088 9.37863 18.7985 9.59599 18.6291 9.76256L17.3415 11.0289C17.1606 11.2068 17.0781 11.4619 17.1206 11.712L17.4258 13.5073C17.5259 14.0958 17.1298 14.6541 16.5413 14.7542C16.3061 14.7941 16.0643 14.7552 15.8535 14.6434L14.2767 13.807C14.0493 13.6864 13.777 13.6864 13.5496 13.807Z" /></g><defs><clipPath id="clip0_27_1175"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsNacionalismGal;