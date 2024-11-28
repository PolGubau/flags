import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Al = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_19)"><rect width={28} height={20} fill="#F63030" /><path fill="#4C4C4C" fillRule="evenodd" d="M12.3865 4.38646C12.1618 4.16175 11.8097 4.12689 11.5453 4.30316L10.9559 4.6961C10.53 4.98004 10.5697 5.61817 11.0275 5.84709L12.2982 6.4824C12.524 6.59533 12.6667 6.82617 12.6667 7.07869V7.33333C12.6667 7.70152 12.3682 8 12 8H11.4908C11.3873 8 11.2852 7.9759 11.1926 7.92962L9.09649 6.88156C8.83983 6.75323 8.52985 6.80353 8.32694 7.00644L7.98741 7.34596C7.66565 7.66772 7.75368 8.21015 8.16067 8.41365L9.10462 8.88562C9.5036 9.08511 9.53822 9.64121 9.16706 9.88865C8.7364 10.1758 8.86785 10.8402 9.37539 10.9417L9.93733 11.0541C10.4769 11.162 10.6346 11.8574 10.1944 12.1875L9.69133 12.5649C9.3631 12.811 9.5372 13.3333 9.94748 13.3333C9.98239 13.3333 10.0172 13.3291 10.051 13.3206L11.3128 13.0051C11.7912 12.8855 12.1661 13.4175 11.8926 13.8278C11.6536 14.1864 11.9106 14.6667 12.3415 14.6667H12.925C13.1689 14.6667 13.3854 14.8227 13.4625 15.0541C13.6347 15.5707 14.3654 15.5707 14.5376 15.0541C14.6147 14.8227 14.8312 14.6667 15.0751 14.6667H15.6586C16.0895 14.6667 16.3465 14.1864 16.1075 13.8278C15.8339 13.4175 16.2088 12.8855 16.6873 13.0051L17.9491 13.3206C17.9829 13.3291 18.0177 13.3333 18.0526 13.3333C18.4629 13.3333 18.637 12.811 18.3088 12.5649L17.8057 12.1875C17.3655 11.8574 17.5232 11.162 18.0628 11.0541L18.6247 10.9417C19.1322 10.8402 19.2637 10.1758 18.833 9.88865C18.4619 9.64121 18.4965 9.08511 18.8955 8.88562L19.8394 8.41365C20.2464 8.21015 20.3344 7.66772 20.0127 7.34596L19.6731 7.00644C19.4702 6.80353 19.1603 6.75323 18.9036 6.88156L16.8075 7.92962C16.7149 7.9759 16.6128 8 16.5093 8H16C15.6319 8 15.3334 7.70152 15.3334 7.33333V7.07869C15.3334 6.82617 15.476 6.59534 15.7019 6.48242C16.0945 6.28612 16.5621 6.05229 16.9728 5.84697C17.4306 5.61805 17.4701 4.98004 17.0442 4.6961L16.4548 4.30316C16.1904 4.12689 15.8383 4.16175 15.6136 4.38646L14.4714 5.5286C14.2111 5.78895 13.789 5.78894 13.5286 5.5286L12.3865 4.38646Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_19"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Al;