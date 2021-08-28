import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <Breadcrumb
        separator=" | "
        background="#222"
        borderColor="#080808"
        height="32pt"
        textAlign="right"
        paddingRight="4"
        color="#847C6F"
        fontFamily="Tahoma, serif"
      >
        <BreadcrumbItem height="32pt">
          <Link href="/">
            <a>Home</a>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/documentation">
            <a>Documentation</a>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default Navbar;
