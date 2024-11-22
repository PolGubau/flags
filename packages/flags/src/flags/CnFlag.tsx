import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CnFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="#F73030" fillRule="evenodd" strokeWidth={3.0303} d="M48.0593 3.03516H14.0639C10.3253 3.03516 8.99096 3.47797 7.62993 4.20586C6.15211 4.99621 4.9923 6.15601 4.20195 7.63384C3.47406 8.99487 3.03125 10.3292 3.03125 14.0678V35.9419C3.03125 39.6805 3.47406 41.0148 4.20195 42.3759C4.9923 43.8537 6.15211 45.0135 7.62993 45.8039C8.99096 46.5317 10.3253 46.9746 14.0639 46.9746H48.0593C51.7978 46.9746 53.1321 46.5317 54.4932 45.8039C55.971 45.0135 57.1308 43.8537 57.9212 42.3759C58.649 41.0148 59.0919 39.6805 59.0919 35.9419V14.0678C59.0919 10.3292 58.649 8.99487 57.9212 7.63384C57.1308 6.15601 55.971 4.99621 54.4932 4.20586C53.1321 3.47797 51.7978 3.03516 48.0593 3.03516Z" clipRule="evenodd" /><path fill="#FFDA27" d="M23.9261 12.8673L22.9549 13.0164C22.6499 13.0633 22.3647 12.854 22.3179 12.5491C22.2993 12.4276 22.3212 12.3034 22.3802 12.1957L22.8526 11.3341C22.8975 11.2521 22.8992 11.1533 22.8572 11.0698L22.4152 10.1922C22.2764 9.91665 22.3873 9.58077 22.6628 9.44198C22.7726 9.38672 22.8974 9.36917 23.0181 9.39205L23.9835 9.57502C24.0754 9.59244 24.17 9.56353 24.2364 9.49772L24.9344 8.80619C25.1536 8.58905 25.5073 8.5907 25.7244 8.80988C25.8109 8.89716 25.8662 9.01051 25.8817 9.13238L26.006 10.1071C26.0179 10.1998 26.0746 10.2808 26.1577 10.3236L27.0311 10.7738C27.3053 10.9152 27.413 11.2521 27.2717 11.5263C27.2154 11.6355 27.1247 11.7231 27.0136 11.7756L26.125 12.195C26.0405 12.2349 25.981 12.3138 25.9659 12.4061L25.8077 13.3759C25.758 13.6804 25.4708 13.8869 25.1663 13.8373C25.0451 13.8175 24.9337 13.7583 24.8495 13.6688L24.1761 12.9533C24.112 12.8853 24.0185 12.8531 23.9261 12.8673Z" /><path fill="#FFDA27" d="M30.8195 17.9554L30.146 18.6709C29.9345 18.8956 29.581 18.9063 29.3563 18.6948C29.2669 18.6106 29.2077 18.4992 29.1879 18.378L29.0296 17.4082C29.0146 17.316 28.9551 17.237 28.8705 17.1971L27.982 16.7777C27.703 16.646 27.5835 16.313 27.7152 16.034C27.7677 15.9229 27.8553 15.8322 27.9645 15.7759L28.8379 15.3258C28.921 15.2829 28.9777 15.2019 28.9895 15.1092L29.1138 14.1345C29.1528 13.8284 29.4326 13.612 29.7386 13.651C29.8605 13.6665 29.9739 13.7218 30.0611 13.8083L30.7592 14.4998C30.8256 14.5656 30.9201 14.5945 31.012 14.5771L31.9774 14.3942C32.2805 14.3367 32.5728 14.5359 32.6303 14.839C32.6532 14.9597 32.6356 15.0846 32.5804 15.1943L32.1384 16.0719C32.0963 16.1554 32.098 16.2542 32.143 16.3362L32.6153 17.1978C32.7636 17.4684 32.6646 17.8079 32.394 17.9562C32.2863 18.0153 32.1621 18.0372 32.0407 18.0185L31.0695 17.8694C30.9771 17.8552 30.8836 17.8874 30.8195 17.9554Z" /><path fill="#FFDA27" d="M23.9261 30.0469L22.9549 30.1961C22.6499 30.243 22.3647 30.0337 22.3179 29.7288C22.2993 29.6073 22.3212 29.4831 22.3802 29.3754L22.8526 28.5138C22.8975 28.4318 22.8992 28.333 22.8572 28.2494L22.4152 27.3719C22.2764 27.0963 22.3873 26.7605 22.6628 26.6217C22.7726 26.5664 22.8974 26.5489 23.0181 26.5717L23.9835 26.7547C24.0754 26.7721 24.17 26.7432 24.2364 26.6774L24.9344 25.9859C25.1536 25.7687 25.5073 25.7704 25.7244 25.9896C25.8109 26.0768 25.8662 26.1902 25.8817 26.3121L26.006 27.2867C26.0179 27.3795 26.0746 27.4605 26.1577 27.5033L27.0311 27.9535C27.3053 28.0948 27.413 28.4318 27.2717 28.706C27.2154 28.8152 27.1247 28.9028 27.0136 28.9552L26.125 29.3747C26.0405 29.4146 25.981 29.4935 25.9659 29.5858L25.8077 30.5556C25.758 30.8601 25.4708 31.0666 25.1663 31.0169C25.0451 30.9972 24.9337 30.938 24.8495 30.8485L24.1761 30.133C24.112 30.0649 24.0185 30.0327 23.9261 30.0469Z" /><path fill="#FFDA27" d="M30.1674 25.2921L29.2977 25.7494C29.0246 25.8929 28.6868 25.7879 28.5433 25.5148C28.4861 25.4061 28.4664 25.2815 28.4871 25.1605L28.6532 24.192C28.669 24.0999 28.6385 24.0058 28.5715 23.9406L27.8679 23.2547C27.647 23.0394 27.6425 22.6857 27.8578 22.4647C27.9436 22.3768 28.0559 22.3195 28.1775 22.3018L29.1499 22.1605C29.2424 22.1471 29.3224 22.089 29.3638 22.0051L29.7986 21.124C29.9352 20.8474 30.2702 20.7338 30.5468 20.8703C30.657 20.9247 30.7462 21.0139 30.8006 21.124L31.2354 22.0051C31.2768 22.089 31.3568 22.1471 31.4493 22.1605L32.4217 22.3018C32.727 22.3462 32.9385 22.6297 32.8942 22.935C32.8765 23.0566 32.8193 23.169 32.7313 23.2547L32.0277 23.9406C31.9607 24.0058 31.9302 24.0999 31.946 24.192L32.1121 25.1605C32.1642 25.4645 31.96 25.7533 31.6559 25.8055C31.5348 25.8263 31.4103 25.8065 31.3015 25.7494L30.4318 25.2921C30.349 25.2486 30.2502 25.2486 30.1674 25.2921Z" /><path fill="#FFDA27" d="M16.3716 23.6461L14.4389 24.6622C13.832 24.9812 13.0814 24.7479 12.7624 24.1411C12.6353 23.8994 12.5915 23.6226 12.6376 23.3535L13.0068 21.2014C13.0419 20.9967 12.974 20.7877 12.8252 20.6427L11.2616 19.1185C10.7707 18.64 10.7606 17.854 11.2392 17.363C11.4297 17.1675 11.6794 17.0403 11.9496 17.0011L14.1104 16.6871C14.3161 16.6572 14.4938 16.528 14.5858 16.3417L15.5521 14.3837C15.8555 13.7689 16.5999 13.5164 17.2148 13.8199C17.4596 13.9407 17.6577 14.1389 17.7786 14.3837L18.7449 16.3417C18.8369 16.528 19.0146 16.6572 19.2203 16.6871L21.3811 17.0011C22.0596 17.0996 22.5297 17.7296 22.4311 18.4081C22.3918 18.6783 22.2646 18.928 22.0691 19.1185L20.5055 20.6427C20.3567 20.7877 20.2888 20.9967 20.3239 21.2014L20.693 23.3535C20.8089 24.0293 20.3551 24.671 19.6793 24.7869C19.4103 24.8331 19.1335 24.7892 18.8918 24.6622L16.9591 23.6461C16.7752 23.5494 16.5555 23.5494 16.3716 23.6461Z" /></svg>;
export default CnFlag;