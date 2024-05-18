import Comment from "@/components/icons/Comment";
import Heart from "@/components/icons/Heart";
import ReTweet from "@/components/icons/ReTweet";
import Views from "@/components/icons/Views";
import vx from "./actionButtons.css";
import Button from "@/components/uis/atoms/Button";
import React from "react";

interface ActionButtonsProps {
  isWhite?: boolean;
}

const ActionButtons = ({ isWhite }: ActionButtonsProps) => {
  return (
    <div className={vx.buttonWrapper}>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <Comment
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
      </div>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <ReTweet
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
      </div>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <Heart
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
      </div>
      <div className={vx.button}>
        <Button variant="text" className={vx.widthAuto}>
          <Views
            style={{
              fill: isWhite ? "white" : "initial",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
