import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <Breadcrumb
        separator=" | "
        background="gray.500"
        height="32pt"
        textAlign="right"
        paddingRight="4"
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
