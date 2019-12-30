import React from "react";
import styled from "styled-components";

const CircleLayout = styled.div`
  display: inline-block;
  width: 164px;
  height: 164px;
  margin: 20px;
  border-radius: 50%;
  background: #f59f23;
  color: #fff;
`;

const TextLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 70px;
`;

const circlesCount = props => {
  return (
    <CircleLayout>
      <TextLayout>{props.children}</TextLayout>
    </CircleLayout>
  );
};

export default circlesCount;
