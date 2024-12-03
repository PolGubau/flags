import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const An = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1999)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><rect width={6.66667} height={20} x={10.6666} fill="#F63030" /><rect width={28} height={6.66667} y={6.66675} fill="#0EA6FB" /><path fill="white" d="M8.23734 10.4462L8.05998 10.5428C8.00065 10.5751 7.92652 10.5529 7.89441 10.4932C7.88158 10.4694 7.87694 10.4419 7.88124 10.4152L7.914 10.2108C7.91856 10.1824 7.909 10.1534 7.88839 10.1334L7.74169 9.9907C7.69279 9.94314 7.69148 9.86471 7.73875 9.81553C7.75741 9.79612 7.78187 9.78338 7.80839 9.77923L8.00754 9.74814C8.03612 9.74368 8.06067 9.72533 8.07316 9.69909L8.16092 9.51467C8.19002 9.45352 8.2629 9.42768 8.32369 9.45696C8.34816 9.46875 8.36804 9.4884 8.38016 9.51282L8.47103 9.69573C8.48396 9.72176 8.50882 9.73969 8.53747 9.74367L8.73711 9.77139C8.80449 9.78075 8.85157 9.84328 8.84228 9.91105C8.83861 9.9378 8.82636 9.96261 8.80738 9.9817L8.66311 10.1269C8.64284 10.1473 8.63377 10.1763 8.63881 10.2047L8.67502 10.4085C8.68689 10.4753 8.64268 10.5391 8.57627 10.551C8.54973 10.5558 8.52238 10.5516 8.49846 10.5391L8.31949 10.4455C8.29368 10.4321 8.26291 10.4323 8.23734 10.4462Z" /><path fill="white" d="M11.0354 11.6728L10.8581 11.7694C10.7987 11.8017 10.7246 11.7795 10.6925 11.7198C10.6797 11.6959 10.675 11.6685 10.6793 11.6417L10.7121 11.4374C10.7167 11.4089 10.7071 11.38 10.6865 11.36L10.5398 11.2173C10.4909 11.1697 10.4896 11.0913 10.5369 11.0421C10.5555 11.0227 10.58 11.0099 10.6065 11.0058L10.8056 10.9747C10.8342 10.9702 10.8588 10.9519 10.8713 10.9257L10.959 10.7412C10.9881 10.6801 11.061 10.6542 11.1218 10.6835C11.1463 10.6953 11.1661 10.715 11.1783 10.7394L11.2691 10.9223C11.2821 10.9483 11.3069 10.9663 11.3356 10.9702L11.5352 10.998C11.6026 11.0073 11.6497 11.0698 11.6404 11.1376C11.6367 11.1644 11.6245 11.1892 11.6055 11.2083L11.4612 11.3534C11.4409 11.3738 11.4319 11.4029 11.4369 11.4313L11.4731 11.635C11.485 11.7018 11.4408 11.7657 11.3744 11.7776C11.3478 11.7824 11.3205 11.7782 11.2966 11.7657L11.1176 11.6721C11.0918 11.6586 11.061 11.6589 11.0354 11.6728Z" /><path fill="white" d="M16.8002 11.6728L16.6228 11.7694C16.5635 11.8017 16.4894 11.7795 16.4573 11.7198C16.4444 11.6959 16.4398 11.6685 16.4441 11.6417L16.4769 11.4374C16.4814 11.4089 16.4719 11.38 16.4513 11.36L16.3046 11.2173C16.2557 11.1697 16.2543 11.0913 16.3016 11.0421C16.3203 11.0227 16.3447 11.0099 16.3713 11.0058L16.5704 10.9747C16.599 10.9702 16.6235 10.9519 16.636 10.9257L16.7238 10.7412C16.7529 10.6801 16.8258 10.6542 16.8866 10.6835C16.911 10.6953 16.9309 10.715 16.943 10.7394L17.0339 10.9223C17.0468 10.9483 17.0717 10.9663 17.1003 10.9702L17.3 10.998C17.3674 11.0073 17.4144 11.0698 17.4051 11.1376C17.4015 11.1644 17.3892 11.1892 17.3702 11.2083L17.226 11.3534C17.2057 11.3738 17.1966 11.4029 17.2017 11.4313L17.2379 11.635C17.2498 11.7018 17.2055 11.7657 17.1391 11.7776C17.1126 11.7824 17.0852 11.7782 17.0613 11.7657L16.8824 11.6721C16.8566 11.6586 16.8258 11.6589 16.8002 11.6728Z" /><path fill="white" d="M19.2823 10.3393L19.1049 10.4359C19.0456 10.4682 18.9714 10.446 18.9393 10.3863C18.9265 10.3624 18.9219 10.335 18.9262 10.3082L18.9589 10.1039C18.9635 10.0754 18.9539 10.0465 18.9333 10.0265L18.7866 9.88377C18.7377 9.8362 18.7364 9.75778 18.7837 9.7086C18.8023 9.68919 18.8268 9.67644 18.8533 9.6723L19.0525 9.64121C19.081 9.63675 19.1056 9.6184 19.1181 9.59216L19.2058 9.40773C19.2349 9.34658 19.3078 9.32075 19.3686 9.35002C19.3931 9.36181 19.413 9.38147 19.4251 9.40588L19.516 9.5888C19.5289 9.61482 19.5537 9.63276 19.5824 9.63674L19.782 9.66446C19.8494 9.67382 19.8965 9.73634 19.8872 9.80412C19.8835 9.83087 19.8713 9.85568 19.8523 9.87477L19.708 10.0199C19.6878 10.0403 19.6787 10.0694 19.6837 10.0978L19.7199 10.3015C19.7318 10.3683 19.6876 10.4322 19.6212 10.4441C19.5947 10.4489 19.5673 10.4447 19.5434 10.4322L19.3644 10.3386C19.3386 10.3251 19.3078 10.3254 19.2823 10.3393Z" /><path fill="white" d="M13.9489 9.00605L13.7715 9.10262C13.7122 9.13492 13.6381 9.11272 13.606 9.05304C13.5931 9.0292 13.5885 9.00175 13.5928 8.97498L13.6255 8.77065C13.6301 8.74218 13.6205 8.71326 13.5999 8.69321L13.4532 8.55052C13.4043 8.50295 13.403 8.42453 13.4503 8.37535C13.469 8.35594 13.4934 8.34319 13.5199 8.33905L13.7191 8.30796C13.7477 8.3035 13.7722 8.28514 13.7847 8.2589L13.8725 8.07448C13.9016 8.01333 13.9744 7.98749 14.0352 8.01677C14.0597 8.02856 14.0796 8.04821 14.0917 8.07263L14.1826 8.25555C14.1955 8.28157 14.2204 8.29951 14.249 8.30349L14.4487 8.33121C14.516 8.34056 14.5631 8.40309 14.5538 8.47087C14.5502 8.49761 14.5379 8.52242 14.5189 8.54152L14.3747 8.68667C14.3544 8.70706 14.3453 8.73614 14.3504 8.76453L14.3866 8.96828C14.3984 9.03508 14.3542 9.09891 14.2878 9.11085C14.2613 9.11561 14.2339 9.11142 14.21 9.09892L14.031 9.00536C14.0052 8.99187 13.9745 8.99213 13.9489 9.00605Z" /></g><defs><clipPath id="clip0_5_1999"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default An;