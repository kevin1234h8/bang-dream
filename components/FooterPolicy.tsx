import React from "react";

type FooterPolicyProps = {
  policy: string;
};

const FooterPolicy = ({ policy }: FooterPolicyProps) => {
  return (
    <div className="flex items-center gap-3 mt-10">
      <div className="footer_policy__dot"></div>
      <div className="footer_policy">{policy}</div>
    </div>
  );
};

export default FooterPolicy;
