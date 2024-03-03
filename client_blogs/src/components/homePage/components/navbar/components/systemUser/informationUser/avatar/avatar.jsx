import React from "react";
import { Avatar, Space } from "antd";

const url = "https://xsgames.co/randomusers/avatar.php?g=pixel";

const AvatarUser = () => (
  <Space size={16} wrap>
    <Avatar
      style={{ border: "1px solid #000" }}
      src={<img src={url} alt="avatar" />}
    />
  </Space>
);
export default AvatarUser;
