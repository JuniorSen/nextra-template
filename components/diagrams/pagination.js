import { draw } from "./drawer";

const PATHS = {
    prev: "M40.82 327.055L41.587 326.288L39.0259 323.736H45.7163V322.628H39.0259L41.587 320.067L40.82 319.308L36.9464 323.182L40.82 327.055ZM51.3455 327H52.6623V323.932H54.4521C56.4762 323.932 57.4776 322.709 57.4776 321.098C57.4776 319.491 56.4847 318.273 54.4563 318.273H51.3455V327ZM52.6623 322.815V319.402H54.3157C55.6197 319.402 56.1523 320.109 56.1523 321.098C56.1523 322.087 55.6197 322.815 54.3327 322.815H52.6623ZM58.919 327H60.1932V323.003C60.1932 322.146 60.8537 321.528 61.7571 321.528C62.0213 321.528 62.3196 321.575 62.4219 321.605V320.386C62.294 320.369 62.0426 320.357 61.8807 320.357C61.1136 320.357 60.4574 320.791 60.2188 321.494H60.1506V320.455H58.919V327ZM66.1112 327.132C67.5387 327.132 68.5487 326.429 68.8384 325.364L67.6325 325.146C67.4023 325.764 66.8484 326.08 66.1239 326.08C65.033 326.08 64.3001 325.372 64.266 324.111H68.9194V323.659C68.9194 321.294 67.5046 320.369 66.0217 320.369C64.1978 320.369 62.9961 321.759 62.9961 323.77C62.9961 325.803 64.1808 327.132 66.1112 327.132ZM64.2702 323.156C64.3214 322.227 64.9947 321.422 66.0302 321.422C67.0188 321.422 67.6665 322.155 67.6708 323.156H64.2702ZM75.8974 320.455H74.5295L72.8761 325.491H72.8079L71.1502 320.455H69.7823L72.1602 327H73.5238L75.8974 320.455Z",
    next: "M329.225 318.273H327.922V324.682H327.841L323.4 318.273H322.181V327H323.498V320.599H323.579L328.015 327H329.225V318.273ZM333.865 327.132C335.293 327.132 336.303 326.429 336.592 325.364L335.386 325.146C335.156 325.764 334.602 326.08 333.878 326.08C332.787 326.08 332.054 325.372 332.02 324.111H336.673V323.659C336.673 321.294 335.259 320.369 333.776 320.369C331.952 320.369 330.75 321.759 330.75 323.77C330.75 325.803 331.935 327.132 333.865 327.132ZM332.024 323.156C332.075 322.227 332.749 321.422 333.784 321.422C334.773 321.422 335.42 322.155 335.425 323.156H332.024ZM338.94 320.455H337.543L339.554 323.727L337.517 327H338.915L340.385 324.554L341.859 327H343.253L341.195 323.727L343.236 320.455H341.842L340.385 323.003L338.94 320.455ZM347.599 320.455H346.257V318.886H344.983V320.455H344.024V321.477H344.983V325.342C344.979 326.531 345.886 327.107 346.892 327.085C347.297 327.081 347.57 327.004 347.719 326.949L347.489 325.896C347.403 325.913 347.246 325.952 347.041 325.952C346.628 325.952 346.257 325.815 346.257 325.078V321.477H347.599V320.455ZM357.724 327.055L361.598 323.182L357.724 319.308L356.957 320.075L359.518 322.628H352.828V323.736H359.518L356.957 326.293L357.724 327.055Z",
    one: "M126.653 318.273H125.37L123.193 319.696V320.957L125.281 319.594H125.332V327H126.653V318.273Z",
    two: "M179.498 327H185.242V325.871H181.313V325.807L183.048 323.991C184.646 322.376 185.102 321.605 185.102 320.629C185.102 319.227 183.96 318.153 182.315 318.153C180.683 318.153 179.489 319.21 179.489 320.804H180.746C180.742 319.866 181.347 319.253 182.289 319.253C183.175 319.253 183.849 319.798 183.849 320.668C183.849 321.439 183.389 321.993 182.451 322.986L179.498 326.045V327Z",
    three:
      "M239.349 327.119C241.13 327.119 242.438 326.054 242.434 324.605C242.438 323.501 241.769 322.709 240.61 322.53V322.462C241.522 322.227 242.114 321.511 242.11 320.531C242.114 319.249 241.062 318.153 239.383 318.153C237.781 318.153 236.494 319.121 236.451 320.54H237.725C237.755 319.739 238.509 319.253 239.366 319.253C240.256 319.253 240.84 319.794 240.836 320.599C240.84 321.443 240.163 321.997 239.195 321.997H238.458V323.071H239.195C240.406 323.071 241.104 323.685 241.104 324.562C241.104 325.411 240.367 325.986 239.34 325.986C238.394 325.986 237.657 325.5 237.606 324.724H236.268C236.323 326.148 237.585 327.119 239.349 327.119Z",
};

export const Pagination = () => (
  <svg viewBox="0 0 769 356" fill="none" className="invert-on-dark">
    <path
      d="M5 0.5H763C765.485 0.5 767.5 2.51472 767.5 5V351C767.5 353.485 765.485 355.5 763 355.5H5.00002C2.51473 355.5 0.5 353.485 0.5 351V5C0.5 2.51472 2.51472 0.5 5 0.5Z"
      fill="white"
      stroke="#EEEEEE"
    />
    <path d="M1 288H769" stroke="#E5E5E5" />
    <path d="M21 26H747V40H21V26Z" fill="#E5E5E5" />
    <path d="M21 70H747V84H21V70Z" fill="#E5E5E5" />
    <path d="M21 114H747V128H21V114Z" fill="#E5E5E5" />
    <path d="M21 158H747V172H21V158Z" fill="#E5E5E5" />
    <path d="M21 202H747V216H21V202Z" fill="#E5E5E5" />
    <path d="M21 246H747V260H21V246Z" fill="#E5E5E5" />
    <rect
      x="21.5"
      y="306.5"
      width="69"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={PATHS.prev} fill="#454545" />
    <rect
      x="307.5"
      y="306.5"
      width="69"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={PATHS.next} fill="#454545" />
    <path
      d="M281.098 322.03C281.563 322.03 281.951 321.651 281.951 321.178C281.951 320.713 281.563 320.33 281.098 320.33C280.63 320.33 280.246 320.713 280.246 321.178C280.246 321.651 280.63 322.03 281.098 322.03ZM284.497 322.03C284.961 322.03 285.349 321.651 285.349 321.178C285.349 320.713 284.961 320.33 284.497 320.33C284.028 320.33 283.645 320.713 283.645 321.178C283.645 321.651 284.028 322.03 284.497 322.03ZM287.895 322.03C288.36 322.03 288.748 321.651 288.748 321.178C288.748 320.713 288.36 320.33 287.895 320.33C287.426 320.33 287.043 320.713 287.043 321.178C287.043 321.651 287.426 322.03 287.895 322.03Z"
      fill="black"
    />
    <rect
      x="103.5"
      y="306.5"
      width="44"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={PATHS.one} fill="#454545" />
    <rect
      x="160.5"
      y="306.5"
      width="44"
      height="31"
      rx="2.5"
      fill="#EDEDED"
      stroke="#B3B3B3"
    />
    <path d={PATHS.two} fill="#454545" />
    <rect
      x="217.5"
      y="306.5"
      width="44"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={PATHS.three} fill="#454545" />
  </svg>
);
