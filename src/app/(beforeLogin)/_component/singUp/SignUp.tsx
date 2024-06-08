"use client";
import Button from "@/components/uis/atoms/Button";
import Input from "@/components/uis/atoms/Input";
import Modal from "@/components/uis/modal/Modal";
import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import BackButton from "../BackButton";
import vx from "./signUp.css";
import signup from "../../_lib/signup";
import { useFormState, useFormStatus } from "react-dom";

const showMessage = (message: string) => {
  switch (message) {
    case "no_nickname": {
      return "이름을 입력해주세요.";
    }
  }
};

const SignUp = () => {
  const [state, formAction] = useFormState(signup, { message: "" });
  const { pending } = useFormStatus();
  return (
    <Modal>
      {/* header */}
      <div className={vx.modalHeader}>
        <div className={vx.headerFlex}>
          <BackButton />
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
        <div className={vx.headerFlex} />
      </div>

      {/* title */}
      <form className={vx.wrapper} action={formAction}>
        <div>
          <h2>계정을 생성하세요</h2>
          <br />
          <Input id="id" name="id" label="아이디" /> <br />
          <Input
            id="password"
            name="password"
            label="비밀번호"
            type="password"
          />
          <Input id="nickname" name="nickname" label="이름" />
          <Input
            id="image"
            name="image"
            label="이미지"
            type="file"
            accept="image/*"
            multiple={false}
          />
        </div>
        <div>{state?.message && showMessage(state.message)}</div>
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
