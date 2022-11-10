import * as React from "react"
import { SVGProps } from "react"

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={55}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.951 0c.676 0 1.312.13 1.909.388A4.717 4.717 0 0 1 8.41 1.46a4.749 4.749 0 0 1 1.461 3.46v9.157H7.19v-3.55H2.655v3.55H0V4.92c0-.676.13-1.312.388-1.909a4.954 4.954 0 0 1 1.044-1.55A4.807 4.807 0 0 1 2.952.387 4.749 4.749 0 0 1 4.863 0h.09Zm2.237 7.844V4.921c0-.636-.229-1.163-.686-1.58a2.29 2.29 0 0 0-1.64-.657c-.617 0-1.144.22-1.581.657-.418.417-.626.944-.626 1.58v2.923h4.533ZM17.913 0c.676 0 1.312.13 1.909.388a4.716 4.716 0 0 1 1.55 1.073c.458.438.816.955 1.074 1.551a4.54 4.54 0 0 1 .388 1.88v9.186H20.15V4.89c0-.616-.23-1.143-.686-1.58a2.29 2.29 0 0 0-1.64-.656c-.617 0-1.144.218-1.582.656a2.207 2.207 0 0 0-.626 1.58v9.187h-2.655V4.89c0-.676.13-1.302.388-1.879a4.955 4.955 0 0 1 1.044-1.55A4.807 4.807 0 0 1 15.914.387 4.749 4.749 0 0 1 17.824 0h.089ZM30.874 0c.676 0 1.312.13 1.909.388a4.716 4.716 0 0 1 1.55 1.073 4.749 4.749 0 0 1 1.462 3.46l-.002 13.315h-2.684l.002-7.707h-4.533v3.549h-2.655V4.92c0-.676.13-1.312.388-1.909a4.955 4.955 0 0 1 1.044-1.55 4.807 4.807 0 0 1 1.52-1.074A4.75 4.75 0 0 1 30.786 0h.09Zm2.237 7.844V4.921c0-.636-.229-1.163-.686-1.58a2.29 2.29 0 0 0-1.64-.657c-.617 0-1.144.22-1.581.657-.418.417-.627.944-.627 1.58v2.923h4.534Z"
      fill={props.fill || "#fff"}
    />
    <path
      d="m42.03 3.63-.01 14.606v2.502c-.159 1.165-.395 1.522-.932 2.097-.923.989-2.796 1.165-3.495 1.165-.932 0-3.03-.291-3.728-1.165-.647-.809-.598-1.241-.757-2.097v-2.502h2.685c0 .405-.064 1.57 0 2.502.05.735 1.018 1.191 1.8 1.165.747-.025 1.631-.233 1.753-1.165V3.63h2.684ZM54.925 0v9.216c0 .656-.13 1.283-.388 1.88a4.955 4.955 0 0 1-1.044 1.55 4.954 4.954 0 0 1-1.551 1.044 4.54 4.54 0 0 1-1.88.388h-.178c-.656 0-1.283-.13-1.88-.388a4.953 4.953 0 0 1-2.565-2.595 4.676 4.676 0 0 1-.387-1.879V0h2.655v9.216c0 .597.208 1.114.626 1.551.418.418.935.627 1.551.627h.179c.616 0 1.133-.21 1.55-.627.418-.437.627-.954.627-1.55V0h2.684Z"
      fill={props.fill || "#fff"}
    />
  </svg>
)

export default Logo