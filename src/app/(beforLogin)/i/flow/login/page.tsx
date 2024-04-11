import Image from "next/image";
import React from "react";
import logoImg from "@/assets/logo.svg";
import styles from "./page.css";

import Button from "@/components/uis/atoms/Button";

const LoginPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentDiv}>
        <Image src={logoImg} alt="logo" width={341} height={308} />
      </div>

      <div className={styles.contentDiv}>
        <h1 className={styles.h1}>지금 일어나고 있는 일</h1>
        <div className={styles.comment}>
          <p className={styles.joinComment}>지금 가입하세요.</p>
          <Button>계정 만들기</Button>
          <p className={styles.loginComment}>이미 티위터에 가입하셨나요?</p>
          <Button variant="text">로그인</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
