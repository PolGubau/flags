import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Us = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1751)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M27.9989 4.44336C27.9996 4.51092 28 4.5804 28 4.65189V6.6656H0V4.65189C0 4.5804 0.000355259 4.51092 0.00106386 4.44336H27.9989Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M27.9989 0.0119629C27.9996 0.0795203 28 0.149002 28 0.220497V2.23421H0V0.220497C0 0.149002 0.000355259 0.0795203 0.00106386 0.0119629H27.9989Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M28 8.88892V11.1112H0L0 8.88892H28Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M28 15.3462C28 15.4177 27.9996 15.4872 27.9989 15.5548H0.00106386C0.000355259 15.4872 0 15.4177 0 15.3462V13.3325H28V15.3462Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M28 19.7915C28 19.863 27.9996 19.9325 27.9989 20.0001H0.00106386C0.000355259 19.9325 0 19.863 0 19.7915V17.7778H28V19.7915Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M3.25806e-05 0H14V8.88897H0L3.25806e-05 0Z" clipRule="evenodd" /><path fill="white" d="M11.1226 3.55645L10.6123 3.80482C10.4521 3.88281 10.254 3.82578 10.1697 3.67743C10.1362 3.61836 10.1246 3.5507 10.1368 3.48492L10.2342 2.95885C10.2435 2.90879 10.2256 2.85771 10.1863 2.82226L9.77353 2.44969C9.64392 2.33271 9.64127 2.14058 9.76761 2.02057C9.81792 1.97278 9.88384 1.94168 9.95517 1.93208L10.5256 1.85533C10.5799 1.84802 10.6268 1.81645 10.6511 1.77091L10.9062 1.29227C10.9863 1.14198 11.1829 1.08028 11.3452 1.15445C11.4098 1.18399 11.4621 1.23243 11.494 1.29227L11.7491 1.77091C11.7734 1.81645 11.8203 1.84802 11.8746 1.85533L12.4451 1.93208C12.6242 1.95618 12.7483 2.11017 12.7223 2.27603C12.7119 2.34207 12.6783 2.40311 12.6267 2.44969L12.2139 2.82226C12.1746 2.85771 12.1567 2.90879 12.166 2.95885L12.2634 3.48492C12.294 3.6501 12.1742 3.80698 11.9958 3.83531C11.9248 3.84659 11.8517 3.83588 11.7879 3.80482L11.2777 3.55645C11.2291 3.53281 11.1711 3.53281 11.1226 3.55645Z" /><path fill="white" d="M11.1226 7.25908L10.6123 7.50746C10.4521 7.58545 10.254 7.52841 10.1697 7.38007C10.1362 7.321 10.1246 7.25333 10.1368 7.18756L10.2342 6.66149C10.2435 6.61143 10.2256 6.56035 10.1863 6.52489L9.77353 6.15233C9.64392 6.03535 9.64127 5.84322 9.76761 5.7232C9.81792 5.67541 9.88384 5.64431 9.95517 5.63472L10.5256 5.55796C10.5799 5.55066 10.6268 5.51909 10.6511 5.47354L10.9062 4.99491C10.9863 4.84462 11.1829 4.78292 11.3452 4.85709C11.4098 4.88662 11.4621 4.93506 11.494 4.99491L11.7491 5.47354C11.7734 5.51909 11.8203 5.55066 11.8746 5.55796L12.4451 5.63472C12.6242 5.65882 12.7483 5.81281 12.7223 5.97866C12.7119 6.04471 12.6783 6.10575 12.6267 6.15233L12.2139 6.52489C12.1746 6.56035 12.1567 6.61143 12.166 6.66149L12.2634 7.18756C12.294 7.35274 12.1742 7.50962 11.9958 7.53795C11.9248 7.54923 11.8517 7.53852 11.7879 7.50746L11.2777 7.25908C11.2291 7.23545 11.1711 7.23545 11.1226 7.25908Z" /><path fill="white" d="M7.12378 3.55645L6.61355 3.80482C6.45334 3.88281 6.25518 3.82578 6.17095 3.67743C6.13741 3.61836 6.12584 3.5507 6.13802 3.48492L6.23547 2.95885C6.24474 2.90879 6.22682 2.85771 6.18754 2.82226L5.77475 2.44969C5.64514 2.33271 5.64249 2.14058 5.76883 2.02057C5.81914 1.97278 5.88506 1.94168 5.95639 1.93208L6.52684 1.85533C6.58113 1.84802 6.62805 1.81645 6.65233 1.77091L6.90745 1.29227C6.98755 1.14198 7.18407 1.08028 7.34638 1.15445C7.41102 1.18399 7.46333 1.23243 7.49523 1.29227L7.75034 1.77091C7.77462 1.81645 7.82155 1.84802 7.87583 1.85533L8.44629 1.93208C8.62541 1.95618 8.74952 2.11017 8.72349 2.27603C8.71312 2.34207 8.67954 2.40311 8.62792 2.44969L8.21514 2.82226C8.17586 2.85771 8.15793 2.90879 8.16721 2.95885L8.26465 3.48492C8.29525 3.6501 8.17543 3.80698 7.99703 3.83531C7.926 3.84659 7.85292 3.83588 7.78912 3.80482L7.2789 3.55645C7.23034 3.53281 7.17234 3.53281 7.12378 3.55645Z" /><path fill="white" d="M7.12378 7.25908L6.61355 7.50746C6.45334 7.58545 6.25518 7.52841 6.17095 7.38007C6.13741 7.321 6.12584 7.25333 6.13802 7.18756L6.23547 6.66149C6.24474 6.61143 6.22682 6.56035 6.18754 6.52489L5.77475 6.15233C5.64514 6.03535 5.64249 5.84322 5.76883 5.7232C5.81914 5.67541 5.88506 5.64431 5.95639 5.63472L6.52684 5.55796C6.58113 5.55066 6.62805 5.51909 6.65233 5.47354L6.90745 4.99491C6.98755 4.84462 7.18407 4.78292 7.34638 4.85709C7.41102 4.88662 7.46333 4.93506 7.49523 4.99491L7.75034 5.47354C7.77462 5.51909 7.82155 5.55066 7.87583 5.55796L8.44629 5.63472C8.62541 5.65882 8.74952 5.81281 8.72349 5.97866C8.71312 6.04471 8.67954 6.10575 8.62792 6.15233L8.21514 6.52489C8.17586 6.56035 8.15793 6.61143 8.16721 6.66149L8.26465 7.18756C8.29525 7.35274 8.17543 7.50962 7.99703 7.53795C7.926 7.54923 7.85292 7.53852 7.78912 7.50746L7.2789 7.25908C7.23034 7.23545 7.17234 7.23545 7.12378 7.25908Z" /><path fill="white" d="M3.12305 3.55645L2.61282 3.80482C2.45261 3.88281 2.25445 3.82578 2.17022 3.67743C2.13668 3.61836 2.12511 3.5507 2.13729 3.48492L2.23474 2.95885C2.24401 2.90879 2.22609 2.85771 2.1868 2.82226L1.77402 2.44969C1.64441 2.33271 1.64176 2.14058 1.7681 2.02057C1.81841 1.97278 1.88433 1.94168 1.95566 1.93208L2.52611 1.85533C2.58039 1.84802 2.62732 1.81645 2.6516 1.77091L2.90671 1.29227C2.98682 1.14198 3.18334 1.08028 3.34565 1.15445C3.41028 1.18399 3.4626 1.23243 3.4945 1.29227L3.74961 1.77091C3.77389 1.81645 3.82082 1.84802 3.8751 1.85533L4.44556 1.93208C4.62468 1.95618 4.74879 2.11017 4.72276 2.27603C4.71239 2.34207 4.6788 2.40311 4.62719 2.44969L4.21441 2.82226C4.17513 2.85771 4.1572 2.90879 4.16647 2.95885L4.26392 3.48492C4.29452 3.6501 4.1747 3.80698 3.9963 3.83531C3.92526 3.84659 3.85219 3.83588 3.78839 3.80482L3.27816 3.55645C3.22961 3.53281 3.1716 3.53281 3.12305 3.55645Z" /><path fill="white" d="M3.12305 7.25908L2.61282 7.50746C2.45261 7.58545 2.25445 7.52841 2.17022 7.38007C2.13668 7.321 2.12511 7.25333 2.13729 7.18756L2.23474 6.66149C2.24401 6.61143 2.22609 6.56035 2.1868 6.52489L1.77402 6.15233C1.64441 6.03535 1.64176 5.84322 1.7681 5.7232C1.81841 5.67541 1.88433 5.64431 1.95566 5.63472L2.52611 5.55796C2.58039 5.55066 2.62732 5.51909 2.6516 5.47354L2.90671 4.99491C2.98682 4.84462 3.18334 4.78292 3.34565 4.85709C3.41028 4.88662 3.4626 4.93506 3.4945 4.99491L3.74961 5.47354C3.77389 5.51909 3.82082 5.55066 3.8751 5.55796L4.44556 5.63472C4.62468 5.65882 4.74879 5.81281 4.72276 5.97866C4.71239 6.04471 4.6788 6.10575 4.62719 6.15233L4.21441 6.52489C4.17513 6.56035 4.1572 6.61143 4.16647 6.66149L4.26392 7.18756C4.29452 7.35274 4.1747 7.50962 3.9963 7.53795C3.92526 7.54923 3.85219 7.53852 3.78839 7.50746L3.27816 7.25908C3.22961 7.23545 3.1716 7.23545 3.12305 7.25908Z" /></g><defs><clipPath id="clip0_5_1751"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Us;