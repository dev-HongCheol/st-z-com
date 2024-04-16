"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "@/components/uis/modal/Modal";
import {
  closeBtn,
  headerFlex,
  loginForm,
  logoImage,
  modalHeader,
} from "./login.css";
import closeBtnImg from "@/assets/closeBtn.svg";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import Button from "@/components/uis/atoms/Button";
import Input from "@/components/uis/atoms/Input";
const Login = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("🚀  file: Login.tsx:21  onSubmit  event_", event);
    console.log("1111", textRef.current?.value, passwordRef.current?.value);
  };
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log("🚀  file: Login.tsx:26  Login  isShow_", isShow);
  }, [isShow]);
  /* FIXME: 모달을 자주 사용하면 외부로 뺴자. */
  const onClose = () => setIsShow((pre) => !pre);
  return (
    isShow && (
      <Modal>
        {/* header */}
        <div className={modalHeader}>
          <div className={headerFlex}>
            <Button variant="text" className={closeBtn} onClick={onClose}>
              <Image src={closeBtnImg} alt="close btn" />
            </Button>
          </div>
          <div>
            <Image
              src={logoImg}
              alt="logo"
              width={30}
              height={53}
              className={logoImage}
            />
          </div>
          <div className={headerFlex}></div>
        </div>

        {/* title */}
        <form className={loginForm} onSubmit={onSubmit}>
          <h2>X 가입하기</h2>
          {/* <Button variant="outlined">Google 계정으로 로그인</Button>
        <Button variant="outlined">Apple로 로그인</Button> */}
          <br />
          <Input id="id" name="id" label="아이디" ref={textRef} />
          <Input
            id="password"
            name="password"
            label="비밀번호"
            type="password"
            ref={passwordRef}
          />
          <Button variant="contained" type="submit">
            로그인하기
          </Button>
        </form>
      </Modal>
    )
  );
};

export default Login;
