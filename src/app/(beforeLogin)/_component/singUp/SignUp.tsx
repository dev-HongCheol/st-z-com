"use client";
import Button from "@/components/uis/atoms/Button";
import Input from "@/components/uis/atoms/Input";
import Modal from "@/components/uis/modal/Modal";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";
import closeBtnImg from "@/assets/closeBtn.svg";
import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import vx from "./signUp.css";

const SignUp = () => {
  const router = useRouter();
  const textRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("🚀  file: Login.tsx:21  onSubmit  event_", event);
    console.log("1111", textRef.current?.value, passwordRef.current?.value);
  };

  const onClose = () => {
    router.back();
  };
  return (
    <Modal>
      {/* header */}
      <div className={vx.modalHeader}>
        <div className={vx.headerFlex}>
          <Button variant="text" className={vx.closeBtn} onClick={onClose}>
            <Image src={closeBtnImg} alt="close btn" />
          </Button>
        </div>
        <div>
          <Image
            src={logoImg}
            alt="logo"
            width={30}
            height={53}
            className={vx.logoImage}
          />
        </div>
        <div className={vx.headerFlex}></div>
      </div>

      {/* title */}
      <form className={vx.wrapper} onSubmit={onSubmit}>
        <div>
          <h2>계정을 생성하세요</h2>
          <br />
          <Input id="id" name="id" label="아이디" ref={textRef} /> <br />
          <Input
            id="password"
            name="password"
            label="비밀번호"
            type="password"
            ref={passwordRef}
          />
        </div>

        <div>
          <Button variant="contained" type="submit">
            로그인하기
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
