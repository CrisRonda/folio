import Link from "next/link";
import { Box, Typography } from "../atoms";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Lang = styled(Box)`
  position: fixed;
  width: 90px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  top: 0;
  right: 0;
  z-index: 3000;
`;

Lang.defaultProps = {
  color: "white",
  borderRadius: 1,
  margin: 1,
};

const LanguageButton = ({ light }) => {
  const router = useRouter();
  const { locale, locales, pathname } = router;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const check = locale === "en";
    setChecked(check);
  }, [locale]);
  const onChange = () => {
    const _locale = checked ? "es" : "en";
    router.replace(pathname, pathname, { locale: _locale });
  };
  return (
    <Lang>
      <Typography
        color={light ? "#fff" : "#111"}
        fontSize={[1, 2, 3]}
        align="center"
      >
        {locales[0]}
      </Typography>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <Typography
        fontSize={[1, 2, 3]}
        align="center"
        color={light ? "#fff" : "#111"}
      >
        {locales[1]}
      </Typography>
    </Lang>
  );
};

const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 7px 4px 0;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 16px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 16px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-left: 28px;
      transition: 0.2s;
    }
  }
`;

export default LanguageButton;
